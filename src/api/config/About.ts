import request from "@/config/axios";
import { IReturnType } from "../types";
import { IConfig } from "./types";

export const getConfigByIdApi = (id: number): Promise<IReturnType<IConfig>> =>
	request.get(`/config/getConfigById/${id}`);
