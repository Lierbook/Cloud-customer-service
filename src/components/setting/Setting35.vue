<template>
  <div class="workspace">
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
  <div class="box343">
  <div class="title4"><span>客户评价</span></div>
   <div class="text"><span>邀请用户对客服进行评价，让企业客观了解自己的服务质量</span></div>
   <div class="title1"><span>人工客服是否解决问题</span></div>
    <div class="switch1">
  <el-switch v-model="form.input2" active-color="#13ce66"  inactive-color="#ff4949">
</el-switch>
</div>
<div class="text1"><span>开启此功能后，在人工客服满意度评价页显示是否解决问题选项，帮助统计客服解决问题的能力。</span></div>
<el-divider></el-divider>
<div class="title2"><span>结束对话时系统自动邀请评价</span></div>
    <div class="switch2">
  <el-switch v-model="form.input1" active-color="#13ce66"  inactive-color="#ff4949">
</el-switch>
</div>
<div class="title3"><span>设置邀请评价文案</span></div>
<div class="border">
<el-input type="textarea" :rows="6" :cols="4"  placeholder="请对客服的服务质量做出评价" v-model="textarea">
</el-input>
  </div>
  <div class="button">
  <el-button type="primary">保存</el-button>
</div>
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
.box343{
    width: 900px;
    height: 600px;
    background-color: #fff;
    position: relative;
    /* bottom: 1110px; */
    top: 78px;
    left: 386px;
}
 .title4{
    position: relative;
    left: 20px;
    top: 30px;
    font-size: 20px;
} 
.text{
    position: relative;
    left: 20px;
    top: 40px;
    color: #cccccc;
}
.title1{
    position: relative;
    top: 80px;
    left: -350px;
}
.switch1{
    position: relative;
    top: 60px;
    left: 180px;
}
.el-divider{
    position: relative;
  top: 80px;
    left: 20px;
}
.text1{
    position: relative;
    top: 80px;
    left: 20px;
    color: #cccccc;
}
.title2{
    position: relative;
    left: 20px;
   top: 80px;
}
.switch2{
    position: relative;
    top: 60px;
    left: 230px;
}
.title3{
    position: relative;
    top: 70px;
    left: 20px;
}
.border{
   position: relative;
  top:90px;
  left: 20px;
  width: 500px;
  border-radius: 2px;
}
.button{
    position: relative;
    left: 20px;
    top: 120px;
}

.workspace{
    position: relative;
}
</style>