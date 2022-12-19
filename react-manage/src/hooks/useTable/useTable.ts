import { TableInfo } from "./types";
import { useEffect, useState } from "react";

export const useTable = <T>(getDataApi:Function) => {
  const [tableInfo, setTableInfo] = useState<TableInfo<T>>({
    currentPage: 1,
    pageSize: 10,
    data: [],
    count: 0,
    searchText: "",
  });
    const flushTable = async () => {
      const { data } = await getDataApi(
        tableInfo.currentPage,
        tableInfo.pageSize,
        tableInfo.searchText
      );
      setTableInfo({ ...tableInfo, ...{ count: data.count, data: data.rows } });
    };
  useEffect(() => {
    flushTable();
  }, [tableInfo.pageSize, tableInfo.currentPage, tableInfo.searchText]);
  return {
    tableInfo,
    setTableInfo,
    flushTable
  }
};
