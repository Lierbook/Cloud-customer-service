
<template >
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

    <div class="box1" >
      <div id="text1" class="text">
        <p style="font-size: 16px">
          <span>通知工单创建人


     

</span
          ><span style="font-size: 14px">&nbsp; &nbsp; </span
          >
               <el-switch
        
          v-model="value1"
          active-color="#13ce66"
        inactive-color="#ff4949"
          active-text="开启"
          @click="open2"
  inactive-text="关闭"
        >
        
        </el-switch>
        </p>
        <p style="font-size: 14px">
          <span style="color: #999999">工单更新时，同步通知工单创建人</span>
        </p>
      </div>
      <el-divider></el-divider>
      <div id="text1" class="text">
        <p style="font-size: 16px">
          <span>自动接单状态</span>


          <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="开启"
            inactive-text="关闭"
          >
          </el-switch
          >
          
          
          <span style="font-size: 14px">&nbsp; &nbsp; </span>
        </p>
        <p style="font-size: 14px">
          <span style="color: #999999">关闭时，将不会分配给您工作</span>
        </p>
      </div>
      <el-divider></el-divider>

      <div class="block">
        <div class="radio">
          工单回复可见范围：
          <el-radio-group v-model="reverse">
            <el-radio :label="true">仅客服可见</el-radio>
            <el-radio :label="false">所有人可见</el-radio>
          </el-radio-group>
        </div>

        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>
          
<script>
export default {
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

    
  },
};
</script>
<style scoped>
.workspace {
  position: relative;
  top: 80px;
  left: 60px;
}

.box23002 {
  position: absolute;
  left: 1px;
  top: 0px;
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
.box1 {
  background-color: white;
  height: 285px;
  width: 1040px;
  left: 310px;
  top: 10px;
}
</style>