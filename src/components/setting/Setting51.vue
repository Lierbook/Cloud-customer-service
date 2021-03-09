<template>
    <div class="workspace">
 <div class="box23002">
<el-row class="tac23">
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

    <div class="all"  style="margin-left:320px">
    <div class="header"  style="width: 1040px ">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>

      <el-date-picker
        style="width: 280px; margin-left: 20px"
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="请选择日期"
        end-placeholder="请选择日期"
      >
      </el-date-picker>

      <el-input
        style="width: 150px; margin-left: 10px"
        v-model="input"
        placeholder="请输入操作人信息"
      ></el-input
      >
      <el-button style="width: 60px" type="primary">搜索</el-button>
      <el-button style="width: 120px; float:right ">导出当前数据</el-button>
    

  <div class="table">
    <el-table
      :data="visitors"
      style="width: 1040px; margin-top: 10px;    "
    >
      <el-table-column prop="name" label="操作人" width="133" height="56px">
      </el-table-column>
      <el-table-column prop="origin" label="操作动作" width="207">
      </el-table-column>
      <el-table-column prop="symple" label="操作对象" width="207">
      </el-table-column>
      <el-table-column prop="time" label="操作时间" width="207">
      </el-table-column>
      <el-table-column prop="symple" label="操作ip" width="207">
      </el-table-column>
    </el-table>

  
    </div>

    </div>
    </div>
  </div>
</template>

<script>
export default {
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
        },

    

  data: function () {
      
    return {
      visitors: [
        {
          name: "七尾",
          origin: "新增工单",
          symple: "工单标题;客户报价",
          time: "2019/9/12 10:99",
          ip: "132.224.22.2",
        },

        {
          name: "七尾",
          origin: "新增工单",
          symple: "工单标题;客户报价",
          time: "2019/9/12 10:99",
          ip: "132.224.22.2",
        },
        {
          name: "七尾",
          origin: "新增工单",
          symple: "工单标题;客户报价",
          time: "2019/9/12 10:99",
          ip: "132.224.22.2",
        },
        {
          name: "七尾",
          origin: "新增工单",
          symple: "工单标题;客户报价",
          time: "2019/9/12 10:99",
          ip: "132.224.22.2",
        },
        {
          name: "七尾",
          origin: "新增工单",
          symple: "工单标题;客户报价",
          time: "2019/9/12 10:99",
          ip: "132.224.22.2",
        },
        {
          name: "七尾",
          origin: "新增工单",
          symple: "工单标题;客户报价",
          time: "2019/9/12 10:99",
          ip: "132.224.22.2",
        },
        {
          name: "七尾",
          origin: "新增工单",
          symple: "工单标题;客户报价",
          time: "2019/9/12 10:99",
          ip: "132.224.22.2",
        },
        {
          name: "七尾",
          origin: "新增工单",
          symple: "工单标题;客户报价",
          time: "2019/9/12 10:99",
          ip: "132.224.22.2",
        },
        {
          name: "七尾",
          origin: "新增工单",
          symple: "工单标题;客户报价",
          time: "2019/9/12 10:99",
          ip: "132.224.22.2",
        },
        {
          name: "七尾",
          origin: "新增工单",
          symple: "工单标题;客户报价",
          time: "2019/9/12 10:99",
          ip: "132.224.22.2",
        },
      ],
    };
    
  },
  
  created: function () {
    this.$axios.get("http://192.168.9.251:3000/visitors").then((resp) => {
      this.visitors = resp.data.visitors;
    });
  },
};
</script>

<style scoped>

 

.visitor-el-table{

left: 230px;
}
 .workspace{
     position: relative;
     top: 80px;
     left: 60px;
    
 }   
    
  .box23002{

   position: absolute;
    left: 1px;
    top: 0px;
    z-index: 2;
    width: 300px;
    height: 600px;
     background-color:white; 
  
   border-radius: 4px;
}
.tac23{
  overflow:scroll;
   width:300px; 
   height:640px;
}

   .header{
     background-color: white;
     height: 80px;
   }
  

</style>