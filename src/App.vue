<template>
    <div class="main-app">
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
}
</script>

<style lang="less">
html{
}

body {
    margin: 0;
    padding: 0;
    color: @font-black-color;
    font-family: 'PingFang SC', 'HarmonyOS_Regular', 'Helvetica Neue', 'Microsoft YaHei', sans-serif, "iconfont" !important;
    font-size: 14px;
}

.iconfont{
    font-size: 16px;
    font-style: normal;
}
</style>
