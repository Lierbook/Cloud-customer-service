<template>
<div class="box032">
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
  <div class="box3211">
  <div class="box321">
    <div class="biaoqian">
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="网页端" name="first">
    </el-tab-pane>
    <el-tab-pane label="手机APP" name="second"></el-tab-pane>
    <el-tab-pane label="微信小程序" name="third"></el-tab-pane>
    <el-tab-pane label="微博" name="fourth"></el-tab-pane>
     <el-tab-pane label="手机站" name="fifth"></el-tab-pane>
      <el-tab-pane label="移动网站" name="sixth"></el-tab-pane>
  </el-tabs>
  </div>
  <div class="shang">
  <div class="xiaoxi"><span>欢迎消息</span></div>
  <div class="switch">
  <el-switch v-model="form.input1" active-color="#13ce66"  inactive-color="#ff4949" >
</el-switch>
</div>
<div class="text"><span>每段对话开启时，系统将自动向客户发送一段欢迎语</span></div>
<div class="border1">
     <el-input type="textarea" :rows="6" :cols="4"  placeholder="请输入消息内容" v-model="textarea">
</el-input>
</div>
<div class="button1">
  <el-button type="primary">保存</el-button>
</div>
<el-divider></el-divider>
<div class="xiaoxi"><span>客服无应答时消息</span></div>
<div class="switch">
  <el-switch v-model="form.input2" active-color="#13ce66"  inactive-color="#ff4949" >
</el-switch>
</div>
<div class="text"><span>客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</span></div>
  </div>
  <div class="text1"><span>客服超过20秒无响应时自动发送</span></div></div>
  <div class="border2">
     <el-input type="textarea" :rows="6" :cols="4"  placeholder="请输入消息内容" v-model="textarea">
</el-input>
</div>
<div class="button2">
  <el-button type="primary">保存</el-button>
</div>
<div class="xiaoxi1"><span>顾客无响应时消息</span></div>
<div class="switch1">
  <el-switch v-model="form.input3" active-color="#13ce66"  inactive-color="#ff4949" >
</el-switch>
</div>
<div class="text2"><span>顾客一段时间没有响应客服消息时，系统自动向他发送一段消息</span></div>
 <div class="text5"><span>顾客超过20秒无响应时自动发送</span></div>
  <div class="border5">
     <el-input type="textarea" :rows="6" :cols="4"  placeholder="请输入消息内容" v-model="textarea">
</el-input>
  </div>
  <div class="button3">
  <el-button type="primary">保存</el-button>
</div>
<div class="xiaoxi2"><span>对话结束</span></div>
<div class="switch2">
  <el-switch v-model="value" active-color="#13ce66"  inactive-color="#ff4949" >
</el-switch>
</div>
<div class="text6"><span>对话结束后，系统自动向顾客发送一段结束语</span></div>
 <div class="text3"><span>客服手动结束时</span></div>
 <div class="border3">
     <el-input type="textarea" :rows="6" :cols="4"  placeholder="请输入消息内容" v-model="textarea">
</el-input>
</div>
<div class="text4"><span>系统自动关闭时</span></div>
 <div class="border4">
     <el-input type="textarea" :rows="6" :cols="4"  placeholder="请输入消息内容" v-model="textarea">
</el-input>
</div>
 <div class="button4">
  <el-button type="primary">保存</el-button>
</div></div>
  </div>

</template>

<script>
export default {
   data () {
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
        radio: '1',
       value: true,
      };
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
    /* background-color: rgba(0, 110, 255, 0.0980392156862745); */

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
.box321{
  position: relative;
  bottom: 1110px;
  left:370px;
  width: 900px;
  height: 1500px;
  background-color: #fff;
}
.box3211{
    position: relative;
    top: 1190px;
    left: 50px;
}
.xiaoxi{
  position: relative;
  left: 20px;
}
.switch{
  position: relative;
  bottom: 20px;
  left: 150px;
}
.text{
  position: relative;
  left:20px;
  bottom: 10px;
  color: #cccccc;
}
.text1{
  position: relative;
  left:390px;
  bottom: 2210px;
}
.text2{
   position: relative;
  left:390px;
  bottom: 2176px;
  color: #cccccc;
}
.text3{
  position: relative;
  bottom: 2070px;
  left: 390px;
}
.text4{
   position: relative;
  bottom: 2040px;
  left: 390px;
}
.text5{
   position: relative;
  bottom: 2160px;
  left: 390px;
}
.text6{
   position: relative;
  left:390px;
  bottom: 2110px;
  color: #cccccc;
}
.border1{
  position: relative;
  left: 20px;
  width: 500px;
  border-radius: 2px;
}
.border2{
  position: relative;
  bottom: 2200px;
  left: 390px;
  width: 500px;
  border-radius: 2px;
}
.border3{
  position: relative;
  bottom: 2060px;
  left: 390px;
  width: 500px;
  border-radius: 2px;
}
.border4{
   position: relative;
  bottom: 2030px;
  left: 390px;
  width: 500px;
  border-radius: 2px;
}
.border5{
   position: relative;
  bottom: 2140px;
  left: 390px;
  width: 500px;
  border-radius: 2px;
}
.button1{
  position: relative;
  top: 10px;
  left: 20px;
  height: 35px;
}
.button2{
    position: relative;
    bottom: 2180px;
    left: 390px;
}
.button3{
  position: relative;
    bottom: 2130px;
    left: 390px;
}
.button4{
   position: relative;
    bottom: 2020px;
    left: 390px;
}
.el-divider{
  position: relative;
  left: 15px;
  top: -5px;
}
.xiaoxi1{
  position: relative;
  bottom: 2160px;
  left: 390px;
}
.xiaoxi2{
  position: relative;
  bottom: 2100px;
  left: 390px;
}
.switch1{
  position: relative;
  bottom: 2180px;
  left: 520px;
}
.switch2{
   position: relative;
  bottom: 2120px;
  left: 520px;
}
.shang{position:absolute;
top: 80px;


}
</style>