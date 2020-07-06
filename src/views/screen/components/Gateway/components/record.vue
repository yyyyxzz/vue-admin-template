<template>
  <div class="record-container">
    <el-row class="filter-container" type="flex" justify="end">
      <el-col :span="8">
        <el-date-picker
          v-model="time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-col>
      <el-button type="primary" icon="el-icon-search">
        查询
      </el-button>
    </el-row>
    <div>
      <section>
        <h4>5月20日</h4>
        <ul>
          <li>
            <el-row>
              <el-col :span="4">2020-6-18 9:36</el-col>
              <span>用户</span><span>打开</span><span>房间1台灯</span>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="4">2020-6-18 9:36</el-col>
              <span>用户</span><span>打开</span><span>房间1台灯</span>
            </el-row>
          </li>
        </ul>
      </section>
      <section>
        <h4>5月19日</h4>
        <ul>
          <li>
            <el-row>
              <el-col :span="4">2020-6-18 9:36</el-col>
              <span>用户</span><span>打开</span><span>房间1台灯</span>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="4">2020-6-18 9:36</el-col>
              <span>用户</span><span>打开</span><span>房间1台灯</span>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="4">2020-6-18 9:36</el-col>
              <span>用户</span><span>打开</span><span>房间1台灯</span>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="4">2020-6-18 9:36</el-col>
              <span>用户</span><span>打开</span><span>房间1台灯</span>
            </el-row>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: null
    };
  }
};
</script>
<style lang="scss">
.record-container {
  position: relative;
  //   overflow: visible;
  h4 {
    margin: 2em 0 0;
    background-color: #333;
    color: #fff;
    padding: 10px;
    top: 50px;
    z-index: 1;
    position: sticky;
  }

  ul {
    display: block;
    // background-color: #ffffe0;
    position: relative;
    padding: 0px;
  }

  li {
    height: 36px;
    width: 36px;
    list-style-type: none;
    width: 100%;
    background-color: lightgray;
    margin-top: 5px;
    line-height: 36px;
    padding: 0 5px;
  }
}
</style>
