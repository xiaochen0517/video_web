<template>
    <div class="home-view">
        <top-bar />
        <top-banner />
        <div class="home-content">
            <home-menu />
            <home-reco-video />
            <home-video-stream />
        </div>
        <bottom-footer />
    </div>
</template>

<script>
import TopBar from "@/components/main/TopBar.vue";
import BottomFooter from "@/components/main/BottomFooter.vue";
import TopBanner from '@/components/home/TopBanner.vue';
import HomeRecoVideo from '@/components/home/HomeRecoVideo.vue';
import HomeMenu from '@/components/home/HomeMenu.vue';
import HomeVideoStream from '@/components/home/HomeVideoStream.vue';

export default {
    name: 'HomeView',
    components: {
        TopBar,
        BottomFooter,
        TopBanner,
        HomeRecoVideo,
        HomeMenu,
        HomeVideoStream,
    },
    data() {
        return {
        }
    },
    mounted() { },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.home-view {
    min-width: 1200px;

    .home-content {
        margin: 0 auto;
        max-width: 2000px;
        min-width: 1200px;
    }
}
</style>