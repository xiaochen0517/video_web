<template>
    <div class="home-menu flex-row">
        <div class="left-big-menu flex-row">
            <div class="big-button-box">
                <div class="big-button-icon">
                    <i class="iconfont icon icon-hot">&#xe621;</i>
                </div>
                <div class="label-text">热门</div>
            </div>
            <div class="big-button-box">
                <div class="big-button-icon button-icon-channel">
                    <i class="iconfont icon icon-channel">&#xe842;</i>
                </div>
                <div class="label-text">频道</div>
            </div>
            <div class="big-button-box">
                <div class="big-button-icon button-icon-notice">
                    <i class="iconfont icon icon-notice">&#xe7dc;</i>
                </div>
                <div class="label-text">公告</div>
            </div>
        </div>
        <div class="center-menu">
            <menu-category />
        </div>
    </div>
</template>

<script>
import MenuCategory from '@/components/home/menu/MenuCategory'

export default {
    name: "HomeMenu",
    components: {
        MenuCategory,
    }
}
</script>

<style lang="less" scoped>
.home-menu {
    width: 1200px;
    height: 140px;

    .left-big-menu {
        flex: 2;
        justify-content: space-between;
        align-items: center;

        .big-button-box {
            cursor: pointer;

            .big-button-icon {
                width: 46px;
                height: 46px;
                background-color: @pink-color;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 5px;
                animation: changeDefault .3s .1s ease-out both;

                &:hover {
                    animation: changeWhite .3s .1s ease-out both;
                }

                .icon {
                    font-size: 22px;
                    color: @white-color;
                }
            }

            .button-icon-channel {
                background-color: @skyblue-color;
            }

            .button-icon-notice {
                background-color: @green-color;
            }

            .label-text {
                width: 100%;
                text-align: center;
            }
        }
    }

    .center-menu {
        flex: 9;
        margin-left: 30px;
        padding: 35px 0;
    }
}

@keyframes changeWhite {
    0% {
        opacity: 100%;
    }

    100% {
        opacity: 80%;
    }
}

@keyframes changeDefault {
    0% {
        opacity: 80%;
    }

    100% {
        opacity: 100%;
    }
}
</style>