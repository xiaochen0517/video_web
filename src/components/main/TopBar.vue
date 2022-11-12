<template>
    <div class="top-bar">
        <div class="top-bar-content flex-row">
            <div class="left-box flex-row">
                <img class="logo-img" :src="logoPath" type="image/svg+xml" @click="jumpToHomeView" />
                <div class="left-menu-box flex-row">
                    <div class="left-menu-item menu-item"><span>测试测试测</span></div>
                    <div class="left-menu-item menu-item"><span>测试测试测</span></div>
                    <div class="left-menu-item menu-item"><span>测试测试测</span></div>
                    <div class="left-menu-item menu-item"><span>测试测试测</span></div>
                    <div class="left-menu-item menu-item"><span>测试测试测</span></div>
                </div>
            </div>
            <search-box class="search-box" />
            <div class="right-box flex-row">
                <div class="my-box">
                    <img class="avatar-img" src="" alt="">
                    <my-menu class="my-menu" />
                </div>
                <div class="right-menu-box flex-row">
                    <div class="right-menu-item menu-item"><span>测试测试测</span></div>
                    <div class="right-menu-item menu-item"><span>测试测试测</span></div>
                    <div class="right-menu-item menu-item"><span>测试测试测</span></div>
                    <div class="right-menu-item menu-item"><span>测试测试测</span></div>
                    <div class="right-menu-item menu-item"><span>测试测试测</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBox from '@/components/main/SearchBox';
import { ArrowRightBold } from '@element-plus/icons-vue';
import MyMenu from '@/components/main/topbar/MyMenu.vue';

export default {
    name: "TopBar",
    components: {
        SearchBox,
        ArrowRightBold,
        MyMenu,
    },
    data() {
        return {
            logoPath: require("../../assets/logo.svg")
        };
    },
    mounted() { },
    methods: {
        jumpToHomeView(){
            this.$router.push("/");
        }
    }
}
</script>

<style lang="less" scoped>
.top-bar {
    height: 64px;
    font-size: @default-font-size;
    font-weight: @default-font-weight;
    text-align: center;

    .top-bar-content {
        min-width: 1200px;
        width: 98%;
        height: 64px;
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 3px 10px #00000077;
        background-color: @white-color;
        padding: 0 1%;
        z-index: 100;
    }

    .left-box {
        height: 100%;
        align-items: center;
        flex: 4;

        .logo-img {
            width: 60px;
            margin-right: 10px;
        }

        .left-menu-box {
            height: 100%;
            justify-content: space-around;
            cursor: default;
            flex: 1;

            .left-menu-item {
                padding: 0 5px;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;

                &:hover {
                    animation: jump .5s 0s ease both;
                }

                span {
                    height: min-content;
                }
            }
        }
    }

    .search-box {
        flex: 3;
    }

    .right-box {
        align-items: center;
        flex: 4;

        .my-box {
            margin-left: 20px;
            margin-right: 10px;
            position: relative;

            .avatar-img {
                background-color: gray;
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }

            .avatar-img:hover + .my-menu {
                animation: showMyMenu .5s 0s ease-out both;
            }
        }

        .right-menu-box {
            justify-content: space-around;
            cursor: default;
            flex: 1;

            .right-menu-item {
                padding: 0 5px;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;

                &:hover {
                    animation: jump .5s 0s ease both;
                }

                span {
                    height: min-content;
                }
            }
        }
    }
}
</style>