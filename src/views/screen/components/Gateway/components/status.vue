<template>
  <div class="status-container ">
    <div class="filter-container center">
      <el-cascader
        :options="deviceOptions"
        :props="{ multiple: true, checkStrictly: true }"
        clearable
        filterable
        placeholder="请选择设备"
        collapse-tags
        v-model="device"
        :show-all-levels="false"
      ></el-cascader>
      <el-select v-model="type" placeholder="请选择类型" style="width:100px">
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-radio-group v-model="timeType">
        <el-radio-button label="year">年</el-radio-button>
        <el-radio-button label="month">月</el-radio-button>
        <el-radio-button label="day">日</el-radio-button>
      </el-radio-group>
      <el-date-picker
        v-model="time"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-button v-waves type="primary" icon="el-icon-search">
        查询
      </el-button>
    </div>
    <line-chart
      id="status-line-chart"
      height="600px"
      title="本周用电量"
      :chartData="energyData"
    ></line-chart>
  </div>
</template>
<script>
import LineChart from "./Charts/LineChart";
import waves from "@/directive/waves"; // waves directive

export default {
  directives: { waves },
  data() {
    return {
      deviceOptions: [
        {
          value: "02160908226",
          label: "网关02160908226",
          children: [
            {
              value: "room1",
              label: "书房",
              children: [
                {
                  value: "sck1",
                  label: "热水器"
                },
                {
                  value: "sck2",
                  label: "台灯"
                }
              ]
            },
            {
              value: "room2",
              label: "客厅",
              children: [
                {
                  value: "sck3",
                  label: "电视机"
                },
                {
                  value: "sck4",
                  label: "电脑"
                }
              ]
            }
          ]
        }
      ],
      device: "02160908226",
      typeOptions: [
        { value: "p", label: "功率" },
        { value: "u", label: "电压" },
        { value: "i", label: "电流" }
      ],
      type: "p",
      timeType: "day",
      time: null,
      energyData: {
        xAxis: [1, 2, 3],
        unit: "kW",
        data: [1, 2, 3]
      }
    };
  },
  components: {
    LineChart
  }
};
</script>
<style lang="scss" scoped>
.status-container {
  .filter-container {
  }
}
</style>
