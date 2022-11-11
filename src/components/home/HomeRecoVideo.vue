<template>
    <div class="home-reco-video">
        <div class="main-box">
            <el-carousel class="el-carousel" trigger="click" height="100%">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img class="carousel-img" src="../../assets/logo.png" alt="">
                </el-carousel-item>
            </el-carousel>
            <div class="video-box" v-for="index in itemSize" :key="index">
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
    },
    data() {
        return {
            itemSize: 6,
        };
    },
    mounted() {}
}
</script>

<style lang="less" scoped>
.home-reco-video {
    min-width: 1040px;
    max-width: 2000px;
    position: relative;
    margin: 0 80px;

    .main-box {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 20px;
        grid-auto-flow: row;

        .el-carousel {
            height: 85%;
            border-radius: 10px;
            overflow: hidden;
            grid-area: a;

            .carousel-img {
                display: block;
                width: 100%;
                height: 100%;
                background-color: gray;
            }
        }

        // .video-box {}
    }

    @media screen and (max-width: 1920px) {
        .main-box {
            grid-template-columns: 40% repeat(2, minmax(270px, 1fr));
            grid-template-areas:
                "a b c"
                "a e f";
        }
    }

    @media screen and (min-width: 1920px) {
        .main-box {
            grid-template-columns: 40% repeat(3, minmax(270px, 1fr));
            grid-template-areas:
                "a b c d"
                "a e f g";
        }
    }

    .refresh-button-box {
        width: 20px;
        position: absolute;
        top: 0;
        right: -60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid @gray-level-2;
        animation: changeWhite .3s 0s ease-out both;
        cursor: pointer;

        &:hover {
            animation: changeGray .3s 0s ease-out both;
        }

        .iconfont {
            font-size: 20px;
            line-height: 30px;
        }

        .label-text {
            line-height: 30px;
            letter-spacing: 3px;
            word-wrap: break-word;
            writing-mode: vertical-lr;
        }
    }
}

@keyframes changeGray {
    0% {
        background-color: @white-color;
    }

    100% {
        background-color: @gray-level-2;
    }
}

@keyframes changeWhite {
    0% {
        background-color: @gray-level-2;
    }

    100% {
        background-color: @white-color;
    }
}
</style>