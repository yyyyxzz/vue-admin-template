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
        <i class="el-icon-box"></i>
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
        v-model="selectedCompany"
        filterable
        placeholder="全部组"
        style="width:150px"
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
      companies: [
        { name: "园区概貌", location: [112.222417, 22.717669] },
        { name: "新兴公司食堂", location: [112.222417, 22.717669] },
        { name: "斑鸠山鸡场", location: [112.146483, 22.714274] },
        { name: "沙村鸡场", location: [112.236995, 22.655653] },
        { name: "福安鸡场", location: [112.27109, 22.705877] },
        { name: "高村鸡场", location: [112.363582, 22.608428] },
        { name: "斑鱼山种鸡场", location: [111.50477, 22.718327] },
        { name: "长江鸡场", location: [111.60477, 22.718327] }, //暂无
        { name: "水围村猪场", location: [112.17964, 22.641047] },
        { name: "簕竹饲料厂", location: [112.14303, 22.71878] },
        { name: "榄根孵化厂", location: [112.152054, 22.723637] },
        { name: "翔顺象窝酒店", location: [112.29597, 22.559285] },
        { name: "禅泉酒店", location: [112.225474, 22.592672] }
      ],
      options: [
        {
          value: "0",
          label: "全部组"
        },
        {
          value: "1",
          label: "新兴公司食堂"
        },
        {
          value: "2",
          label: "斑鸠山鸡场"
        },
        {
          value: "3",
          label: "沙村鸡场"
        },
        {
          value: "4",
          label: "福安鸡场"
        },
        {
          value: "5",
          label: "高村鸡场"
        },
        {
          value: "6",
          label: "斑鱼山种鸡场"
        },
        {
          value: "7",
          label: "长江鸡场"
        },
        {
          value: "8",
          label: "水围村猪场"
        },
        {
          value: "9",
          label: "簕竹饲料厂"
        },
        {
          value: "10",
          label: "榄根孵化厂"
        },
        {
          value: "11",
          label: "翔顺象窝酒店"
        },
        {
          value: "12",
          label: "禅泉酒店"
        }
      ],
      selectedCompany: "0"
    };
  },
  props: { activeMenu: {}, changeActiveMenu: {}, changeCompany: {} },
  watch: {
    selectedCompany(val) {
      this.$emit("changeCompany", val);
    }
  },
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
  text-align: center;
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
