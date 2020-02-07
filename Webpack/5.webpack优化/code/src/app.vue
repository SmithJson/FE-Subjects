<!--
 * @Author: zhangl
 * @Date: 2020-01-21 00:09:25
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-07 20:42:50
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Webpack/4.vue环境搭建/code/src/App.vue
 -->
<template>
  <div>
    <!-- 路由连接 -->
    <router-link to="/page1">Page1</router-link>
    <router-link to="/page2">Page2</router-link>
    <br />
    <!-- 路由内容显示 -->
    <router-view></router-view>
  </div>
</template>

<script>
import _ from "lodash";
import echarts from "echarts";
import axios from "axios";

console.log(echarts);
export default {
  data() {
    return {
      name: "zhangl"
    };
  }
};
</script>