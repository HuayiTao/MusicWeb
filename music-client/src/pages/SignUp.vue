<template>
<div>
    <loginLogo/>
    <div class="signUp">
        <div class="signUp-head">
            <span>Sign Up</span>
        </div>
        <el-form :model="registerForm" ref="registerForm" label-width="110px" class="demo-ruleForm" :rules="rules">
            <el-form-item prop="username" label="Username">
                <el-input v-model="registerForm.username" placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="Password">
                <el-input type="password" v-model="registerForm.password" placeholder="Password"></el-input>
            </el-form-item>
            <el-form-item prop="sex" label="Gender">
                <el-radio-group v-model="registerForm.sex">
                    <el-radio :label="0">Female</el-radio>
                    <el-radio :label="1">Male</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item prop="phoneNum" label="PhoneNumber">
                <el-input v-model="registerForm.phoneNum" placeholder="Phone Number"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="Email">
                <el-input v-model="registerForm.email" placeholder="Email"></el-input>
            </el-form-item>
            <el-form-item prop="birth" label="Birthday">
                <el-date-picker v-model="registerForm.birth" placeholder="Select Date" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item prop="introduction" label="Introduction">
                <el-input v-model="registerForm.introduction" placeholder="Introduction"></el-input>
            </el-form-item>
            <el-form-item prop="location" label="Region">
                <el-select v-model="registerForm.location" placeholder="Region" style="width: 100%;">
                    <el-option v-for=" item in cities" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <div class="login-btn">
                <el-button @click="goback(-1)">Cancel</el-button>
                <el-button type="primary" @click="SignUp">Confirm</el-button>
            </div>
        </el-form>
    </div>
</div>
</template>
<script>
import loginLogo from '../components/LoginLogo'
import {rules,cities} from '../assets/data/form'
import {mixin} from '../mixins'
import {SignUp} from '../api/index'

export default {
    name: 'sing-up',
    mixins: [mixin],
    components: {
        loginLogo
    },
    data() {
        return {
            registerForm: {
                username: '',       //用户名
                password: '',       //密码
                sex: '',            //性别
                phoneNum: '',       //手机
                email: '',          //邮箱
                birth: '',          //生日
                introduction: '',   //签名
                location: ''       //地区
            },
            cities: [],            //所有的地区--省
            rules: {}               //表单提交的规则
        }        
    },
    created() {
        this.rules = rules;
        this.cities = cities;
    },
    methods:{
        SignUp(){
            let _this = this;
            let d = this.registerForm.birth;
            let datetime = d.getFullYear() + '-' +(d.getMonth() + 1) +'-' + d.getDate();
            let params = new URLSearchParams();
            params.append('username',this.registerForm.username);
            params.append('password',this.registerForm.password);
            params.append('sex',this.registerForm.sex);
            params.append('phoneNum',this.registerForm.phoneNum);
            params.append('email',this.registerForm.email);
            params.append('birth',datetime);
            params.append('introduction',this.registerForm.introduction);
            params.append('location',this.registerForm.location);
            params.append('avator','/img/user.jpg');
            SignUp(params)
                .then(res => {
                    if(res.code == 1){
                        _this.notify('Sign up successfully!','success');
                        setTimeout(function(){
                            _this.$router.push({path: '/'});
                        },2000);
                    }else{
                        _this.notify('Failed to sign up!','error');
                    }
                })
                .catch(err => {
                    _this.notify('Failed to sign up!','error');
                })
        },
        goback(index){
            this.$router.go(index);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/sign-up.scss';
</style>