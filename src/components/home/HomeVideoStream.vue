<template>
  <div class="home-video-stream">
    <div class="title-box">
        <i class="iconfont"></i>
        <span>这是一个标题</span>
    </div>
    <div class="video-list">
        <home-video-card class="video-card-item" v-for="index in 16" :key="index" />
    </div>
  </div>
</template>

<script>
import HomeVideoCard from '../video/HomeVideoCard.vue'

export default {
    name: "HomeVideoStream",
    components: {
        HomeVideoCard,
    }
}
</script>

<style lang="less" scoped>
.home-video-stream{
    min-width: 1040px;
    max-width: 20000px;
    margin: 0 80px;

    .video-list{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 20px;

        .video-card-item{
            
        }
    }

    @media screen and (max-width: 1400px) {
        .video-list{
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media screen and (min-width: 1400px) {
        .video-list{
            grid-template-columns: repeat(5, 1fr);
        }
    }

}
</style>