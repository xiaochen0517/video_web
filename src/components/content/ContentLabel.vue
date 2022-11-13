<template>
  <div class="content-label flex-row">
    <div class="name">这是一个标签</div>
  </div>
</template>

<script>
export default {
    name: "ContentLabel",
}
</script>

<style lang="less" scoped>
.content-label{
    font-size: 14px;
    line-height: 25px;
    background-color: @gray-level-1;
    padding: 0 10px;
    border-radius: 15px;
    color: @font-gray-1-color;
    margin-right: 10px;
}
</style>