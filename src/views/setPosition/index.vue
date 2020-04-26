<template>
  <div class="set-pos-container">
    <div class="map-wrapper">
      <div id="posMap"></div>
      <div class="address-container">
        <span class="input-label">地址：</span>
        <span class="input-container"
          ><el-input type="text" id="placeSearch" v-model="address"></el-input
        ></span>
      </div>
      <div class="pos-container">
        <span class="input-label">经纬度:</span>
        <span class="input-container">
          <el-input type="text" readonly v-model="pos.lng"></el-input
        ></span>
        -
        <span class="input-container">
          <el-input type="text" readonly v-model="pos.lat"></el-input
        ></span>
      </div>
    </div>
    <div id="dragMap"></div>
  </div>
</template>
<script>
import AMap from "AMap";
export default {
  data() {
    return {
      map: null,
      marker: null,
      address: "",
      pos: {
        lng: "",
        lat: ""
      },
      geocoder: null,
      dragMap: null,
      dragMarker: null
    };
  },
  mounted() {
    this.mapInit();
    this.dragMapInit();
  },
  methods: {
    mapInit() {
      const _this = this;
      var center = [121.437, 31.0256]; //云浮市中心
      this.map = new AMap.Map("posMap", {
        zoom: 14,
        showIndoorMap: false,
        center: center,
        features: ["bg", "point", "road"]
        // resizeEnable: true
      });
      this.marker = new AMap.Marker({
        map: this.map,
        position: center
      });
      this.geocoder = new AMap.Geocoder({
        // city: "010", //城市设为北京，默认：“全国”
        radius: 1000 //范围，默认：500
      });

      this.getAddress(center);
      this.pos.lng = center[0];
      this.pos.lat = center[1];
      AMap.event.addListener(this.marker, "mouseover", () => {
        this.marker.setLabel({
          offset: new AMap.Pixel(0, -20), //设置文本标注偏移量
          content: "<div> 标签</div>", //设置文本标注内容
          direction: "right" //设置文本标注方位
        });
      });
      AMap.event.addListener(this.marker, "mouseout", () => {
        this.marker.setLabel(null);
      });
      //this.marker.setTitle("我是marker的title");

      this.map.add(this.marker);
      this.map.on("click", e => {
        this.pos.lng = e.lnglat.getLng();
        this.pos.lat = e.lnglat.getLat();
        this.marker.setPosition([this.pos.lng, this.pos.lat]);
        this.getAddress([this.pos.lng, this.pos.lat]);
      });
      var autoOptions = {
        input: "placeSearch"
      };
      var auto = new AMap.Autocomplete(autoOptions);
      var placeSearch = new AMap.PlaceSearch({
        map: this.map
      }); //构造地点查询类
      AMap.event.addListener(auto, "select", select); //注册监听，当选中某条记录时会触发
      function select(e) {
        if (e.poi.location.getLng) {
          _this.pos.lng = e.poi.location.getLng();
          _this.pos.lat = e.poi.location.getLat();
          _this.marker.setPosition([_this.pos.lng, _this.pos.lat]);
          _this.map.setCenter([_this.pos.lng, _this.pos.lat]);
        } else {
          _this.$message.error("请缩小位置范围");
        }
      }
    },
    dragMapInit() {
      var center = [121.437, 31.0256]; //云浮市中心
      this.dragMap = new AMap.Map("dragMap", {
        zoom: 14,
        showIndoorMap: false,
        center: center,
        features: ["bg", "point", "road"],
        resizeEnable: true
      });
      this.dragMarker = new AMap.Marker({
        map: this.dragMap,
        position: center,
        draggable: true
      });
    },
    getAddress(center) {
      const _this = this;
      this.geocoder.getAddress(center, function(status, result) {
        if (status === "complete" && result.regeocode) {
          var address = result.regeocode.formattedAddress;
          _this.address = address;
        } else {
          _this.address = "";
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.set-pos-container {
  overflow: hidden;
  position: relative;
  margin: 30px;
  .map-wrapper {
    position: relative;
    overflow: hidden;
  }
  #posMap,
  #dragMap {
    position: relative;
    overflow: hidden;
    width: 600px;
    height: 400px;
  }
  #dragMap {
    position: relative;
    margin-top: 20px;
  }
  .input-label {
    display: inline-block;
    width: 80px;
  }
  .address-container {
    margin: 10px 0;
    .input-container {
      display: inline-block;
      width: 618px;
    }
  }
  .pos-container {
    .input-container {
      display: inline-block;
      width: 300px;
    }
  }
}
</style>
