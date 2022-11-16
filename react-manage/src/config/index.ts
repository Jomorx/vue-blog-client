import { notification } from "antd";
import axios, { AxiosInstance } from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
const request: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 6000,
});
type NotificationType = "success" | "info" | "warning" | "error";
const openNotificationWithIcon = (
  type: NotificationType,
  description: string
) => {
  notification[type]({
    message: "Notification Title",
    description: description,
  });
};

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
    openNotificationWithIcon("error", err.response.data.message);
    return Promise.reject(err);
  }
);

export default request;
