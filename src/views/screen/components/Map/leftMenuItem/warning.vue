<template>
  <div class="warning-wrapper">
  <el-table :data="gridData" empty-text="暂无数据">
        <el-table-column
          width="150"
          property="date"
          label="设备名称"
        ></el-table-column>
        <el-table-column
          property="name"
          label="故障"
        ></el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gridData: [
      ],
    };
  }
};
</script>
<style lang="scss" scoped>
.warning-wrapper {
  padding: 0 12px;
 
}
</style>
