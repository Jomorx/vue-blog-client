export type ArticleListType = {
    articleId: React.Key;
    articleCover: string;
    articleTitle: string;
    articleContent:string;
    category: number;
    viewCount: number;
    isTop: number;
    tagList:[]
  }


  export type TableInfo = {
    count: number;
    currentPage: number;
    pageSize: number;
    data: ArticleListType[];
    searchText:string
  }
