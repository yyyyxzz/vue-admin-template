<template>
  <div class="map_container">
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
      ></bottomMenu>
    </div>
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
      lights: [
        {
          pos: [121.437, 31.0316],
          name: "灯杆1",
          type: "light",
          id: "112222233"
        },
        {
          pos: [121.437, 31.0386],
          name: "灯杆2",
          type: "light",
          id: "112222233"
        },
        {
          pos: [121.437, 31.0356],
          name: "灯杆3",
          type: "light",
          id: "112222233"
        }
      ],
      gates: [
        {
          pos: [121.417, 31.0206],
          name: "网关1",
          type: "light",
          id: "112222233"
        },
        {
          pos: [121.401, 31.0286],
          name: "网关2",
          type: "light",
          id: "112222233"
        },
        {
          pos: [121.409, 31.0256],
          name: "网关3",
          type: "light",
          id: "112222233"
        }
      ],
      pods: [
        {
          pos: [121.437, 31.0226],
          name: "智慧灯杆1",
          type: "light",
          id: "112222233"
        },
        {
          pos: [121.437, 31.0296],
          name: "智慧灯杆2",
          type: "light",
          id: "112222233"
        },
        {
          pos: [121.437, 31.0206],
          name: "智慧灯杆3",
          type: "light",
          id: "112222233"
        }
      ],
      boxes: [
        {
          pos: [121.457, 31.0216],
          name: "配电箱1",
          type: "light",
          id: "112222233"
        },
        {
          pos: [121.451, 31.0286],
          name: "配电箱2",
          type: "light",
          id: "112222233"
        },
        {
          pos: [121.459, 31.0256],
          name: "配电箱3",
          type: "light",
          id: "112222233"
        }
      ],
      activeMenu: null,
      clickedItem: null,
      bottomActiveMenu: "all",
      lightsGroup: null,
      boxesGroup: null,
      gatesGroup: null,
      podsGroup: null
    };
  },
  components: {
    leftMenu,
    rightMenu,
    bottomMenu
  },
  computed: {
    infoWindow() {
      var infoWindowContent =
        '<div className="custom-infowindow input-card" style="width:400px">' +
        '<label style="color:grey">故宫博物院</label>' +
        '<div class="input-item">' +
        '<div class="input-item-prepend">' +
        '<span class="input-item-text" >经纬度</span>' +
        "</div>" +
        '<input id="lnglat" type="text" />' +
        "</div>" +
        this.clickedItem.name +
        // 为 infowindow 添加自定义事件
        `<input id="lnglat2container" type="button" class="btn" value="获取该位置经纬度" onclick="window.getLngLat(1)"/>` +
        "</div>";
      var content = ` <div class="info-container">
      <div class="title">单灯控制器1</div>
      <div class="status">设备正常</div>
      <div class="light-control-container">
        <span class="light-control">开灯</span>
        <span class="light-control">关灯</span>
      </div>
      <div class="light-control-container">
        <span class="brightness-control" onclick="window.setBrightness(1)"
          ><i class="el-icon-s-opportunity"></i><span>一档亮度</span></span
        >
        <span class="brightness-control"
          ><i class="el-icon-s-opportunity"></i><span>二档亮度</span></span
        >
        <span class="brightness-control"
          ><i class="el-icon-s-opportunity"></i><span>三档亮度</span></span
        >
        <span class="brightness-control"
          ><i class="el-icon-s-opportunity"></i><span>四档亮度</span></span
        >
      </div>
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
    tip() {
      let content = `<span style="border:1px solid black;padding:5px;background:white;font-size:10px">${
        this.clickedItem.name
      }</span>`;
      var label = new AMap.InfoWindow({
        isCustom: true, //使用自定义窗体
        content,
        offset: new AMap.Pixel(16, -20)
      });

      AMap.event.addListener(this.infoWindow, "close", () => {
        this.activeMenu = null;
      });
      return label;
    }
  },
  mounted() {
    this.mapInit();
    window.setBrightness = this.setBrightness;
  },
  methods: {
    setBrightness(i) {
      console.log("i: ", i);
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
          // this.map.setFitView(this.lightsGroup)
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
      var center = [121.437, 31.0256]; //云浮市中心
      this.map = new AMap.Map("map", {
        zoom: 14,
        // pitch: 50,
        showIndoorMap: false,
        // showLabel: false,
        // mapStyle: "amap://styles/darkblue",
        center: center,
        features: ["bg", "point", "road"],
        // viewMode: "3D"
        resizeEnable: true
      });
      this.statellite = new AMap.TileLayer.Satellite();
      const _this = this;
      var markers = [];
      var zoomStyleMapping1 = {
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
            zooms: [10, 20],
            styles: [
              {
                icon: {
                  img: imgs[index],
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
          AMap.event.addListener(marker, "click", function() {
            _this.clickedItem = _this[item][i];
            _this.infoWindow.open(_this.map, marker.getPosition());
            _this.activeMenu = "device";
          });
          AMap.event.addListener(marker, "mouseover", function() {
            _this.clickedItem = _this[item][i];
            _this.tip.open(_this.map, marker.getPosition());
          });
          AMap.event.addListener(marker, "mouseout", function() {
            _this.tip.close(_this.map, marker.getPosition());
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
    width: 45%;
    border: 1px solid lightgrey;
    padding: 5px 0;
    cursor: pointer;
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
  }
}
.map_container {
  position: relative;
  height: 100%;

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
