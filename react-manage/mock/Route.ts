export default {
  "GET /route/getRouteList": [
    {
        path: "/login",
        component: "./login",
        layout: false,
      },
      {
        path: "/",
        component: "@/layouts/ManageLayout",
        routes:[
          {
            path: "/console",
            component: "./console",
          },
          {
            path: "/article/article-publish",
            component: "./article/articlePublish",
          },
          { path: "/article/article-list", component: "./article/articleList" },
          { path: "/article/tag-manage", component: "./article/tagManage" },
          {
            path: "/article/category-manage",
            component: "/article/categoryManage",
          },
          { path: "/links", component: "/links" },
          { path: "/talks/talk-list", component: "./talks/talkList" },
          { path: "/talks/talk-publish", component: "./talks/talkPublish" },
          { path: "/project/project-list", component: "./project/projectList" },
          {
            path: "/project/project-publish",
            component: "./project/projectPublish",
          },
        ]
      },
      { path: "*", component: "./404",layout:false },
  ],
};
