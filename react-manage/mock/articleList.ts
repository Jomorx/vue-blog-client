export default[{
  url:"/article/articleList",
  method:"get",
  response: () => ({
    code:200,
    msg:"success",
    data:[
      {
          id: 1,
          articleCover:
            "https://onecmshop.oss-cn-beijing.aliyuncs.com/avatar/202206016af6974df82147379a278aed05cf5cf7.jpg",
          articleTitle: "这是一个title",
          category: 1,
          tag: 1,
          viewCount: 1,
          likeCount: 1,
          isTop: 0,
        },
        {
          id: 2,
          articleCover:
            "https://onecmshop.oss-cn-beijing.aliyuncs.com/avatar/202206016af6974df82147379a278aed05cf5cf7.jpg",
          articleTitle: "这是一个title",
          category: 1,
          tag: 1,
          viewCount: 1,
          likeCount: 1,
          isTop: 1,
        },
  ]
}
  )
    // 'GET /article/articleList':[
    //     {
    //         id: 1,
    //         articleCover:
    //           "https://onecmshop.oss-cn-beijing.aliyuncs.com/avatar/202206016af6974df82147379a278aed05cf5cf7.jpg",
    //         articleTitle: "这是一个title",
    //         category: 1,
    //         tag: 1,
    //         viewCount: 1,
    //         likeCount: 1,
    //         isTop: 0,
    //       },
    //       {
    //         id: 2,
    //         articleCover:
    //           "https://onecmshop.oss-cn-beijing.aliyuncs.com/avatar/202206016af6974df82147379a278aed05cf5cf7.jpg",
    //         articleTitle: "这是一个title",
    //         category: 1,
    //         tag: 1,
    //         viewCount: 1,
    //         likeCount: 1,
    //         isTop: 1,
    //       },
    // ]
}]