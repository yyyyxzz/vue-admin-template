<template>
  <div class="card-container">
    <div class="card-title">
      <span>{{ cardData.title }}</span>
      <el-button
        style="background: none;border:none;font-size: 14px;font-weight: bold;"
        type="small"
        @click="showMore"
        >更多<i class="el-icon-arrow-right"></i
      ></el-button>
    </div>
    <div
      v-for="(item, index) in cardData.data"
      :key="index"
      class="card-content-item"
    >
      <span>{{ item.name }}</span>
      <span
        >{{ item.value }}<span>{{ cardData.unit }}</span></span
      >
    </div>
    <el-dialog
      title="排行"
      :visible.sync="dialogVisible"
      width="30%"
      style="height:100%"
      :modal-append-to-body="false"
      :before-close="handleClose"
    >
      <el-table :data="tableData" style="width: 100%" height="250">
        <el-table-column prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      // data:[1,2,3,4]
      dialogVisible: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  props: ["cardData"],
  methods: {
    showMore() {
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../style/variables";
.card-container {
  width: 100%;
  text-align: left;
  padding: 10px;
  color: $titleColor;
  box-sizing: border-box;
  .card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $titleColor;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
  }
  .card-content-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20%;
  }
}
</style>
