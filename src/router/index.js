import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            title: "首页-" + process.env.VUE_APP_TITLE,
        },
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
        meta: {
            title: "关于我们-" + process.env.VUE_APP_TITLE,
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
        meta: {
            title: "用户登录-" + process.env.VUE_APP_TITLE,
        },
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/RegisterView.vue"),
        meta: {
            title: "用户注册-" + process.env.VUE_APP_TITLE,
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
