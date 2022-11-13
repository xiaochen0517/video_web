<template>
  <div class="level-label flex-row">
    <div class="left-label">Level</div>
    <div class="level-number">{{level}}</div>
  </div>
</template>

<script>
export default {
    name: "LevelLabel",
    props: {
        level: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="less" scoped>
.level-label{
    line-height: 12px;
    font-size: 10px;
    color: @white-color;
    border-radius: 2px;
    justify-content: space-between;
    overflow: hidden;
    
    .left-label{
        display: inline-block;
        padding: 0 3px;
        background-color: @pink-color;
    }
    
    .level-number{
        display: inline-block;
        padding: 0 3px;
        color: @font-black-color;
        background-color: @gray-level-1;
    }
}
</style>