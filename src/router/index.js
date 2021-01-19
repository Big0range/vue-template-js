import { createRouter, createWebHashHistory } from "vue-router";

// 动态加载views中所有的路由文件
const files = require.context("@/views", true, /router\.js$/);
const routes = files.keys().map(key => {
  const page = require("@/views" + key.replace(".", ""));
  return page.default;
});
// console.log(routes);
// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
// 导出
export default router;
