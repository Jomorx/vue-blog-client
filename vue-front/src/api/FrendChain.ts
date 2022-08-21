import request from "../config/axios";
import { ReturnPageType } from "./types";

export const getFriendChainListApi = <T>(currentPage: number, pageSize: number,searchText:string):Promise<ReturnPageType<T>> =>
  request.get(
    `/friendChain/getFriendChainList?currentPage=${currentPage}&pageSize=${pageSize}&searchText=${searchText}`
  );