<template>
  <div id="map-container">
    <Header @changeScreen="changeScreen" :screenShow="screenShow"></Header>
    <div class="content">
      <Map class="map"></Map>
      <div class="left-wrapper chart-wrapper">
        <Statistics
          :style="{ height: '32%' }"
          :statisticsData="statisticsData"
        ></Statistics>
        <WarningLog :style="{ height: '32%' }"></WarningLog>
        <PieChart
          id="pie"
          :style="{ height: '32%' }"
          :chartData="teminalsState"
        ></PieChart>
      </div>
      <div class="center-wrapper">
        <div
          class="panel-container"
          :class="{ 'active-floor': selectedFloor === index }"
          v-for="(item, index) in pData"
          :key="index"
          @click="changeFloor(index)"
        >
          <div class="panel-left">
            <i
              :class="{
                'el-icon-office-building': !index,
                'el-icon-reading': index
              }"
            ></i>
          </div>
          <div class="panel-right">
            <div class="panel-title">{{ item.name }}</div>
            <span
              ><count-to
                :startVal="item.startValue"
                :endVal="item.value"
                :duration="6000"
                class="count"
              ></count-to
              >W</span
            >
          </div>
        </div>
      </div>
      <div class="right-wrapper chart-wrapper">
        <BarChart
          id="bar1"
          :style="{ height: '32%' }"
          title="插座功率排行"
          :chartData="socketPRank"
        ></BarChart>
        <NormalBarChart
          id="bar"
          :style="{ height: '32%' }"
          title="本周用电量"
          :chartData="energyData"
        ></NormalBarChart>
        <LineChart
          id="line"
          :style="{ height: '32%' }"
          :chartData="loadData"
        ></LineChart>
      </div>
    </div>
    <div
      class="screen-container"
      :style="{ display: screenShow ? 'block' : 'none' }"
    >
      <Main></Main>
      <!-- <el-button type="primary" @click="logout">logout</el-button>
      <el-button type="primary" @click="dashboard">dashboard</el-button> -->
    </div>
  </div>
</template>

<script>
import bee06 from "./testJson/86571001006/app";
import bee07 from "./testJson/86571001007/app";
import bee10 from "./testJson/86571001010/app";
import bee13 from "./testJson/86571001013/app";
import panel from "../../assets/panel.png";
import countTo from "vue-count-to";
import Statistics from "./components/Statistics";
import WarningLog from "./components/WarningLog";
import Header from "./components/Header";
import PieChart from "./components/Charts/PieChart";
import LineChart from "./components/Charts/LineChart";
import BarChart from "./components/Charts/BarChart";
import NormalBarChart from "./components/Charts/NormalBarChart";
import Main from "./components/Main";

import Bpbus from "../../api/bpbus";
import { mapGetters } from "vuex"; //注册 action 、 state 、getter
import Map from "./components/Map";
const beeIds = ["86571001006", "86571001007", "86571001010", "86571001013"];
export default {
  data() {
    return {
      screenShow: false,
      terminals: {
        86571001006: bee06.rooms.reduce((prev, cur) => {
          prev.push(...cur.terminals);
          return prev;
        }, []),
        86571001007: bee07.rooms.reduce((prev, cur) => {
          prev.push(...cur.terminals);
          return prev;
        }, []),
        86571001010: bee10.rooms.reduce((prev, cur) => {
          prev.push(...cur.terminals);
          return prev;
        }, []),
        86571001013: bee13.rooms.reduce((prev, cur) => {
          prev.push(...cur.terminals);
          return prev;
        }, [])
      },
      // beeIds:['86200001038','86200001042','86200001041','86200001039','86200001040'],
      bg: panel,
      beeIdInfo: {},
      info: [
        {
          name: "图书馆",
          startValue: 0,
          beeId: beeIds,
          value: 0
        },
        {
          name: "中厅",
          startValue: 0,
          beeId: beeIds[0],
          value: 0
        },
        {
          name: "一楼阅览室",
          startValue: 0,
          beeId: [beeIds[1], beeIds[2]],
          value: 0
        },
        {
          name: "四楼阅览室",
          startValue: 0,
          beeId: beeIds[3],
          value: 0
        }
      ],
      selectedFloor: 0
    };
  },
  computed: {
    socketPRank() {
      let beeId = this.info[this.selectedFloor].beeId;
      if (typeof beeId === "string") {
        if (
          this.beeIdInfo[beeId].top3 != undefined &&
          this.beeIdInfo[beeId].top3 != ""
        ) {
          let data = JSON.parse(this.beeIdInfo[beeId].top3);
          let rankList = data.map(item => {
            let rankItem = {};
            rankItem.name = this.terminals[beeId].find(n =>
              n.id.includes(item.t)
            ).name;
            rankItem.value = parseInt(item.v);
            return rankItem;
          });
          rankList.reverse();
          return { title: "插座功率排行", unit: "W", data: rankList };
        }
      } else if (typeof beeId === "object") {
        let rankLists = [];
        beeId.forEach(beeId => {
          if (
            this.beeIdInfo[beeId].top3 != undefined &&
            this.beeIdInfo[beeId].top3 != ""
          ) {
            let data = JSON.parse(this.beeIdInfo[beeId].top3);
            let rankList = data.map(item => {
              let rankItem = {};
              rankItem.name = this.terminals[beeId]
                .find(n => n.id.includes(item.t))
                .name.slice(0, 8);
              rankItem.value = parseInt(item.v);
              return rankItem;
            });
            rankLists.push(...rankList);
          }
        });
        rankLists.sort((i, j) => {
          return i.value - j.value;
        });
        return {
          title: "插座功率排行",
          unit: "W",
          data: rankLists.slice(rankLists.length - 4, rankLists.length)
        };
      } else {
        return [];
      }
      return [];
    },
    routes() {
      return this.$router.options.routes.filter(route => {
        return !route.hidden;
      });
    },
    energyData() {
      let beeId = this.info[this.selectedFloor].beeId;
      let tmp = {};
      if (typeof beeId === "string") {
        let data = this.beeIdInfo[beeId].D1Energy;
        if (data != undefined) {
          Object.keys(data).forEach(item => {
            tmp[item] = tmp[item] + data[item] || 0;
          });
        }
      } else if (typeof beeId === "object") {
        beeId.forEach(beeId => {
          let data = this.beeIdInfo[beeId].D1Energy;
          if (data != undefined) {
            Object.keys(data).forEach(item => {
              tmp[item] = tmp[item] + data[item] || 0;
            });
          }
        });
      }
      let weekData = {
        unit: "kWh",
        data: [],
        xAxis: []
      };
      Object.keys(tmp).forEach(item => {
        weekData.xAxis.push(this.dateFormat("mm/dd", parseInt(item)));
        weekData.data.push(parseInt(tmp[item]));
      });
      weekData.xAxis = weekData.xAxis.slice(0, 7);
      weekData.data = weekData.data.slice(0, 7);
      return weekData;
    },
    loadData() {
      let beeId = this.info[this.selectedFloor].beeId;
      let tmp = {};

      if (typeof beeId === "string") {
        let data = this.beeIdInfo[beeId].K5P;
        if (data != undefined) {
          Object.keys(data).forEach(item => {
            tmp[item] = tmp[item] + data[item] || 0;
          });
        }
      } else if (typeof beeId === "object") {
        beeId.forEach(beeId => {
          let data = this.beeIdInfo[beeId].K5P;
          if (data != undefined) {
            Object.keys(data).forEach(item => {
              tmp[item] = tmp[item] + data[item] || 0;
            });
          }
        });
      }
      let weekData = {
        unit: "W",
        data: [],
        xAxis: []
      };
      Object.keys(tmp).forEach(item => {
        weekData.xAxis.push(this.dateFormat("HH", parseInt(item)));
        weekData.data.push(parseInt(tmp[item]));
      });
      return weekData;
    },
    pData() {
      let tmp = JSON.parse(JSON.stringify(this.info));
      tmp.map(item => {
        if (typeof item.beeId === "string") {
          let data = this.beeIdInfo[item.beeId].P;
          if (data != undefined) {
            let result = data.find(n => n.tId === `ambient-${item.beeId}`);
            item.startValue = item.value;
            if (result && result.v) {
              item.value = parseInt(result.v.f);
            }
          }
        } else if (typeof item.beeId === "object") {
          let v = 0;
          item.beeId.forEach(beeId => {
            let data = this.beeIdInfo[beeId].P;
            if (data != undefined) {
              let result = data.find(n => n.tId === `ambient-${beeId}`);
              if (result && result.v) {
                v += result.v.f;
              }
            }
          });
          item.startValue = item.value;
          item.value = parseInt(v);
        }
        return item;
      });
      return tmp;
    },
    statisticsData() {
      let tmp = [];
      tmp[0] = 0;
      // console.log('1111',Object.values(this.beeIdInfo)[0].M1Energy);
      Object.values(this.beeIdInfo).forEach(item => {
        item = item || {};
        if (!item.M1Energy) {
          item.M1Energy = 0;
        }
        tmp[0] += item.M1Energy;
      });
      tmp[1] = this.beeIdInfo[beeIds[0]].M1Energy;
      tmp[2] =
        this.beeIdInfo[beeIds[1]].M1Energy + this.beeIdInfo[beeIds[2]].M1Energy;
      tmp[3] = this.beeIdInfo[beeIds[3]].M1Energy;
      return tmp;
    },
    teminalsState() {
      let tmp = [
        { value: 0, name: "空闲" },
        { value: 0, name: "工作" },
        { value: 0, name: "告警" }
      ];
      beeIds.forEach(beeId => {
        if (this.beeIdInfo[beeId].P) {
          this.beeIdInfo[beeId].P.forEach(item => {
            if (item.tId.includes("Sck-20")) {
              if (item.v.f > 2) {
                tmp[1].value++;
              } else {
                tmp[0].value++;
              }
            }
          });
        }
      });
      return tmp;
    },
    ...mapGetters(["realData", "getData"])
  },
  watch: {
    getData: {
      deep: true,
      handler(val) {
        let clientId = val.clientId;
        if (val.data != "Parallel(true)" && val.data != "") {
          let data = JSON.parse(val.data);
          let key = Object.keys(data)[0];
          if (key.includes(".M1.Energy")) {
            //为查询本月电量
            this.beeIdInfo[clientId]["M1Energy"] = parseInt(
              Object.values(Object.values(data)[0])[0]
            );
          } else if (key.includes(".D1.Energy")) {
            //查询七天电量
            this.beeIdInfo[clientId]["D1Energy"] = Object.values(data)[0];
          } else if (key.includes("K5.P")) {
            //查询今日功率
            this.beeIdInfo[clientId]["K5P"] = Object.values(data)[0];
          }
          this.beeIdInfo = JSON.parse(JSON.stringify(this.beeIdInfo));
        }
      }
    },
    realData: {
      deep: true,
      handler(val) {
        let clientId = val.clientId;
        if (val.data != "Parallel(true)" && val.data != "") {
          let data = val.data;
          if (data[0].key === "top3") {
            if (!this.beeIdInfo[clientId]) {
              // console.log('top3',this.beeIdInfo[clientId]);
              this.beeIdInfo[clientId] = [];
            }
            this.beeIdInfo[clientId]["top3"] = data[0].v.s;
          } else if (data[0].key === "P") {
            if (!this.beeIdInfo[clientId]) {
              // console.log('top3',this.beeIdInfo[clientId]);
              this.beeIdInfo[clientId] = [];
              this.beeIdInfo[clientId]["P"] = {};
            }

            data.forEach(item => {
              if (!this.beeIdInfo[clientId]["P"]) {
                this.beeIdInfo[clientId]["P"] = {};
              }
              this.beeIdInfo[clientId]["P"][item.tId] = item.v.f;
            });
            this.beeIdInfo[clientId]["P"] = data;
          }
        }
        // console.log(this.beeIdInfo);
        this.beeIdInfo = JSON.parse(JSON.stringify(this.beeIdInfo));
      }
    }
  },
  components: {
    NormalBarChart,
    countTo,
    Statistics,
    WarningLog,
    PieChart,
    LineChart,
    BarChart,
    Map,
    Header,
    Main
  },
  async created() {
   

    beeIds.forEach(item => {
      this.beeIdInfo[item] = {};
    });
    let isConnect = await Bpbus.connect();
    if (isConnect) {
      // Bpbus.command()
      beeIds.forEach(item => {
        Bpbus.webGet(item, `curve.ambient-${item}.M1.Energy:~day#1`);
        Bpbus.webGet(item, `curve.ambient-${item}.D1.Energy:~day#7`);
        Bpbus.webGet(item, `K.ambient-${item}.K5.P:day@fixedCurve`);
        Bpbus.webSub(item, "state.top3");
        Bpbus.webSub(item, "state.P");
      });
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
  methods: {
    changeScreen() {
      this.screenShow = !this.screenShow;
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    dashboard() {
      this.$router.push("/dashboard");
    },
    dateFormat(fmt, date) {
      date = new Date(date);
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    },

    changeFloor(floor) {
      this.selectedFloor = floor;
    },
    handleChange(value) {
      this.$refs.map.contentWindow.postMessage(value, "*");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
* {
  box-sizing: border-box;
}
#map-container {
  //   background-color: grey;
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1400px;
  width: 100vw;
  height: 100vh;
  .screen-container {
    position: absolute;
    top: 55px;
    z-index: 30;
    background-color: rgba(173, 216, 230, 0.9);
    width: 100%;
    height: calc(100vh - 55px);
    
  }
  .content {
    height: calc(100% - 55px);
    display: flex;
    /*align-items: center;*/
    justify-content: space-between;
    position: relative;
    .map {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
    }
    .chart-wrapper {
      // margin-top: 3%;
      height: 100%;
      width: 20%;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      z-index: 1;
      /*border:1px solid red;*/
    }
    .center-wrapper {
      margin-top: 5%;
      height: 10%;
      width: 60%;
      justify-content: space-around;
      align-items: center;
      z-index: 1;
      display: flex;
      .panel-container {
        display: flex;
        width: 15%;
        height: 100%;
        background: rgba(0, 188, 225, 0.5);
        border-top: 3px solid rgba(0, 188, 225, 1);
        .panel-left {
          height: 100%;
          width: 30%;
          display: flex;
          color: white;
          justify-content: center;
          background: rgba(0, 188, 225, 0.7);
          align-items: center;
        }
        .panel-right {
          font-size: 13px;
          color: white;
          height: 100%;
          width: 70%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          .count {
            width: 40px;
            font-size: 20px;
          }
        }
      }
      .active-floor {
        border-top: 3px solid rgb(255, 225, 77);
        /*background:rgb(255,92,51); ;*/
      }
      h2 {
        font-size: 18px;
        color: $titleColor;
        font-weight: bold;
        margin-top: 30px;
        letter-spacing: 2px;
        color: lightgray;
        span {
          color: white;
          letter-spacing: 1px;
          font-size: 36px;
        }
      }
      .el-select {
        .el-input {
          background: none;
        }
        .el-input__inner {
          font-weight: bold;
          background: none;
          color: $titleColor;
          border-color: lightblue;
          width: 130px;
        }
      }
      .select-wrapper {
        position: absolute;
        top: 5%;
        right: 25%;
      }
    }
  }
}
</style>
