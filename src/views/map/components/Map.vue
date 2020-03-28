<template>
  <div class="map_container">
    <div id="map"></div>
    <div class="center">
      <ul v-for="(item, index) in companies" :key="index">
        <li
          :class="{ active: index === active }"
          v-on:click="changeCompany(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import AMap from "AMap";

export default {
  data() {
    return {
      map: null,
      text: null,
      object3Dlayer: null,
      points3D: null,
      lines: null,
      active: 0,
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
      ]
    };
  },
  mounted() {
    this.mapInit();
  },
  methods: {
    changeCompany: function(index) {
      this.active = index;
      this.map.off("click", this.test);
      if (index === 0) {
        this.linesAndLineGeo();
      } else {
        this.oneLinesAndLineGeo(index);
        this.map.on("click", this.test);
      }
      // var zoom = 17;
      // if(index===0){
      //    zoom = 9;
      // }
      // // var lng = 121.138398 + Math.floor(Math.random() * 589828) / 1e6;
      // //var lat = 30.972688 + Math.floor(Math.random() * 514923) / 1e6;
      // map.setZoomAndCenter(zoom, companies[index].center); //同时设置地图层级与中心点
    },
    test() {
      console.log("test: ", "test");
    },
    mapInit() {
      const _this = this;
      var center = [111.844439, 22.929801]; //云浮市中心
      this.text = new AMap.Text();
      this.object3Dlayer = new AMap.Object3DLayer();
      this.points3D = new AMap.Object3D.RoundPoints();
      this.lines = new AMap.Object3D.Line();
      this.map = new AMap.Map("map", {
        zoom: 9,
        pitch: 50,
        showIndoorMap: false,
        showLabel: false,
        mapStyle: "amap://styles/darkblue",
        center: center,
        features: ["bg", "point", "road"],
        viewMode: "3D"
      });
      this.map.AmbientLight = new AMap.Lights.AmbientLight([1, 1, 1], 0.9);
      this.map.DirectionLight = new AMap.Lights.DirectionLight(
        [0, -1, 1],
        [1, 1, 1],
        0.1
      );
      this.map.add(this.object3Dlayer);

      AMap.plugin("AMap.DistrictSearch", function() {
        var districtSearch = new AMap.DistrictSearch({
          // 关键字对应的行政区级别，country表示国家
          subdistrict: 0, //返回下一级行政区
          extensions: "all", //返回行政区边界坐标组等具体信息
          level: "city" //查询行政级别为 市
        });

        districtSearch.search("云浮市", function(status, result) {
          var bounds = result.districtList[0].boundaries;
          var height = 5000;
          var color = "#0088ffcc"; // rgba
          var prism = new AMap.Object3D.Prism({
            path: bounds,
            height: height,
            color: color
          });

          prism.transparent = true;
          _this.object3Dlayer.add(prism);
          //   var xixing = new AMap.Object3D.Prism({
          //     path: path2,
          //     height: 50,
          //     color: "#528781"
          //   });

          //   xixing.transparent = true;
          //   this.object3Dlayer.add(xixing);
          var text = new AMap.Text({
            text: "云浮市",
            verticalAlign: "bottom",
            position: center,
            height: 5000,
            style: {
              "background-color": "transparent",
              "-webkit-text-stroke": "red",
              "-webkit-text-stroke-width": "0.5px",
              "text-align": "center",
              border: "none",
              color: "white",
              "font-size": "24px",
              "font-weight": 600
            }
          });
          text.setMap(_this.map);
        });
      });
      this.linesAndLineGeo();
      // object3Dlayer.remove(points3D)
      //object3Dlayer.remove(lines)
    },
    lnglatToG20(lnglat) {
      lnglat = this.map.lngLatToGeodeticCoord(lnglat);
      lnglat.x = AMap.Util.format(lnglat.x, 3);
      lnglat.y = AMap.Util.format(lnglat.y, 3);
      return lnglat;
    },
    linesAndLineGeo() {
      this.object3Dlayer.remove(this.points3D);
      this.object3Dlayer.remove(this.lines);
      this.text.setMap(null);
      this.points3D = new AMap.Object3D.RoundPoints();
      this.lines = new AMap.Object3D.Line();
      var lineGeo = this.lines.geometry;
      var provinces = this.companies;
      this.points3D.transparent = true;
      var pointsGeo = this.points3D.geometry;
      for (var p = 1; p < provinces.length; p += 1) {
        var center = this.lnglatToG20(provinces[p].location);
        var size = 20;
        var height = -40 * 10000;

        // 连线
        lineGeo.vertices.push(center.x, center.y, 0);
        lineGeo.vertexColors.push(0, 0.5, 1, 1);
        lineGeo.vertices.push(center.x, center.y, height);
        lineGeo.vertexColors.push(0, 0.5, 1, 1);

        pointsGeo.vertices.push(center.x, center.y, 0); // 尾部小点
        pointsGeo.pointSizes.push(5);
        pointsGeo.vertexColors.push(0, 0, 1, 1);

        pointsGeo.vertices.push(center.x, center.y, height); // 空中点
        pointsGeo.pointSizes.push(size);
        pointsGeo.vertexColors.push(0, 1, 1, 1);
        // text = new AMap.Text({
        //     text: companies[p].name,
        //     verticalAlign: 'bottom',
        //     position: companies[p].location,
        //     height: -height+10000,
        //     style: {
        //         'background-color': 'transparent',
        //         '-webkit-text-stroke': 'lightblue',
        //         '-webkit-text-stroke-width': '0.5px',
        //         'text-align': 'center',
        //         'border': 'none',
        //         'color': 'white',
        //         'font-size': '14px',
        //         'font-weight': 600
        //     }
        // });
        //text.setMap(map);
      }
      this.points3D.borderColor = [0.4, 0.8, 1, 1];
      this.points3D.borderWeight = 1;
      this.object3Dlayer.add(this.points3D);
      this.object3Dlayer.add(this.lines);
    },
    oneLinesAndLineGeo(index) {
      this.object3Dlayer.remove(this.points3D);
      this.object3Dlayer.remove(this.lines);
      this.text.setMap(null);
      this.points3D = new AMap.Object3D.RoundPoints();
      this.lines = new AMap.Object3D.Line();
      var lineGeo = this.lines.geometry;
      this.points3D.transparent = true;
      var pointsGeo = this.points3D.geometry;
      var center = this.lnglatToG20(this.companies[index].location);
      var size = 20;
      var height = -40 * 10000;

      // 连线
      lineGeo.vertices.push(center.x, center.y, 0);
      lineGeo.vertexColors.push(0, 0.5, 1, 1);
      lineGeo.vertices.push(center.x, center.y, height);
      lineGeo.vertexColors.push(0, 0.5, 1, 1);

      pointsGeo.vertices.push(center.x, center.y, 0); // 尾部小点
      pointsGeo.pointSizes.push(5);
      pointsGeo.vertexColors.push(0, 0, 1, 1);

      pointsGeo.vertices.push(center.x, center.y, height); // 空中点
      pointsGeo.pointSizes.push(size);
      pointsGeo.vertexColors.push(0, 1, 1, 1);
      this.text = new AMap.Text({
        text: this.companies[index].name,
        verticalAlign: "bottom",
        position: this.companies[index].location,
        height: -height + 10000,
        style: {
          "background-color": "transparent",
          "-webkit-text-stroke": "lightblue",
          "-webkit-text-stroke-width": "0.5px",
          "text-align": "center",
          border: "none",
          color: "white",
          "font-size": "14px",
          "font-weight": 600
        }
      });
      this.text.setMap(this.map);

      this.points3D.borderColor = [0.4, 0.8, 1, 1];
      this.points3D.borderWeight = 1;
      this.object3Dlayer.add(this.lines);
      this.object3Dlayer.add(this.points3D);
    }
  },
  props: {
    center: {},
    zoom: {}
  }
};
</script>
<style lang="scss" scoped>
.map_container {
  position: relative;
  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  .center {
    width: 60%;
    position: absolute;
    left: 20%;
    bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
    color: aqua;
  }
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    margin: 5px 5px;
    height: 30px;
    line-height: 28px;
    text-align: center;
    padding: 0 10px;
    border: 2px solid rgba(52, 87, 81, 0);
    border-radius: 20px;
    width: 115px;
    font-size: 11px;
  }
  .active {
    border: 2px solid rgba(52, 87, 81, 1);
    color: white;
  }
}
</style>
