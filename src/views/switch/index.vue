<template>
  <div class="switch-container">
    <el-popover
      placement="right"
      width="600"
      trigger="click"
      @show="popShow(0)"
      @hide="popHide(0)"
    >
      <el-table :data="gridData">
        <el-table-column
          width="150"
          property="date"
          label="日期"
        ></el-table-column>
        <el-table-column
          width="100"
          property="name"
          label="姓名"
        ></el-table-column>
        <el-table-column
          width="300"
          property="address"
          label="地址"
        ></el-table-column>
      </el-table>
      <div
        slot="reference"
        :class="['pop-menu-item', activeMenu1 === 0 ? 'menu-active' : '']"
      >
        <i class="el-icon-pie-chart icon"></i><span>设备状态</span>
      </div>
    </el-popover>
    <el-popover
      placement="right"
      width="600"
      trigger="click"
      @show="popShow(1)"
      @hide="popHide(1)"
    >
      <el-table :data="gridData">
        <el-table-column
          width="150"
          property="date"
          label="日期"
        ></el-table-column>
        <el-table-column
          width="100"
          property="name"
          label="姓名"
        ></el-table-column>
        <el-table-column
          width="300"
          property="address"
          label="地址"
        ></el-table-column>
      </el-table>
      <div
        slot="reference"
        :class="[
          'pop-menu-item',
          'last-item',
          activeMenu1 === 1 ? 'menu-active' : ''
        ]"
      >
        <i class="el-icon-pie-chart icon"></i><span>设备状态</span>
      </div>
    </el-popover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      activeMenu1: null
    };
  },
  methods: {
    popShow(index) {
      this.activeMenu1 = index;
    },
    popHide(index) {
      if (index === this.activeMenu1) {
        this.activeMenu1 = null;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.switch-container {
  margin: 30px;
  display: flex;
  flex-direction: column;
}
</style>
