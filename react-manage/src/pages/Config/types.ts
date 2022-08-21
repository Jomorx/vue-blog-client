export interface RowType {
  configId:  number;
  configName: number;
  configContent: string;
  createdAt: string;
}

export interface TableInfo {
  count: number;
  currentPage: number;
  pageSize: number;
  data: RowType[];
  searchText: string;
}
