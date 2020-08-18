const Paho = require("paho-mqtt");
const message = require("./message").cn.beepower.domain.message; // proto静态文件(js)的应用，含全部proto对象
import store from "../store/index"; //注册 action 、 state 、getter
const clientId = "web/9001020"; // 证书认证ID
let client = null; // 全局websocket客户端对象

export default {
  async connect(host, port) {
    const _this = this;
    const rd =Math.floor(Math.random() * 10000000) ;
    client = new Paho.Client(host, port, "/_webSocket", `web/${rd}`);
    // set callback handlers
    // client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    return new Promise((resolve) => {
      client.connect({
        onSuccess: () => {
          resolve(true);
        },
      });
    });
    // connect the client

    // called when the client loses its connection
    // function onConnectionLost(responseObject) {
    //   if (responseObject.errorCode !== 0) {
    //   }
    // }

    // called when a message arrives
    function onMessageArrived(val) {
      const payloadObj = message.Payload.decode(val.payloadBytes); // 第二层为Result对象
      if (payloadObj.valueType === "string") {
        const value = JSON.parse(_this.Utf8ArrayToStr(payloadObj.value));
        let result = {};
        result.data = value;
        // result.clientId = this.getBeeId(payloadObj.clientId);
        store.dispatch("changeRealFun", result.data);
      } else {
        let result2 = {};
        const resultObj = message.Result.decode(payloadObj.value); // 第二层为Result对象
        result2.data = resultObj.message;
        store.dispatch("changeGetFun", result2.data);
      }
    }
  },
  sendData(data) {
    client.subscribe("eig/simple_01/#");
    let message = new Paho.Message(JSON.stringify(data));
    message.destinationName = "eig/simple_01_";
    client.send(message);
  },
  wsGetPayloadBytes(queryString, msgId) {
    const payload = new message.Payload(); // 创建payload对象
    payload.clientId = clientId; // 设置clientId
    payload.messageId = msgId; // 设置messageId
    payload.valueType = "string";
    payload.value = new Buffer(queryString); // 查询参数为payload的value对象
    return message.Payload.encode(payload).finish(); // 转换成字节流并返回
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
};
