<template>
<div>
 <div class="box1001">
    <div class="box1002">
<el-row class="tac">
  <el-col :span="24"> 
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"> 
        <el-menu-item-group>
          <template slot="title">通用设置</template>
          <el-menu-item index="1-1" @click="gotolinkSetting11">个人信息</el-menu-item>
          <el-menu-item index="1-2" @click="gotolinkSetting12">通知公告</el-menu-item>
          
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">团队设置</template>
          <el-menu-item index="2-1" @click="gotolinkSetting21">企业信息</el-menu-item>
          <el-menu-item index="2-2" @click="gotolinkSetting22">客服管理</el-menu-item>
          <el-menu-item index="2-3" @click="gotolinkSetting23">分组管理</el-menu-item>
          <el-menu-item index="2-4" @click="gotolinkSetting24">角色管理</el-menu-item>
          
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">客服设置</template>
          <el-menu-item index="3-1" @click="gotolinkSetting31">常用语</el-menu-item>
          <el-menu-item index="3-2" @click="gotolinkSetting32">自动回复</el-menu-item>
          <el-menu-item index="3-3" @click="gotolinkSetting33">对话规则</el-menu-item>
          <el-menu-item index="3-4" @click="gotolinkSetting34">分配规则</el-menu-item>
          <el-menu-item index="3-5" @click="gotolinkSetting35">会话评价</el-menu-item>
          <el-menu-item index="3-6" @click="gotolinkSetting36">客户信息</el-menu-item>
          <el-menu-item index="3-7" @click="gotolinkSetting37">客户标签</el-menu-item>
          <el-menu-item index="3-8" @click="gotolinkSetting38">黑名单</el-menu-item>
          
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">工单设置</template>
          <el-menu-item index="4-1" @click="gotolinkSetting41">基础设置</el-menu-item>
          <el-menu-item index="4-2" @click="gotolinkSetting42">工单分类</el-menu-item>         
        </el-menu-item-group>

        <el-menu-item-group>
          <template slot="title">全局设置</template>
          <el-menu-item index="5-1" @click="gotolinkSetting51">操作日志</el-menu-item>
          <el-menu-item index="5-2" @click="gotolinkSetting52">信息通知</el-menu-item> 
        </el-menu-item-group>    
    </el-menu>
  </el-col> 
</el-row>
</div>
  </div>
  <div class="box146">
    <div class="title1"><span>自动结束会话</span></div>
    <div class="switch1">
  <el-switch v-model="form.input14" active-color="#13ce66"  inactive-color="#ff4949">
</el-switch>
</div>
  <div class="text1"><span>超过20秒无响应时自动发送</span></div>
<el-divider></el-divider>

<div class="title1"><span>访客离线自动结束对话</span></div>
    <div class="switch1">
  <el-switch v-model="form.input3" active-color="#13ce66"  inactive-color="#ff4949">
</el-switch>
</div>
  <div class="text1"><span>访客离线超过20秒自动结束对话</span></div>
<el-divider></el-divider>

<div class="title2"><span>客服离线自动转接</span></div>
    <div class="switch2">
  <el-switch v-model="form.input2" active-color="#13ce66"  inactive-color="#ff4949">
</el-switch>
</div>
<div class="text3"><span>正常对话过程中如顾客发送消息是客服已离线，则对话将自动转接给在线的客服</span></div>
  <div class="text2"><span>访客发送消息后超过20秒客服一直没有在线则自动转接</span></div>
<el-divider></el-divider>

<div class="title1"><span>进入对话窗立即开始对话</span></div>
    <div class="switch1">
  <el-switch v-model="form.input1" active-color="#13ce66"  inactive-color="#ff4949">
</el-switch>
</div>
  <div class="text1"><span>开启后顾客进入对话窗时客服就会立即接入对话，客服可以主动和顾客沟通。关闭则必须顾客发送首条消息时客服才接入对话。</span></div>
  </div>
</div>
</template>

<script>
export default {
   data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        value: true
      }
    },
methods: {
          gotolinkSetting11(){
          this.$router.replace('/main/setting11')
        },
         gotolinkSetting12(){
          this.$router.replace('/main/setting12')
        },
        gotolinkSetting21(){
          this.$router.replace('/main/setting21')
        },
         gotolinkSetting22(){
          this.$router.replace('/main/setting22')
          
        },
         gotolinkSetting23(){
          this.$router.replace('/main/setting23')
          
        },
         gotolinkSetting24(){
          this.$router.replace('/main/setting24')
          
        },

         gotolinkSetting31(){
          this.$router.replace('/main/setting31')
          
        },
         gotolinkSetting32(){
          this.$router.replace('/main/setting32')
          
        },
         gotolinkSetting33(){
          this.$router.replace('/main/setting33')
          
        },
         gotolinkSetting34(){
          this.$router.replace('/main/setting34')
          
        },
         gotolinkSetting35(){
          this.$router.replace('/main/setting35')
          
        },
         gotolinkSetting36(){
          this.$router.replace('/main/setting36')
          
        },
         gotolinkSetting37(){
          this.$router.replace('/main/setting37')
          
        },
         gotolinkSetting38(){
          this.$router.replace('/main/setting38')
          
        },
         gotolinkSetting41(){
          this.$router.replace('/main/setting41')
          
        },
         gotolinkSetting42(){
          this.$router.replace('/main/setting42')
          
        },
         gotolinkSetting51(){
          this.$router.replace('/main/setting51')
          
        },
         gotolinkSetting52(){
          this.$router.replace('/main/setting52')
          
        },
}
}
</script>

<style scoped>
.box1001{

  position: absolute;
    left: 74px;
    top: 74px;
    z-index: 0;
    width: 1400px;
    height: 600px;
    background-color: rgba(0, 110, 255, 0.0980392156862745);

    padding: 21px 20px;

}
.box1002{
   position: absolute;
    left: 1px;
    top: 0px;
    z-index: 2;
    width: 300px;
    height: 600px;
     background-color:white; 
  
   border-radius: 4px;
}
.tac{
  overflow:scroll;
   width:300px; 
   height:600px;
}
.box146{
  width: 900px;
  height: 600px;
  background-color: #fff;
  position: relative;
  left: 400px;
  top: 90px;
  /* bottom: 1110px; */
}
.title1{
position: relative;
left: -350px;
top: 20px;
}
.switch1{
  position: relative;
  left: 200px;
  bottom: 0px;
}
.text1{
  position: relative;
  top: 20px;
  left: 20px;
  color: #cccccc;
}
.title2{
  position: relative;
  left: 20px;
  top: 20px;
}
.switch2{
  position: relative;
  left: 200px;
}
.text2{
  position: relative;
  top: 30px;
  left: 20px;
  color: #cccccc;
}
.text3{
  position: relative;
   top: 10px;
   left: 20px;
   color: #cccccc;
}
.el-divider{
  position: relative;
 left: 10px;
  top: 25px;
}
</style>