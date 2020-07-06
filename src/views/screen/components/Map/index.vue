<template>
  <div class="map-container">
    <div id="map"></div>
    <left-menu class="menu-left"></left-menu>
    <div class="map-type-wrapper">
      <el-button
        class="el-icon-location-information reset"
        @click="resetMap"
      ></el-button>
      <div @click="toggleMapType">
        <!-- <i class="el-icon-map-location"></i> -->

        <el-button
          class="map-type"
          :style="{
            backgroundColor: mapType === 0 ? 'white' : '#0198ff',
            color: mapType === 0 ? 'black' : 'white'
          }"
          >🛰️</el-button
        >
      </div>
    </div>
    <right-menu class="menu-right"></right-menu>
    <bottom-menu class="menu-bottom" :companies="companies"></bottom-menu>
  </div>
</template>
<script>
import AMap from "AMap";
import leftMenu from "./leftMenu";
import rightMenu from "./rightMenu";
import bottomMenu from "./bottomMenu";
import company from "@/assets/mapIcons/company.png";
import hotel from "@/assets/mapIcons/hotel.png";
import pigFarm from "@/assets/mapIcons/pigFarm.png";
import chickenFarm from "@/assets/mapIcons/chickenFarm.png";
import canteen from "@/assets/mapIcons/canteen.png";
import factory from "@/assets/mapIcons/factory.png";
import gateWay from "@/assets/gateWay/gateway-online.svg";
import { mapGetters } from "vuex";

// import lightFault from '../assets/light/light-fault.svg'
// import gatewayDrop from '../assets/gateWay/gateway-drop.svg'
// import gatewayFault from '../assets/gateWay/gateway-fault.svg'

export default {
  data() {
    return {
      map: null,
      mapType: 0, //0 默认 1 卫星图
      statellite: null,
      clickedItem: null,
      // isClose: true,
      companyGroup: null,
      companies: [
        {
          name: "园区概貌",
          location: [112.222417, 22.717669],
          img: company,
          value: "0"
        },
        {
          name: "新兴公司食堂",
          location: [112.222417, 22.717669],
          img: canteen,
          value: "1"
        },
        {
          name: "斑鸠山鸡场",
          location: [112.146483, 22.714274],
          img: chickenFarm,
          value: "2"
        },
        
        {
          name: "沙村鸡场",
          location: [112.236995, 22.655653],
          img: chickenFarm,
          value: "3"
        },

        {
          name: "福安鸡场",
          location: [112.27109, 22.705877],
          img: chickenFarm,
          value: "4"
        },
        {
          name: "高村鸡场",
          location: [112.363582, 22.608428],
          img: chickenFarm,
          value: "5"
        },
        {
          name: "斑鱼山种鸡场",
          location: [111.50477, 22.718327],
          img: chickenFarm,
          value: "6"
        },
        {
          name: "长江鸡场",
          location: [111.60477, 22.718327],
          img: chickenFarm,
          value: "7"
        }, //暂无
        {
          name: "水围村猪场",
          location: [112.17964, 22.641047],
          img: pigFarm,
          value: "8"
        },
        {
          name: "簕竹饲料厂",
          location: [112.14303, 22.71878],
          img: factory,
          value: "9"
        },
        {
          name: "榄根孵化厂",
          location: [112.152054, 22.723637],
          img: factory,
          value: "10"
        },
        {
          name: "翔顺象窝酒店",
          location: [112.29597, 22.559285],
          img: hotel,
          value: "11"
        },
        {
          name: "禅泉酒店",
          location: [112.225474, 22.592672],
          img: hotel,
          value: "12"
        }
      ],
      object3Dlayer: null,
      text: null
    };
  },
  components: {
    leftMenu,
    rightMenu,
    bottomMenu
  },
  watch: {
    //公司切换时图标变化
    selectedCompany: {
      handler(val) {
        this.addIcons(val);
      }
    },
    clickedItem: {
      handler(val) {}
    }
  },
  computed: {
    ...mapGetters(["selectedCompany"]),
    infoWindow() {
      var content = `<div class="info-container">
      <div class="title">${this.clickedItem.name}</div>
      <div class="status">设备正常</div>
      <div class="light-control-container">
        <span class="light-control" onclick="window.sendControl('open')">打开</span>
        <span class="light-control" onclick="window.sendControl('close')">关闭</span>
      </div>
      <div class="click-container" onclick="window.clickGate()">点击进入</div>
      </div>`;
      var infoWindow = new AMap.InfoWindow({
        content,
        offset: new AMap.Pixel(0, -20)
      });
      this.map.on("click", ev => {
        infoWindow.close();
      });
      return infoWindow;
    },
    isEnter() {
      return this.selectedCompany === "0";
    }
  },
  mounted() {
    this.mapInit();
    window.setBrightness = this.setBrightness;
    window.clickGate = this.clickGate;
    window.sendControl = this.sendControl;
    this.addIcons("0");
  },
  methods: {
    clickGate() {
      this.$router.push({
        path: "/screen/gateway",
        query: { id: "811111" }
      });
    },
    resetMap() {
      if (this.map) {
        this.map.setFitView();
      }
    },
    addIcons(val) {
      const _this = this;
      if (this.companyGroup && this.text) {
        this.map.remove(this.companyGroup);
        this.map.remove(this.text);
        this.map.remove(this.object3Dlayer);
      }
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
      if (val === "0") {
        this.object3Dlayer = new AMap.Object3DLayer();
        AMap.plugin("AMap.DistrictSearch", function() {
          var districtSearch = new AMap.DistrictSearch({
            // 关键字对应的行政区级别，country表示国家
            subdistrict: 0, //返回下一级行政区
            extensions: "all", //返回行政区边界坐标组等具体信息
            level: "city" //查询行政级别为 市
          });

          districtSearch.search("云浮市", function(status, result) {
            var bounds = result.districtList[0].boundaries;
            var height = 1;
            var color = "#99C478cc"; // rgba
            var prism = new AMap.Object3D.Prism({
              path: bounds,
              height: height,
              color: color
            });
            prism.transparent = true;
            _this.object3Dlayer.add(prism);
            _this.text = new AMap.Text({
              text: "云浮市",
              verticalAlign: "bottom",
              position: _this.map.getCenter(),
              height: 7000,
              style: {
                "background-color": "transparent",
                "-webkit-text-stroke": "red",
                "-webkit-text-stroke-width": "0.5px",
                "text-align": "center",
                border: "none",
                color: "white",
                "font-size": "26px",
                "font-weight": 600
              }
            });
            _this.text.setMap(_this.map);
            _this.map.add(_this.object3Dlayer);
          });
        });
        var markers = [];
        this.companies.forEach((item, index) => {
          if (index === 0) return;
          let marker = new AMap.ElasticMarker({
            map: this.map,
            position: item.location,
            zooms: [1, 20],
            styles: [
              {
                icon: {
                  img: item.img,
                  size: [30, 30], //可见区域的大小
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
            // if (JSON.stringify(_this.clickedItem) !== JSON.stringify(item)) {
            //   _this.isClose = false;
            // } else {
            //   _this.isClose = true;
            // }
            _this.clickedItem = item;
            _this.infoWindow.open(_this.map, marker.getPosition());
          });
          AMap.event.addListener(marker, "mouseover", () => {
            marker.setLabel({
              offset: new AMap.Pixel(0, -25), //设置文本标注偏移量
              content: `<div> ${item.name}</div>`, //设置文本标注内容
              direction: "right" //设置文本标注方位
            });
          });
          AMap.event.addListener(marker, "mouseout", () => {
            marker.setLabel(null);
          });
          markers.push(marker);
        });
        this.companyGroup = new AMap.OverlayGroup(markers);
        this.map.add(this.companyGroup);
        this.map.setFitView();
      } else {
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
        this.companies[+val].gates.forEach(item => {
          let marker = new AMap.ElasticMarker({
            map: this.map,
            position: item.location,
            zooms: [1, 20],
            styles: [
              {
                icon: {
                  img: gateWay,
                  size: [30, 30], //可见区域的大小
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
            _this.clickedItem = item;
            _this.infoWindow.open(_this.map, marker.getPosition());
          });
          AMap.event.addListener(marker, "mouseover", () => {
            marker.setLabel({
              offset: new AMap.Pixel(0, -20), //设置文本标注偏移量
              content: `<div> ${item.name}</div>`, //设置文本标注内容
              direction: "right" //设置文本标注方位
            });
          });
          AMap.event.addListener(marker, "mouseout", () => {
            marker.setLabel(null);
          });
          markers.push(marker);
        });
        var trees = new AMap.ElasticMarker({
          map: _this.map,
          position: _this.companies[+val].gates[0].location,
          zooms: [7.5, 20],
          styles: [
            {
              icon: {
                img:
                  "https://a.amap.com/jsapi_demos/static/resource/img/trees.png",
                size: [366, 201],
                ancher: [1183, 101],
                imageSize: [865, 1156],
                imageOffset: [45, 480],
                fitZoom: 17.5,
                scaleFactor: 2,
                maxScale: 0.5,
                minScale: 0.125
              }
            }
          ],
          zoomStyleMapping: zoomStyleMapping1
        });
        var circle = new AMap.Circle({
          center: _this.companies[+val].gates[0].location,
          map: _this.map,
          radius: 300,
          fillColor: "blue",
          strokeWeight: 1,
          strokeColor: "white",
          fillOpacity: 0.05
        });
        AMap.event.addListener(circle, "click", function() {
          _this.infoWindow.close();
        });
        this.companyGroup = new AMap.OverlayGroup([markers, trees, circle]);
        this.map.add(this.companyGroup);
        this.map.setFitView();
      }
    },

    mapInit() {
      var center = [111.88417, 22.717669]; //云浮市中心
      const _this = this;
      this.map = new AMap.Map("map", {
        zoom: 18,
        pitch: 50,
        showLabel: false,
        forceVector: true,
        showBuildingBlock: true,
        //mapStyle: "amap://styles/darkblue",
        center: center,
        // features: ["bg", "point", "road", "building"],
        viewMode: "3D",
        resizeEnable: true,
        expandZoomRange: true,
        zooms: [3, 20],
        buildingAnimation: true //楼块出现是否带动画
      });
      this.statellite = new AMap.TileLayer.Satellite();
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
    },
    sendControl() {
      // console.log("sendControl: ");
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
  .click-container {
    text-align: center;
    border: 1px solid lightgray;
    margin: 15px;
    color: #4496f8;
    font-weight: bold;
    font-size: 16px;
    padding: 15px;
    cursor: pointer;
    border-radius: 10px;
  }
  .click-container:hover {
    color: white;
    background-color: #4496f8;
  }

  .status {
    margin: 15px;
    padding: 40px 20px;
    font-size: 28px;
    color: white;
    text-align: center;
    background-color: #7ec050;
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
  .light-control:hover {
    color: white;
    background-color: #4496f8;
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
  height: calc(100vh - 50px);
  // overflow: hidden;
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
    top: 0;
    right: 10px;
    bottom: 20px;
  }
  .map-type-wrapper {
    position: absolute;
    z-index: 2;
    bottom: 30px;
    left: 10px;
    cursor: pointer;
    padding: 10px;
  }
  .menu-bottom {
    position: absolute;
    z-index: 2;
    bottom: 70px;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
  }
  .enter-container {
    position: absolute;
    z-index: 2;
    bottom: 20px;
    right: 30px;
  }
  .hidden {
    display: none;
  }
  .reset,
  .map-type {
    display: inline-block;
    padding: 10px;
    margin-bottom: 10px;
    //  background-color: grey;
  }
}
</style>
