import request from "../../config/axios";
import { ReturnPageType } from "../types";
import { IFriendChain } from "./types";

export const getFriendChainListApi = (
  currentPage: number,
  pageSize: number,
  searchText: string
): Promise<ReturnPageType<IFriendChain>> =>
  request.get(
    `/friendChain/getFriendChainList?currentPage=${currentPage}&pageSize=${pageSize}&searchText=${searchText}`
  );
