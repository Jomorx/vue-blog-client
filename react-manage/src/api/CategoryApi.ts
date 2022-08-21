import request from "@/config";
import { RowType } from "@/pages/Article/CategoryManage/types";
import { DataType, ReturnType } from "./types";

export const getCategoryListApi = (
  pageSize: number,
  currentPage: number,
  searchText: string
): Promise<ReturnType<DataType<RowType>>> =>
  request.get(
    `/category/getCategoryList?pageSize=${pageSize}&currentPage=${currentPage}&searchText=${searchText}`
  );

export const deleteCategoryListApi = (categoryList: number[]) =>
  request.post(`/category/deleteCategoryList`, { categoryList });

export const insertCategoryApi = (category:RowType) =>request.post("/category/insertCategory", category);

export const editCategoryApi = (category:RowType) =>request.post("/category/editCategory", category);
