<template>
  <div class="map-container">
    <div id="vmap"></div>
  </div>
</template>
<script>
import AMap from "AMap";
import company from "@/assets/mapIcons/company.png";
import hotel from "@/assets/mapIcons/hotel.png";
import pigFarm from "@/assets/mapIcons/pigFarm.png";
import chickenFarm from "@/assets/mapIcons/chickenFarm.png";
import canteen from "@/assets/mapIcons/canteen.png";
import factory from "@/assets/mapIcons/factory.png";
import gateWay from "@/assets/gateWay/gateway-online.svg";
import chanquan from "@/assets/companies/chanquan.jpg";
import fuhua from "@/assets/companies/fuhua.jpg";
import jichang from "@/assets/companies/jichang.jpg";
import shitang from "@/assets/companies/shitang.jpg";
import siliao from "@/assets/companies/siliao.jpg";
import xiangshun from "@/assets/companies/xiangshun.jpg";
import zhuchang from "@/assets/companies/zhuchang.jpg";

export default {
  data() {
    return {
      map: null,
      companyGroup: null,
      companies: [
        {
          name: "园区概貌",
          location: [112.222417, 22.717669],
          img: company,
          value: "0",
          pic: chanquan
        },
        {
          name: "新兴公司食堂",
          location: [112.222417, 22.717669],
          img: canteen,
          value: "1",
          pic: chanquan
        },
        {
          name: "斑鸠山鸡场",
          location: [112.146483, 22.714274],
          img: chickenFarm,
          value: "2",
          pic: chanquan
        },

        {
          name: "沙村鸡场",
          location: [112.236995, 22.655653],
          img: chickenFarm,
          value: "3",
          pic: chanquan
        },

        {
          name: "福安鸡场",
          location: [112.27109, 22.705877],
          img: chickenFarm,
          value: "4",
          pic: chanquan
        },
        {
          name: "高村鸡场",
          location: [112.363582, 22.608428],
          img: chickenFarm,
          value: "5",
          pic: chanquan
        },
        {
          name: "斑鱼山种鸡场",
          location: [111.50477, 22.718327],
          img: chickenFarm,
          value: "6",
          pic: chanquan
        },
        {
          name: "长江鸡场",
          location: [111.60477, 22.718327],
          img: chickenFarm,
          value: "7",
          pic: chanquan
        }, //暂无
        {
          name: "水围村猪场",
          location: [112.17964, 22.641047],
          img: pigFarm,
          value: "8",
          pic: chanquan
        },
        {
          name: "簕竹饲料厂",
          location: [112.14303, 22.71878],
          img: factory,
          value: "9",
          pic: chanquan
        },
        {
          name: "榄根孵化厂",
          location: [112.152054, 22.723637],
          img: factory,
          value: "10",
          pic: chanquan
        },
        {
          name: "翔顺象窝酒店",
          location: [112.29597, 22.559285],
          img: hotel,
          value: "11",
          pic: chanquan
        },
        {
          name: "禅泉酒店",
          location: [112.225474, 22.592672],
          img: hotel,
          value: "12",
          pic: chanquan
        }
      ],
      object3Dlayer: null,
      text: null
    };
  },
  mounted() {
    this.mapInit();
    this.addIcons("0");
  },
  methods: {
    mapInit() {
      var center = [111.88417, 22.717669]; //云浮市中心
      const _this = this;
      this.map = new AMap.Map("vmap", {
        zoom: 18,
        showLabel: false,
        forceVector: true,
        showBuildingBlock: true,
        mapStyle: "amap://styles/blue",
        center: center,
        // features: ["bg", "point", "road", "building"],
        viewMode: "3D",
        resizeEnable: true,
        expandZoomRange: true,
        zooms: [3, 20]
      });
    },
    addIcons(val) {
      const _this = this;
      if (this.companyGroup && this.text) {
        this.map.remove(this.companyGroup);
        this.map.remove(this.text);
        this.map.remove(this.object3Dlayer);
      }
      var zoomStyleMapping1 = {
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
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
            var color = "#346EF2"; // rgba
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
            //   _this.text.setMap(_this.map);
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
              content: `<div style="color:black"> ${item.name}</div>`, //设置文本标注内容
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
    }
  }
};
</script>
<style lang="scss" scoped>
.map-container {
  box-sizing: border-box;
  padding: 4px;
  width: 100%;
  height: 100%;
  #vmap{
  height: 100%;
    
  }
  // margin: auto;
  // border-top: 2px solid rgba(1, 153, 209, 0.5);
}
</style>
