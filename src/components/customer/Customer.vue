<template>
  <div class="workplacec">
    <div class="header">
      <div class="zuoshang">
      <el-dropdown>
        <span class="el-dropdown-link">
          客户等级<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="cs in allCustomerServices" :key="cs.id">{{
            cs.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown>
        <span class="el-dropdown-link">
          全部来源<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="co in allCustomerOrigin" :key="co.id">{{
            co.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
</div>
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </div>
      <div class="search">
        <el-input placeholder="请输入关键词搜索" v-model="input">
          <template slot="append">搜索</template>
        </el-input>
      </div>
        <div class="add">
      <el-button type="text" @click="dialogFormVisible = true">添加客户</el-button>
      <el-dialog title="新建客户信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="客户名称">
      <el-input v-model="form.name6" autocomplete="off" placeholder="请输入" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="真实姓名">
      <el-input v-model="form.name5" autocomplete="off" placeholder="请输入" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="客户电话">
      <el-input v-model="form.name4" autocomplete="off" placeholder="请输入" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="客户邮箱">
      <el-input v-model="form.name3" autocomplete="off" placeholder="请输入" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="客户公司">
      <el-input v-model="form.name2" autocomplete="off" placeholder="请输入" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="客户地址">
      <el-input v-model="form.name1" autocomplete="off" placeholder="请输入" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="客户等级">
      <el-select v-model="form.region1" placeholder="请选择">
        <el-option label="普通客户" value="1"></el-option>
        <el-option label="VIP客户" value="2"></el-option>
        <el-option label="潜在客户" value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="客户来源">
      <el-select v-model="form.region2" placeholder="请选择">
        <el-option label="客服录入" value="1"></el-option>
        <el-option label="网页介入" value="2"></el-option>
      </el-select>
    </el-form-item>
    
             <el-form-item label for="">选择标签
             <label><input type="checkbox" id="" name="" >潜在客户</label>
            <label><input type="checkbox" id="" name="">上市公司</label>
             </el-form-item>
      <el-form-item label="客户备注">
      <el-input v-model="form.name" autocomplete="off" placeholder="请输入" style="width:220px，height:220px"></el-input>
    </el-form-item>       
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
        </div>

      <el-button
        type="primary"
        style="position: relative; top: -105px; left: 950px"
        >批量操作</el-button
      >
    </div>
    <el-table :data="customers" style="width:76%" >
      <el-table-column fixed prop="name" label="客户名称" width="150"> </el-table-column>
      <el-table-column prop="realname" label="真实姓名" width="150"> </el-table-column>
      <el-table-column prop="tel" label="电话" width="150"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="150"> </el-table-column>
      <el-table-column prop="level" label="客户等级" width="150"> </el-table-column>
      <el-table-column prop="origin" label="客户来源" width="150"> </el-table-column>
      <el-table-column  label="操作" width="200">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button> -->
         <el-button type="text" @click="detil">详情</el-button>
        <el-button type="text" @click="open1">创建工单</el-button>
        <el-button type="text" @click="open2">删除</el-button>
       
      </el-table-column>
    </el-table>
    <div class="block1">
    
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40,50]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    detil:function(){
      this.$router.push('/main/customer/Detail')
    },
    // detil(row) {
    //   console.log(row);
    // },
//     open(){
//       this.$alert(`<strong>
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>客户信息</title>
// </head>
// <body>
//     <form action="">
//         <div class="item">
//            <label for="account">客户电话</label><input type="text" id="account" placeholder="请输入"> 
//         </div>
//         <div class="item">
//             <label for="">客户邮箱</label><input type="email" id="" placeholder="请输入">
//         </div>
//         <div class="ietm">
//             <label for="">客户公司</label><input type="text"placeholder="请输入" >
//         </div>
//         <div class="item">
//             <label for="">客户地址</label><input type="text" placeholder="请输入">
//         </div>
//         <div class="item">
//             <label for="">客户等级</label>
//             <select name="grade">
//                 <option value="0">请选择</option>
//                 <option value="1">普通用户</option>
//                 <option value="2" >vip用户</option>
//                 <option value="3">svip用户</option>
//             </select>
//          </div>
//          <div class="item">
//             <label for="">客户来源</label>
//             <select name="grade">
//                 <option value="0">请选择</option>
//                 <option value="1">客服录入</option>
//                 <option value="2" >用户注册</option>
//             </select>
//          </div>
//         <div class="item">
//             <label for="">选择标签</label>
//             <label><input type="checkbox" id="" name="">潜在客户</label>
//            <label><input type="checkbox" id="" name="">上市公司</label>
//         </div>
//         <div class="item">
//             <label for="">客户备注</label>
//             <textarea name="introduce" id="" cols="30" rows="10" placeholder="请输入"></textarea>
//          </div>
//     </form>
// </body>
// </html>
//       </strong>`, '添加新用户', {
//           dangerouslyUseHTMLString: true
//         });
//     },
     open1() {
        this.$alert(`<strong>
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .item{
            font-style: normal;
            color:#CCCCCC;
            height: 30px;
        }
        .item2{
            color:#CCCCCC;
            height: 30px; 
        }
        .item2 input{
            color: black;
        }
    </style>
</head>
<body>
    <div>
        <div class="item">
            <label for="">工单分类</label>
            <select name="grade">
                <option value="0">请选择</option>
                <option value="1">分类一</option>
                <option value="2">分类二</option>
                <option value="3">分类三</option>
            </select>
         </div>
         <div class="item item1">
            <label for="account">工单标题</label>
            <input type="text"  placeholder="请输入工单标题">
        </div>
        <div class="item item1">
            <label for="account">工单描述</label>
            <input type="text"  placeholder="请输入工单描述">
        </div>
        <a href="" style="font-size: 5px;width: 300px;" >添加附件（最多上传5个附件，当个文件最大20M）</a>
        <div class="item">
            <label for="">工单分类</label>
            <select name="grade">
                <option value="0">请选择</option>
                <option value="1">分类一</option>
                <option value="2">分类二</option>
                <option value="3">分类三</option>
            </select>
         </div>
         <div class="item2">
            <label for="level">优先级</label>
            <label><input type="radio" id="temp1" name="demo">低</label>
            <label><input type="radio" id="temp2" name="demo">中</label>
            <label><input type="radio" id="temp3" name="demo">高</label>
            <label><input type="radio" id="temp4" name="demo">紧急</label>
         </div>
         <div class="item">
            <label for="">工单状态</label>
            <select name="grade">
                <option value="0">请选择</option>
                <option value="1">未分配</option>
                <option value="2">待处理</option>
                <option value="3">处理中</option>
                <option value="4">已解决</option>
                <option value="5">已关闭</option>
            </select>
         </div>
         <div class="item">
            <label for="">受理客服组</label>
            <select name="grade">
                <option value="0">请选择</option>
                <option value="1">客服组一</option>
                <option value="2">客服组二</option>
                <option value="3">客服组三</option>
            </select>
         </div>
         <div class="item">
            <label for="">受理客服</label>
            <select name="grade">
                <option value="0">请选择</option>
                <option value="1">王美美</option>
                <option value="2">戚薇</option>
                <option value="3">李想</option>
            </select>
         </div>
         <div class="item">
            <label for="">所属客户</label>
            <select name="grade">
                <option value="0">请选择</option>
                <option value="1">王美美</option>
                <option value="2">戚薇</option>
                <option value="3">李想</option>
            </select>
         </div>
    </div>
</body>
        </strong>`, '新建工单', {
          
          dangerouslyUseHTMLString: true
        });
      },
    open2() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
        
    },
  },

  data() {
    return {
      dialogFormVisible: false,
        form: {
        },
        
        
      allCustomerServices: [
        {
          id: 1,
          name: "普通客户",
        },
        {
          id: 2,
          name: "VIP客户",
        },
        {
          id: 3,
          name: "潜在客户",
        },
        {
          id: 4,
          name: "全部等级",
        },
      ],
      allCustomerOrigin: [
        {
          id: 1,
          name: "Mac",
        },
        {
          id: 2,
          name: "Windows",
        },
        {
          id: 3,
          name: "手机",
        },
        {
          id: 4,
          name: "全部来源",
        },
      ],

      customers: [
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        },
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        } ,
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }   ,
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        }  ,
        {
          name: "河北省秦皇岛市客户",
          realname: "林芳",
          tel: "18845678900",
          email: "1190887@163.com",
          level: "普通用户",
          origin: "客户录入",
        } 
      ]
    }
  }
}
</script>

<style scoped>




.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown {
  height: 40px;
  width: 160px;
  line-height: 40px;
  text-align: center;
  background-color: rgba(242, 242, 242, 1);
  color:black;
  border-radius: 2px;
  left: 15px;
  top: 15px;
}

.el-table {
  position: relative;
  top:-85px;
  left: 20px;
  
}
.add {
  position: absolute;
  left: 850px;
  top: 35px;
  width: 100px;
  color: #fff;
  /* background-color: cornflowerblue; */
}
.dialog-footer{
  position: relative;
  right: 200px;
}
.block {
  position: relative;
  top: -17px;
  left: 350px;
}
.search {
  position: relative;
  top: -65px;
  left: 590px;
  width: 230px;
}
.block1{
  position: relative;
  left: -500px;
  top: -30px;
}


.workplacec{
    position: relative;
    top: 70px;
    left: 90px;
}
/* .el-dropdown-link{
  position: relative;
  top: 20px;
} */

.zuoshang{
  position: relative;
  top: 20px;
}
</style>