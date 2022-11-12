<template>
    <div class="dplayer-component">
        <div class="player-box" ref="DPlayerRefs"></div>
    </div>
</template>

<script>
import flvjs from "flv.js";
import DPlayer from 'dplayer';

export default {
    name: "DPlayerComponent",
    data() {
        return {
            player: null,
        }
    },
    mounted(){
        this.initPlayer();
    },
    methods: {
        initPlayer() {
            this.player = new DPlayer({
                container: this.$refs.DPlayerRefs,
                video: {
                    url: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
                    type: 'customFlv',
                    customType: {
                        customFlv: function (video, player) {
                            const flvPlayer = flvjs.createPlayer({
                                type: 'flv',
                                url: video.src
                            })
                            flvPlayer.attachMediaElement(video)
                            flvPlayer.load()
                        }
                    }
                },
            });
        }
    }
}
</script>

<style lang="less" scoped>
.dplayer-component{

    .player-box{
        width: 100%;
        height: 100%;
    }
}
</style>