export interface RowType {
    articleId: React.Key;
    articleCover: string;
    articleTitle: string;
    articleContent:string;
    category: number;
    viewCount: number;
    isTop: number;
    tagList:[]
  }


  export interface TableInfo {
    count: number;
    currentPage: number;
    pageSize: number;
    data: RowType[];
    searchText:string
  }
