<template>
    <div class="bottom-footer">
        <div class="bottom-content flex-row">
            <div class="left-box footer-box">
                <div class="title">MoChenVideo</div>
                <div class="list-box flex-row">
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                </div>
            </div>
            <div class="center-box footer-box">
                <div class="title">MoChenVideo</div>
                <div class="list-box flex-row">
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                </div>
            </div>
            <div class="right-box footer-box">
                <div class="title">MoChenVideo</div>
                <div class="list-box flex-row">
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                    <div class="list-item">关于我们</div>
                </div>
            </div>
        </div>
        <div class="split-line"></div>
        <div class="bottom-info">
            <div class="info-text">
                营业执照信息网络传播视听节目许可证：0910417网络文化经营许可证
                沪网文【2019】3804-274号广播电视节目制作经营许可证：（沪）字第01248号增值电信业务经营许可证 沪B2-20100043
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.bottom-footer {
    width: 100%;
    background-color: @gray-level-2;
    cursor: default;
}
.bottom-content {
    font-size: @default-font-size;
    padding: 30px 56px;

    .footer-box {
        flex: 1;

        .title {
            color: @font-gray-color;
            margin: 10px 10px;
        }

        .list-box {
            flex-wrap: wrap;

            .list-item {
                margin: 0 10px;
                cursor: pointer;
            }
        }
    }

    .left-box {

        .title {}

        .list-box {

            .list-item {}
        }
    }
}

.split-line{
    width: 60%;
    height: 1px;
    margin: 0 20%;
    background-color: @gray-level-3;
}

.bottom-info{
    font-size: @default-font-size;
    text-align: center;
    color: @font-gray-color;
    padding: 30px 56px;

    .info-text{

    }
}
</style>