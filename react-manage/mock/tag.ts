const tagList = [
    { 
    url: "/tag/tagList", 
    method: "get" ,
    response: () => {
      return {
        code:200,
        msg:"success",
        data:[
            {
              id: 1,
              tagName: "js",
              articleCount: 20,
              createTime: "2020-12-25",
            },
            {
              id: 2,
              tagName: "ts",
              articleCount: 20,
              createTime: "2020-12-25",
            },
          ],
      };
    }
  }


];
export default tagList