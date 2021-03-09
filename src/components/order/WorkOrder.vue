<template>
  <div class="box1">
      <el-container style="height: 800px; width:200px border: 1px solid #eee">
        <div class="kuan">
        <el-tabs tabPosition="left" type="border-card" style="height:800px;">
  <el-tab-pane>
    <span slot="label" >
      <!-- <i class="el-icon-date"  ></i>  -->
      全部工单</span>
   
    <el-container>
    <el-header style="text-align: right; font-size: 12px">

<!-- style="width:1000px; height:auto;" -->
      <div id="app1">
      <el-button type="primary" @click="dialogFormVisible = true" class="headbutton" >新建客户信息</el-button>
      <el-dialog title="客户信息" :visible.sync="dialogFormVisible"   width="30%" center append-to-body >
  <el-form :model="form">
    <el-form-item label="客户名称" :label-width="formLabelWidth" id="shuru1">
      <el-input v-model="form.input11" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="真实姓名" :label-width="formLabelWidth" id="shuru2">
      <el-input v-model="form.input22" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户电话" :label-width="formLabelWidth"  id="shuru3">
      <el-input v-model="form.input33" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户邮箱" :label-width="formLabelWidth"  id="shuru4">
      <el-input v-model="form.input44" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户公司" :label-width="formLabelWidth"  id="shuru5">
      <el-input v-model="form.input55" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户地址" :label-width="formLabelWidth"  id="shuru6">
      <el-input v-model="form.input66" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>

    <el-form-item label="客户等级" :label-width="formLabelWidth">
      <el-select v-model="form.region1" placeholder="客户等级">
        <el-option label="LV1" value="shanghai"></el-option>
        <el-option label="LV2" value="beijing"></el-option>
        <el-option label="LV3" value="beijing"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="客户来源" :label-width="formLabelWidth">
      <el-select v-model="form.region2" placeholder="客户来源">
        <el-option label="客服录入" value="shanghai"></el-option>
        <el-option label="网页介入" value="beijing"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="选择标签" :label-width="formLabelWidth">
       <el-checkbox-group v-model="checkList">
    <el-checkbox label="潜在客户" ></el-checkbox>
    <el-checkbox label="上市公司"></el-checkbox>
   
  </el-checkbox-group>
        </el-form-item>
         <el-form-item label="客户备注" :label-width="formLabelWidth">
           <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
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
     <el-button class="headbutton">修改批量状态</el-button>
     <div id="app1">
     <el-button class="headbutton">导出工单</el-button>
    </div> </div>





      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-button type="primary">保存</el-button>
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>程潇</span>
    </el-header>
    
    <el-main >
      <div class="table" style="magin=10px; float=left">
      <el-dropdown size="medium" split-button type="primary"  >
  状态
  <el-dropdown-menu slot="dropdown"  >
    <el-dropdown-item>全部状态</el-dropdown-item>
    <el-dropdown-item>未分配</el-dropdown-item>
    <el-dropdown-item>待处理</el-dropdown-item>
    <el-dropdown-item>处理中</el-dropdown-item>
    <el-dropdown-item>已解决</el-dropdown-item>
    <el-dropdown-item>已关闭</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</div>

 <div class="table" style="magin=10px; ">
<el-dropdown size="medium" split-button type="primary">
  优先级
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>全部优先级</el-dropdown-item>
    <el-dropdown-item>低</el-dropdown-item>
    <el-dropdown-item>中</el-dropdown-item>
    <el-dropdown-item>高</el-dropdown-item>
    <el-dropdown-item>紧急</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</div>

<div class="table">
<el-dropdown size="medium" split-button type="primary">
  分类
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item> 全部分类</el-dropdown-item>
    <el-dropdown-item>分类一</el-dropdown-item>
    <el-dropdown-item>分类二</el-dropdown-item>
    <el-dropdown-item>分类三</el-dropdown-item>
   
  </el-dropdown-menu>
</el-dropdown></div>

<div class="table">
<el-dropdown size="medium" split-button  plain>
  渠道
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item> 全部渠道</el-dropdown-item>
    <el-dropdown-item>手动录入</el-dropdown-item>
    <el-dropdown-item>即时聊天</el-dropdown-item>
    <el-dropdown-item>客户管理</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown></div>

<div class="table">
<el-dropdown size="medium" split-button plain>
  全部客服组
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>全部</el-dropdown-item>
    <el-dropdown-item>客服组一</el-dropdown-item>
    <el-dropdown-item>客服组二</el-dropdown-item>
    <el-dropdown-item>客服组三</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown></div>

<div class="table">
<el-dropdown size="medium" split-button  round >
  全部客服
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>张三</el-dropdown-item>
    <el-dropdown-item>李四</el-dropdown-item>
    <el-dropdown-item>王五</el-dropdown-item>
    <el-dropdown-item>王某某</el-dropdown-item>
    <el-dropdown-item>周某</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
 
    
       <div class="block">
    <span class="demonstration" style="float:left;"></span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
      
    </el-date-picker>
    <!-- <i class="el-icon-edit" style="position: relative; left:240px"></i> -->
   <el-button icon="el-icon-search" circle style="position: relative; left:610px"></el-button>

  </div>
  <div class="form.input010" style=" width:200px ;position: relative; top:-49px; left:900px; float:left;">
    <el-input v-model="form.input" placeholder="搜索" >
      
    </el-input>
    
    
    <!-- <el-button type="primary" plain icon="el-icon-search" style=" position: relative; top:-40px; left:200px; float:left;" >搜索</el-button> -->
 
  </div>



 
       </div> 
      
      
      <el-table   stripe
       height="500"
        ref="multipleTable" :data="tableData" 
    tooltip-effect="dark"
    style="width: 100%" @selection-change="handleSelectionChange">
        <!-- <el-table-column  width="140">
                  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                  
        </el-table-column> -->

    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column prop="id" label="工单id" width="100" >        
       </el-table-column>
        <el-table-column prop="title" label="工单标题" width="100">
        </el-table-column>
        <el-table-column prop="way" label="工单渠道" width="110">
        </el-table-column>
       
        <el-table-column class="zt" prop="zt" label="工单状态" width="100" style="border:2px solid red"  >

          <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>工单状态: {{ scope.row.zt }}</p>
          
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.zt }}</el-tag>
          </div>
        </el-popover>
       
      </template>
        </el-table-column>
       
        <el-table-column prop="date" label="日期" width="110">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
         <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button 
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row, open)" >删除</el-button>
      </template>
    </el-table-column>
    
      </el-table>
      <div class="dibuw">
      <el-pagination
      
  background
  layout="prev, pager, next"
  :total="1000" style="margin: 0px 0 0px;">
</el-pagination>

</div>
    </el-main>
  </el-container>
  </el-tab-pane>
  <el-tab-pane label="待我处理的">
     <el-container>
    <el-header style="text-align: right; font-size: 12px">

<!-- style="width:1000px; height:auto;" -->
      <div id="app1">
      <el-button type="primary" @click="dialogFormVisible = true" class="headbutton" >新建客户信息</el-button>
      <el-dialog title="客户信息" :visible.sync="dialogFormVisible"   width="30%" center  append-to-body >
  <el-form :model="form">
    <el-form-item label="客户名称"  :label-width="formLabelWidth">
      <el-input v-model="form.input1" placeholder="请输入内容" ></el-input>
    </el-form-item>
    <el-form-item label="真实姓名" :label-width="formLabelWidth" >
      <el-input v-model="form.input2" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户电话" :label-width="formLabelWidth" >
      <el-input v-model="form.input3" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户邮箱" :label-width="formLabelWidth" >
      <el-input v-model="form.input4" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户公司" :label-width="formLabelWidth" >
      <el-input v-model="form.input5" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户地址" :label-width="formLabelWidth" >
      <el-input v-model="form.input6" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>

    <el-form-item label="客户等级" :label-width="formLabelWidth">
      <el-select v-model="form.region3" placeholder="客户等级">
        <el-option label="LV1" value="shanghai"></el-option>
        <el-option label="LV2" value="beijing"></el-option>
        <el-option label="LV3" value="beijing"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="客户来源" :label-width="formLabelWidth">
      <el-select v-model="form.region4" placeholder="客户来源">
        <el-option label="客服录入" value="shanghai"></el-option>
        <el-option label="网页介入" value="beijing"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="选择标签" :label-width="formLabelWidth">
       <el-checkbox-group v-model="checkList">
    <el-checkbox label="潜在客户" ></el-checkbox>
    <el-checkbox label="上市公司"></el-checkbox>
   
  </el-checkbox-group>
        </el-form-item>
         <el-form-item label="客户备注" :label-width="formLabelWidth">
           <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
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
     <el-button class="headbutton">修改批量状态</el-button>
     <div id="app1">
     <el-button class="headbutton">导出工单</el-button>
    </div> </div>





      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-button type="primary">保存</el-button>
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>张三</span>
    </el-header>
    
    <el-main >
      <div class="table" style="magin=10px; float=left">
      <el-dropdown size="medium" split-button type="primary"  >
  状态
  <el-dropdown-menu slot="dropdown"  >
    <el-dropdown-item>全部状态</el-dropdown-item>
    <el-dropdown-item>未分配</el-dropdown-item>
    <el-dropdown-item>待处理</el-dropdown-item>
    <el-dropdown-item>处理中</el-dropdown-item>
    <el-dropdown-item>已解决</el-dropdown-item>
    <el-dropdown-item>已关闭</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</div>

 <div class="table" style="magin=10px; ">
<el-dropdown size="medium" split-button type="primary">
  优先级
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>全部优先级</el-dropdown-item>
    <el-dropdown-item>低</el-dropdown-item>
    <el-dropdown-item>中</el-dropdown-item>
    <el-dropdown-item>高</el-dropdown-item>
    <el-dropdown-item>紧急</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</div>

<div class="table">
<el-dropdown size="medium" split-button type="primary">
  分类
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item> 全部分类</el-dropdown-item>
    <el-dropdown-item>分类一</el-dropdown-item>
    <el-dropdown-item>分类二</el-dropdown-item>
    <el-dropdown-item>分类三</el-dropdown-item>
   
  </el-dropdown-menu>
</el-dropdown></div>

<div class="table">
<el-dropdown size="medium" split-button  plain>
  渠道
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item> 全部渠道</el-dropdown-item>
    <el-dropdown-item>手动录入</el-dropdown-item>
    <el-dropdown-item>即时聊天</el-dropdown-item>
    <el-dropdown-item>客户管理</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown></div>

<div class="table">
<el-dropdown size="medium" split-button plain>
  全部客服组
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>全部</el-dropdown-item>
    <el-dropdown-item>客服组一</el-dropdown-item>
    <el-dropdown-item>客服组二</el-dropdown-item>
    <el-dropdown-item>客服组三</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown></div>

<div class="table">
<el-dropdown size="medium" split-button  round >
  全部客服
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>张三</el-dropdown-item>
    <el-dropdown-item>李四</el-dropdown-item>
    <el-dropdown-item>王五</el-dropdown-item>
    <el-dropdown-item>王某某</el-dropdown-item>
    <el-dropdown-item>周某</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
 
    
       <div class="block">
    <span class="demonstration" style="float:left;"></span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
      
    </el-date-picker>
    <!-- <i class="el-icon-edit" style="position: relative; left:240px"></i> -->
   <el-button icon="el-icon-search" circle style="position: relative; left:610px"></el-button>

  </div>
  <div class="form.input010" style=" width:200px ;position: relative; top:-49px; left:900px; float:left;">
    <el-input v-model="form.input" placeholder="搜索" >
      
    </el-input>
    
    
    <!-- <el-button type="primary" plain icon="el-icon-search" style=" position: relative; top:-40px; left:200px; float:left;" >搜索</el-button> -->
 
  </div>



 
       </div> 
      
      
      <el-table   stripe
       height="500"
        ref="multipleTable" :data="tableData" 
    tooltip-effect="dark"
    style="width: 100%" @selection-change="handleSelectionChange">
        <!-- <el-table-column  width="140">
                  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                  
        </el-table-column> -->

    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
        <el-table-column prop="id1" label="工单id" width="100" >        
       </el-table-column>
        <el-table-column prop="title1" label="工单标题" width="100">
        </el-table-column>
        <el-table-column prop="way1" label="工单渠道" width="110">
        </el-table-column>
       
        <el-table-column class="zt" prop="zt1" label="工单状态" width="100" style="border:2px solid red"  >

          <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>工单状态: {{ scope.row.zt }}</p>
          
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.zt }}</el-tag>
          </div>
        </el-popover>
       
      </template>
        </el-table-column>
       
        <el-table-column prop="date1" label="日期" width="110">
        </el-table-column>
        <el-table-column prop="name1" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="address1" label="地址">
        </el-table-column>
         <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button 
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row, open)" >删除</el-button>
      </template>
    </el-table-column>
    
      </el-table>
      <div class="dibuw">
      <el-pagination
      
  background
  layout="prev, pager, next"
  :total="1000" style="margin: 0px 0 0px;">
</el-pagination>

</div>
    </el-main>
  </el-container>
  </el-tab-pane>
  <el-tab-pane label="我创建的">
    
  </el-tab-pane>
  <el-tab-pane label="抄送我的">

  </el-tab-pane>
   <el-tab-pane label="我处理的">

  </el-tab-pane>
   <el-tab-pane label="我解决的">

  </el-tab-pane>
</el-tabs>

</div>


  <!-- <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-user-solid"></i>全部工单</template>
        <el-menu-item-group>
          
          <el-menu-item index="1-1">工单1</el-menu-item>
          <el-menu-item index="1-2">工单2</el-menu-item>
       
          <el-menu-item index="1-3">工单3</el-menu-item>
       
        
          
          <el-menu-item index="1-4-1">工单4</el-menu-item>
           </el-menu-item-group>
        
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-user-solid"></i>我的工单</template>
        <el-menu-item-group>
         
          <el-menu-item index="2-1">工单1</el-menu-item>
          <el-menu-item index="2-2">工单2</el-menu-item>
        </el-menu-item-group>
       
          <el-menu-item index="2-3">工单3</el-menu-item>
        
        
          <el-menu-item index="2-4-1">工单4</el-menu-item>
        </el-submenu>
      
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-user-solid"></i>新增工单</template>
        <el-menu-item-group>
         
          <el-menu-item index="3-1">工单1</el-menu-item>
          <el-menu-item index="3-2">工单2</el-menu-item>
       
       
          <el-menu-item index="3-3">工单3</el-menu-item>
       
        
          <template slot="title">工单4</template>
          <el-menu-item index="3-4-1">工单5</el-menu-item>
         </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside> -->
  

</el-container>

  </div>
</template>

<script>
export default {
    data() {
      const item = {
        


        id: '123456',
        title : '客户报价',
        way: '手动录入',
        zt: '未分配',
        date: '2016-05-02',
        name: '程潇',
        address: '淮北师范大学 9603',
         id1: '987654',
        title1 : '客户报价',
        way1: '手动录入',
        zt1: '未分配',
        date1: '2020-10-02',
        name1: '张三',
        address1: '北京师范大学 7303'
      };
      return {
         checkList: ['选中且禁用','复选框 A'],
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

        tableData: Array(20).fill(item),
        value: '',
         input: '',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
         
      },
   

     methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit() {
        this.$message('工单详情');
         this.$router.replace('WorkOrderNew');
         },
      handleDelete() {
        this.$message('已删除该工单');
         
         },
    },
    

        
  };
</script>

<style scpoed>
 .el-header {
    background-color: rgba(0, 110, 255, 0.098);
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
/* el-dropdown-item{
    margin: 10px;
    float: left;
    width: 100px;
    height: 90px;

  } */
  .table{ display:inline;
  margin: 10px 20px;
  
  } 
  .box1{
    
    position: absolute;
    left: 74px;
    top: 74px;
    z-index: 0;
    width: 1400px;
    height: 650px;
    /* background-color: #fff; */

    padding: 21px 20px;

  }

  .zt
  {
   border:2px solid red;
  }
  .block{
    margin: 10px 10px 10px;
     /* display:inline; */
     
  }

  input010{
     /* display:inline; */
    
     width: 40px;
    
  }
  #app1{
     display:inline-block;
    margin: 0px 10px 0px;
  }

  .dibuw{
     position: relative;
    left: -670px;
    width: 200px;
  }
  .kuan{
    position: relative;
    width: 1500px;
    top: -20px;
    left: -20px;
    
  }
  .el-tabs--left.el-tabs--border-card .el-tabs__item.is-left{
    padding: 0 100px 0 0;
    width: 200px;
  }
</style>