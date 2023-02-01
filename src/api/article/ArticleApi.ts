import request from "@/config/axios";
import { IPageDto, ReturnPageType, IReturnType } from "../types";
import { IArticle, IArticleList } from "./types";

export const getArticleTimeLineApi = (): Promise<IReturnType<IArticleList[]>> =>
	request.get("/article/getArticleTimeLine");
export const getArticleListApi = (pageDto: IPageDto): Promise<ReturnPageType<IArticle>> =>
	request.get(`/article/getArticleList`, {
		params: pageDto,
	});
export const getArticleByIdApi = (id: number): Promise<IReturnType<IArticle>> =>
	request.get(`/article/getArticleById/${id}`);
export const incrementViewCount = (id: number) =>
	request.get<any, void>(`/article/viewArticle/${id}`);
