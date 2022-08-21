import request from "@/config";
import { RowType } from "@/pages/Config/types";
import { DataType, ReturnType } from "./types";

export const getConfigListApi = (
  pageSize: number,
  currentPage: number,
  searchText: string
): Promise<ReturnType<DataType<RowType>>> =>
  request.get(
    `/config/getConfigList?pageSize=${pageSize}&currentPage=${currentPage}&searchText=${searchText}`
  );

export const deleteConfigListApi = (configList: number[]) =>
  request.post(`/category/deleteConfigList`, { configList });

export const insertConfigApi = (config:RowType) =>request.post("/config/insertConfig", config);

export const editConfigApi = (config:RowType) =>request.post("/config/editConfig", config);
