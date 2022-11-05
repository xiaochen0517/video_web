<template>
    <div class="top-bar">
        <div class="top-bar-content flex-row">
            <div class="left-box flex-row">
                <img class="logo-img" :src="logoPath" type="image/svg+xml" />
                <div class="left-menu-box flex-row">
                    <div class="left-menu-item"><span>测试测试测</span></div>
                    <div class="left-menu-item"><span>测试测试测</span></div>
                    <div class="left-menu-item"><span>测试测试测</span></div>
                    <div class="left-menu-item"><span>测试测试测</span></div>
                    <div class="left-menu-item"><span>测试测试测</span></div>
                </div>
            </div>
            <search-box class="search-box" />
            <div class="right-box flex-row">
                <div class="my-box">
                    <img class="avatar-img" src="" alt="">
                </div>
                <div class="right-menu-box flex-row">
                    <div class="right-menu-item"><span>测试测试测</span></div>
                    <div class="right-menu-item"><span>测试测试测</span></div>
                    <div class="right-menu-item"><span>测试测试测</span></div>
                    <div class="right-menu-item"><span>测试测试测</span></div>
                    <div class="right-menu-item"><span>测试测试测</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBox from '@/components/main/SearchBox';

export default {
    name: "TopBar",
    components: {
        SearchBox
    },
    data() {
        return {
            logoPath: require("../../assets/logo.svg")
        };
    },
    mounted() { },
    methods: {

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
        width: 100%;
        height: 64px;
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 3px 10px #00000077;
        background-color: @white-color;
        padding: 0 20px;
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

            .avatar-img {
                background-color: gray;
                width: 40px;
                height: 40px;
                border-radius: 50%;
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

@keyframes jump {

    0%,
    20%,
    100% {
        transform: translateY(0);
    }

    60% {
        transform: translateY(-5px);
    }
}
</style>