<template>
    <div class="search-box flex-row">
        <input class="search-input" type="text" placeholder="占位文字">
        <button class="search-button">
            <el-icon class="search-icon" :size="20">
                <Search />
            </el-icon>
        </button>
    </div>
</template>

<script>
import { Search } from '@element-plus/icons-vue'

export default {
    name: "SearchBox",
    components: {
        Search
    }
}
</script>

<style lang="less" scoped>
.search-box {
    height: 35px;
    border: 1px solid @gray-level-2;
    border-radius: 5px;
    background-color: @gray-level-1;
    overflow: hidden;

    .search-input {
        flex: 1;
        box-sizing: content-box;
        border: none;
        border-radius: 0;
        background: none;
        font-size: 14px;
        padding: 0 10px;

        &:focus {
            border: none;
            border-radius: none;
            outline: 0;
        }

        &::placeholder {
            color: @gray-level-4;
        }
    }

    .search-button {
        width: 29px;
        height: 29px;
        margin: 3px;
        padding-top: 4px;
        border: none;
        border-radius: 5px;
        background-color: @transparent-color;
        display: flex;
        justify-content: center;
        justify-items: center;

        &:hover {
            background-color: @gray-level-2;
        }
    }
}
</style>