<template>
  <div class="login-container">
    <div
      :style="{
        backgroundImage: 'url(' + login + ')',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }"
      class="img-container"
    ></div>
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
      :style="{
        backgroundImage: 'url(' + panel + ')',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }"
    >
      <div class="title-container">
        <h3 class="title">{{ title }}</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
        >登录</el-button
      >

      <!-- <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div> -->
    </el-form>
    <div class="copyright-container">
      <div>
        <span class="about-container border-right">关于BeePower</span>
        <span class="about-container">联系我们 021-60908226</span>
      </div>
      <div class="margintop">
        <span>©️ 版权所有 Beepower-智能用电网络运营商 沪ICP备17018792号-1</span>
      </div>
    </div>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import login from "@/assets/login.png";
import { title } from "@/settings";
import panel from "@/assets/panel.png";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码长度不能少于6位"));
      } else {
        callback();
      }
    };
    return {
      title,
      login,
      panel,
      loginForm: {
        username: "admin",
        password: "111111"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: "password",
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid && this.loginForm.password === "yunfuadmin") {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          this.$message.error("密码错误！");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$cursor: #fff;
$font_color: white;
$form_item_color:#2253b6;

@supports (-webkit-mask: none) and (not (cater-color: $font_color)) {
  .login-container .el-input input {
    color: $font_color;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $font_color;
      height: 47px;
      caret-color: $font_color;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $form_item_color inset !important;
        -webkit-text-fill-color: white !important;
      }
    }
    input::-webkit-input-placeholder {
      color: lightgrey;
    }
    input::-moz-input-placeholder {
      color: lightgrey;
    }
    input::-ms-input-placeholder {
      color: lightgrey;
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: $form_item_color;
    border-radius: 5px;
    color: white;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$font_color: white;
$login_width: 430px;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #05122c;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .img-container,
  .login-form {
    margin-bottom: 10px;
  }
  .img-container {
    width: $login_width;
    height: 360px;
    margin-right: 30px;
    opacity: 0.8;
  }
  .login-form {
    background-color: rgba(255, 255, 255, 0.1);
    width: $login_width;
    max-width: 100%;
    padding: 35px;
    overflow: hidden;
    color: $font_color;
  }

  .tips {
    font-size: 14px;
    color: $font_color;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $font_color;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $font_color;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $font_color;
    cursor: pointer;
    user-select: none;
  }
  .copyright-container {
    position: absolute;
    color: $font_color;
    bottom: 10px;
    text-align: center;
    font-size: 14px;
    // box-shadow:0 0 20px 10px #2254B8 ;
    // background-color: #2254B8;
    .about-container {
      padding: 0 10px;
    }
    .margintop {
      margin-top: 5px;
    }
    .border-right {
      border-right: 1px solid $font_color;
    }
  }
}
</style>
