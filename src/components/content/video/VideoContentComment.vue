<template>
  <div class="comment-box">
    <div class="title-box flex-row">
        <div class="title">评论</div>
        <div class="count">1234</div>
        <div class="hot-sort">最热</div>&nbsp;|&nbsp;
        <div class="time-sort">最新</div>
    </div>
    <div class="edit-comment">
        
    </div>
    <div class="comment-list">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.comment-box{

    .title-box{
        line-height: 40px;
        cursor: default;

        .title{
            color: @font-black-color;
            font-size: 20px;
            font-weight: 500;
            margin-right: 5px;
        }

        .count{
            color: @font-gray-color;
            font-size: 14px;
            margin-right: 20px;
        }

        [class$='-sort']{
            cursor: pointer;
        }
    }
}
</style>