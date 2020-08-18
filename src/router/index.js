import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
import Screen from "@/views/screen";

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
    path: "/datav",
    component: () => import("@/views/datav"),
    hidden: true
  },
  {
    path: "/construction",
    component: () => import("@/views/construction"),
    hidden: true
  },
  {
    path: "/chuan",
    component: () => import("@/views/chuan"),
    hidden: true
  },
  {
    path: "/",
    redirect: "/screen",
    hidden: true
  },
  {
    path: "/map",
    component: () => import("@/views/map"),
    hidden: true
  },

  {
    path: "/screen",
    component: Screen,
    hidden: true,
    redirect: "/screen/map",
    children: [
      {
        path: "map",
        component: () => import("@/views/screen/components/Map")
      },
      {
        path: "gateway",
        component: () => import("@/views/screen/components/Gateway")
      }
    ]
  },
  //设备
  {
    path: "/device",
    component: Layout,
    redirect: "/device/controller",
    meta: { title: "设备管理", icon: "el-icon-discover" },
    children: [
      {
        path: "controller",
        name: "Controller",
        component: () => import("@/views/device/controller"),
        meta: { title: "网关管理" }
      },
      {
        path: "lamp-post",
        name: "Lamp-post",
        component: () => import("@/views/device/lamp-post"),
        meta: { title: "插座管理" }
      }
      /*
      {
        path: "street-lamp",
        name: "Street-lamp",
        component: () => import("@/views/device/street-lamp"),
        meta: { title: "智慧路灯" }
      },
      {
        path: "addlight",
        name: "AddLight",
        hidden: true,
        component: () => import("@/views/dashboard/add-light"),
        meta: { title: "添加灯杆" }
      },
      {
        path: "setPosition",
        name: "SetPosition",
        component: () => import("@/views/setPosition/index"),
        meta: { title: "坐标调整" }
      }
      */
    ]
  },
  //策略
  {
    path: "/strategy",
    component: Layout,
    redirect: "/strategy/all-strategy",
    name: "Strategy",
    meta: { title: "云端策略", icon: "el-icon-upload" },
    children: [
      {
        path: "all-strategy",
        name: "All-strategy",
        component: () => import("@/views/strategy/all-strategies"),
        meta: { title: "全部策略" }
      },
      {
        path: "record",
        name: "Record",
        component: () => import("@/views/strategy/record"),
        meta: { title: "策略执行记录" }
      }
    ]
  },
  {
    path: "/warning",
    component: Layout,
    redirect: "/warning/log",
    meta: { title: "预警管理", icon: "el-icon-warning" },
    children: [
      {
        path: "log",
        name: "Log",
        component: () => import("@/views/warning/warning-log"),
        meta: { title: "预警记录" }
      },
      {
        path: "setting",
        name: "Setting",
        component: () => import("@/views/warning/warning-setting"),
        meta: { title: "预警设置" }
      }
    ]
  },
  {
    path: "/reportform",
    component: Layout,
    redirect: "/reportform/electricity",
    meta: { title: "报表管理", icon: "el-icon-document" },
    children: [
      {
        path: "electricity",
        name: "Electricity",
        component: () => import("@/views/reportForm/electricity"),
        meta: { title: "用电统计" }
      },
      {
        path: "operation",
        name: "Operation",
        component: () => import("@/views/reportForm/operation"),
        meta: { title: "运营数据统计" }
      },
      {
        path: "fault",
        name: "Fault",
        component: () => import("@/views/reportForm/fault"),
        meta: { title: "故障统计" }
      }
    ]
  },

  //setting
  {
    path: "/settings",
    component: Layout,
    redirect: "/settings/organization",
    meta: { title: "系统设置", icon: "el-icon-setting" },
    children: [
      {
        path: "organization",
        name: "Organization",
        component: () => import("@/views/settings/organization"),
        meta: { title: "组织管理" }
      },
      {
        path: "account-settings",
        name: "Account-settings",
        component: () => import("@/views/settings/account-settings"),
        meta: { title: "账号设置" }
      }
    ]
  },
  /*
  //无用
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
  //excel 无用
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
  //nested 无用
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
*/
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
