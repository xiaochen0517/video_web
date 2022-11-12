<template>
    <div class="video-view">
        <top-bar />
        <div class="content">
            <div class="player-box">
                <d-player-component />
            </div>
        </div>
        <bottom-footer />
    </div>
</template>

<script>
import TopBar from '@/components/main/TopBar.vue'
import BottomFooter from '@/components/main/BottomFooter.vue'
import DPlayerComponent from '@/components/video/DPlayerComponent.vue'

export default {
    name: "VideoView",
    components: { TopBar, BottomFooter, DPlayerComponent },
}
</script>

<style lang="less" scoped>
.video-view {
    .content {
        .player-box{
            width: 50%;
        }
    }
}
</style>