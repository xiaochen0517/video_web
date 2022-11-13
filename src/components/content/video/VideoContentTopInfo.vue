<template>
    <div class="top-info">
        <div class="video-title">
            视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
        </div>
        <div class="video-info flex-row">
            <div class="play-info">
                <el-icon>
                    <VideoPlay />
                </el-icon>
                <span>300万</span>
            </div>
            <div class="danmu-info">
                <el-icon>
                    <Promotion />
                </el-icon>
                <span>200万</span>
            </div>
            <div class="time-info">
                <i class="iconfont">&#xe791;</i>
                2022年11月11日 12:10
            </div>
            <div class="copyright-info">
                <i class="iconfont">&#xe781;</i>
                未经作者授权，禁止转载
            </div>
        </div>
    </div>
</template>

<script>
import { VideoPlay, Promotion, Timer } from '@element-plus/icons-vue'

export default {
    name: "VideoContentTopInfo",
    components: {
        VideoPlay,
        Promotion,
        Timer
    }
}
</script>

<style lang="less" scoped>
.top-info {
    margin-bottom: 20px;

    .video-title {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
    }

    .video-info {
        color: @font-gray-color;
        font-size: 14px;
        line-height: 40px;

        >div {
            align-items: center;
            margin-right: 20px;
        }

        .copyright-info {
            .iconfont {
                color: @red-color;
                font-weight: 800;
            }
        }
    }
}
</style>