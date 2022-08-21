export interface RowType {
    friendChainId: number;
    friendChainAvatar: string | undefined;
    friendChainName: string;
    friendChainDescription:string
    friendChainLink: number;
    createdAt: string;
  }
  export interface TableInfo {
    count: number;
    currentPage: number;
    pageSize: number;
    data: RowType[];
    searchText:string
  }
  