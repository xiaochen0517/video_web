import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }else{
        document.title = process.env.VUE_APP_TITLE;
    }
    next();
});

let app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount("#app");
