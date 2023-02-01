import axios, { AxiosInstance } from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
console.log(import.meta.env.ENV_BASEURL);

const request: AxiosInstance = axios.create({
	baseURL: import.meta.env.ENV_BASEURL,
	timeout: 6000,
});

request.interceptors.request.use((config) => {
	nprogress.start();
	// config.headers!["Content-Type"] = "application/json;charset=utf-8";
	return config;
});

request.interceptors.response.use(
	(res) => {
		nprogress.done();
		//相应成功做的事情
		return res.data;
	},

	(err) => {
		nprogress.done();
		return Promise.reject(err);
	}
);

export default request;
