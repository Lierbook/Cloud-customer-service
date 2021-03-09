<template>
  <div class="workspace">
    <div class="box23002">
      <el-row class="tac23">
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
    <div class="box1" style="margin-left: 250x; margin-top: 110px">
      <el-button @click="open2">清空所有内容</el-button>
    </div>
    <div class="box10">
      <el-tabs
        style="margin-left: 30px"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane label="系统消息" name="first">
          <div id="text1" class="text">
            <p style="font-size: 16px">
              <span>账户即将到期提醒</span
              ><span style="font-size: 14px">&nbsp; &nbsp; </span
              ><span style="font-size: 12px; color: #cccccc"
                >2020/09/09 10:55</span
              >
            </p>
            <p style="font-size: 14px">
              <span style="color: #999999"
                >系统将于3天后到期，请尽快续费，以免影响您正常使用。</span
              >
            </p>
          </div>
          <el-divider></el-divider>

          <div id="text2" class="text">
            <p style="font-size: 16px">
              <span>账户即将到期提醒</span
              ><span style="font-size: 14px">&nbsp; &nbsp; </span
              ><span style="font-size: 12px; color: #cccccc"
                >2020/09/09 10:55</span
              >
            </p>
            <p style="font-size: 14px">
              <span style="color: #999999"
                >系统将于3天后到期，请尽快续费，以免影响您正常使用。</span
              >
            </p>
          </div>
          <el-divider></el-divider>

          <div id="text3" class="text">
            <p style="font-size: 16px">
              <span>账户即将到期提醒</span
              ><span style="font-size: 14px">&nbsp; &nbsp; </span
              ><span style="font-size: 12px; color: #cccccc"
                >2020/09/09 10:55</span
              >
            </p>
            <p style="font-size: 14px">
              <span style="color: #999999"
                >系统将于3天后到期，请尽快续费，以免影响您正常使用。</span
              >
            </p>
          </div>
          <el-divider></el-divider>

          <div id="text4" class="text">
            <p style="font-size: 16px">
              <span>账户即将到期提醒</span
              ><span style="font-size: 14px">&nbsp; &nbsp; </span
              ><span style="font-size: 12px; color: #cccccc"
                >2020/09/09 10:55</span
              >
            </p>
            <p style="font-size: 14px">
              <span style="color: #999999"
                >系统将于3天后到期，请尽快续费，以免影响您正常使用。</span
              >
            </p>
          </div>
          <el-divider></el-divider>
        </el-tab-pane>

        <el-tab-pane label="通知公告" name="second">
          <div id="text" class="text">
            <p style="font-size: 16px">
              <span>产品上新通知</span
              ><span style="font-size: 14px">&nbsp; &nbsp; </span
              ><span style="font-size: 12px; color: #cccccc"
                >2020/09/09 10:55</span
              >
            </p>
            <p style="font-size: 14px">
              <span style="color: #999999"
                >WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。</span
              >
            </p>
          </div>
          <el-divider></el-divider>
          <div id="text" class="text">
            <p style="font-size: 16px">
              <span>产品上新通知</span
              ><span style="font-size: 14px">&nbsp; &nbsp; </span
              ><span style="font-size: 12px; color: #cccccc"
                >2020/09/09 10:55</span
              >
            </p>
            <p style="font-size: 14px">
              <span style="color: #999999"
                >WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。</span
              >
            </p>
          </div>
          <el-divider></el-divider>
          <div id="text" class="text">
            <p style="font-size: 16px">
              <span>产品上新通知</span
              ><span style="font-size: 14px">&nbsp; &nbsp; </span
              ><span style="font-size: 12px; color: #cccccc"
                >2020/09/09 10:55</span
              >
            </p>
            <p style="font-size: 14px">
              <span style="color: #999999"
                >WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。</span
              >
            </p>
          </div>
          <el-divider></el-divider>
          <div id="text" class="text">
            <p style="font-size: 16px">
              <span>产品上新通知</span
              ><span style="font-size: 14px">&nbsp; &nbsp; </span
              ><span style="font-size: 12px; color: #cccccc"
                >2020/09/09 10:55</span
              >
            </p>
            <p style="font-size: 14px">
              <span style="color: #999999"
                >WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。</span
              >
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
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

    open2() {
      this.$confirm("消息清空后无法恢复，确定清空所有消息吗？", "清空确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "清空成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消清空",
          });
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
.box23002 {
  position: absolute;
  left: 80px;
  top: 90px;
  z-index: 2;
  width: 300px;
  height: 600px;
  background-color: white;

  border-radius: 4px;
}
.tac23 {
  overflow: scroll;
  width: 300px;
  height: 640px;
}
.box10 {
  background-color: white;
  position: absolute;
  left: 390px;
  top: 80px;
  width: 1040px;
  height: 770px;
}
.box1 {
  position: absolute;
}
</style>
