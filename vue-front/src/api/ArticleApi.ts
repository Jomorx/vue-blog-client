import request from "../config/axios";
import { ReturnPageType, ReturnType } from "./types";

export const getArticleTimeLineApi = <T>():Promise<ReturnType<T>> =>
  request.get("/article/getArticleTimeLine");
  export const getArticleListApi = <T>(pageSize:number,currentPage:number,searchText=''):Promise<ReturnPageType<T>> =>
  request.get(`/article/getArticleList?pageSize=${pageSize}&currentPage=${currentPage}&searchText=${searchText}`);
