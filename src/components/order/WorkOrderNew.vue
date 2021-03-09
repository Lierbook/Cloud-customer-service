<template>

    <div class="box12">
         <div class="workspace-title">{{title}}</div>
  <el-button-group class="button01">
  <el-button type="info" plain  icon="el-icon-arrow-left"  @click="gotolinkback">返回</el-button>
  <el-button-group class="button02">
        <el-button type="primary" style=" margin: 0px 10px 0px;">主要按钮</el-button>
          <el-button type="primary" style=" margin: 0px 10px 0px;">主要按钮</el-button>
            <el-button type="primary" style=" margin: 0px 10px 0px;">主要按钮</el-button>
  </el-button-group>
</el-button-group>
<div class="box13">
    <div class="box14">
<p class="title01">客户报价</p>
<p>客户需要型号SU-CC8990的产品的详细报价，请速联系。</p>
<el-input
  type="textarea" 
  :rows="8"
  placeholder="请输入内容"
  v-model="textarea" style="width=200px, background-color:red">
</el-input>
<i class="el-icon-document-add
" style="width:10px, height:10px " >
</i>

<p class="text02" style="color:blue " >添加附件（最多上传5个附件，单个文件最大20M)</p>

<div class="button003">
 <el-button type="primary">回复</el-button>
 </div>
<div class="windows">
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
         <div class="juli01">
      <img src="./001.jpg" alt="" class="avatar1">
          <div class="title002" >
              <span style="color:blue" >客服小美</span>
              <span class="text001">2020/06/09 20:09</span>
              <!-- <p class="title003" style="display:inline "> 2020/06/09 20:09</p> -->
          <p clsss="text004" style=" margin: -10px 0px 0px 50px; width: 780px; ">收到，这个报价市场部的同时还没有出，预计下周完成。收到，这个报价市场部的同时还没有出，预计下周完成。收到，这个报价市
            场部的同时还没有出，预计下周完成。</p>
          </div>
          
      
    </div>
   
    
       <div>
      <img src="./001.jpg" alt="" class="avatar1">
          <div class="title002">
              <span style="color:blue" >客服小美</span>
              <span class="text001">2020/06/09 20:09</span>
              <!-- <p class="title003" style="display:inline "> 2020/06/09 20:09</p> -->
          <p clsss="text004" style=" margin: -10px 0px 0px 50px;  width: 780px;">收到，这个报价市场部的同时还没有出，预计下周完成。收到，这个报价市场部的同时还没有出，预计下周完成。收到，这个报价市
            场部的同时还没有出，预计下周完成。</p>
          </div>
          
      
    </div>

  <div>
      <img src="./001.jpg" alt="" class="avatar1">
          <div class="title002">
              <span style="color:blue" >客服小美</span>
              <span class="text001">2020/06/09 20:09</span>
              <!-- <p class="title003" style="display:inline "> 2020/06/09 20:09</p> -->
          <p clsss="text004" style=" margin: -10px 0px 0px 50px;  width: 780px;">收到，这个报价市场部的同时还没有出，预计下周完成。收到，这个报价市场部的同时还没有出，预计下周完成。收到，这个报价市
            场部的同时还没有出，预计下周完成。</p>
          </div>
          
      
    </div>

  <div>
      <img src="./001.jpg" alt="" class="avatar1">
          <div class="title002">
              <span style="color:blue" >客服小美</span>
              <span class="text001">2020/06/09 20:09</span>
              <!-- <p class="title003" style="display:inline "> 2020/06/09 20:09</p> -->
          <p clsss="text004" style=" margin: -10px 0px 0px 50px;  width: 780px;">收到，这个报价市场部的同时还没有出，预计下周完成。收到，这个报价市场部的同时还没有出，预计下周完成。收到，这个报价市
            场部的同时还没有出，预计下周完成。</p>
          </div>
          
      
    </div>

    

    
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <div>
      <img src="./001.jpg" alt="" class="avatar1">
          <div class="title002">
              <span style="color:blue" >客服小美</span>
              <span class="text001">2020/06/09 20:09</span>
              <!-- <p class="title003" style="display:inline "> 2020/06/09 20:09</p> -->
          <p clsss="text004" style=" margin: -10px 0px 0px 50px;">创建了工单。</p>
          </div>
          
      
    </div>
     <div>
      <img src="./001.jpg" alt="" class="avatar1">
          <div class="title002">
              <span style="color:blue" >客服小美</span>
              <span class="text001">2020/06/09 20:09</span>
              <!-- <p class="title003" style="display:inline "> 2020/06/09 20:09</p> -->
          <p clsss="text004" style=" margin: -10px 0px 0px 50px;">创建了工单。</p>
          </div>
          
      
    </div>
 <div>
      <img src="./001.jpg" alt="" class="avatar1">
          <div class="title002">
              <span style="color:blue" >客服小美</span>
              <span class="text001">2020/06/09 20:09</span>
              <!-- <p class="title003" style="display:inline "> 2020/06/09 20:09</p> -->
          <p clsss="text004" style=" margin: -10px 0px 0px 50px;">创建了工单。</p>
          </div>
          
      
    </div>
     <div>
      <img src="./001.jpg" alt="" class="avatar1">
          <div class="title002">
              <span style="color:blue" >客服小美</span>
              <span class="text001">2020/06/09 20:09</span>
              <!-- <p class="title003" style="display:inline "> 2020/06/09 20:09</p> -->
          <p clsss="text004" style=" margin: -10px 0px 0px 50px;">创建了工单。</p>
          </div>
          
      
    </div>
     <div>
      <img src="./001.jpg" alt="" class="avatar1">
          <div class="title002">
              <span style="color:blue" >客服小美</span>
              <span class="text001">2020/06/09 20:09</span>
              <!-- <p class="title003" style="display:inline "> 2020/06/09 20:09</p> -->
          <p clsss="text004" style=" margin: -10px 0px 0px 50px;">创建了工单。</p>
          </div>
          
      
    </div>

    </el-tab-pane>
  </el-tabs>
 
</div>

</div>
</div>
<div class="box23">
<div class="box24">
<p class="text003">工单信息</p>
<div class="textdiv">
<span class="texthand">工单分类</span>
<span class="textbody">分类一</span>
</div>

<div class="textdiv">
<span class="texthand">抄送人 </span>
<span class="textbody">王涛，吴敏儿</span>
</div>

<div class="textdiv">
<span class="texthand">优先级</span>
<span class="textbody">低</span>
</div>

<div class="textdiv">
<span class="texthand">工单状态 </span>
<span class="textbody">处理中</span>
</div>

<div class="textdiv">
<span class="texthand">受理客服组</span>
<span class="textbody">客服组一</span>
</div>

<div class="textdiv">
<span class="texthand">受理客户</span>
<span class="textbody">王先生</span>
</div>

<div class="textdiv">
<span class="texthand">创建时间</span>
<span class="textbody">2020/06/09 20:09</span>
</div>

<div class="textdiv">
<span class="texthand">更新时间  </span>
<span class="textbody">2020/06/09 20:09</span>
</div>





</div>
<el-divider content-position="right" type="small"></el-divider>
<div class="box25">
    <div class="bianji">
<p class="text003">客户信息</p>
<div class="bianji01">
<i class="el-icon-document-add 
" style="width:10px, height:10px  " >
</i>

<span class="text0001"  @click="dialogFormVisible = true">编辑</span>
     <el-dialog title="客户信息" :visible.sync="dialogFormVisible"   width="30%" center append-to-body >
  <el-form :model="form">
    <el-form-item label="客户名称" :label-width="formLabelWidth" >
      <el-input v-model="input" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="真实姓名" :label-width="formLabelWidth" >
      <el-input v-model="input" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户电话" :label-width="formLabelWidth" >
      <el-input v-model="input" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户邮箱" :label-width="formLabelWidth" >
      <el-input v-model="input" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户公司" :label-width="formLabelWidth" >
      <el-input v-model="input" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="客户地址" :label-width="formLabelWidth" >
      <el-input v-model="input" autocomplete="off" placeholder="请输入内容"></el-input>
    </el-form-item>

    <el-form-item label="客户等级" :label-width="formLabelWidth">
      <el-select v-model="form.region2" placeholder="客户等级">
        <el-option label="LV1" value="shanghai"></el-option>
        <el-option label="LV2" value="beijing"></el-option>
        <el-option label="LV3" value="beijing"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="客户来源" :label-width="formLabelWidth">
      <el-select v-model="form.region1" placeholder="客户来源">
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
</div>
<div class="textdiv">
<span class="texthand">客户名称</span>
<span class="textbody">北京市客户</span>
</div>

<div class="textdiv">
<span class="texthand">真实姓名 </span>
<span class="textbody">王伟</span>
</div>

<div class="textdiv">
<span class="texthand">客户电话</span>
<span class="textbody">123456</span>
</div>

<div class="textdiv">
<span class="texthand">客户邮箱 </span>
<span class="textbody">处理中</span>
</div>

<div class="textdiv">
<span class="texthand">客户公司</span>
<span class="textbody">客服组一</span>
</div>

<div class="textdiv">
<span class="texthand">客户地址</span>
<span class="textbody">王先生</span>
</div>

<div class="textdiv">
<span class="texthand">客户等级</span>
<span class="textbody">普通客户</span>
</div>

<div class="textdiv">
<span class="texthand">客户来源  </span>
<span class="textbody">访客转化</span>
</div>
<div class="textdiv">
<span class="texthand">客户备注  </span>
<span class="textbody">访客转化</span>
</div>
<div class="textdiv">
<span class="texthand">客户标签  </span>
<div class="warning">
    <div class="biaoqian"><el-tag type="danger">已上市</el-tag></div>
    <div class="biaoqian"><el-tag type="danger">潜在客户</el-tag></div>

</div>

<!-- <span class="textbody">访客转化</span> -->
</div>

</div>

</div>
</div>

</template>

<script>
export default {
     data() {
      return {
           title:'',
        activeName: 'second',

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
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
       gotolinkback(){
 
          //点击跳转至上次浏览页面
         this.$router.go(-1)
 
         
        }
    }

}
</script>

<style scoped>

.box12{
    position: absolute;
    left: 74px;
    top: 74px;
    z-index: 0;
    width: 1400px;
    height: 600px;
    /* background-color: rgba(0, 110, 255, 0.0980392156862745); */

    padding: 21px 20px;
}
.box13{
    position: absolute;
    left: 10px;
    top: 60px;
    z-index: 2;
    width: 965px;
    height: 750px;
     background-color:white; 
   border-radius: 2px;

}
.button01{
    position: relative;
    left: -15px;
    top: -15px;
    width:970px;
    height: 50px;
    /* background-color: rgba(0, 110, 255, 0.0980392156862745); */
}
.button02{
    position: relative;
    left: 530px; 
}
.title01{
 font-family:'PingFangHK-Medium', 'PingFang HK Medium', 'PingFang HK', sans-serif;
  font-weight:500; 
  font-size: 27px;
  /* position: relative;
  left: 25px;
  top: 5px; */


}
.title002{
     display:inline ;
     margin: 10px 0 0 0;
     
}
.box14{
     position: relative;
      width:900px;
  left: 25px;
  top: 5px;
  motion: 0 0 0 0;
}
el-input{
    background-color:red}
    .input01:active{
         background-color:white
    }
    .text02{
      display:inline 
    }
    .button003{
        margin: 10px 5px;
    }
    .title002{
        position: relative;
        left: 50px;
        top: -10px;
        z-index: 9;
        margin: 10px 0 0 0;

    }
    .avatar1 {
    width: 50px;height: 50px;
    border-radius: 50%;
    /* margin: 12px; */
    vertical-align: middle;
    position: relative;
    z-index: 99;
  }
  /* .title002>.title003{
     display: inline-block;
  } */
  .text001{
      font-size: 10px;
      color: rgb(104, 104, 104);
  }
  .text004{
      position: relative;
      z-index: 10;
      left: 20px;
      top: -10px;
     /* width: 100px; */
      /* margin: 0px 0px 0px 20px; */
  }


  .box23{
      position: relative;
      z-index: 5;
      left: 1000px;
      top: -28px;
      width: 350px;
      height: 750px;
        border-radius: 2px;
      background-color: white;
      
   
  }
  .box24{
      position: relative;
      left: 20px;
      top: 10px;
      
  }
  .box25{
     position: relative;
      left: 20px;
      top: 10px;  
      
  }

  .text003{
 /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
  font-weight:500; 
  font-size: 17px;
      
  }

  .textdiv{

      margin: 10px 0px;
  }

  .texthand{
      color: rgb(138, 136, 136);
      font-size: 13px;
     display: inline-block;
      /* margin: 0px 30px 0px 0px; */
      /* float: left; */
  }
  .textbody{
      display: inline-block;
      position: absolute;
      left: 100px;
      font-size: 13px;
      /* float: left; */
  }

  .bianji{
      
 display:inline-block ;
 /* color: blue; */
 
 

  }
  .text0001{
    

      color: blue;
  }
  .bianji01{
      position:absolute;
      left: 250px;
      top: 20px;
  }

  .warning{
      display: inline-block;
      margin: 0px 20px 0px 20px;
  }
  .biaoqian{
      margin: 0px 0px 0px 20px;
      display: inline-block;
  }

  .juli01{
    
  }
 
</style>