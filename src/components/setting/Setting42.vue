<template>
  <div class="workspace">
    <div class="box1002" style="float: left">
      <el-row style="width: 240px; height: 503px" class="tac">
        <el-col :span="24">
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-menu-item-group>
              <template slot="title">通用设置</template>
              <el-menu-item index="1-1" @click="gotolinkSetting11"
                >个人信息</el-menu-item
              >
              <el-menu-item index="1-2" @click="gotolinkSetting12">通知公告</el-menu-item
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
    <div class="header">
      <el-input
        style="width: 200px; margin-left: 10px"
        v-model="input"
        placeholder="请输入关键词搜索"
      ></el-input>
      <el-button style="width: 60px" type="primary">搜索</el-button>
      <el-button style="width: 120px">添加分类</el-button>
      <el-button style="width: 120px">批量删除</el-button>
      <el-button style="width: 120px; float: right">导出数据</el-button>
      <router-view />
     <div class="table">
     
    <el-table :data="index" style="width: 79%; margin-top: 20px">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="id" width="143"> </el-table-column>
      <el-table-column prop="origin" label="分类名称" width="207">
      </el-table-column>
      <el-table-column prop="terminal" label="工单数量" width="207">
      </el-table-column>
      <el-table-column prop="time" label="创建时间" width="207">
      </el-table-column>

      <el-table-column prop="status" label="操作" width="143">
        <el-button type="text" @click="open1">编辑</el-button>

        <el-button type="text" @click="open2">删除</el-button>
      </el-table-column>
    </el-table>
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

     open1() {
        this.$prompt('请输入分类名称', '添加分类', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          
         
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '添加成功 ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
    open2() {
      this.$confirm("删除后无法恢复，确定删除此分类信息吗？", "提示", {
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
  data: function () {
    return {
      index: [
        {
          name: "003",
          origin: "推广相关工单",
          terminal: "5",
          time: "2019/9/12 10：99",

          status: "发起会话",
        },
        {
          name: "003",
          origin: "推广相关工单",
          terminal: "5",
          time: "2019/9/12 10：99",

          status: "发起会话",
        },
        {
          name: "003",
          origin: "推广相关工单",
          terminal: "5",
          time: "2019/9/12 10：99",

          status: "发起会话",
        },
        {
          name: "003",
          origin: "推广相关工单",
          terminal: "5",
          time: "2019/9/12 10：99",

          status: "发起会话",
        },
        {
          name: "003",
          origin: "推广相关工单",
          terminal: "5",
          time: "2019/9/12 10：99",

          status: "发起会话",
        },
        {
          name: "003",
          origin: "推广相关工单",
          terminal: "5",
          time: "2019/9/12 10：99",

          status: "发起会话",
        },
        {
          name: "003",
          origin: "推广相关工单",
          terminal: "5",
          time: "2019/9/12 10：99",

          status: "发起会话",
        },
        {
          name: "003",
          origin: "推广相关工单",
          terminal: "5",
          time: "2019/9/12 10：99",

          status: "发起会话",
        },
        {
          name: "003",
          origin: "推广相关工单",
          terminal: "5",
          time: "2019/9/12 10：99",

          status: "发起会话",
        },
        {
          name: "003",
          origin: "推广相关工单",
          terminal: "5",
          time: "2019/9/12 10：99",

          status: "发起会话",
        },
      ],
    };
  },
  index: function () {
    this.$router.push({ path: "/components/" });
  },
};
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
  background-color: #797979;
  color: #fff;
  border-radius: 2px;
}

.workspace{
    position: relative;
    top: 100px;
    left: 60px;
}
</style>