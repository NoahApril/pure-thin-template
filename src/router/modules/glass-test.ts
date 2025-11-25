export default {
  path: "/glass-test",
  name: "GlassTest",
  component: () => import("@/views/glass-test/index.vue"),
  meta: {
    title: "玻璃拟态测试",
    showLink: true,
    rank: 999
  }
} satisfies RouteConfigsTable;
