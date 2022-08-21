
export interface RowType {
  tagId: number;
  tagName: string;
  articleCount: number;
  createTime: string;
}

export interface TableInfo {
  count: number;
  currentPage: number;
  pageSize: number;
  data: RowType[];
  searchText:string
}
