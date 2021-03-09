<template>
<div class="workspace">
 <div class="box3">
  <el-page-header @back="goBack" >  
</el-page-header>
<el-row class="row">
  <el-button type="primary">创建工单</el-button>
  <el-button type="delete">删除客户</el-button>
  <el-button type="block">拉黑客户</el-button>
</el-row>
</div>
 <div class=" box1">
  <div slot="header" class="clearfix">
    <span >客户信息</span>
  <div class="item">
       <!-- <el-button type="text" style="float:right"  @click="gotolink">编辑</el-button> -->
      <i class="el-icon-edit"></i>
      <div class="bianji">
       <el-button type="text" @click="dialogFormVisible = true" class="bianji">编辑</el-button></div>
<el-dialog title="编辑客户信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="客户名称" :label-width="formLabelWidth">
      <el-input v-model="form.user" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="真实姓名" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="客户电话" :label-width="formLabelWidth">
      <el-input v-model="form.tele" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="客户邮箱" :label-width="formLabelWidth">
      <el-input v-model="form.email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="客户公司" :label-width="formLabelWidth">
      <el-input v-model="form.company" autocomplete="off"></el-input>
    </el-form-item>

     <el-form-item label="客户地址" :label-width="formLabelWidth">
      <el-input v-model="form.address" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="客户等级" :label-width="formLabelWidth">
      <el-select v-model="form.grade" placeholder="请选择">
        <el-option label="普通用户" value=""></el-option>
        <el-option label="VIP用户" value=""></el-option>
          <el-option label="潜在用户" value=""></el-option>
      </el-select>
       </el-form-item>

     <el-form-item label="客户来源" :label-width="formLabelWidth">
      <el-select v-model="form.origin" placeholder="请选择">
        <el-option label="客服录入" value=""></el-option>
        <el-option label="网页介入" value=""></el-option>
      </el-select> 
    </el-form-item>
    <div class="xuanze">
    <el-form-item label="选择标签" >
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="潜在客户" name="type" ></el-checkbox>
      <el-checkbox label="上市公司" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item></div>
    <div class="xuanze">
   <el-form-item label="客户备注" style="width:600px">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
</div>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button @click="dialogFormVisible = false">清空</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
  </div>
</el-dialog>
</div>
 <div class="content">
  <div v-for="name in 1" :key="name" class="text item">
    {{'客户名称:  北京市客户'}}
  </div>
  <div v-for="name in 1" :key="name" class="text item">
    {{'客户姓名:  王伟'}}
  </div>
  <div v-for="tele in 1" :key="tele" class="text item">
    {{'客户电话:  ——'}}
  </div>
  <div v-for="email in 1" :key="email" class="text item">
    {{'客户邮箱:  ——'}}
  </div>
  <div v-for="name in 1" :key="name" class="text item">
    {{'客户公司:  ——'}}
  </div>
  <div v-for="address in 1" :key="address" class="text item">
    {{'客户地址:  ——'}}
  </div>
  <div v-for="name in 1" :key="name" class="text item">
    {{'客户等级:  普通用户'}}
  </div>
   <div v-for="origin in 1" :key="origin" class="text item">
    {{'客户来源:  ——'}}
  </div>
   <div v-for="desc in 1" :key="desc" class="text item">
    {{'客户备注:  ——'}}
  </div>
  <div v-for="type in 1" :key="type" class="text item">
    {{'客户标签:'}}
    <el-tag >已上市</el-tag>
     <el-tag >潜在客户</el-tag>
  </div>
  <el-divider></el-divider>
  <div v-for="type in 1" :key="type" class="text item">
    {{'创建时间:  2020/09/08 10:33'}}
  </div>
  <div v-for="type in 1" :key="type" class="text item">
    {{'更新于:  2020/09/08 10:33'}}
  </div>
  <div v-for="type in 1" :key="type" class="text item">
    {{'最后登录:  2020/09/08 10:33'}}
    </div>
  </div>
</div>
 </div>

<div class="box2">
<div class="name">王伟
      </div>
    <div class="biaoqian">
  <el-tab class="activeName">
   <el-tabs v-model="activeName" @tab-click="handleClick">
     <el-row class="button">
  <el-button size="mini" type="all" round>全部</el-button>
  <el-button size="mini" type="week" round>本周</el-button>
  <el-button size="mini" type="month" round>本月</el-button>
  <el-button size="mini" type="lastmonth" round>上月</el-button>
</el-row>

    <el-tab-pane label="历史会话" name="first">
        <div class="biaodan">
          <el-table
      :data="tableData1"
      style="width: 90%">
      <el-table-column
        prop="time"
        label="访问时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="origin"
        label="来源"
        width="100">
      </el-table-column>
      <el-table-column
        prop="serve"
        label="客服"
         width="100">
      </el-table-column>
      <el-table-column
        prop="group"
        label="受理客服组"
         width="100">
      </el-table-column>
      <el-table-column
        prop="long"
        label="访问时长"
         width="100">
      </el-table-column>
      <el-table-column
        prop="satis"
        label="满意度"
         width="100">
      </el-table-column>
    </el-table>
        </div>
    </el-tab-pane>
    <el-tab-pane label="历史工单" name="second">
      <el-table
      :data="tableData2"
      style="width: 95%">
      <el-table-column
        prop="id"
        label="工单ID"
        width="80">
      </el-table-column>
      <el-table-column
        prop="title"
        label="工单标题"
        width="100">
      </el-table-column>
      <el-table-column
        prop="qudao"
        label="工单渠道">
      </el-table-column>
      <el-table-column
        prop="state"
        label="工单状态"
         width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="客户姓名"
         width="90">
      </el-table-column>
      <el-table-column
        prop="time"
        label="最后更新时间"
         width="110">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="操作"
         width="100"><el-button type="text" @click="open2">查看详情</el-button>
      </el-table-column>
    </el-table>

    </el-tab-pane>
    <el-tab-pane label="拉黑记录" name="third">
      <el-table
      :data="tableData3"
      style="width: 90%">
      <el-table-column
        prop="time"
        label="拉黑时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="serve"
        label="操作客服"
        width="100">
      </el-table-column>
      <el-table-column
        prop="origin"
        label="拉黑来源"
        width="100">
      </el-table-column>
      <el-table-column
        prop="reason"
        label="拉黑原因"
        width="100">
      </el-table-column>
    </el-table>



    </el-tab-pane>
  </el-tabs>
  </el-tab>

</div>

</div>
</div>
</template>

<script>
export default {
   data() {
      return {
          tableData1: [{
            time: '2020-05-02 10:33',
            origin: '微信',
            serve: '客服小美',
            group:'未分配',
            long:'8分45秒',
            satis:'5',
          }, {
           time: '2020-05-02 10:33',
            origin: '微信',
            serve: '客服小美',
            group:'未分配',
            long:'8分45秒',
            satis:'5',
          }, {
           time: '2020-05-02 10:33',
            origin: '微信',
            serve: '客服小美',
            group:'未分配',
            long:'8分45秒',
            satis:'5',
          }, {
            time: '2020-05-02 10:33',
            origin: '微信',
            serve: '客服小美',
            group:'未分配',
            long:'8分45秒',
            satis:'5',
          },
          {
            time: '2020-05-02 10:33',
            origin: '微信',
            serve: '客服小美',
            group:'未分配',
            long:'8分45秒',
            satis:'5',
          }],
tableData2: [
            {
              id:'32533819',
              title:'客户报价',
              qudao:'客服录入',
              state:'未录入',
              name:'李永乐',
              time:'2020-03-09 10:55',
              
            },
             {
              id:'32533819',
              title:'客户报价',
              qudao:'客服录入',
              state:'未录入',
              name:'李永乐',
              time:'2020-03-09 10:55',
              
            },
             {
              id:'32533819',
              title:'客户报价',
              qudao:'客服录入',
              state:'未录入',
              name:'李永乐',
              time:'2020-03-09 10:55',
             
            },
             {
              id:'32533819',
              title:'客户报价',
              qudao:'客服录入',
              state:'未录入',
              name:'李永乐',
              time:'2020-03-09 10:55',
             
            },
             {
              id:'32533819',
              title:'客户报价',
              qudao:'客服录入',
              state:'未录入',
              name:'李永乐',
              time:'2020-03-09 10:55',
            },
          ],
       tableData3: [{
         time:'2020-03-09 10:55',
         serve:'客服美丽',
         origin:'客服中心',
         reason:'多次辱骂客服',
       },
       {
         time:'2020-03-09 10:55',
         serve:'客服美丽',
         origin:'客服中心',
         reason:'多次辱骂客服',
       },
       {
         time:'2020-03-09 10:55',
         serve:'客服美丽',
         origin:'客服中心',
         reason:'多次辱骂客服',
       },
       {
         time:'2020-03-09 10:55',
         serve:'客服美丽',
         origin:'客服中心',
         reason:'多次辱骂客服',
       },
       {
         time:'2020-03-09 10:55',
         serve:'客服美丽',
         origin:'客服中心',
         reason:'多次辱骂客服',
       }
       ],

        activeName: 'second',
        dialogFormVisible: false,
        form: {
           user:'',
          name: '',
          tele: '',
          email: '',
          company: '',
          adress: '',
          grade:'',
          origin:'',
          type: [],
          desc: '',
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      // handleClick(tab, event) {
      //   console.log(tab, event);
      // },
      goBack() {
        console.log('go back');
         this.$router.push('/main/customer')
      },
     },
    
  };

</script>

<style scoped>

.clearfix{
  font-size: 18px;
  position: relative;
  top: 10px;
  left: 10px;
}
.text {
    font-size: 14px;
  }
.content{
  
  right:300px ;
  bottom: 10px;
}
  .item {
  margin-bottom: 18px;
    color:#4e4545cb;
    
   
    left: 310px;
    
  }



  .box1 {
    box-sizing: border-box;
    position: absolute;
    z-index: 9;
    width: 370px;
    height: 630px;
    left: 20px;
    background-color: white;
  }
  .box2{
    width: 700px;
    height: 600px;
    position: relative;
    z-index: 0;
    left: 409px;
    top: 25px;
    background-color:  white;

}
/* .item{
  position: relative;
  
  left: 100px;
  top: -50px;

} */

.el-icon-edit{
  position: relative;
  top: -30px;
  left: 250px;
}


  .box3{
    width: 100%;
    height: 50px;
    
    bottom: 1110px;
    left:70px;
   background-color:#fff;

    
  }
  .activeName{
    /* position: relative; */
    left: 50px;
    bottom:-50px; 
   }
 .name{
      font-family: "PingFang SC"sans-serif;
      font-size: 30px;
      /* left: -400px; */
      position: relative;
      left: 40px;
      top: 25px;
  }
  
  .row{
    
    left: 850px;
  top: -20px;
  }

  .workspace{
    position: relative;
    top: 100px;
    left: 100px;
  }
  .bianji{
     position: relative;
     width: 100px;
  top: -30px;
  left: 120px;
  }

  /* .content{
    position: relative;
    top: -50px;
  } */

  .content[data-v-952f7e3c]{
    position: relative;
    top: -35px;
    left: 10px;
  }

  .biaoqian{
    position: relative;
    top: 45px;
    left: 20px;
  }

  .checkbox-group{
    position: relative;
    left: 30px;
  }

  .xuanze{
    position: relative;
    left: 45px;
  }
  /* .biaodan{
    width: 800px;
  } */
</style>