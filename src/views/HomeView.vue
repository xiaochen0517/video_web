<template>
    <div class="home">
        <div class="title">最新资讯</div>
        <div class="list-box">
            <div class="list-item" v-for="(item, index) in listData" :key="index">
                {{item.newsTitle}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HomeView',
    components: {},
    data() {
        return {
            listData: [
                {
                    entityType: "news",
                    newsTitle: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
                    entityId: "123456789",
                }, {
                    entityType: "news",
                    newsTitle: "测试测试测试测试测试测试测试",
                    entityId: "123456789",
                }, {
                    entityType: "news",
                    newsTitle: "测试测试测试测试测试测试测试",
                    entityId: "123456789",
                }, {
                    entityType: "news",
                    newsTitle: "测试测试测试测试测试测试测试",
                    entityId: "123456789",
                },
            ]
        }
    },
    mounted() {},
    methods: {

    }
}
</script>

<style scoped>
.home{
    background-color: #4158D0;
    background-image: linear-gradient(180deg, #4158D0 0%, #C850C0 30%, #FFCC70 66%, #ffffff 100%);
    font-size: 16px;
    line-height: 1.75;
    padding: 20px 15px;
}

.title{
    color: gray;
    background-color: white;
    margin: 3px 0;
    padding: 2px 15px;
    font-size: 14px;
}

.list-box{
    
}

.list-item{
    background-color: white;
    margin: 3px 0;
    padding: 7px 15px;
}
</style>