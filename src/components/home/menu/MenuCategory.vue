<template>
    <div class="menu-category">
        <div class="category-list flex-row">
            <div class="list-item flex-row" v-for="index in 15" :key="index">
                <div class="item-label">分类</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuCategory",
}
</script>

<style lang="less" scoped>
.menu-category {
    height: 100%;
    color: @font-gray-1-color;
    line-height: 26px;
    text-align: center;

    .category-list {
        height: 100%;
        flex-wrap: wrap;
        align-content: space-around;

        .list-item {
            width: 90px;
            background-color: @gray-level-1;
            border: 1px solid @gray-level-1;
            border-radius: 5px;
            margin-right: 10px;
            cursor: pointer;
            animation: hoverColorChangeLight .3s .0s ease-out both;

            &:hover{
                animation: hoverColorChangeDark .3s .0s ease-out both;
            }

            .item-label {
                width: 100%;
            }
        }
    }
}

@keyframes hoverColorChangeDark {
    0%{
        background-color: @gray-level-1;
    }
    100%{
        background-color: @gray-level-2;
    }
}

@keyframes hoverColorChangeLight {
    0%{
        background-color: @gray-level-2;
    }
    100%{
        background-color: @gray-level-1;
    }
}
</style>