<template>
  <div class="header-container">
    <div class="header-left">
      <span
        class="menu"
        :style="{
          backgroundColor: showMenu ? '#0198ff' : 'white',
          color: showMenu ? 'white' : 'black'
        }"
        @click="changeScreenChild"
      >
        <i class="el-icon-s-operation"> </i>
      </span>

      <span class="title">{{title}}</span>
    </div>

    <div class="right-menu">
      <el-button type="primary" @click="$router.push('/construction')">测试</el-button>
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
          <i class="el-icon-message-solid"></i>
        </el-badge>
      </el-popover>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <span>云浮市</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Screenfull from "@/components/Screenfull";
import store from "@/store";
import { mapGetters } from "vuex";
import { title} from "@/settings";
export default {
  name: "Header",
  data() {
    return {
      title:title,
    };
  },
  components: {
    Screenfull
  },
  computed: {
    ...mapGetters(["selectedCompany",'showMenu']),
    selectedCom: {
      get() {
        return this.selectedCompany;
      },
      set(val) {
        this.$store.dispatch("company/changeCompany", val);
      }
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    changeScreenChild() {
      this.$store.dispatch('company/changeShowMenu');
    },
    handleChange(val) {
      this.$store.dispatch("company/changeCompany", val);
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
