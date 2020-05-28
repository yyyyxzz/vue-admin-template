<template>
  <div class="account-container">
    <div class="base-info">
      <div class="title">基本信息</div>
      <div class="content">
        <div class="center item">
          <div>
            <span class="subtitle">用户名称</span>
            <el-input style="width:180px" size="medium" v-model="name"></el-input>
          </div>
          <el-button type="primary" size="medium">保存</el-button>
        </div>
        <div class="item">
          <span class="subtitle">手机号码</span> <span>15222833261</span>
        </div>
      </div>
    </div>
    <div>
      <div class="title">其他设置</div>
      <div class="content">
      <div class="center item">
        <div><span class="subtitle">绑定邮箱</span> <span style="color:#F7CE4A">未绑定</span></div>
        <el-button type="primary" size="medium">立即绑定</el-button>
      </div>
      <div class="center item">
        <div>
          <span class="subtitle">修改密码</span> <span>1522****261</span>
        </div>
        <el-button type="primary" size="medium">修改</el-button>
      </div>
      <div class="center item">
        <div>
          <span class="subtitle">接收短信通知</span>
          <span>开启后，可接收设备预警和故障短信</span>
        </div>
        <el-switch
          v-model="message"
          active-color="#13ce66"
          inactive-color="lightgrey"
        >
        </el-switch>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: false,
      name:'云浮市'
    };
  }
};
</script>
<style lang="scss" scoped>
.account-container {
  .base-info {
    margin-bottom: 30px;
  }
  padding: 40px;
  .title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .content{
    padding: 0 20px;
    .item{
      height: 50px;
      line-height: 50px;
    }
  }
  .subtitle {
    margin-right: 20px;
  }
}
</style>
