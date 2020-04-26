<template>
  <div>
    <Child :list="list">
      <!--实际接受到的数据格式为： { row：{ head_url: xx, name: xx, sex: xx, age: xx } },所以这里可以使用结构赋值-->
      <template v-slot:image="{ row }">
        <div>{{row.head_url}}</div>
      </template>
      <template v-slot:name="{ row }">{{ row.name }}</template>
    </Child>
  </div>
</template>
<script>
import Child from "./child.vue";
export default {
  components: {
    Child
  },
  data() {
    return {
      list: [
        {
          head_url: "static/img/bg.jpg",
          name: "a",
          sex: 1,
          age: 19
        },
        {
          head_url: "static/img/bg.jpg",
          name: "b",
          sex: 1,
          age: 19
        },
        {
          head_url: "static/img/bg.jpg",
          name: "c",
          sex: 1,
          age: 19
        }
      ]
    };
  }
};
</script>
