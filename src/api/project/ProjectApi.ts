import request from "../../config/axios";
import { IPageDto, ReturnPageType } from "../types";
import { IProject } from "./types";
export const getProjectListApi = (pageDto: IPageDto): Promise<ReturnPageType<IProject>> =>
	request.get(`/project/getProjectList`, {
		params: pageDto,
	});
