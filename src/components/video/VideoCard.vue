<template>
    <div class="video-card">
        <img class="video-img" src="" alt="">
        <div class="bottom-box flex-row">
            <div class="view-count-box flex-row">
                <el-icon>
                    <VideoPlay />
                </el-icon>
                <span>300万</span>
            </div>
            <div class="barrage-count-box flex-row">
                <el-icon>
                    <Promotion />
                </el-icon>
                <span>200万</span>
            </div>
            <div class="time-count-box flex-row">
                <el-icon>
                    <Timer />
                </el-icon>
                <span>12:10</span>
            </div>
        </div>
    </div>
</template>

<script>
import { VideoPlay, Promotion, Timer } from '@element-plus/icons-vue'

export default {
    name: "VideoCard",
    components: {
        VideoPlay,
        Promotion,
        Timer
    }
}
</script>

<style lang="less" scoped>
.video-card {
    background-color: gray;
    background-color: gray;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    &:hover {
        .bottom-box {
            animation: disappear .2s 0s ease-out both;
        }
    }

    &:leave .video-img {
        width: 100%;
        height: 100%;
    }

    .bottom-box {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 38px;
        color: @font-white-color;
        background-color: #FFFFFF00;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .5) 100%);
        animation: showbox .2s 0s ease-out both;

        >div {
            align-items: center;
        }

        .view-count-box {
            flex: 7;
            padding-left: 10px;
        }

        .barrage-count-box {
            flex: 7;
        }

        .time-count-box {
            flex: 12;
            justify-content: right;
            padding: 0 10px;
        }
    }
}

@keyframes disappear {
    0% {
        opacity: 100%;
    }

    100% {
        opacity: 0%;
        display: none;
    }
}

@keyframes showbox {
    0% {
        opacity: 0%;
    }

    100% {
        opacity: 100%;
        display: block;
    }
}
</style>