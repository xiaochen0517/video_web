<template>
    <div class="home-reco-video flex-row">
        <div class="left-box">
            <el-carousel class="el-carousel" trigger="click" height="500px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img class="carousel-img" src="../../assets/logo.png" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="right-box flex-row">
            <div class="video-box" v-for="index in 6" :key="index">
                <home-video-card />
            </div>
        </div>
        <div class="refresh-button-box">
            <i class="iconfont">&#xe79a;</i>
            <span class="label-text">刷新推荐</span>
        </div>
    </div>
</template>

<script>
import HomeVideoCard from '../video/HomeVideoCard.vue'


export default {
    name: "HomeRecoVideo",
    components: {
        HomeVideoCard,
    }
}
</script>

<style lang="less" scoped>
.home-reco-video {
    min-width: 1200px;
    max-width: 2000px;
    padding: 0 30px;
    position: relative;

    .left-box {
        flex: 13;

        .el-carousel {
            border-radius: 10px;
            overflow: hidden;
        }

        .carousel-img {
            display: block;
            widows: 100%;
            height: 100%;
            background-color: gray;
        }
    }

    .right-box {
        flex: 20;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: 30px;

        .video-box {
            padding-bottom: 20px;
        }
    }
    
    .refresh-button-box{
        width: 20px;
        position: absolute;
        top: 0;
        right: -40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid @gray-level-2;
        animation: changeWhite .3s 0s ease-out both;
        cursor: pointer;
        
        &:hover{
            animation: changeGray .3s 0s ease-out both;
        }
        
        .iconfont{
            font-size: 20px;
            line-height: 30px;
        }

        .label-text{
            line-height: 30px;
            letter-spacing: 3px;
            word-wrap: break-word;
            writing-mode: vertical-lr;
        }
    }
}

@keyframes changeGray {
    0%{
        background-color: @white-color;
    }
    100%{
        background-color: @gray-level-2;
    }
}

@keyframes changeWhite {
    0%{
        background-color: @gray-level-2;
    }
    100%{
        background-color: @white-color;
    }
}
</style>