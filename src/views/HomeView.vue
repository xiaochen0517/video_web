<template>
    <div class="home-view">
        <top-bar />
        <top-banner />
        <home-menu />
        <home-reco-video />
        <br>
        <video-card />
        <br>
        <bottom-footer />
    </div>
</template>

<script>
import TopBar from "@/components/main/TopBar";
import BottomFooter from "@/components/main/BottomFooter";
import VideoCard from '@/components/main/VideoCard';
import TopBanner from '@/components/home/TopBanner';
import HomeRecoVideo from '@/components/home/HomeRecoVideo';
import HomeMenu from '@/components/home/HomeMenu.vue';

export default {
    name: 'HomeView',
    components: {
        TopBar,
        BottomFooter,
        VideoCard,
        TopBanner,
        HomeRecoVideo,
        HomeMenu,
    },
    data() {
        return {
        }
    },
    mounted() {},
    methods: {

    }
}
</script>

<style lang="less" scoped>
.home-view{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>