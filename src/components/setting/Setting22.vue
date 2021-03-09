<template>
  <div class="box2001">
    <div class="box2002">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-menu-item-group>
              <template slot="title">通用设置</template>
              <el-menu-item index="1-1" @click="gotolinkSetting11"
                >个人信息</el-menu-item
              >
              <el-menu-item index="1-2" @click="gotolinkSetting12"
                >通知公告</el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">团队设置</template>
              <el-menu-item index="2-1" @click="gotolinkSetting21"
                >企业信息</el-menu-item
              >
              <el-menu-item index="2-2" @click="gotolinkSetting22"
                >客服管理</el-menu-item
              >
              <el-menu-item index="2-3" @click="gotolinkSetting23"
                >分组管理</el-menu-item
              >
              <el-menu-item index="2-4" @click="gotolinkSetting24"
                >角色管理</el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">客服设置</template>
              <el-menu-item index="3-1" @click="gotolinkSetting31"
                >常用语</el-menu-item
              >
              <el-menu-item index="3-2" @click="gotolinkSetting32"
                >自动回复</el-menu-item
              >
              <el-menu-item index="3-3" @click="gotolinkSetting33"
                >对话规则</el-menu-item
              >
              <el-menu-item index="3-4" @click="gotolinkSetting34"
                >分配规则</el-menu-item
              >
              <el-menu-item index="3-5" @click="gotolinkSetting35"
                >会话评价</el-menu-item
              >
              <el-menu-item index="3-6" @click="gotolinkSetting36"
                >客户信息</el-menu-item
              >
              <el-menu-item index="3-7" @click="gotolinkSetting37"
                >客户标签</el-menu-item
              >
              <el-menu-item index="3-8" @click="gotolinkSetting38"
                >黑名单</el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">工单设置</template>
              <el-menu-item index="4-1" @click="gotolinkSetting41"
                >基础设置</el-menu-item
              >
              <el-menu-item index="4-2" @click="gotolinkSetting42"
                >工单分类</el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">全局设置</template>
              <el-menu-item index="5-1" @click="gotolinkSetting51"
                >操作日志</el-menu-item
              >
              <el-menu-item index="5-2" @click="gotolinkSetting52"
                >信息通知</el-menu-item
              >
            </el-menu-item-group>
          </el-menu>
        </el-col>
      </el-row>
    </div>

    <div class="box2003">
      <div class="box2004">
        <div class="block202">
          <el-dropdown size="medium" split-button plain>
            全部客服组
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>客服组一</el-dropdown-item>
              <el-dropdown-item>客服组二</el-dropdown-item>
              <el-dropdown-item>客服组三</el-dropdown-item>
              <el-dropdown-item>客服组四</el-dropdown-item>
              <el-dropdown-item>客服组五</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="box20015">
        <div class="demo-input-suffix11">
          <el-input placeholder="请输入内容" v-model="input4">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
      <div class="box2005">
        <div id="app22">
          <el-button type="success" @click="newservicerinfo = true"
            >添加客服</el-button
          >

          <el-dialog title="新增客服信息" :visible.sync="newservicerinfo" append-to-body>
            <el-form :model="form">
              <el-form-item label="发布头像" :label-width="formLabelWidth">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="*邮箱地址">
                  <el-input
                    v-model="form.name1"
                    placeholder="该邮箱将作为客服人员的登陆账号"
                  ></el-input>
                </el-form-item>
                <el-form-item label="*客服昵称">
                  <el-input
                    v-model="form.name2"
                    placeholder="与外部客户沟通时使用"
                  ></el-input>
                </el-form-item>
                <el-form-item label="*真实姓名">
                  <el-input v-model="form.name3" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="客服工号">
                  <el-input v-model="form.name4" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="客服手机号码">
                  <el-input v-model="form.name5" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="*初始登录密码">
                  <el-input
                    v-model="form.name6"
                    placeholder="6到16个字符，至少包含大小写字母 数字中的两种"
                  ></el-input>
                </el-form-item>

                <el-form-item label="选择分组">
                  <el-select v-model="form.region7" placeholder="请选择">
                    <el-option label="客服组一" value="客服组一"></el-option>
                    <el-option label="客服组二" value="客服组二"></el-option>
                    <el-option label="客服组三" value="客服组三"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="*选择角色">
                  <el-select v-model="form.region8" placeholder="请选择">
                    <el-option label="管理员" value="管理员"></el-option>
                    <el-option
                      label="超级管理员"
                      value="超级管理员"
                    ></el-option>
                    <el-option label="工单客服" value="工单客服"></el-option>
                    <el-option label="在线客服" value="在线客服"></el-option>
                    <el-option label="客服主管" value="客服主管"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="服务上限（人）">
                  <el-input v-model="form.name9" value="8"></el-input>
                </el-form-item>
              </el-form>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="newservicerinfo = false">取消并返回</el-button>
              <el-button type="primary" @click="newservicerinfo = false"
                >保存</el-button
              >
            </div>
          </el-dialog>
        </div>

        <div id="app21">
          <el-button class="headbutton">批量删除</el-button>
          <div id="app21">
            <el-button class="headbutton">导出数据</el-button>
          </div>
        </div>
      </div>

      <div class="box20014">
        <el-table :data="tableData" stripe height="550" style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="ID" width="100"> </el-table-column>
          <el-table-column prop="account" label="账号" width="100">
          </el-table-column>
          <el-table-column prop="nickname" label="客服昵称" width="100">
          </el-table-column>

          <el-table-column
            prop="customerservicename"
            label="客服姓名"
            width="100"
          >
          </el-table-column>
          <el-table-column prop="group" label="客服分组" width="100">
          </el-table-column>
          <el-table-column prop="role" label="客服角色" width="100">
          </el-table-column>
          <el-table-column label="客服状态" width="100">
            <el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </el-table-column>
          <!-- <el-table-column
      prop="job"
      label="操作">
    </el-table-column> -->
          <el-table-column label="操作">
            <template>
              <div id="app23">
                <el-button size="mini" type="success">编辑</el-button>
              </div>

              <el-button size="mini" type="danger" @click="tanchuchuangkou2"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="dibu002">
          <el-pagination background layout="prev, pager, next" :total="1000">
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
      imageUrl: "",
      activeName: "first",
      value: true,
      title: "首页1",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      newservicerinfo: false,

      tableData: [
        {
          id: "1234",
          account: "116789@163.com",
          nickname: "小美",
          customerservicename: "杜微",
          group: "客服组一",
          role: "工单客服",

          job: " 编辑",
        },
        {
          id: "1234",
          account: "116789@163.com",
          nickname: "小美",
          customerservicename: "杜微",
          group: "客服组一",
          role: "工单客服",

          job: " 编辑",
        },
        {
          id: "1234",
          account: "116789@163.com",
          nickname: "小美",
          customerservicename: "杜微",
          group: "客服组一",
          role: "工单客服",

          job: " 编辑",
        },
        {
          id: "1234",
          account: "116789@163.com",
          nickname: "小美",
          customerservicename: "杜微",
          group: "客服组一",
          role: "工单客服",

          job: " 编辑",
        },
        {
          id: "1234",
          account: "116789@163.com",
          nickname: "小美",
          customerservicename: "杜微",
          group: "客服组一",
          role: "工单客服",

          job: " 编辑",
        },
        {
          id: "1234",
          account: "116789@163.com",
          nickname: "小美",
          customerservicename: "杜微",
          group: "客服组一",
          role: "工单客服",

          job: " 编辑",
        },
        {
          id: "1234",
          account: "116789@163.com",
          nickname: "小美",
          customerservicename: "杜微",
          group: "客服组一",
          role: "工单客服",

          job: " 编辑",
        },
        {
          id: "1234",
          account: "116789@163.com",
          nickname: "小美",
          customerservicename: "杜微",
          group: "客服组一",
          role: "工单客服",

          job: " 编辑",
        },
        {
          id: "1234",
          account: "116789@163.com",
          nickname: "小美",
          customerservicename: "杜微",
          group: "客服组一",
          role: "工单客服",

          job: " 编辑",
        },
        {
          id: "1234",
          account: "116789@163.com",
          nickname: "小美",
          customerservicename: "杜微",
          group: "客服组一",
          role: "工单客服",

          job: " 编辑",
        },
        {
          id: "1234",
          account: "116789@163.com",
          nickname: "小美",
          customerservicename: "杜微",
          group: "客服组一",
          role: "工单客服",

          job: " 编辑",
        },
      ],
    };
  },

  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    },

    gotolinkSetting11() {
      this.$router.replace("/main/setting11");
    },
    gotolinkSetting12() {
      this.$router.replace("/main/setting12");
    },
    gotolinkSetting21() {
      this.$router.replace("/main/setting21");
    },
    gotolinkSetting22() {
      this.$router.replace("/main/setting22");
    },
    gotolinkSetting23() {
      this.$router.replace("/main/setting23");
    },
    gotolinkSetting24() {
      this.$router.replace("/main/setting24");
    },

    gotolinkSetting31() {
      this.$router.replace("/main/setting31");
    },
    gotolinkSetting32() {
      this.$router.replace("/main/setting32");
    },
    gotolinkSetting33() {
      this.$router.replace("/main/setting33");
    },
    gotolinkSetting34() {
      this.$router.replace("/main/setting34");
    },
    gotolinkSetting35() {
      this.$router.replace("/main/setting35");
    },
    gotolinkSetting36() {
      this.$router.replace("/main/setting36");
    },
    gotolinkSetting37() {
      this.$router.replace("/main/setting37");
    },
    gotolinkSetting38() {
      this.$router.replace("/main/setting38");
    },
    gotolinkSetting41() {
      this.$router.replace("/main/setting41");
    },
    gotolinkSetting42() {
      this.$router.replace("/main/setting42");
    },
    gotolinkSetting51() {
      this.$router.replace("/main/setting51");
    },
    gotolinkSetting52() {
      this.$router.replace("/main/setting52");
    },

    tanchuchuangkou2() {
      this.$alert("删除后无法恢复，确定删除此信息吗？", "删除确认", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
  },
};
</script>

<style scoped>
.box2001 {
  position: absolute;
  left: 74px;
  top: 74px;
  z-index: 0;
  width: 1400px;
  height: 600px;
  /* background-color: rgba(0, 110, 255, 0.0980392156862745); */

  padding: 21px 20px;
}

.box2002 {
  position: absolute;
  left: 1px;
  top: 0px;
  z-index: 2;
  width: 300px;
  height: 600px;
  background-color: white;

  border-radius: 4px;
}
.tac {
  overflow: scroll;
  width: 300px;
  height: 640px;
}
.box2003 {
  position: absolute;
  width: 1000px;
  height: 640px;
  left: 320px;
  top: 0px;

  background-color: white;
  z-index: 3;
  border-radius: 4px;
}
.block202 {
  /* background-color: rgb(216, 216, 216); */
  margin: 0px 0px 0px 15px;
  display: inline-block;
}
.box2004 {
  position: absolute;
  top: 15px;
}
.box2005 {
  position: absolute;
  left: 640px;
  top: 15px;
}

#app22 {
  display: inline;
  margin: 0px 10px 0px;
}
.demo-input-suffix11 {
  display: inline;
  margin: 0px 10px 0px;
}
.box20015 {
  position: absolute;
  left: 300px;
  top: 15px;
}
.box20014 {
  position: absolute;
  left: 15px;
  top: 60px;
  width: 965px;
  height: 550px;
  background-color: white;
  border-radius: 4px;
}
#app23 {
  display: inline-block;
  margin: 0px 10px 0px;
  position: relative;
  z-index: 999;
}

.dibu002 {
  position: relative;
  left: -670px;
}
#app21 {
  display: inline-block;
  margin: 0px 10px 0px;
}
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 100px;
  width: 100px;
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>