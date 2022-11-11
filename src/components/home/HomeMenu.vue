<template>
    <div class="home-menu">
        <div class="left-big-menu">
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
import MenuCategory from '@/components/home/menu/MenuCategory.vue'

export default {
    name: "HomeMenu",
    components: {
        MenuCategory,
    }
}
</script>

<style lang="less" scoped>
.home-menu {
    min-width: 1040px;
    max-width: 2000px;
    height: 140px;
    margin: 0 80px;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100%;

    .left-big-menu {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

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
        width: 100%;
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