export interface RowType {
  categoryCover: string | undefined;
  categoryId: number;
  categoryName: string;
  categoryDescription:string
  articleCount: number;
  createdAt: string;
}

export interface TableInfo {
  count: number;
  currentPage: number;
  pageSize: number;
  data: RowType[];
  searchText: string;
}
