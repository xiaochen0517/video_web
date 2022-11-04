<template>
    <div class="home">
        <top-bar />
        <top-banner />
        <br>
        <video-card />
        <br>
        <bottom-footer />
    </div>
</template>

<script>
import TopBar from "@/components/main/TopBar";
import BottomFooter from "@/components/main/BottomFooter";
import VideoCard from '@/components/main/VideoCard.vue';
import TopBanner from '@/components/main/TopBanner.vue';

export default {
    name: 'HomeView',
    components: {
        TopBar,
        BottomFooter,
        VideoCard,
        TopBanner
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

<style scoped>

</style>