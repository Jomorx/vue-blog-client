import request from "../../config/axios";
import { IPageDto, ReturnPageType } from "../types";
import { IFriendChain } from "./types";

export const getFriendChainListApi = (pageDto: IPageDto): Promise<ReturnPageType<IFriendChain>> =>
	request.get(`/friendChain/getFriendChainList`, {
		params: pageDto,
	});
