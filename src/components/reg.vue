<template>
    <transition class="animated" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
        <el-row class="top">
            <el-col :xs={span:19,offset:1} :md={span:8,offset:6} :sm={span:8,offset:6}>
                <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户" prop='user'>
                        <el-input type="text" v-model="ruleForm2.user" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

    </transition>
</template>

<script>
import { vuex_store } from '../vuex.js'
export default {
    data() {
        var validateUser = (rule, value, callback) => {
            if (value == '') {
                callback(new Error('请输入账号'));
            } else {
                if (/[A-z0-9]{3,12}/g.test(value) && value.length < 13) {
                    callback();
                } else {
                    console.log("123")
                    callback(new Error('格式错误，请输入3-12位的字母、数字或下划线'));

                }
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {

                callback();
            }
        };

        return {
            ruleForm2: {
                user: '',
                pass: ''

            },
            rules2: {
                user: [
                    { validator: validateUser, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ]

            }
        };
    },
    store: vuex_store,
    methods: {
        submitForm(formName) {
            this.$store.commit("sum", 5);
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.reg()
                } else {
                    alert('密码与账号不匹配');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        reg() {
            if (this.ruleForm2.user == 'xiaoming' && this.ruleForm2.pass == '123') {
                sessionStorage['statue'] = 200;
                alert('登陆成功');
                this.$router.push({ path: '/index' })
            }
        }
    },
    mounted() {
        this.$emit('father', 3);
        this.$store.commit('sum',4)

    }
}
</script>
<style>

</style>
