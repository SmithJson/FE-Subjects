<template>  
        <div class="login-box">
            <form class="login-form">
                <input type="text" name="username" v-model="username" placeholder="请输入用户名"/>
                <input type="password" name="password" v-model="password" placeholder="请输入密码"/>
                <button type="button" class="btn-login" @click="submitLogin">登录</button>
            </form>
        </div>

  
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        
        submitLogin(){
            axios({
                method:'post',
                url:'http://192.168.0.104:8083/api/login',
                data:{
                    name:this.username,
                    password:this.password
                }
            }).then((res)=>{
                
                if(res.data.statusCode==200) {
                     alert(res.data.data);
                     localStorage.setItem('token',res.data.token); //用户访问页面的钥匙
                     
                     this.$router.push({
                         path:'/home'
                     });
                } else {
                     alert(res.data.data);
                }
               
            });
               
        }
    }
}
</script>
