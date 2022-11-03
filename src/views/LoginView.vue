<template>
    <div>
        <el-form ref="loginFormRef" :label-position="labelPosition" label-width="100px" :model="formContent"
            :rules="formRules" style="max-width: 460px">
            <el-form-item label="用户名：" prop="username">
                <el-input v-model="formContent.username" />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="formContent.password" />
            </el-form-item>
            <el-form-item>
                <ali-validate @success="aliValidateSuccess" @fail="aliValidateFail" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import AliValidate from '@/components/AliValidate.vue';

import { ElMessage } from 'element-plus';
import { userLogin, userRegister } from "@/requests/user/user_request";

export default {
    components: {
        AliValidate
    },
    data() {
        return {
            labelPosition: 'right',
            formContent: {
                username: "",
                password: "",
                sessionId: "",
                sig: "",
                token: ""
            },
            formRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'change' },
                    { min: 3, max: 20, message: '用户名长度为3-20位', trigger: 'change' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'change' },
                    { min: 3, max: 20, message: '密码长度为3-20位', trigger: 'change' },
                ]
            },
            aliValidateIsSuccess: false,
        };
    },
    mounted() {

    },
    methods: {
        aliValidateSuccess(sessionId, sig, token) {
            console.log("验证成功", sessionId, sig, token);
            this.aliValidateIsSuccess = true;
            this.formContent.sessionId = sessionId;
            this.formContent.sig = sig;
            this.formContent.token = token;
        },
        aliValidateFail(errorCode) {
            console.error("验证失败", errorCode);
            ElMessage.error("验证失败，错误码:" + errorCode);
        },
        submitForm() {
            if(!this.aliValidateIsSuccess){
                ElMessage.warning("请完成安全验证");
                return;
            }
            this.$refs.loginFormRef.validate((valid, fields) => {
                if (valid) {
                    console.log("验证成功");
                    userLogin(this.formContent)
                    .then(res => {
                        console.log("登录", res);
                        if(res.code == 200){
                            this.$store.commit('set_token', res.token.access_token)
                            ElMessage.success(res.msg);
                            this.$router.push({name: "home", path: "/"});
                        }else{
                            ElMessage.error(res.msg);
                        }
                    }).catch(error => {
                        console.log("失败", error);
                    })
                } else {
                    ElMessage.warning("请将用户名密码填写完整");
                }
            })
        }
    }
}
</script>

<style>

</style>