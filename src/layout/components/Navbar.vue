<template>
  <div class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-button type="primary" @click="backScreen">回到大屏</el-button>
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
        <el-badge :value="12" class="bell-container" slot="reference">
          <i class="el-icon-bell"></i>
        </el-badge>
      </el-popover>

      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <span>上海千贯</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
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
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import Screenfull from "@/components/Screenfull";

export default {
  components: {
    Breadcrumb,
    Hamburger,
    Screenfull
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    backScreen() {
      this.$router.push("/map");
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  line-height: 50px;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    line-height: 50px;
    font-size: 18px;
    color: #5a5e66;

    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }
  #screenfull {
    margin: 0 10px;
  }
  
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    &:focus {
      outline: none;
    }
    .bell-container {
      font-size: 20px;
      color: #5a5e66;
    }
   

    .avatar-container {
      margin-left: 20px;
      margin-right: 30px;
      height: 100%;
      .avatar-wrapper {
        position: relative;
        cursor: pointer;

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 18px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
