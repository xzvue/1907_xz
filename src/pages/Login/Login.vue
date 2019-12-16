<template>
  <section class="loginContainer">
  <a href="javascript:" class="go_back" @click="$router.back()">
    <i class="iconfont icon-jiantou2"></i>
    </a>
  <div class="login_header">
   <h2 class="login_logo">硅谷外卖</h2>
  </div>
  <div class="login_field">
    <van-tabs v-model="active">
  <van-tab title="短信登录">
   <form class="login_fm" @submit.prevent="login()"> 
     <section class="login_message">
      <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
       <button :disabled="!rightPhone" class="get_verification" :class="{right_phone:rightPhone}" @click="getCode()">
        {{computeTime>0 ? `已发送(${computeTime}s)`:'获取验证码'}}
         </button>
     </section>
      <section class="login_verification">
        <input type="text" maxlength="8" placeholder="验证码" v-model="code">
      </section>
      <section class="login_hint">
        温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
        <a href="javascript:;">《用户服务协议》</a>
      </section>
      <div class="login_btn">
    <van-button type="primary" size="large" @click="confirm">登录</van-button>
    </div>
    </form>
    <a href="javascript:;" class="about_us">关于我们</a>
  </van-tab>
  <van-tab title="密码登录">
     <form class="login_fm" @submit.prevent="login()">  
     <section class="login_message">
      <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
     </section>
      <section class="login_verification">
        <input type="text" maxlength="8" placeholder="密码" v-if="checked" v-model="pwd">
        <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
        <div class="switch_button off">
          <van-switch v-model="checked" size="20px" active-color="#02a774"/>
        </div>
      </section>
      <section class="login_message">
        <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
        <img class="get_verification" src="./images/captcha.svg" alt="captcha">
      </section>
      <div class="login_btn">
    <van-button type="primary" size="large" @click="confirm">登录</van-button>
    </div>
    </form>
    <a href="javascript:;" class="about_us">关于我们</a>
</van-tab>
</van-tabs>
  </div>
</section>
</template>
<script>
//vant使用
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import { Button } from 'vant';
import { setInterval, clearInterval } from 'timers';
Vue.use(Button);
import { Switch } from 'vant';
Vue.use(Switch);
// mint-ui使用
export default {
  data() {
    return {
      active:2,
      phone:'',//手机号
      computeTime:0,//计时为0
       checked: false,
       pwd:"",//密码
       name:"",//用户名
       code:"",//短信验证码
      captcha:"", //图形验证码
    };
  },
  computed:{
    rightPhone(){
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods:{
    getCode(){
      //如果当前没有计时
       if(!this.computeTime){
      //启动倒计时
      this.computeTime=30
     const intervalId=setInterval(()=>{
      this.computeTime--
      if(this.computeTime<=0){
        clearInterval(intervalId)
      }
     },1000) 
      //发送ajax请求()
    }
    },
    confirm(){
this.$messagebox({
  title: '',
  message: '',
  showCancelButton: true
});
    },
    login(){
//前台表单验证
if(this.active){
  const {rightPhone,code}=this
  if(!rightPhone){
    //手机号不正确
MessageBox.confirm("提示","手机号不正确");

 
  }else if(!/^\d{6}$/.test(code)){
    //验证码不正确
   
  }
}else{
  const {name,pwd,captcha}=this
  if(!this.name){
    //手机号不准确
     
  }else if(!this.pwd){
    //验证码不正确
  
  }else if(!this.captcha){
//验证码必须指定

  }
}
    }
  }
}
</script>
<style>
.loginContainer{
  height:100%;
  background-color: #fff;
  text-align: center;
  position: relative;
}
.go_back {
  position: absolute;
  top: 10px;
  left: 5px;
  width: 30px;
  height: 30px;
}
.go_back >.iconfont {
  font-size: 20px;
  color: #999;
}
.login_header{
  width:80%;
  padding-top:60px;
  margin:0 auto;
}
.login_header .login_logo{
  font-size:40px;
  color:#02a774;
  font-weight: bold;
  text-align: center;
}
.login_field{
  padding-top: 40px;
  text-align:center;
}
.login_fm{
width:80%;
margin:0 auto;
}
.login_message{

position:relative;
margin-top:16px;
height:48px;
font-size:14px;
background: #fff;
}
.login_message input{
  width:100%;
  height:100%;
  border:1px solid #ddd;
  padding-left:10px;
  border-radius:4px;
  font:400 14px Arial;
  outline:0;
}
.get_verification{
  position:absolute;
  right:10px;
  top:50%;
  transform: translateY(-50%);
  border: 0;
  color: #ccc;
  font-size: 14px;
  background: transparent;
}
.right_phone{
  color:black;
}
.van-tabs__line{
  background-color:#02a774;
}
.login_hint{
  font-size:14px;
  color:#999;
  width:100%;
  display:block;
  margin-top:12px;
  text-align: center;
  line-height:20px;
}
.login_hint a{
color:#02a774;
}
.login_verification{
  margin-top: 16px;
  height:48px;
  margin-top: 16px;
    font-size: 14px;
    background: #fff;
    position:relative;
}
.login_verification input{
width:100%;
  height:100%;
  border:1px solid #ddd;
  padding-left:10px;
  border-radius:4px;
  font:400 14px Arial;
  outline:0;
}
.switch_button{
  position: absolute;
top:15px;
right:20px;
}
.login_btn{
  margin-top:30px;
}
.about_us{
  display: block;
  font-size:12px;
  margin-top:20px;
  text-align: center;
  color:#999;
}
</style>
