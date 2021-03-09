<template>
<div class="workspace">
<div class="box1111">
    <div class="box11002">
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
   <div>
 <div class="box1110">
      <div class="header1">
        <span>个人信息</span>
  </div>
      <el-divider></el-divider>
      <div class="item">
        <div v-for="name in 1" :key="name" class="text-item">
          {{ "上传头像：" }}
        <div class="touxiang">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
       </div> 
        </div>
        <el-radio-group v-model="labelPosition" size="small">
          </el-radio-group>
     <div style="margin: 20px;"></div>
     
<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" >
  <el-form-item label="邮箱地址">
    <el-input v-model="formLabelAlign.email " style=""  class="kuandu011"></el-input>
  </el-form-item>
  <el-form-item label="客服昵称">
    <el-input v-model="formLabelAlign.nick"  class="kuandu012"></el-input> 
  </el-form-item>
  <el-form-item label="真实姓名">
    <el-input v-model="formLabelAlign.name"  class="kuandu012"></el-input> 
  </el-form-item>
    <el-form-item label="客服工号">
    <el-input v-model="formLabelAlign.number"  class="kuandu011"></el-input>
  </el-form-item>
    <el-form-item label="客服手机号码">
    <el-input v-model="formLabelAlign.tele"  class="kuandu011"></el-input>
  </el-form-item>

 <el-divider class="fengexian"></el-divider>
<div class="header2">
  <span>密码设置</span>
</div>

    <el-form-item label="密码设置">
    <el-input v-model="formLabelAlign.email " style="width=50px"  class="kuandu011"></el-input>
  </el-form-item>
   <el-form-item label="原密码">
    <el-input v-model="formLabelAlign.email " style="width=50px"  class="kuandu011"></el-input>
  </el-form-item>
  <el-form-item label="新密码">
    <el-input v-model="formLabelAlign.email " style="width=50px"  class="kuandu011"></el-input>
  </el-form-item>
  <el-form-item label="确认新密码">
    <el-input v-model="formLabelAlign.email " style="width=50px" class="kuandu011"></el-input>
  </el-form-item>
  <div class="baocun">
<el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item></div>
</el-form>

      </div>
    </div>
   </div>
 </div>  
</template>

<script>
 export default {
    data() { 
      return {
        tabPosition: 'left',
         dialogImageUrl: "",
      dialogVisible: false,
       labelPosition: 'right',
      formLabelAlign: {
         email:'',
         nick:'',
         name:'',
         number:'',
         tele:'',
         },
      };
    },
 methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
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
  },
  };
</script>

<style scoped>
.box1111{
  position: absolute;
    left: 74px;
    top: 74px;
    z-index: 0;
    width: 1400px;
    height: 600px;
    /* background-color: rgba(0, 110, 255, 0.0980392156862745); */

    padding: 21px 20px;
}
.box11002{

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
   height:900px;
}
.box1110 {
  width: 1000px;
  height: 920px;
  position: relative;
  left: 400px;
  top: 73px;
 /* bottom: 1134px; */
  background-color: #fff;
}
.header1{
   font-family: sans-serif;
   font-size: 20px;
   position: absolute;
   left: 20px;
}
.header2{
  font-family: sans-serif;
   font-size: 15px;
   color: black;
   position: relative;
  top:-20px;
}
.text-item{
  position: relative;
  right: 280px;
  top: 80px;
}
.touxiang{
  position: relative;
  bottom: 20px;
  left:90px;
  size: 30px;
}
.el-form{
  position: relative;
  right: 300px;
  top: 40px;
}
.el-divider{
  position: relative;
  right:500px ;
}


.workspace{

position:relative;
/* top: 100px; */
/* left: 70px; */

}
.item{
    position:relative;
    left: 300px;
}

.kuandu011{
    width: 400px;
}

.kuandu012{

    width: 200px;
}
.baocun{
    position: relative;
    top: -10px;
}

.fengexian{

    position: relative;
    left:0px;
}
</style>