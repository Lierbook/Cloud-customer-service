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
  <div class="box347">
    <div class="title1"><span>基础分配</span></div>
    <div class="box564">
    <div class="radio">
      <el-radio v-model="radio" label="1">按排序轮流分配</el-radio>
      <div class="text"><span>设定一个客服排序, 新的对话按此排序, 在可分配的客服间轮流分配, 从排序最靠前的开始</span></div>
    </div>
    <el-divider></el-divider>
    <div class="radio">
  <el-radio v-model="radio" label="2">按排序优先分配</el-radio>
  <div class="text"><span>设定一个客服排序, 优先给排序靠前的客服分配到对话数量上限, 才会分配给排序下一位的客服</span></div>
    </div>
    <el-divider></el-divider>
   <div class="radio">
  <el-radio v-model="radio" label="3">按平均分配</el-radio>
  <div class="text"><span>根据每位客服的对话量维持一个平均的工作量分配。</span></div>
   </div>
   </div>  
    <div class="title2"><span>回头客分配</span></div>
    <div class="switch1">
  <el-switch v-model="form.input1" active-color="#13ce66"  inactive-color="#ff4949">
</el-switch>
</div>
<div class="text1"><span>优先把回头客分配给上一次和他对话的客服</span></div>
<div class="line">
<el-divider></el-divider>
</div>
 <div class="title3"><span>客户排队超时优先</span></div>
    <div class="switch2">
  <el-switch v-model="form.input2" active-color="#13ce66"  inactive-color="#ff4949">
</el-switch>
</div>
<div class="text2"><span>客户发起咨询排队时，如排队等待超过设置的时间，系统将优先接入</span></div>
  </div>
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
        value: true
      };
    },
methods: {
        gotolinkSetting11(){
          this.$router.replace('/setting11')
        },
         gotolinkSetting12(){
          this.$router.replace('/setting12')
        },
        gotolinkSetting21(){
          this.$router.replace('/setting21')
        },
        gotolinkSetting22(){
          this.$router.replace('/setting22')
          
        },
         gotolinkSetting23(){
          this.$router.replace('/setting23')
          
        },
         gotolinkSetting24(){
          this.$router.replace('/setting24')
          
        },
        gotolinkSetting31(){
          this.$router.replace('/setting31')
          
        },
         gotolinkSetting32(){
          this.$router.replace('/setting32')
          
        },
         gotolinkSetting33(){
          this.$router.replace('/setting33')
          
        },
          gotolinkSetting34(){
          this.$router.replace('/setting34')
          
        },
         gotolinkSetting35(){
          this.$router.replace('/main/setting35')
          
        },
        gotolinkSetting36(){
          this.$router.replace('/setting36')
          
        },
         gotolinkSetting37(){
          this.$router.replace('/setting37')
          
        },
         gotolinkSetting38(){
          this.$router.replace('/setting38')
          
        },
         gotolinkSetting41(){
          this.$router.replace('/setting41')
          
        },
        gotolinkSetting42(){
          this.$router.replace('/setting42')
          
        },
         gotolinkSetting51(){
          this.$router.replace('/setting51')
          
        },
         gotolinkSetting52(){
          this.$router.replace('/setting52')
          
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
    height: 500px;
    background-color: rgba(194, 236, 243, 0.098);
    padding: 21px 20px;
}
.box1002{
   position: absolute;
    left: 1px;
    top: 0px;
    z-index: 2;
    width: 300px;
    height: 500px;
     background-color:white; 
  
   border-radius: 4px;
}
.tac{
  overflow:scroll;
   width:300px; 
   height:600px;
}
.box347{
  width: 870px;
  height: 600px;
  background-color: #fff;
  position: relative;
  left: 380px;
  top: 80px;
  /* bottom: 1110px; */
}
.title1{
  position: relative;
  left: 20px;
  top: 20px;
  font-size: 20px;
}
.title2{
  position: relative;
  left: 20px;
  top: 60px;
}
.title3{
position: relative;
top: 30px;
left: 20px;
}
.switch1{
  position: relative;
  top: 40px;
  left: 150px;
}
.switch2{
  position: relative;
  left: 150px;
  top: 10px;
}
.text1{
  position: relative;
  top: 50px;
  left: 20px;
  color: #cccccc;
}
.text2{
  position: relative;
  top: 20px;
  left: 20px;
  color: #cccccc;
}
.line{
  position: relative;
  top: 20px;
  left: 20px;
  width: 800px;
}
.box564{
  width: 800px;
  height: 250px;
  background-color: rgb(228, 240, 245);
  position: relative;
  top: 30px;
  left: 20px;

}
.radio{
  position: relative;
  top: 20px;
  left: 20px;
}
.text{
  position: relative;
  left: 20px;
  color: #cccccc;
}
.el-divider{
  position: relative;
  left: 0px;
  top: 23px;
}

.workspace{
    position: relative;
    width: 1000px;
    height: 1000px;
}
</style>