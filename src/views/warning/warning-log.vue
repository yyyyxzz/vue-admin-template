<template>
  <div class="warning-log-container">
    <el-row :gutter="10">
      <el-col :span="12" id="eMap"></el-col>
    </el-row>
  </div>
</template>

<script>
import china from "./china.js";
import echarts from "echarts";
import resize from "@/utils/resize";

export default {
  mixins: [resize],
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.eMapInit();
  },
  methods: {
    eMapInit() {
      var dataList = [
        { name: "南海诸岛", value: 0 },
        { name: "北京", value: this.randomValue() },
        { name: "天津", value: this.randomValue() },
        { name: "上海", value: this.randomValue() },
        { name: "重庆", value: this.randomValue() },
        { name: "河北", value: this.randomValue() },
        { name: "河南", value: this.randomValue() },
        { name: "云南", value: this.randomValue() },
        { name: "辽宁", value: this.randomValue() },
        { name: "黑龙江", value: this.randomValue() },
        { name: "湖南", value: this.randomValue() },
        { name: "安徽", value: this.randomValue() },
        { name: "山东", value: this.randomValue() },
        { name: "新疆", value: this.randomValue() },
        { name: "江苏", value: this.randomValue() },
        { name: "浙江", value: this.randomValue() },
        { name: "江西", value: this.randomValue() },
        { name: "湖北", value: this.randomValue() },
        { name: "广西", value: this.randomValue() },
        { name: "甘肃", value: this.randomValue() },
        { name: "山西", value: this.randomValue() },
        { name: "内蒙古", value: this.randomValue() },
        { name: "陕西", value: this.randomValue() },
        { name: "吉林", value: this.randomValue() },
        { name: "福建", value: this.randomValue() },
        { name: "贵州", value: this.randomValue() },
        { name: "广东", value: this.randomValue() },
        { name: "青海", value: this.randomValue() },
        { name: "西藏", value: this.randomValue() },
        { name: "四川", value: this.randomValue() },
        { name: "宁夏", value: this.randomValue() },
        { name: "海南", value: this.randomValue() },
        { name: "台湾", value: this.randomValue() },
        { name: "香港", value: this.randomValue() },
        { name: "澳门", value: this.randomValue() }
      ];
      this.chart = echarts.init(document.getElementById("eMap"));
      this.setOptions(dataList)
      // myChart.on("click", function(params) {
      //   alert(params.name);
      // });

      /*  setTimeout(function () {
            myChart.setOption({
                series : [
                    {
                        name: '信息量',
                        type: 'map',
                        geoIndex: 0,
                        data:dataList
                    }
                ]
            });
        },1000)*/
    },
    randomValue() {
      return Math.round(Math.random() * 1000);
    },
    setOptions(dataList) {
      var option = {
        tooltip: {
          formatter: function(params, ticket, callback) {
            return (
              params.seriesName + "<br />" + params.name + "：" + params.value
            );
          } //数据格式化
        },
        visualMap: {
          min: 0,
          max: 1500,
          left: "left",
          top: "bottom",
          text: ["高", "低"], //取值范围的文字
          inRange: {
            color: ["#e0ffff", "#006edd"] //取值范围的颜色
          },
          show: true, //图注
          itemWidth: 14, //图形的宽度，即长条的宽度。
          itemHeight: 100 //图形的高度，即长条的高度。
        },
        geo: {
          map: "china",
          roam: false, //不开启缩放和平移
          zoom: 1.23, //视角缩放比例
          // left:60,
          // right:60,
          label: {
            normal: {
              show: true,
              fontSize: "10",
              color: "rgba(0,0,0,0.7)"
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: "#F3B329", //鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            name: "电量",
            type: "map",
            geoIndex: 0,
            data: dataList
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>
<style lang="scss" scoped>
.warning-log-container {
  margin: 30px;
  #eMap {
    height: 400px;
  }
}
</style>
