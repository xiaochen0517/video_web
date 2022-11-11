<template>
    <div class="login-view">
        <top-bar />
        <div class="login-content">
            <div class="qr-card">
                <div class="title-box">扫描二维码登录</div>
                <div class="qr-box">
                    <img alt="Scan me!"
                        src="data:image/png;base64,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"
                        style="display: block;" />
                </div>
            </div>
            <div class="split-line"></div>
            <div class="form-card">
                <div class="title-box">登录</div>
                <login-form />
            </div>
        </div>
        <bottom-footer />
    </div>
</template>

<script>
import LoginForm from '@/components/user/LoginForm.vue';
import TopBar from '@/components/main/TopBar.vue';
import BottomFooter from '@/components/main/BottomFooter.vue';

export default {
    components: {
        TopBar,
        LoginForm,
        BottomFooter,
    },
    data() {
        return {};
    },
    mounted() { },
    methods: {}
}
</script>

<style lang="less" scoped>
.login-view {
    height: 100%;

    .login-content {
        padding: 30px;
        margin-top: 300px;
        margin-bottom: 300px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .title-box {
            text-align: center;
            font-size: 18px;
            line-height: 18px;
            font-weight: 400;
        }

        .qr-card {
            height: 100%;
            display: flex;
            flex-direction: column;

            .title-box {
                margin-bottom: 40px;
            }

            .qr-box {
                width: 170px;
                height: 170px;
                border-radius: 5px;
                border: 1px solid @gray-level-2;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: backColorWhiteChangeLight .3s .0s ease-out both;

                &:hover {
                    animation: backColorWhiteChangeDark .3s .0s ease-out both;
                }

                img {
                    widows: 160px;
                    height: 160px;
                }
            }
        }

        .split-line {
            width: 1px;
            height: 150px;
            background-color: @gray-level-2;
            margin-left: 60px;
            align-self: center;
        }

        .form-card {}
    }
}
</style>