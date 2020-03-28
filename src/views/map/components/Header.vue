<template>
  <div class="header-container">
    <div class="header-left">
      <span class="el-icon-s-grid menu" @click="changeScreenChild" :style="{backgroundColor:screenShow?'blue':'lightblue'}"></span>
      <span class="title">广东省云浮市用能监测平台</span>
    </div>

    <span class="date">{{ dateShow }}</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      date: new Date()
    };
  },
  props: {
    changeScreen: {},
    screenShow: {}
  },
  computed: {
    dateShow() {
      var year = this.date.getFullYear();
      var month = this.date.getMonth() + 1;
      var day = this.date.getDate();
      var weekday = this.date.getDay();
      var weekdayCh = new Array(
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      );
      var hours = this.date.getHours();
      var minutes = this.date.getMinutes();
      if (day < 10) {
        day = "0" + day;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      let tmp =
        year +
        "年" +
        month +
        "月" +
        day +
        "日" +
        " " +
        weekdayCh[weekday] +
        " " +
        hours +
        ":" +
        minutes; //这里的sj是显示的控件的id
      return tmp;
    }
  },
  methods: {
    changeScreenChild() {
      this.$emit("changeScreen");
    }
  },
  created() {},
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date(); // 修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../styles/variables";
.header-container {
  // position:absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 2;
  height: 55px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-weight: bold;
  background-color: lightblue;
  line-height: 55px;
  .header-left {
    height: 55px;
    line-height: 55px;
    .title {
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      margin-top: -14px;

      line-height: 55px;
      font-size: 20px;
    }
  }
  .menu {
    text-align: center;
    line-height: 55px;
    height: 100%;
    width: 55px;
    font-size: 30px;
    // background-color: red;
    border-right: 1px solid lightcyan;
    cursor: pointer;
  }
}
</style>
