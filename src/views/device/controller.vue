<template>
  <div class="app-container">
    <div class="app-content">
      <div class="filter-container center border-bottom">
        <div style="width:20%">
          <div class="filter-title">关键字搜索</div>
          <el-input
            v-model="listQuery.title"
            placeholder="关键字搜索"
            class="filter-item"
            style="width:100%"
            @keyup.enter.native="handleFilter"
          />
        </div>
        <div style="width:20%">
          <div class="filter-title">网关搜索</div>
          <el-select
            v-model="listQuery.importance"
            placeholder="所属网关"
            clearable
            class="filter-item"
            style="width:100%"
          >
            <el-option
              v-for="item in importanceOptions"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </div>
        <div style="width:20%">
          <div class="filter-title">公司搜索</div>
          <el-select
            v-model="listQuery.company"
            placeholder="所属公司"
            clearable
            class="filter-item"
            style="width:100%"
          >
            <el-option
              v-for="item in companyOptions"
              :key="item.location[0]"
              :label="item.name"
              :value="item.location"
            />
          </el-select>
        </div>
        <!-- <el-col :span="5">
          <el-select
            v-model="listQuery.sort"
            class="filter-item"
            @change="handleFilter"
          >
            <el-option
              v-for="item in sortOptions"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            />
          </el-select>
        </el-col> -->

        <el-button
          v-waves
          class="filter-item"
          type="primary"
          style="margin-top:20px"
          icon="el-icon-search"
          @click="handleFilter"
        >
          查询
        </el-button>
      </div>
      <div class="filter-container center">
        <el-button
          class="filter-item"
          type="primary"
          icon="el-icon-edit"
          @click="handleCreate"
        >
          添加控制器
        </el-button>
        <el-button
          v-waves
          :loading="downloadLoading"
          class="filter-item"
          type="primary"
          icon="el-icon-download"
          @click="handleDownload"
        >
          导出EXCEL
        </el-button>
      </div>
      <el-table
        :key="tableKey"
        ref="controllerTable"
        v-loading="listLoading"
        :data="list"
        border
        fit
        highlight-current-row
        style="width: 100%;"
        @sort-change="sortChange"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" align="center" />
        <el-table-column
          label="ID"
          prop="id"
          sortable="custom"
          align="center"
          width="160"
          :class-name="getSortClass('id')"
        >
          <template slot-scope="{ row }">
            <span>{{ `Sck-${row.id}` }}</span>
          </template>
        </el-table-column>
        <el-table-column label="名称" min-width="150px" align="center">
          <template slot-scope="{ row }">
            <span class="link-type" @click="handleUpdate(row)">{{
              row.title
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="所属公司" min-width="150px" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.company }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="所属网关"
          prop="id"
          sortable="custom"
          align="center"
          width="160"
          :class-name="getSortClass('id')"
        >
          <template slot-scope="{ row }">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="添加日期" width="150px" align="center">
          <template>
            <span>{{ new Date() | parseTime("{y}-{m}-{d} {h}:{i}") }}</span>
          </template>
        </el-table-column>

        <el-table-column
          v-if="showReviewer"
          label="Reviewer"
          width="110px"
          align="center"
        >
          <template slot-scope="{ row }">
            <span style="color:red;">{{ row.reviewer }}</span>
          </template>
        </el-table-column>
        <el-table-column label="当前状态" class-name="status-col" width="100">
          <template slot-scope="{ row }">
            <el-tag :type="row.status | statusFilter">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="260"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="{ row, $index }">
            <el-button type="primary" size="mini" @click="handleUpdate(row)">
              编辑
            </el-button>
            <el-button
              v-if="row.status != 'deleted'"
              size="mini"
              type="danger"
              @click="handleDelete(row, $index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList"
      />
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="80px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="ID" prop="type">
          <el-input v-model="temp.id" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="添加日期" prop="timestamp">
          <el-date-picker
            v-model="temp.timestamp"
            type="datetime"
            placeholder="Please pick a date"
          />
        </el-form-item>
        <el-form-item label="名称" prop="title">
          <el-input v-model="temp.title" />
        </el-form-item>
        <el-form-item label="所属公司">
          <el-select
            v-model="temp.company"
            class="filter-item"
            placeholder="Please select"
          >
            <el-option
              v-for="item in companyOptions"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="所属网关">
          <el-select
            v-model="temp.gate"
            class="filter-item"
            placeholder="Please select"
          >
            <el-option
              v-for="item in importanceOptions"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button
          type="primary"
          @click="dialogStatus === 'create' ? createData() : updateData()"
        >
          确定
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table
        :data="pvData"
        border
        fit
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  fetchList,
  fetchPv,
  createArticle,
  updateArticle
} from "@/api/controller";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

const calendarTypeOptions = [
  { key: "CN", display_name: "China" },
  { key: "US", display_name: "USA" },
  { key: "JP", display_name: "Japan" },
  { key: "EU", display_name: "Eurozone" }
];

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name;
  return acc;
}, {});

export default {
  name: "ComplexTable",
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        online: "success",
        offline: "info"
      };
      return statusMap[status];
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type];
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      multipleSelection: [],
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id",
        company: undefined
      },
      importanceOptions: [
        808368883499,
        808368883489,
        808368883449,
        808368883479,
        808368883419
      ],
      calendarTypeOptions,
      companyOptions: [
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
      sortOptions: [
        { label: "ID Ascending", key: "+id" },
        { label: "ID Descending", key: "-id" }
      ],
      statusOptions: ["published", "draft", "deleted"],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        timestamp: new Date(),
        title: "",
        type: "",
        company: "新兴公司食堂",
        gate: "808368883499"
      },
      dialogFormVisible: false,
      dialogStatus: "",
      textMap: {
        update: "编辑",
        create: "新建"
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [
          { required: true, message: "type is required", trigger: "change" }
        ],
        timestamp: [
          {
            type: "date",
            required: true,
            message: "timestamp is required",
            trigger: "change"
          }
        ],
        title: [
          { required: true, message: "title is required", trigger: "blur" }
        ]
      },
      downloadLoading: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1 * 1000);
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log("multipleSelection: ", this.multipleSelection);
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: "操作Success",
        type: "success"
      });
      row.status = status;
    },
    sortChange(data) {
      const { prop, order } = data;
      if (prop === "id") {
        this.sortByID(order);
      }
    },
    sortByID(order) {
      if (order === "ascending") {
        this.listQuery.sort = "+id";
      } else {
        this.listQuery.sort = "-id";
      }
      this.handleFilter();
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: "",
        timestamp: new Date(),
        title: "",
        status: "published",
        type: ""
      };
    },
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    createData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024; // mock a id
          this.temp.author = "vue-element-admin";
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp);
            this.dialogFormVisible = false;
            this.$notify({
              title: "Success",
              message: "Created Successfully",
              type: "success",
              duration: 2000
            });
          });
        }
      });
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row); // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp);
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          const tempData = Object.assign({}, this.temp);
          tempData.timestamp = +new Date(tempData.timestamp); // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.temp.id);
            this.list.splice(index, 1, this.temp);
            this.dialogFormVisible = false;
            this.$notify({
              title: "Success",
              message: "Update Successfully",
              type: "success",
              duration: 2000
            });
          });
        }
      });
    },
    handleDelete(row, index) {
      this.$notify({
        title: "Success",
        message: "Delete Successfully",
        type: "success",
        duration: 2000
      });
      this.list.splice(index, 1);
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData;
        this.dialogPvVisible = true;
      });
    },
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then(excel => {
        const tHeader = ["timestamp", "title", "type", "importance", "status"];
        const filterVal = [
          "timestamp",
          "title",
          "type",
          "importance",
          "status"
        ];
        const data = this.formatJson(filterVal);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: "table-list"
        });
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal) {
      return this.list.map(v =>
        filterVal.map(j => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort;
      return sort === `+${key}` ? "ascending" : "descending";
    }
  }
};
</script>
