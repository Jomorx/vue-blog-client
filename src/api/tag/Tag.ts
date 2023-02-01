import request from "@/config/axios";
import { IPageDto, ReturnPageType } from "../types";
import { ITag } from "./types";

export const getTagListApi = (pageDto: IPageDto) =>
	request.get<any, ReturnPageType<ITag>>("/tag/getTagList", {
		params: pageDto,
	});
