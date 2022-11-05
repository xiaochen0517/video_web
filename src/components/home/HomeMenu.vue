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
        <menu-category />
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
    max-width: 1200px;
    min-width: 1200px;
    width: 100%;
    // background-color: blue;

    .left-big-menu {
        padding: 35px 0px;

        .big-button-box {
            margin-right: 30px;

            .big-button-icon {
                width: 46px;
                height: 46px;
                background-color: @pink-color;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 5px;

                .icon {
                    font-size: 22px;
                    color: @white-color;
                }
            }

            .button-icon-channel{
                background-color: @skyblue-color;
            }

            .button-icon-notice{
                background-color: @green-color;
            }

            .label-text{
                width: 100%;
                text-align: center;
            }
        }
    }
}
</style>