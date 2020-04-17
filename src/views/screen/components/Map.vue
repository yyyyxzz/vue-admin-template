<template>
  <div class="map_container">
    <div id="map"></div>
    <div class="button-group">
      <el-button type="primary" @click="toggleMapType"> 卫星图</el-button>
    </div>
  </div>
</template>
<script>
import AMap from "AMap";
import lightOn from "@/assets/light/light-on.svg";

import lightOff from "@/assets/light/light-off.svg";
// import lightFault from '../assets/light/light-fault.svg'
// import lightDrop from '../assets/light/light-drop.svg'
// import gatewayDrop from '../assets/gateWay/gateway-drop.svg'
// import gatewayFault from '../assets/gateWay/gateway-fault.svg'
// import gatewayOnline from '../assets/gateWay/gateway-online.svg'

export default {
  data() {
    return {
      map: null,
      mapType: 0, //0 默认 1 卫星图
      statellite: null
    };
  },
  mounted() {
    this.mapInit();
  },
  methods: {
    mapInit() {
      var center = [121.437, 31.0256]; //云浮市中心
      this.map = new AMap.Map("map", {
        zoom: 17,
        // pitch: 50,
        showIndoorMap: false,
        // showLabel: false,
        // mapStyle: "amap://styles/darkblue",
        center: center,
        features: ["bg", "point", "road"],
        viewMode: "3D"
      });
      this.statellite = new AMap.TileLayer.Satellite();
      this.addPoint([121.437, 31.0256]);
      // this.addPoint([121.448, 31.0256]);
      // this.infoWindow();
    },
    getLngLat() {
      console.log("lnglatInput: ");
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
    addPoint(center) {
      var zoomStyleMapping1 = {
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0
      };
      var trees = new AMap.ElasticMarker({
        map: this.map,
        position: center,
        zooms: [15.5, 20],
        styles: [
          {
            icon: {
              img: lightOn,
              size: [36, 36], //可见区域的大小
              ancher: [16, 16], //锚点
              fitZoom: 14, //最合适的级别
              scaleFactor: 2, //地图放大一级的缩放比例系数
              maxScale: 1.4, //最大放大比例
              minScale: 0.8 //最小放大比例
            }
          }
        ],
        zoomStyleMapping: zoomStyleMapping1
      });
      this.map.add(trees);
      const _this = this;
      window.getLngLat = function(a) {
        console.log("a: ", a);
      };
      AMap.event.addListener(trees, "click", function(e) {
        console.log('e: ', e);
        infoWindow.open(_this.map, trees.getPosition());
        AMap.event.removeListener(trees, "mouseover", function() {
          label.open(_this.map, trees.getPosition());
        });
      });

      //实例化信息窗体
      var infoWindowContent =
        '<div className="custom-infowindow input-card">' +
        '<label style="color:grey">故宫博物院</label>' +
        '<div class="input-item">' +
        '<div class="input-item-prepend">' +
        '<span class="input-item-text" >经纬度</span>' +
        "</div>" +
        '<input id="lnglat" type="text" />' +
        "</div>" +
        // 为 infowindow 添加自定义事件
        `<input id="lnglat2container" type="button" class="btn" value="获取该位置经纬度" onclick="window.getLngLat(1)"/>` +
        "</div>";
      var infoWindow = new AMap.InfoWindow({
        content: infoWindowContent,
        offset: new AMap.Pixel(0, -20)
      });
      this.map.on("click", ev => {
        infoWindow.close();
      });
      var label = new AMap.InfoWindow({
        isCustom: true, //使用自定义窗体
        content:
          '<span style="border:1px solid black;padding:5px;font-weight:bold;background:white">回路开关</span>',
        offset: new AMap.Pixel(16, -20)
      });
      AMap.event.addListener(trees, "mouseover", function() {
        label.open(_this.map, trees.getPosition());
      });
      AMap.event.addListener(trees, "mouseout", function() {
        label.close(_this.map, trees.getPosition());
      });
      AMap.event.addListener(infoWindow, "close", function() {
        console.log("function: ");
        AMap.event.addListener(trees, "mouseover", function() {
          label.open(_this.map, trees.getPosition());
        });
      });
    }
  },
  props: {}
};
</script>
<style lang="scss" scoped>
.map_container {
  position: relative;
  height: 100%;
  #map {
    height: 100%;
  }
  .button-group {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
