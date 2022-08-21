import request from "@/config";
import { RowType } from "@/pages/Links/types";
import { DataType, ReturnType } from "./types";

export const getFriendChainListApi = (
  pageSize: number,
  currentPage: number,
  searchText: string
): Promise<ReturnType<DataType<RowType>>> =>
  request.get(
    `/friendChain/getFriendChainList?pageSize=${pageSize}&currentPage=${currentPage}&searchText=${searchText}`
  );

export const deleteFriendChainListApi = (friendChainList: number[]) =>
  request.post(`/friendChain/deleteFriendChainList`, { friendChainList });

export const insertFriendChainApi = (friendChain:RowType) =>request.post("/friendChain/insertFriendChain", friendChain);

export const editFriendChainApi = (friendChain:RowType) =>request.post("/friendChain/editFriendChain", friendChain);
