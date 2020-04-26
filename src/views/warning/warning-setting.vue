<template>
  <div class="warning-log-container">
    预警设置
    <a class="btn" href="javascript:;" v-preventReClick="3000" @click="pay($event,1)">重复点击</a>
  </div>
</template>
<script>
export default {
  methods:{
    pay (event,a) {
      console.log('event: ', event);
        if (event.target.disabled) {
          console.log('disabled: ',a);
          // 点击太频繁了
          return
        }

}
  }
}
</script>
