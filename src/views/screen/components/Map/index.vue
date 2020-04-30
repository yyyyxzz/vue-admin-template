<template>
  <div class="map-container">
    <div id="map"></div>
    <div class="menu-left">
      <left-menu></left-menu>
    </div>
    <div class="menu-right">
      <right-menu
        @toggleMapType="toggleMapType"
        :activeMenu="activeMenu"
        @changeActiveMenu="changeActiveMenu"
        :deviceInfo="clickedItem"
      ></right-menu>
    </div>
    <div class="menu-bottom">
      <bottomMenu
        :activeMenu="bottomActiveMenu"
        @changeActiveMenu="changeBottomActiveMenu"
        @changeCompany="changeCompany"
      ></bottomMenu>
    </div>
    <el-dialog
      :title="clickedItem?clickedItem.name:''"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose"
    >
      <span>cad图</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import AMap from "AMap";
import leftMenu from "./leftMenu";
import rightMenu from "./rightMenu";
import bottomMenu from "./bottomMenu";
import lights from "@/assets/light/light-on.svg";
import boxes from "@/assets/light/light-fault.svg";
import pods from "@/assets/light/light-off.svg";
import gates from "@/assets/gateWay/gateway-online.svg";

// import lightFault from '../assets/light/light-fault.svg'
// import gatewayDrop from '../assets/gateWay/gateway-drop.svg'
// import gatewayFault from '../assets/gateWay/gateway-fault.svg'

export default {
  data() {
    return {
      map: null,
      mapType: 0, //0 默认 1 卫星图
      statellite: null,
      chartData: {
        xAxis: [1, 2, 3],
        unit: "kW",
        data: [1, 2, 3]
      },
      lights: [
        {
          pos: [112.222417, 22.717669],
          name: "灯杆1",
          type: "light",
          id: "112222233"
        },
        {
          pos: [112.146483, 22.714274],
          name: "灯杆2",
          type: "light",
          id: "112222233"
        },
        {
          pos: [112.236995, 22.655653],
          name: "灯杆3",
          type: "light",
          id: "112222233"
        }
      ],
      gates: [
        {
          pos: [112.27109, 22.705877],
          name: "网关1",
          type: "gate",
          id: "112222233"
        },
        {
          pos: [112.363582, 22.608428],
          name: "网关2",
          type: "gate",
          id: "112222233"
        },
        {
          pos: [111.50477, 22.718327],
          name: "网关3",
          type: "gate",
          id: "112222233"
        }
      ],
      pods: [
        {
          pos: [111.60477, 22.718327],
          name: "智慧灯杆1",
          type: "pod",
          id: "112222233"
        },
        {
          pos: [112.17964, 22.641047],
          name: "智慧灯杆2",
          type: "pod",
          id: "112222233"
        },
        {
          pos: [112.14303, 22.71878],
          name: "智慧灯杆3",
          type: "pod",
          id: "112222233"
        }
      ],
      boxes: [
        {
          pos: [112.152054, 22.723637],
          name: "配电箱1",
          type: "box",
          id: "112222233"
        },
        {
          pos: [112.29597, 22.559285],
          name: "配电箱2",
          type: "box",
          id: "112222233"
        },
        {
          pos: [112.225474, 22.592672],
          name: "配电箱3",
          type: "box",
          id: "112222233"
        }
      ],
      activeMenu: null,
      clickedItem: null,
      bottomActiveMenu: "all",
      lightsGroup: null,
      boxesGroup: null,
      gatesGroup: null,
      podsGroup: null,
      companies: [
        { name: "园区概貌", location: [112.222417, 22.717669] },
        { name: "新兴公司食堂", location: [112.222417, 22.717669] },
        { name: "斑鸠山鸡场", location: [112.146483, 22.714274] },
        { name: "沙村鸡场", location: [112.236995, 22.655653] },
        { name: "福安鸡场", location: [112.27109, 22.705877] },
        { name: "高村鸡场", location: [112.363582, 22.608428] },
        { name: "斑鱼山种鸡场", location: [111.50477, 22.718327] },
        { name: "长江鸡场", location: [111.60477, 22.718327] }, //暂无
        { name: "水围村猪场", location: [112.17964, 22.641047] },
        { name: "簕竹饲料厂", location: [112.14303, 22.71878] },
        { name: "榄根孵化厂", location: [112.152054, 22.723637] },
        { name: "翔顺象窝酒店", location: [112.29597, 22.559285] },
        { name: "禅泉酒店", location: [112.225474, 22.592672] }
      ],
      dialogVisible: false
    };
  },
  components: {
    leftMenu,
    rightMenu,
    bottomMenu
  },
  computed: {
    infoWindow() {
      var content = null;
      switch (this.clickedItem.type) {
        case "light": {
          content = ` <div class="info-container">
      <div class="title">${this.clickedItem.name}</div>
      <div class="status">设备正常</div>
      <div class="light-control-container">
        <span class="light-control" onclick="window.sendControl('open')">开灯</span>
        <span class="light-control" onclick="window.sendControl('close')">关灯</span>
      </div>
      <div class="light-control-container">
        <span class="brightness-control" onclick="window.setBrightness(1)"
          ><i class="el-icon-s-opportunity"></i><span>一档亮度</span></span
        >
        <span class="brightness-control" onclick="window.setBrightness(2)"><i class="el-icon-s-opportunity"></i><span>二档亮度</span></span
        >
        <span class="brightness-control" onclick="window.setBrightness(3)"><i class="el-icon-s-opportunity"></i><span>三档亮度</span></span>
        <span class="brightness-control" onclick="window.setBrightness(4)"><i class="el-icon-s-opportunity"></i><span>四档亮度</span></span>
      </div>
    </div>`;
          break;
        }
        default: {
          content = ` <div class="info-container">
      <div class="title">${this.clickedItem.name}</div>
      <div class="status">设备正常</div>
      <div class="light-control-container">
        <span class="light-control" onclick="window.sendControl('open')">开灯</span>
        <span class="light-control" onclick="window.sendControl('close')">关灯</span>
      </div>
    </div>`;
        }
      }

      var infoWindow = new AMap.InfoWindow({
        content,
        offset: new AMap.Pixel(0, -20)
      });
      this.map.on("click", ev => {
        infoWindow.close();
      });
      infoWindow.on("close", () => {
        this.activeMenu = null;
      });
      return infoWindow;
    }
  },
  mounted() {
    this.mapInit();
    window.setBrightness = this.setBrightness;
    window.sendControl = this.sendControl;
  },
  methods: {
    setBrightness(i) {
      let d = "一";
      switch (i) {
        case 1: {
          d = "一";
          break;
        }
        case 2: {
          d = "二";
          break;
        }
        case 3: {
          d = "三";
          break;
        }
        case 4: {
          d = "四";
          break;
        }
      }
      this.$notify({
        title: "成功",
        message: `${this.clickedItem.name}亮度调为${d}档`,
        type: "success",
        position: "bottom-right"
      });
    },
    changeCompany(val) {
      this.map.setZoomAndCenter(18, this.companies[val].location);
    },
    sendControl(type) {
      let order = type === "open" ? "打开" : "关闭";
      this.$notify({
        title: "成功",
        message: `${this.clickedItem.name}${order}`,
        type: "success",
        position: "bottom-right"
      });
    },
    changeBottomActiveMenu(menu) {
      this.map.remove([
        this.lightsGroup,
        this.boxesGroup,
        this.podsGroup,
        this.gatesGroup
      ]);
      switch (menu) {
        case "all": {
          this.map.add([
            this.lightsGroup,
            this.boxesGroup,
            this.podsGroup,
            this.gatesGroup
          ]);
          break;
        }
        case "1": {
          this.map.add(this.lightsGroup);
          break;
        }
        case "2": {
          this.map.add(this.boxesGroup);
          break;
        }
        case "3": {
          this.map.add(this.podsGroup);
          break;
        }
        case "4": {
          this.map.add(this.gatesGroup);
          break;
        }
      }
      this.map.setFitView();
      this.bottomActiveMenu = menu;
    },
    changeActiveMenu(menu) {
      this.activeMenu = menu;
    },
    mapInit() {
      var center = [112.222417, 22.717669]; //云浮市中心
      this.map = new AMap.Map("map", {
        zoom: 18,
        // pitch: 50,
        showIndoorMap: false,
        // showLabel: false,
        // mapStyle: "amap://styles/darkblue",
        center: center,
        features: ["bg", "point", "road"],
        // viewMode: "3D"
        resizeEnable: true,
        expandZoomRange: true,
        zooms: [3, 20]
      });

      this.statellite = new AMap.TileLayer.Satellite();
      const _this = this;
      var markers = [];
      var zoomStyleMapping1 = {
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0
      };
      const imgs = [lights, pods, boxes, gates];
      ["lights", "pods", "boxes", "gates"].forEach((item, index) => {
        let markers = [];
        for (let i = 0; i < this[item].length; i++) {
          let marker = new AMap.ElasticMarker({
            map: this.map,
            position: this[item][i].pos,
            zooms: [1, 20],
            styles: [
              {
                icon: {
                  img: imgs[index],
                  size: [36, 36], //可见区域的大小
                  ancher: [16, 16], //锚点
                  fitZoom: 10, //最合适的级别
                  scaleFactor: 2, //地图放大一级的缩放比例系数
                  maxScale: 1.4, //最大放大比例
                  minScale: 0.8 //最小放大比例
                }
              }
            ],
            zoomStyleMapping: zoomStyleMapping1
          });
          AMap.event.addListener(marker, "click", function() {
            _this.clickedItem = _this[item][i];
            _this.infoWindow.open(_this.map, marker.getPosition());
            _this.activeMenu = "device";
            _this.dialogVisible = true
          });
          AMap.event.addListener(marker, "mouseover", () => {
            marker.setLabel({
              offset: new AMap.Pixel(0, -20), //设置文本标注偏移量
              content: `<div> ${this[item][i].name}</div>`, //设置文本标注内容
              direction: "right" //设置文本标注方位
            });
          });
          AMap.event.addListener(marker, "mouseout", () => {
            marker.setLabel(null);
          });
          markers.push(marker);
        }
        this[`${item}Group`] = new AMap.OverlayGroup(markers);
        this.map.add(this[`${item}Group`]);
        this.map.setFitView();
      });
    },
    markerList() {
      const map = this.map;
      AMapUI.loadUI(["misc/MarkerList", "overlay/SvgMarker"], function(
        MarkerList,
        SvgMarker
      ) {
        var markerList = new MarkerList({
          //关联的map对象
          map: map,
          //列表的dom容器的id
          listContainer: "my-list",
          //置空默认的选中行为，后续监听selectedChanged中处理
          onSelected: null,

          //返回数据项的Id
          getDataId: function(dataItem, index) {
            //index表示该数据项在数组中的索引位置，从0开始，如果确实没有id，可以返回index代替
            return dataItem.id;
          },
          //返回数据项的位置信息，需要是AMap.LngLat实例，或者是经纬度数组，比如[116.789806, 39.904989]
          getPosition: function(dataItem) {
            return dataItem.position;
          },
          //返回数据项对应的Marker
          getMarker: function(dataItem, context, recycledMarker) {
            //marker的标注内容
            var content = "标注: " + (context.index + 1) + "";

            var label = {
              offset: new AMap.Pixel(16, 18), //修改label相对于marker的位置
              content: content
            };

            //存在可回收利用的marker
            if (recycledMarker) {
              //直接更新内容返回
              recycledMarker.setLabel(label);
              return recycledMarker;
            }

            //返回一个新的Marker
            return new AMap.Marker({
              label: label
            });
          },
          //返回数据项对应的列表节点
          getListElement: function(dataItem, context, recycledListElement) {
            var tpl = "<p><%- dataItem.id %>：<%- dataItem.desc %><br/>";

            var content = MarkerList.utils.template(tpl, {
              dataItem: dataItem,
              dataIndex: context.index
            });

            if (recycledListElement) {
              //存在可回收利用的listElement, 直接更新内容返回
              recycledListElement.innerHTML = content;
              return recycledListElement;
            }

            //返回一段html，MarkerList将利用此html构建一个新的dom节点
            return "<li>" + content + "</li>";
          }
        });

        //创建一个SquarePin，显示在选中的Marker位置
        var svgMarker = new SvgMarker(
          new SvgMarker.Shape.SquarePin({
            height: 60,
            strokeWidth: 1,
            strokeColor: "#ccc",
            fillColor: "purple"
          }),
          {
            containerClassNames: "my-svg-marker",
            showPositionPoint: true
          }
        );

        //监听选中改变
        markerList.on("selectedChanged", function(event, changedInfo) {
          //重复选中，取消当前选中
          if (changedInfo.selectAgain) {
            this.clearSelected();
            return;
          }

          var selectedRecord = changedInfo.selected,
            unSelectedRecord = changedInfo.unSelected,
            marker;

          if (selectedRecord) {
            marker = selectedRecord.marker;
            marker.hide();

            svgMarker.setMap(marker.getMap());
            svgMarker.setPosition(marker.getPosition());
            svgMarker.setIconLabel(selectedRecord.id);
            svgMarker.show();
          } else {
            svgMarker.hide();
          }

          if (unSelectedRecord) {
            marker = unSelectedRecord.marker;
            marker.show();
          }
        });

        //构建一个数据项数组，数据项本身没有格式要求，但需要支持下述的getDataId和getPosition
        var data = [
          {
            id: "A",
            position: [121.441, 31.0256],
            desc: "数据_1"
          },
          {
            id: "B",
            position: [121.448, 31.0256],
            desc: "数据_2"
          },
          {
            id: "C",
            position: [121.441, 31.025],
            desc: "数据_3"
          }
        ];

        //展示该数据
        markerList.render(data);
      });
    },
    toggleMapType() {
      var features = ["bg", "road", "building"];
      if (this.mapType === 0) {
        this.map.add(this.statellite);
        this.map.setFeatures(features);
      } else {
        this.map.remove(this.statellite);
        this.map.setFeatures(["bg", "road", "building", "point"]);
      }
      this.mapType = this.mapType === 0 ? 1 : 0;

      // this.map.setMapType(this.mapType);
    },
    handleClose(){
      this.dialogVisible = false
    }
  }
};
</script>
<style lang="scss">
.info-container {
  width: 340px;
  background: white;
  z-index: 2;
  font-size: 14px;
  text-align: left;

  .title {
    font-size: 16px;
    font-weight: bold;
  }
  .status {
    margin: 15px;
    padding: 50px 30px;
    text-align: center;
    background-color: lightgrey;
  }
  .light-control-container {
    display: flex;
    justify-content: space-between;
    margin: 15px;
  }
  .light-control {
    display: inline-block;
    text-align: center;
    width: 48%;
    border: 1px solid lightgrey;
    padding: 5px 0;
    cursor: pointer;
    border-radius: 5px;
  }
  .brightness-control {
    text-align: center;
    width: 22%;
    border: 1px solid lightgrey;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 5px;
    cursor: pointer;
    border-radius: 5px;
  }
}
.map-container {
  position: relative;
  height: 100%;
  overflow: hidden;

  #map {
    height: 100%;
  }
  .menu-left {
    position: absolute;
    z-index: 2;
    top: 20px;
    left: 0;
  }
  .menu-right {
    position: absolute;
    z-index: 2;
    top: 20px;
    right: 0;
  }
  .menu-bottom {
    position: absolute;
    z-index: 2;
    bottom: 20px;

    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
  }
}
</style>
