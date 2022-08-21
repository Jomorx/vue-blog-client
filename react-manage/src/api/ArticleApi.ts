import request from "@/config/index";
import { DataType } from "@/api/types";
import { ReturnType } from "./types";
import { RowType } from "@/pages/Article/ArticleList/types";
export const getArticleListApi = (
  pageSize: number,
  currentPage: number,
  searchText: string
): Promise<ReturnType<DataType<RowType>>> =>
  request.get(
    `/article/getArticleList?pageSize=${pageSize}&currentPage=${currentPage}&searchText=${searchText}`
  );
export const deleteArticleListApi = (articleIdList: number[]) =>
  request.post("/article/deleteArticleList", { articleIdList: articleIdList });
export const switchIsTopApi = (articleId: number, isTop: number) =>
  request.post("/article/switchIsTop", { articleId, isTop });
  export const uploadArticleApi = (article:any) =>
  request.post("/article/uploadArticle",article );
  export const updateArticleApi = (article:any) =>
  request.post("/article/updateArticle",article );
  export const getArticleByIdApi = (articleId:any) =>
  request.get(`/article/getArticleById/${articleId}`);