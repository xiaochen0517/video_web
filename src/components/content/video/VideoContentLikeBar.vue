<template>
    <div class="video-bottom-bar">
        <div class="like-bar flex-row">
            <div class="left-box content-box flex-row">
                <div class="like-box info-box flex-row">
                    <i class="iconfont">&#xe86b;</i>
                    <div class="label">2312</div>
                </div>
                <div class="like-box info-box flex-row">
                    <i class="iconfont">&#xe86e;</i>
                    <div class="label">2312</div>
                </div>
                <div class="like-box info-box flex-row">
                    <i class="iconfont">&#xe86a;</i>
                    <div class="label">2312</div>
                </div>
                <div class="like-box info-box flex-row">
                    <i class="iconfont">&#xea87;</i>
                    <div class="label">2312</div>
                </div>
            </div>
            <div class="right-box content-box flex-row">
                <div class="complaint-box info-box flex-row">
                    <i class="iconfont">&#xe795;</i>
                    <div class="label">内容投诉</div>
                </div>
            </div>
        </div>
        <div class="split-line"></div>
        <div class="label-box flex-row">
            <content-label v-for="index in 25" :key="index"/>
        </div>
        <div class="split-line"></div>
    </div>
</template>

<script>
import ContentLabel from '../ContentLabel.vue'

export default {
    name: "VideoContentLikeBar",
    components: { ContentLabel },
}
</script>

<style lang="less" scoped>
.video-bottom-bar {
    .like-bar {
        padding: 15px 0;
        justify-content: space-between;

        .content-box {
            .info-box {
                cursor: pointer;
                animation: changeFontColorSkyBlueToGray .3s 0s ease-out both;

                &:hover {
                    animation: changeFontColorGrayToSkyBlue .3s 0s ease-out both;
                }

                .iconfont {
                    font-size: 35px;
                    margin-right: 5px;
                }

                .label {
                    line-height: 35px;
                }
            }
        }

        .left-box {
            .info-box {
                margin-right: 20px;
            }
        }

        .right-box {

            .complaint-box {
                margin-left: 20px;

                .iconfont {
                    font-size: 20px;
                    line-height: 35px;
                }
            }
        }
    }

    .split-line {
        width: 100%;
        height: 1px;
        background-color: @gray-level-2;
        border-radius: 2px;
    }

    .label-box {
        height: 80px;
        flex-wrap: wrap;
        align-content: space-evenly;
    }

}

@keyframes changeFontColorGrayToSkyBlue {
    0% {
        color: @font-gray-1-color;
    }

    100% {
        color: @skyblue-color;
    }
}

@keyframes changeFontColorSkyBlueToGray {
    0% {
        color: @skyblue-color;
    }

    100% {
        color: @font-gray-1-color;
    }
}
</style>