<template>
    <div class="menu-category">
        <div class="category-list">
            <div class="list-item flex-row" v-for="index in itemSize" :key="index">
                <div class="item-label">分类分类</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuCategory",
    data() {
        return {
            itemSize: 30,
        };
    },
    mounted(){
        window.onresize = () => {
            let windowWidth = window.innerWidth;
            if (windowWidth <= 1920) {
                this.itemSize = 20
            }else{
                this.itemSize = 30;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.menu-category {
    width: 100%;
    height: 100%;
    color: @font-gray-1-color;
    line-height: 26px;
    text-align: center;

    .category-list {
        height: 100%;
        display: grid;
        grid-template-rows: repeat(2, 30px);
        grid-gap: 10px;
        align-content: center;

        .list-item {
            background-color: @gray-level-1;
            border: 1px solid @gray-level-1;
            border-radius: 5px;
            cursor: pointer;
            animation: backColorChangeLight .3s .0s ease-out both;

            &:hover{
                animation: backColorChangeDark .3s .0s ease-out both;
            }

            .item-label {
                width: 100%;
                white-space: nowrap;
            }
        }
    }

    @media screen and (max-width: 1920px) {
        .category-list {
            grid-template-columns: repeat(10, auto);
        }
    }

    @media screen and (min-width: 1920px) {
        .category-list {
            grid-template-columns: repeat(15, auto);
        }
    }
}
</style>