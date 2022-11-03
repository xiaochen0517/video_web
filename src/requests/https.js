//引入 axios
import axios from "axios";
import store from "@/store";

const http = axios.create({
    baseURL: "/api",
    timeout: 50000,
});

// 数据请求拦截
http.interceptors.request.use(
    (config) => {
        console.log(config);
        // config.headers["Content-Type"] = "application/x-www-form-urlencoded";
        config.headers["Content-Type"] = "application/json";
        config.headers.Token = store.state.token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 返回响应数据拦截
http.interceptors.response.use(
    (res) => {
        const data = res.data;
        return Promise.resolve(data);
    },
    (error) => {
        return Promise.reject(error);
    }
);
//这是一位大佬指点的方法，更加简单
export default http;
