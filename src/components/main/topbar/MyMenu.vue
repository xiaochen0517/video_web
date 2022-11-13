<template>
    <div class="my-menu">
        <div class="my-level">
            <div class="level-label flex-row">
                <div class="current-level">
                    <level-label :level="5"/>
                </div>
                <div class="next-level">
                    <level-label :level="6"/>
                </div>
            </div>
            <div class="my-exp-bar"></div>
        </div>
        <div class="my-number-info flex-row">
            <div class="number-item follow">
                <div class="number">00</div>
                <div class="label">关注</div>
            </div>
            <div class="number-item fans">
                <div class="number">00</div>
                <div class="label">粉丝</div>
            </div>
            <div class="number-item notice">
                <div class="number">00</div>
                <div class="label">动态</div>
            </div>
        </div>
        <div class="my-menu-list cursor-pointer">
            <div class="my-menu-item flex-row">
                <span>个人中心</span>
                <el-icon>
                    <ArrowRightBold />
                </el-icon>
            </div>
            <div class="my-menu-item flex-row">
                <span>我的关注</span>
                <el-icon>
                    <ArrowRightBold />
                </el-icon>
            </div>
            <div class="my-menu-item flex-row">
                <span>我的设置</span>
                <el-icon>
                    <ArrowRightBold />
                </el-icon>
            </div>
        </div>
    </div>
</template>

<script>
import { ArrowRightBold } from '@element-plus/icons-vue';
import LevelLabel from '@/components/user/LevelLabel.vue';

export default {
    name: "MyMenu",
    components: {
        ArrowRightBold,
        LevelLabel,
    },
}
</script>

<style lang="less" scoped>
.my-menu {
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 20px;
    background: @white-color;
    border-radius: 5px;
    border: 1px solid @gray-level-2;
    position: absolute;
    top: 60px;
    left: -100px;
    animation: hideMyMenu .3s .2s ease-out both;

    &:hover {
        animation: none;
        opacity: 1;
    }

    .my-level{
        margin-bottom: 20px;
        padding: 0 15px;

        .level-label{
            justify-content: space-between;
        }

        .my-exp-bar{
            width: 100%;
            height: 5px;
            background-color: @pink-color;
            margin-top: 5px;
            border-radius: 3px;
        }
    }

    .my-number-info{
        justify-content: space-around;

        .number-item{
            cursor: pointer;

            &:hover .label{
                text-decoration-line: underline;
            }

            .number{
                font-size: 18px;
                font-weight: 500;
            }

            .label{
                font-size: 12px;
                font-weight: 400;
                color: @font-gray-color;
            }
        }
    }

    .my-menu-list {
        display: flex;
        flex-direction: column;
        margin-top: 10px;

        .my-menu-item {
            line-height: 40px;
            justify-content: space-between;
            align-items: center;
            padding: 0 15px;
            border-radius: 10px;
            animation: backColorGray2ChangeWhite .3s 0s ease-out both;

            &:hover {
                background-color: @gray-level-2;
                animation: backColorWhiteChangeGray2 .3s 0s ease-out both;
            }
        }
    }
}
</style>