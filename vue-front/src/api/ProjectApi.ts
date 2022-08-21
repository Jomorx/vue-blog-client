import request from "../config/axios";
import { ReturnPageType } from "./types";
export const getProjectListApi = <T>(currentPage: number, pageSize: number,searchText:string):Promise<ReturnPageType<T>> =>
  request.get(
    `/project/getProjectList?currentPage=${currentPage}&pageSize=${pageSize}&searchText=${searchText}`
  );
