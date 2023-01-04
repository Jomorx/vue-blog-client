import request from "@/config/axios";
import { ReturnPageType } from "../types";
import { ILog } from "./types";

export const getLogListApi = ({
  currentPage,
  pageSize,
  searchText,
}: {
  currentPage: number;
  pageSize: number;
  searchText?: string;
}):Promise<ReturnPageType<ILog>> =>
  request.get("/log/getLogList", {
    params: {
      currentPage,
      pageSize,
      searchText
    },
  });
