<template>
  <div class="bottom-menu-container">
    <div class="left">
      <span
        class="menu-item first"
        :class="[activeMenu === 'all' ? 'active' : '']"
        @click="changeActiveMenuChild('all')"
      >
        <i class="el-icon-s-grid"></i>
        <span>全部</span>
      </span>
      <span
        class="menu-item"
        :class="[activeMenu === '1' ? 'active' : '']"
        @click="changeActiveMenuChild('1')"
      >
        <i class="el-icon-open"></i>
        <span>回路开关</span>
      </span>
      <span
        class="menu-item"
        :class="[activeMenu === '2' ? 'active' : '']"
        @click="changeActiveMenuChild('2')"
      >
        <i class="el-icon-s-opportunity"></i>
        <span>路灯</span>
      </span>
      <span
        class="menu-item"
        :class="[activeMenu === '3' ? 'active' : '']"
        @click="changeActiveMenuChild('3')"
      >
        <i class="el-icon-box
"></i>
        <span>配电箱</span>
      </span>
      <span
        class="menu-item "
        :class="[activeMenu === '4' ? 'active' : '']"
        @click="changeActiveMenuChild('4')"
      >
        <i class="el-icon-wind-power"></i>
        <span>智慧灯杆</span>
      </span>
    </div>
    <div class="right">
      <el-select
        v-model="value"
        filterable
        placeholder="全部组"
        style="width:100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "0",
          label: "全部组"
        },
        {
          value: "1",
          label: "分组1"
        },
        {
          value: "2",
          label: "分组2"
        },
        {
          value: "3",
          label: "分组3"
        }
      ],
      value: "0"
    };
  },
  props: { activeMenu: {}, changeActiveMenu: {} },
  methods: {
    changeActiveMenuChild(menu) {
      if (menu !== this.activeMenu) this.$emit("changeActiveMenu", menu);
    }
  }
};
</script>
<style lang="scss" scoped>
.bottom-menu-container {
  display: flex;
  font-size: 14px;
  .right {
    margin-left: 10px;
    background: white;
    display: flex;
    align-items: center;
  }
  .left {
    padding: 8px;
    display: flex;
    background: white;
  }
  .menu-item {
    display: flex;
    height: 50px;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 30px;
    cursor: pointer;
    i {
      font-size: 24px;
    }
  }

  .first {
    border-right: 1px solid grey;
  }
  .active {
    color: #0198ff;
  }
}
</style>
