<template>
<div>
    <div class="info">
        <div class="title">
            <span>Edit Profile</span>
        </div>
        <hr/>
        <div class="personal">
            <el-form :model="registerForm" ref="registerForm" label-width="70px" class="demo-ruleForm" :rules="rules">
                <el-form-item prop="username" label="User Name">
                    <el-input v-model="registerForm.username" placeholder="User Name"></el-input>
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
                <el-form-item prop="phoneNum" label="Phone Number">
                    <el-input v-model="registerForm.phoneNum" placeholder="Phone Number"></el-input>
                </el-form-item>
                <el-form-item prop="email" label="Email">
                    <el-input v-model="registerForm.email" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item prop="birth" label="Birthday">
                    <el-date-picker type='date' :editable="false" v-model="registerForm.birth" placeholder="Select Date" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item prop="introduction" label="Introduction">
                    <el-input v-model="registerForm.introduction" placeholder="Introduction"></el-input>
                </el-form-item>
                <el-form-item prop="location" label="Region">
                    <el-select v-model="registerForm.location" placeholder="Region" style="width: 100%;">
                        <el-option v-for=" item in cities" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div class="btn">
                <div @click="saveMsg">SAVE</div>
                <div @click="goback(-1)">CANCEL</div>
            </div>
        </div>
        
    </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
import {rules,cities} from '../assets/data/form'
import {mixin} from '../mixins'
import {getUserOfId,updateUserMsg} from '../api/index'

export default {
    name: 'info',
    mixins: [mixin],
    data() {
        return {
            registerForm: {
                username: '',       //User Name
                password: '',       //Password
                sex: '',            //性别
                phoneNum: '',       //Phone Number
                email: '',          //Email
                birth: '',          //Birthday
                introduction: '',   //Introduction
                location: ''       //Region
            },
            cities: [],            //所有的Region--省
            rules: {}               //表单提交的规则
        }        
    },
    computed:{
        ...mapGetters([
            'userId'
        ])
    },
    created() {
        this.rules = rules;
        this.cities = cities;
    },
    mounted(){
        this.getMsg(this.userId);
    },
    methods:{
        getMsg(userId){
            getUserOfId(userId)
                .then(res =>{
                    this.registerForm.username = res.username;
                    this.registerForm.password = res.password;
                    this.registerForm.sex = res.sex;
                    this.registerForm.phoneNum = res.phoneNum;
                    this.registerForm.email = res.email;
                    this.registerForm.birth = res.birth;
                    this.registerForm.introduction = res.introduction;
                    this.registerForm.location = res.location;
                                
                })
                .catch(err => {
                    console.log(err);
                })
        },
        saveMsg(){
            let _this = this;
            let d = new Date(this.registerForm.birth);
            let datetime = d.getFullYear() + '-' +(d.getMonth() + 1) +'-' + d.getDate();
            let params = new URLSearchParams();
            params.append('id',this.userId);
            params.append('username',this.registerForm.username);
            params.append('password',this.registerForm.password);
            params.append('sex',this.registerForm.sex);
            params.append('phoneNum',this.registerForm.phoneNum);
            params.append('email',this.registerForm.email);
            params.append('birth',datetime);
            params.append('introduction',this.registerForm.introduction);
            params.append('location',this.registerForm.location);
            updateUserMsg(params)
                .then(res => {
                    if(res.code == 1){
                        _this.$store.commit('setUsername',this.registerForm.username);
                        _this.notify('Modified successfully','success');
                        setTimeout(function(){
                            _this.$router.push({path: '/'});
                        },2000);
                    }else{
                        _this.notify('Modified failed','error');
                    }
                })
                .catch(err => {
                    _this.notify('Modified failed','error');
                })
        },
        goback(index){
            this.$router.go(index);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/info.scss';
</style>