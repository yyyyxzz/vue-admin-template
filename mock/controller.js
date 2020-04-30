import Mock from "mockjs";

const List = [];
const count = 100;

const baseContent =
  '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
const image_uri =
  "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3";

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: "@integer(800888888111, 810888888111)",
      timestamp: +Mock.Random.date("T"),
      author: "@first",
      reviewer: "@first",
      'title|1': ["书房左1",'厨房插座','客厅电视','食堂灯','洗手间灯'],
      location: "书房",
      "company|1": [
        "新兴公司食堂",
        "斑鸠山鸡场",
        "沙村鸡场",
        "福安鸡场",
        "高村鸡场",
        "斑鱼山种鸡场",
        "长江鸡场",
        "水围村猪场",
        "簕竹饲料厂",
        "榄根孵化厂",
        "翔顺象窝酒店",
        "禅泉酒店"
      ],
      content_short: "mock data",
      content: baseContent,
      forecast: "@float(0, 100, 2, 2)",
      importance: "@integer(1, 3)",
      "type|1": ["CN", "US", "JP", "EU"],
      "status|1": ["online", "offline"],
      display_time: "@datetime",
      comment_disabled: true,
      pageviews: "@integer(300, 5000)",
      image_uri,
      platforms: ["a-platform"]
    })
  );
}

export default [
  {
    url: "/vue-admin-template/controller/list",
    type: "get",
    response: config => {
      const {
        importance,
        type,
        title,
        page = 1,
        limit = 20,
        sort
      } = config.query;

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false;
        if (type && item.type !== type) return false;
        if (title && item.title.indexOf(title) < 0) return false;
        return true;
      });

      if (sort === "-id") {
        mockList = mockList.reverse();
      }

      const pageList = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      };
    }
  },

  {
    url: "/vue-admin-template/controller/detail",
    type: "get",
    response: config => {
      const { id } = config.query;
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          };
        }
      }
    }
  },

  {
    url: "/vue-admin-template/controller/pv",
    type: "get",
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: "PC", pv: 1024 },
            { key: "mobile", pv: 1024 },
            { key: "ios", pv: 1024 },
            { key: "android", pv: 1024 }
          ]
        }
      };
    }
  },

  {
    url: "/vue-admin-template/controller/create",
    type: "post",
    response: _ => {
      return {
        code: 20000,
        data: "success"
      };
    }
  },

  {
    url: "/vue-admin-template/controller/update",
    type: "post",
    response: _ => {
      return {
        code: 20000,
        data: "success"
      };
    }
  }
];
