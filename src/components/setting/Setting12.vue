<template>
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

<div class="box1003">
<div class="box1004">
<div class="block002">
    <span class="demonstration"></span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>

 

  </div>



</div>
<div class="box10015">
 <div class="demo-input-suffix11">
 
 
  <el-input
    placeholder="请输入内容"
    v-model="input4">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</div>

</div>
<div class="box1005">
 



  <div  id="app2">
      <el-button type="success" @click="dialogFormVisible = true">添加公告</el-button>
<el-dialog title="添加公告" :visible.sync="dialogFormVisible"   width="30%" center append-to-body>
  <el-form :model="form.input1">
    <el-form-item label="广告标题" :label-width="formLabelWidth" >
      <el-input v-model="form.input111" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
   
  
    
         <el-form-item label="公告内容" :label-width="formLabelWidth">
           <el-input
  type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
</el-input>
           </el-form-item>




  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

    </div>
    <div id="app1">
     <el-button class="headbutton">批量删除</el-button>
     <div id="app1">
     <el-button class="headbutton">导出数据</el-button>
    </div>


  </div>
  
</div>

<div class="box10014">
   <el-table
    :data="tableData"
    stripe
     height="550"
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
     <el-table-column

      prop="title"
      label="标题"
      width="150">
    </el-table-column>
   <el-table-column

      prop="information"
      label="公告内容"
      width="250">
    </el-table-column>

    <el-table-column
      prop="name"
      label="发布人"
      width="150">
    </el-table-column> 
    <el-table-column

      prop="date"
      label="发布时间"
      width="180">
    </el-table-column>
    <!-- <el-table-column
      prop="job"
      label="操作">
    </el-table-column> -->
    <el-table-column label="操作">
      <template >
        <div id="app03">
        <el-button 
          size="mini"
          type="success">编辑</el-button>

          

    
</div>





        <el-button
          size="mini"
          type="danger"
          @click="tanchuchuangkou2" >删除</el-button>
      </template>
    </el-table-column>

    
  </el-table>
<div  class="dibu002">
<el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
</div>

</div>

</div>


  </div>
</template>

<script>
export default {
   data() {
      return {
        title:'首页1',
          dialogTableVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '120px',


        tableData: [
          {
          title: '产品上新通知',
          information: 'WCTmm-234号产品将于本月9号正式上......',
          name: 'Admin',
          date: '2016-05-02',
          
          job: ' 编辑',
          
        },
         {
          title: '产品上新通知',
          information: 'WCTmm-234号产品将于本月9号正式上......',
          name: 'Admin',
          date: '2016-05-02',
          
          job: ' 编辑',
          
        },
         {
          title: '产品上新通知',
          information: 'WCTmm-234号产品将于本月9号正式上......',
          name: 'Admin',
          date: '2016-05-02',
          
          job: ' 编辑',
          
        },
         {
          title: '产品上新通知',
          information: 'WCTmm-234号产品将于本月9号正式上......',
          name: 'Admin',
          date: '2016-05-02',
          
          job: ' 编辑',
          
        },
         {
          title: '产品上新通知',
          information: 'WCTmm-234号产品将于本月9号正式上......',
          name: 'Admin',
          date: '2016-05-02',
          
          job: ' 编辑',
          
        },
         {
          title: '产品上新通知',
          information: 'WCTmm-234号产品将于本月9号正式上......',
          name: 'Admin',
          date: '2016-05-02',
          
          job: ' 编辑',
          
        },
         {
          title: '产品上新通知',
          information: 'WCTmm-234号产品将于本月9号正式上......',
          name: 'Admin',
          date: '2016-05-02',
          
          job: ' 编辑',
          
        },
         {
          title: '产品上新通知',
          information: 'WCTmm-234号产品将于本月9号正式上......',
          name: 'Admin',
          date: '2016-05-02',
          
          job: ' 编辑',
          
        },
         {
          title: '产品上新通知',
          information: 'WCTmm-234号产品将于本月9号正式上......',
          name: 'Admin',
          date: '2016-05-02',
          
          job: ' 编辑',
          
        }, {
          title: '产品上新通知',
          information: 'WCTmm-234号产品将于本月9号正式上......',
          name: 'Admin',
          date: '2016-05-02',
          
          job: ' 编辑',
          
        }, {
          title: '产品上新通知',
          information: 'WCTmm-234号产品将于本月9号正式上......',
          name: 'Admin',
          date: '2016-05-02',
          
          job: ' 编辑',
          
        },]
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
        
        

      tanchuchuangkou2() {
        this.$alert('删除后无法恢复，确定删除此信息吗？', '删除确认', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
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
   height:640px;
}
.box1003{
  position: absolute;
  width: 1000px;
  height: 640px;
  left: 320px;
  top: 0px;

  background-color: white;
  z-index: 3;
  border-radius: 4px;

}
.block002{
  /* background-color: rgb(216, 216, 216); */
  margin: 0px 0px 0px 15px;
  display: inline-block;
}
.box1004{
position: absolute;
top: 15px;

}
.box1005{
position: absolute;
left: 640px;
  top: 15px;
}

#app2{
   
     display:inline;
    margin: 0px 10px 0px;
    
  
}
.demo-input-suffix11{
  display:inline;
    margin: 0px 10px 0px;
}
.box10015{
  position:absolute;
  left: 300px;
  top: 15px;
}
.box10014{
position: absolute;
left: 15px;
top: 60px;
width: 965px;
height: 550px;
background-color: white;
border-radius: 4px;

}
 #app03{
     display:inline-block;
    margin: 0px 10px 0px;
    position: relative;
    z-index: 999;
  }


  .dibu002{
    position: relative;
    left: -670px;
  }
</style>