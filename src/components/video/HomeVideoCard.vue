<template>
    <div class="home-video-card" @click.stop="jumpToVideoView">
        <video-card class="video-card" />
        <div class="title cursor-pointer">标题标题标题标题标题标题标题标题标题标题标题标题标题标题</div>
        <div class="info-box flex-row">
            <div class="left-info cursor-pointer">
                <i class="iconfont">&#xe7b2;</i>
                <span>上传者</span>
            </div>
        </div>
    </div>
</template>

<script>
import VideoCard from '@/components/video/VideoCard.vue'

export default {
    name: "HomeVideoCard",
    components: {
        VideoCard,
    },
    data() {
        return {};
    },
    methods: {
        jumpToVideoView() {
            this.$router.push("/video");
        }
    }
}
</script>

<style lang="less" scoped>
.home-video-card {

    .video-card {}

    .title {
        width: 100%;
        height: 40px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        margin-top: 10px;

        &:hover {
            text-decoration-line: underline;
        }
    }

    .info-box {
        color: @font-gray-color;

        .left-info{

            &:hover {
                text-decoration-line: underline;
            }
        }
    }
}
</style>