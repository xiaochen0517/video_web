<template>
    <div class="home-view">
        <top-bar />
        <top-banner />
        <div class="home-content">
            <home-menu />
            <home-reco-video />
            <br>
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

export default {
    name: 'HomeView',
    components: {
        TopBar,
        BottomFooter,
        TopBanner,
        HomeRecoVideo,
        HomeMenu,
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
    display: flex;
    flex-direction: column;
    align-items: center;

    .home-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 2000px;
    }
}
</style>