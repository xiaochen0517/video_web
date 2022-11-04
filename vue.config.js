const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
    transpileDependencies: true,

    devServer: {
        open: false,
        host: "0.0.0.0",
        port: 8080,
        hot: true,
        proxy: {
            "/mov": {
                target: "http://127.0.0.1:8080", // 你请求的第三方接口
                changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    // 路径重写，
                    "^/api": "", // 替换target中的请求地址，也就是说以后你在请求http://api.wpbom.com这个地址的时候直接写成/Api即可。
                },
            },
        },
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [path.resolve(__dirname, './src/assets/css/common.less')]
      }
    }
});
