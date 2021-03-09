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
      <div class="boxnei">
        <label for="" style="font-size: 20px">新增角色信息</label>
        <div class="boxnei2">
         
         
          <div class="shuru1" style="width: 220px">
             <label for="" class="text1">角色名称</label>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="shuru2" style="width: 220px">
          <label for="" class="text2">角色描述</label>

            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea"
            >
            </el-input>
          </div>
          
          
          <div class="fuxuankuang1">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">首页</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
      </div>
       <div class="fuxuankuang2">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange2">首页</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedcuss" @change="handleCheckedcusChange">
    <el-checkbox v-for="cus in cuss" :label="cus" :key="cus">{{cus}}</el-checkbox>
  </el-checkbox-group>
      </div>



      <div class="ann">
        <el-button type="info" @click="fanhui">返回</el-button>
        <el-button type="primary">保存</el-button>
      </div>


        </div>
      


      </div>
    </div>
  </div>
</template>

<script>
const cityOptions = ['数据概况', '访问量统计', '快捷入口', '客服监控'];
 const cusOptions = ['数据概况', '访问量统计', '快捷入口', '客服监控'];
export default {
   data() {
      return {
        checkAll: false,
         checkedCities: ['数据概况', '访问量统计', '快捷入口', '客服监控'],
        cities: cityOptions,
        isIndeterminate: true,

       checkedcuss: ['数据概况', '访问量统计', '快捷入口', '客服监控'],
        cuss: cusOptions,


      };
    },
  methods: {
    fanhui(){
 
          //点击跳转至上次浏览页面
         this.$router.go(-1)
 
          //指定跳转地址
          // this.$router.replace('/Main')
          // this.gotolink=
        },
    handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },

      handleCheckAllChange2(val) {
        this.checkedcus = val ? cusOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedcusChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cuss.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cuss.length;
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
  /* z-index: 3; */
  border-radius: 4px;
}

.boxnei {
  position: absolute;
  width: 900px;
  height: 600px;
  z-index: 4;
  top: 10px;
  left: 10px;
  /* background-color: rgb(228, 62, 62); */
}
.boxnei2 {
  position: absolute;
  width: 800px;
  height: 600px;
  z-index: 4;
  top: 50px;
  left: 20px;
  /* background-color: rgb(98, 62, 228); */
}

.shuru1 {
  position: relative;
  left: 350px;
  top: 50px;
}

.shuru2 {
  position: relative;
  left: 350px;
  top: 80px;
  
}

.text1{
  position: relative;
  top: 27px;
  left: -150px;
   color: rgb(117, 114, 114);
}

.text2{
  position: relative;
  top: 27px;
  left: -150px;
  color: rgb(117, 114, 114);
}

.el-textarea{
  height: 130%px;
  width: 130%;
}
.el-input{
  width: 130%;

}

.fuxuankuang1{
  position: relative;
  left: 200px;
  top: 130px;
}

.fuxuankuang2{
  position: relative;
  left: 200px;
  top: 180px;
}

.ann{
  position: relative;
  top: 270px;
  left: 200px;
}
</style>