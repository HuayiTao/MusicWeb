<template>
<div>
    <loginLogo/>
    <div class="signUp">
        <div class="signUp-head">
            <span>Login</span>
        </div>
        <el-form :model="loginForm" ref="loginForm" label-width="90px" class="demo-ruleForm" :rules="rules">
            <el-form-item prop="username" label="Username ">
                <el-input v-model="loginForm.username" placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="Password ">
                <el-input type="password" v-model="loginForm.password" placeholder="Password"></el-input>
            </el-form-item>
            
            <div class="login-btn">
                <el-button @click="goSignUp">Sign Up</el-button>
                <el-button type="primary" @click="handleLoginIn">Login</el-button>
            </div>
        </el-form>
    </div>
</div>
</template>
<script>
import loginLogo from '../components/LoginLogo'
import {mixin} from '../mixins'
import {loginIn} from '../api/index'

export default {
    name: 'login-in',
    mixins: [mixin],
    components: {
        loginLogo
    },
    data() {
        return {
            loginForm: {
                username: '',       //User Name
                password: '',       //Password
            },
            rules: {
                username: [
                    { required: true, trigger: 'blur',message: 'Please Enter User Name' }
                ],
                password: [
                    { required: true, trigger: 'blur',message: 'Please Enter Password' }
                ]
            }
        }    
    },
    mounted() {
        this.changeIndex('Login');
    },
    methods:{
        handleLoginIn(){
            let _this = this;
            let params = new URLSearchParams();
            params.append('username',this.loginForm.username);
            params.append('password',this.loginForm.password);
            loginIn(params)
                .then(res => {
                    if(res.code == 1){
                        _this.notify('Login successfully','success');
                        _this.$store.commit('setLoginIn',true);
                        _this.$store.commit('setUserId',res.userMsg.id);
                        _this.$store.commit('setUsername',res.userMsg.username);
                        _this.$store.commit('setAvator',res.userMsg.avator);                                                
                        setTimeout(function(){
                            _this.changeIndex('HOME');
                            _this.$router.push({path: '/'});
                        },2000);
                    }else{
                        _this.notify('User Name or Password error','error');
                    }
                })
                .catch(err => {
                    _this.notify('User Name or Password error','error');
                })
        },
        goSignUp(){
            this.changeIndex('Sign Up');
            this.$router.push({path: '/sign-up'});
        },
        changeIndex(value){
            this.$store.commit('setActiveName',value);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/sign-up.scss';
</style>