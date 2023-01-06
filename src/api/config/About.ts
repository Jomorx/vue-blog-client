import request from "@/config/axios";
import { ReturnType } from "../types";
import { IConfig } from "./types";

export const getConfigByIdApi = (id: number): Promise<ReturnType<IConfig>> =>
	request.get(`/config/getConfigById/${id}`);
