<template>
    <div class="register-view">
        <top-bar />
        <div class="login-content">
            <div class="form-card">
                <div class="title-box">注册</div>
                <register-form />
            </div>
        </div>
        <bottom-footer />
    </div>
</template>

<script>
import RegisterForm from '@/components/user/RegisterForm.vue';
import TopBar from '@/components/main/TopBar.vue';
import BottomFooter from '@/components/main/BottomFooter.vue';

export default {
    components: {
        TopBar,
        RegisterForm,
        BottomFooter,
    },
    data() {
        return {
        };
    },
    mounted() {

    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
.register-view {

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
            margin-bottom: 30px;
        }

        .form-card {}
    }
}
</style>