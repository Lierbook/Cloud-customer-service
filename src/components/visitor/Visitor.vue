<template>
  <div class="workspace" style="float:left">
    <div class="header">
       <el-select  style=" width: 140px " v-model="value" placeholder="全部终端">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

      <el-select
        style=" width: 140px ; margin-left: 10px"
        v-model="value"
        placeholder="全部终端"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-select
        style="width: 140px ; margin-left: 10px"
        v-model="value"
        placeholder="全部来源"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-date-picker
        style="width: 280px; margin-left: 10px"
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>

      <el-input
        style="width: 200px; margin-left: 10px"
        v-model="input"
        placeholder="请输入关键词搜索"
      ></el-input>
      <el-button style="width: 60px" type="primary">搜索</el-button>
      <el-button style="width: 120px;  float:right ">导出数据</el-button>
      <router-view />
    </div>
     <div id="table" style=" width: 1292px; ">
    <el-table
      :data="visitors"
      style=" margin-top: 10px ; "
    >
      <el-table-column prop="name" label="访客名称" width="159">
      </el-table-column>
      <el-table-column prop="origin" label="来源" width="159" >
      </el-table-column>
      <el-table-column prop="terminal" label="终端" width="159">
      </el-table-column>
      <el-table-column prop="time" label="访问时间" width="159">
      </el-table-column>
      <el-table-column prop="duration" label="访问时长" width="155">
      </el-table-column>
      <el-table-column prop="ip" label="ip地址" width="159"> </el-table-column>
      <el-table-column prop="msg" label="访客状态" width="159">
      </el-table-column>
      <div>
     <el-table-column
     
      label="操作"
      width="159">
      
        
        <el-button type="text" @click=" $router.push({path:'/main/index/'})" >发起会话</el-button>
        <router-view />
     
    </el-table-column>
    
</div>
    </el-table>
    <div class="dibu">
    <el-pagination background layout="prev, pager, next" :total="1000" style="float: right; margin-top: 10px">
    </el-pagination></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      visitors: [
        {
          name: "河北省秦皇岛市区",
          origin: "电脑",
          terminal: "微信",
          time: "2020.0309",
          duration: "8分45秒",
          ip: "132.13",
          msg: "在线",
          status: "发起会话",
        },

        {
          name: "河北省秦皇岛市区",
          origin: "电脑",
          terminal: "微信",
          time: "2020.0309",
          duration: "8分45秒",
          ip: "132.13",
          msg: "在线",
          status: "发起会话",
        },
        {
          name: "河北省秦皇岛市区",
          origin: "电脑",
          terminal: "微信",
          time: "2020.0309",
          duration: "8分45秒",
          ip: "132.13",
          msg: "在线",
          status: "发起会话",
        },
        {
          name: "河北省秦皇岛市区",
          origin: "电脑",
          terminal: "微信",
          time: "2020.0309",
          duration: "8分45秒",
          ip: "132.13",
          msg: "在线",
          status: "发起会话",
        },
        {
          name: "河北省秦皇岛市区",
          origin: "电脑",
          terminal: "微信",
          time: "2020.0309",
          duration: "8分45秒",
          ip: "132.13",
          msg: "在线",
          status: "发起会话",
        },
        {
          name: "河北省秦皇岛市区",
          origin: "电脑",
          terminal: "微信",
          time: "2020.0309",
          duration: "8分45秒",
          ip: "132.13",
          msg: "在线",
          status: "发起会话",
        },
        {
          name: "河北省秦皇岛市区",
          origin: "电脑",
          terminal: "微信",
          time: "2020.0309",
          duration: "8分45秒",
          ip: "132.13",
          msg: "在线",
          status: "发起会话",
        },
        {
          name: "河北省秦皇岛市区",
          origin: "电脑",
          terminal: "微信",
          time: "2020.0309",
          duration: "8分45秒",
          ip: "132.13",
          msg: "在线",
          status: "发起会话",
        },
        {
          name: "河北省秦皇岛市区",
          origin: "电脑",
          terminal: "微信",
          time: "2020.0309",
          duration: "8分45秒",
          ip: "132.13",
          msg: "在线",
          status: "发起会话",
        },
        {
          name: "河北省秦皇岛市区",
          origin: "电脑",
          terminal: "微信",
          time: "2020.0309",
          duration: "8分45秒",
          ip: "132.13",
          msg: "在线",
          status: "发起会话",
        },
      ],
    };
  },
  index: function () {
    this.$router.push({path:'/components/'});
  },
};
</script>

<style scoped>
.el-table-column-data {
  color: aqua;
}
.el-input {
  width: 30px;
}

.el-table-column-msg {
  color: blue;
}

.workspace{
  position: relative;
  top: 100px;
  left: 100px;
}
.dibu{
  position: relative;
  left: -1600px;
}

</style>