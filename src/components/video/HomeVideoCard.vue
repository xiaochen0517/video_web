<template>
    <div class="home-video-card">
        <video-card class="video-card" />
        <div class="title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题</div>
        <div class="info-box">
            <div class="left-info">
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
    }
}
</script>

<style lang="less" scoped>
.home-video-card {
    width: 380px;

    .video-card {
        width: 380px;
        height: 213px;
    }

    .title {
        height: 40px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        margin-top: 10px;
    }

    .info-box{
        color: @font-gray-color;
    }
}
</style>