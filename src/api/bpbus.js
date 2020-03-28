/*
  文件名： Bpbus.js
  作者：zhouhuan (shenarder)
  描述：基于 websocket 技术的数据总线
  编写时间：2018-12-26
  -----------------------------------------
  目前 Bpbus 为外部提供4个API接口，以ws开头，分别为：
  wsRealData(gatewayId) 查询实时数据
  wsHisData(terminalId, length, gatewayId) 查询历史数据
  wsStateData(gatewayId) 查询本地数据
  wsCommands(terminalId, gatewayId, commands) 发送控制指令
 */

/*
  外部引用，用于引入Bpbus运行所需的服务，包括
  1.基于mqtt协议的相关操作，调用方法为require('mqtt') 用于创建mqtt,websocket连接，并执行订阅，发布等操作
  当创建mqtt服务器时，url = mqtt://mq.beepower.com.cn:1883，创建websocket服务器时， url = ws://beepower.com.cn:9001
  nodejs 安装需执行 npm i mqtt
  2.proto对象文件的引用，此处为message.js，由message.proto 通过protoc 将.proto文件转换成.js文件而来
  nodejs 安装需执行 npm i protobufjs
  3.用于本地存储的store，调用方法为require('store') 断电之后存储内容不会删除
  nodejs 安装需执行 npm i store
 */
const mqtt = require("mqtt"); // mqtt引用，用于创建websocket链接
const message = require("./message").cn.beepower.domain.message; // proto静态文件(js)的应用，含全部proto对象
import store from "../store/index"; //注册 action 、 state 、getter

/*
  存储订阅发布主题及返回字节流拆解方法
  1.订阅网关下所有设备实时状态
    订阅主题 subString = 'eig/state///eig-main/'+ gatewayId, 如'eig/state///eig-main/02160908226'
  2.订阅单个设备的实时功率状态
    订阅主题 subString = 'eig/query_/clientId/eig-main/'+ gatewayId, 如'eig/query_/9001020/eig-main/86200001008'
    发布主题 pubString = 'eig/query/eig-main/' + gatewayId + '/sync2' 如 'eig/query/eig-main/86200001008/sync2'
  3.订阅网关/设备的历史数据
    订阅主题 subString = 'eig/query_/' + clientId + '/' + messageId ' 如 'eig/query_/9001020/1546168534723'
    发布主题 pubString = 'eig/query/eig-main/' + gatewayId + '/query3' 如 'eig/query/eig-main/86200001008/query3'
  4.发送控制指令 如开关的开和关
    订阅主题 subString = 'eig/terminalCommand_/' + clientId + '/' + messageId 如
    发布主题 pubString = 'eig/terminalCommand/' + terminalId + '/' + gatewayId 如
 */

/*
  全局变量  主要包括4部分：
  1.外部访问的地址变量。
  2.通讯所需的变量，如证书ID，消息ID
  3.内部函数执行所需的客户端，指正变量。
  4.内部状态控制所需的变量，如是否需要更新等
*/

/*     外部访问地址变量       */
const websocketUrl = "tcp://test.beepower.com.cn:9001"; // websocket地址 9001  ws

/*          通讯变量              */
const clientId = "web/9001020"; // 证书认证ID
// let messageId = '1111111111'// 时间戳

/*          内部变量              */
let client = null; // 全局websocket客户端对象
let pageRoot = this; // 保存全局指正

export default {
  /*              初始化函数               */
  init() {
    pageRoot = this; // 保存this指针
  },
  async connect() {
    pageRoot = this;
    return new Promise(resolve => {
      client = mqtt.connect(websocketUrl);
      client.on("connect", function() {
        // console.log('connect中websocket ' + websocketUrl + '连接成功!')
        resolve(true);
      });
      client.on("close", function() {
        // console.log('websocket ' + websocketUrl + '连接关闭!')
        resolve(false);
      });
      client.on("message", function(topic, loadBuffer) {
        const payloadObj = message.Payload.decode(loadBuffer); // 第二层为Result对象
        if (payloadObj.valueType === "string") {
          const value = JSON.parse(pageRoot.Utf8ArrayToStr(payloadObj.value));
          let result = {};
          // console.log(value);
          result.data = value;
          result.clientId = pageRoot.getBeeId(payloadObj.clientId);
          store.dispatch("data/changeRealFun", result);
        } else {
          let result2 = {};
          const resultObj = message.Result.decode(payloadObj.value); // 第二层为Result对象
          result2.data = resultObj.message;
          result2.clientId = pageRoot.getBeeId(payloadObj.clientId);
          // console.log(result);
          store.dispatch("data/changeGetFun", result2);
        }
      });
    });
  },
  command(command) {
    pageRoot = this;
    command = "Sck-20-on";
    // client.subscribe(pageRoot.wsGetTopic(4,'','')) // 执行订阅
    client.publish(
      "eig/terminalCommand/" + "Sck-20-8c97ec07004b1200/86200001025",
      pageRoot.wsGetPayloadBytes(command)
    ); // 执行发布
  },

  webGet(gatewayId, key) {
    // key = 'ambient-80100010003.terminals'
    //  3个区域，5个网关
    //  中厅86200001038
    //  一楼阅览室  86200001042，86200001041
    //  四楼阅览室   86200001039，862000001040
    pageRoot = this;
    let msgId = new Date().getTime();
    let topic = "eig/query_/" + clientId + "/" + msgId;
    // console.log(topic);
    client.subscribe(topic); // 执行订阅
    // console.log('eig/query/eig-main/' + gatewayId + '/query3');
    client.publish(
      "eig/query/eig-main/" + gatewayId + "/query3",
      this.wsGetPayloadBytes(key, msgId)
    );
  },
  webSub(gatewayId, key) {
    pageRoot = this;
    let msgId = new Date().getTime();
    //gatewayId='80100010003'
    let topic = "eig/query_/" + clientId + "/+/+";
    // console.log(topic);
    client.subscribe(topic); // 执行订阅
    let key2 = `[${clientId}]${key}`;
    client.publish(
      "eig/query/eig-main/" + gatewayId + "/sync2",
      this.wsGetPayloadBytes(key2, msgId)
    );
  },
  Utf8ArrayToStr(array) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
      c = array[i++];
      switch (c >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          // 0xxxxxxx
          out += String.fromCharCode(c);
          break;
        case 12:
        case 13:
          // 110x xxxx 10xx xxxx
          char2 = array[i++];
          out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
          break;
        case 14:
          // 1110 xxxx 10xx xxxx 10xx xxxx
          char2 = array[i++];
          char3 = array[i++];
          out += String.fromCharCode(
            ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
          );
          break;
      }
    }

    return out;
  },
  getBeeId(obj) {
    var index = obj.lastIndexOf("/");
    return obj.substring(index + 1, obj.length);
  },

  /**
   * 将查询参数转换成字节流
   * @param queryString
   * @returns {*}
   */
  wsGetPayloadBytes(queryString, msgId) {
    const payload = new message.Payload(); // 创建payload对象
    payload.clientId = clientId; // 设置clientId
    payload.messageId = msgId; // 设置messageId
    payload.valueType = "string";
    payload.value = new Buffer(queryString); // 查询参数为payload的value对象

    return message.Payload.encode(payload).finish(); // 转换成字节流并返回
  },
  /*    日期格式 来源于 meizz  yyyy-MM-dd HH:mm:ss    */
  Format(fmt, date) {
    // author: meizz
    const o = {
      "M+": date.getMonth() + 1, // 月份
      "d+": date.getDate(), // 日
      "H+": date.getHours(), // 小时
      "m+": date.getMinutes(), // 分
      "s+": date.getSeconds(), // 秒
      "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (const k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return fmt;
  }
};
