<template>
    <div class="video-view">
        <top-bar />
        <div class="content">
            <video-content-top-info />
            <div class="player-box">
                <d-player-component />
            </div>
            <video-content-like-bar />
            <video-content-comment />
        </div>
        <bottom-footer />
    </div>
</template>

<script>
import TopBar from '@/components/main/TopBar.vue'
import BottomFooter from '@/components/main/BottomFooter.vue'
import DPlayerComponent from '@/components/video/DPlayerComponent.vue'
import VideoContentTopInfo from "@/components/content/video/VideoContentTopInfo.vue";
import VideoContentLikeBar from '@/components/content/video/VideoContentLikeBar.vue';
import VideoContentComment from '@/components/content/video/VideoContentComment.vue';

export default {
    name: "VideoView",
    components: {
        TopBar,
        BottomFooter,
        DPlayerComponent,
        VideoContentTopInfo,
        VideoContentLikeBar,
        VideoContentComment,
    },
}
</script>

<style lang="less" scoped>
.video-view {
    .content {
        padding: 30px;
        margin: 0 auto;
        max-width: 1800px;
        .player-box {   
            border: 1px solid @gray-level-4;
        }
    }
}
</style>