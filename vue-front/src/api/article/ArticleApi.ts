import request from "@/config/axios";
import { ReturnPageType, ReturnType } from "../types";
import { Article,IArticleList } from "./types";

export const getArticleTimeLineApi =(): Promise<ReturnType<IArticleList[]>> =>
  request.get("/article/getArticleTimeLine");
export const getArticleListApi = (
  pageSize: number,
  currentPage: number,
  searchText = ""
): Promise<ReturnPageType<Article>> =>
  request.get(
    `/article/getArticleList?pageSize=${pageSize}&currentPage=${currentPage}&searchText=${searchText}`
  );
export const getArticleByIdApi = (id:number):Promise<ReturnType<Article>> =>request.get(`/article/getArticleById/${id}`)
