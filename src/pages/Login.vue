<template>
 <div class="page">
        <div class="login-box">
            <form action="">
                <div class="h3">欢迎登陆客服云</div>
                <div class="item" style="margin-bottom: 16px;"><label for="">账号</label><input type="text" name="" value="" v-on:keyup="check_count($event)" placeholder="请输入注册时填写的邮箱"></div>
                <div class="item" style="margin-bottom: 110px;"><label for="">密码</label><input type="password" placeholder="请输入密码" ></div>
                <!-- <div class="item" style="margin-bottom: 11px;"><label for="">验证码</label><input type="text" placeholder="请输入验证码" ></div> -->

                <!-- <div class="img"></div> -->
                <div class="item"><button class="btn" @click="gotolink">登陆</button></div>
                <div class="link" style="text-align: center;" ><a href="http://localhost:8080/#/Regist">没有账号，现在去注册</a></div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  methods:{
      
check_count: function(event) {
      var value = event.target.value;
      if (!/^\+?[1-9][0-9]*$/.test(value)) {
        alert('请输入6-8位的数字');
        event.target.value = '';
      }
    },
        gotolink(){
 
          //点击跳转至上次浏览页面
         // this.$router.go(-1)
 
          //指定跳转地址
          this.$router.replace('/main/index')
          // this.gotolink=
        //    this.$router.replace('/Main')
          // this.gotolink=
          const h = this.$createElement;
           this.$notify({
          title: '客服云 ',
          message: h('i', { style: 'color: teal' }, '登陆成功！欢迎来到极客营云客服'),
         position: 'bottom-right'
        });
        },
        
      }

}
</script>

<style>
html,body{
            padding: 0;
            margin: 0;
        }
        html{
            height: 100%;
        }
        body{
            background:rgba(0, 110, 255, 0.098);
            height: 100%;
    
        }
        .page{
            width: 1169px;
            margin: 0 auto;
            height: 100%;
            background-image: url(../assets/u2.svg);
            background-size: 600px 506px;
            background-position: 0 160px;
            background-repeat: no-repeat;
        }
        .login-box{
            width: 357px;
            height: 393px;
            background-color: #006eff;
            border-radius: 4px;
            padding: 55px 41px;
            float: right;
            margin-top: 160px;
        }
        .login-box .h3{
    height: 43px;
    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC', sans-serif;
    font-weight: 650;
    color: #ffffff;
    text-align: left;
    font-size: 32px;
    margin-bottom: 49px;
}

.login-box .item{
    width: 358px;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    border-radius: 2px;
}
.login-box .item label{
    display: inline-block;
    width: 63px;
    height: 41px;
    text-align: center;
    font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
    font-size: 14px;
}

.login-box .item input{
    height: 41px;
    width: 281px;
    border-style: none;
    outline-style: none;
}
.login-box .item button{
    width: 100%;
    height: 100%;
    background-color: #ff9138;
    border-style: none;
    outline-style: none;
    font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
    font-size: 16px;
    color:#fff;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    
}
.login-box .item button:hover{
   background-color: #fa811f;
    color: white;
}
/* .login-box .item button:active{
 
} */

.login-box .item:nth-of-type(5){
    margin-top: 39px;
    margin-bottom: 16px;
}
/* 使用placelholder伪元素设置样式 */
.login-box .item input::placeholder{
    font-family: 'Arial Regular', 'Arial', sans-serif;
    color: #cccccc;
}

.login-box a{
    color:#fff;
    font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
    font-size: 13px;
    text-decoration: none;
}
/* .img{
    background-image: url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=556694678,1316064338&fm=26&gp=0.jpg);
    background-size: 65px 33px;
    background-repeat: no-repeat;
    
} */


</style>