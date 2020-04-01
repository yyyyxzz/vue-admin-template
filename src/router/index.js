import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },
  {
    path: "/",
    redirect: "/map",
    hidden: true
  },
  {
    path: "/map",
    component: () => import("@/views/map"),
    hidden: true
  },
  {
    path: "/dashboard",
    component: Layout,
    redirect: "/dashboard/index",
    meta: { title: "设备管理", icon: "el-icon-s-tools" },
    children: [
      {
        path: "index",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "智慧灯杆" }
      },
      {
        path: "addlight",
        name: "AddLight",
        hidden: true,
        component: () => import("@/views/dashboard/add-light"),
        meta: { title: "添加灯杆" }
      },
      {
        path: "complextable",
        name: "ComplexTable",
        component: () => import("@/views/dashboard/complex-table"),
        meta: { title: "智慧路灯" }
      },
      {
        path: "switch",
        name: "Switch",
        component: () => import("@/views/switch/index"),
        meta: { title: "开关" }
      }
    ]
  },

  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "云端策略", icon: "el-icon-s-data" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index"),
        meta: { title: "全部策略" }
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree/index"),
        meta: { title: "策略执行记录" }
      }
    ]
  },

  {
    path: "/form",
    component: Layout,
    redirect: "/form/index",
    meta: { title: "本地策略管理", icon: "el-icon-s-operation" },
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/form/index"),
        meta: { title: "策略下发记录" }
      },
      {
        path: "index1",
        name: "Form1",
        component: () => import("@/views/form/index"),
        meta: { title: "设备历史策略" }
      }
    ]
  },
  {
    path: "/excel",
    component: Layout,
    redirect: "/excel/export-excel",
    name: "Excel",
    meta: {
      title: "Excel",
      icon: "el-icon-s-operation"
    },
    children: [
      {
        path: "export-excel",
        component: () => import("@/views/excel/export-excel"),
        name: "ExportExcel",
        meta: { title: "Export Excel" }
      },
      {
        path: "export-selected-excel",
        component: () => import("@/views/excel/select-excel"),
        name: "SelectExcel",
        meta: { title: "Export Selected" }
      },
      {
        path: "export-merge-header",
        component: () => import("@/views/excel/merge-header"),
        name: "MergeHeader",
        meta: { title: "Merge Header" }
      },
      {
        path: "upload-excel",
        component: () => import("@/views/excel/upload-excel"),
        name: "UploadExcel",
        meta: { title: "Upload Excel" }
      }
    ]
  },

  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "嵌套",
      icon: "el-icon-s-data"
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "菜单1" },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/nested/menu1/menu1-1"),
            name: "Menu1-1",
            meta: { title: "菜单1" }
          },
          {
            path: "menu1-2",
            component: () => import("@/views/nested/menu1/menu1-2"),
            name: "Menu1-2",
            meta: { title: "菜单2" },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-1"),
                name: "Menu1-2-1",
                meta: { title: "Menu1-2-1" }
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-2"),
                name: "Menu1-2-2",
                meta: { title: "Menu1-2-2" }
              }
            ]
          },
          {
            path: "menu1-3",
            component: () => import("@/views/nested/menu1/menu1-3"),
            name: "Menu1-3",
            meta: { title: "Menu1-3" }
          }
        ]
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        meta: { title: "menu2" }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
