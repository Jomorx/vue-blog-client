import request from "@/config/index";
import { ReturnType } from "../types";
import { DataType } from "@/api/types";
import { RowType } from "@/pages/Article/TagManage/types";

export const getTagListApi = (
  pageSize: number,
  currentPage: number,
  searchText: string
): Promise<ReturnType<DataType<RowType>>> =>
  request.get(
    `/tag/getTagList?pageSize=${pageSize}&currentPage=${currentPage}&searchText=${searchText}`
  );

export const insertTagApi = (tagName: string) =>
  request.post("/tag/insertTag", { tagName });

export const deleteTagListApi = (tagList: number[]) =>
  request.post(`/tag/deleteTagList`, { tagList });

export const editTagApi = (tagId: number, tagName: object) =>
  request.post(`/tag/editTag`, { tagId, ...tagName });
