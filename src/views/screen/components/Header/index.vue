<template>
  <div class="header-container">
    <div class="header-left">
      <span
        class="menu"
        :style="{
          backgroundColor: screenShow ? '#0198ff' : 'white',
          color: screenShow ? 'white' : 'black'
        }"
        @click="changeScreenChild"
      >
        <i class="el-icon-s-operation"> </i>
      </span>

      <span class="title">广东省云浮市用能监测平台</span>
    </div>

    <div class="right-menu">
      <screenfull id="screenfull" class="right-menu-item hover-effect" />
      <el-popover placement="bottom" width="270" trigger="hover">
        <div class="popover-container">
          <div class="popover-item" @click="$router.push('/warning/log')">
            <div class="popover-item-title">预警记录</div>
            <div class="popover-item-content">您有0条预警记录，点击去查看</div>
          </div>
          <div class="popover-item" @click="$router.push('/warning/setting')">
            <div class="popover-item-title">故障维修单</div>
            <div class="popover-item-content">您有0条新故障，点击去查看</div>
          </div>
        </div>
        <el-badge :value="0" class="bell-container" slot="reference">
          <i class="el-icon-bell"></i>
        </el-badge>
      </el-popover>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <span>上海千贯</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/dashboard/index">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a
            target="_blank"
            href="https://github.com/PanJiaChen/vue-admin-template/"
          >
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a
            target="_blank"
            href="https://panjiachen.github.io/vue-element-admin-site/#/"
          >
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Screenfull from "@/components/Screenfull";

export default {
  name: "Header",
  data() {
    return {
      date: new Date()
    };
  },
  components: {
    Screenfull
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
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    changeScreenChild() {
      this.$emit("changeScreen");
    }
  },
  // mounted() {
  //   let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
  //   this.timer = setInterval(() => {
  //     _this.date = new Date(); // 修改数据date
  //   }, 1000);
  // },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.header-container {
  // position:absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 2;
  height: $screenHeaderHeight;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: bold;
  background-color: white;
  line-height: $screenHeaderHeight;
  border-bottom: 1px solid black;
  .bell-container {
    margin: 0 20px 0 10px;
    line-height: 50px;
    font-size: 20px;
    color: #5a5e66;
  }
  .header-left {
    height: 100%;
    display: flex;
    align-items: center;
    .title {
      margin-left: 10px;
      font-size: 20px;
    }
  }
  .menu {
    display: inline-block;
    text-align: center;
    height: 100%;
    width: $screenHeaderHeight;
    font-size: 30px;
    border-right: 1px solid grey;
    cursor: pointer;
  }
  .right-menu {
    margin-right: 20px;
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      line-height: 50px;
      font-size: 18px;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
    .avatar-wrapper {
      color: black !important;
      font-size: 18px;
    }
  }
}
</style>
