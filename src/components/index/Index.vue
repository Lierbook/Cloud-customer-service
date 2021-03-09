<template>
  <div class="workspace">
    <div class="items">
      <StatisticsItem
        v-bind="item"
        v-for="item in items"
        :key="item.title"
      ></StatisticsItem>
    </div>
    <div style="display: flex;margin-bottom:10px">
      <div class="line" style="margin-right: 10px" ref="line"></div>
      <div class="entry">
        <div class="titlethree">快捷入口</div>
        <div class="entry-box" >
          <EntryItem v-for="entryItems in entryItems" v-bind="entryItems" :key="entryItems.title" class="entry-item"></EntryItem>
        </div>
      </div>
    </div>
    <div class="panel customer-monitor">
      <div class="titlethree">客服监控</div>
      <el-table :data="tableData" style="width:90%">
        <el-table-column prop="name" label="客服昵称" width="">
        </el-table-column>
        <el-table-column prop="status" label="状态" width=""> 
          <template slot-scope="scope">
        <div :class="{online:scope.row.status=='在线'}">{{scope.row.status}}</div>
        </template>
        </el-table-column>
        <el-table-column prop="duration" label="在线时长" width="">
        </el-table-column>
        <el-table-column prop="sessionCount" label="会话数" width="">
        </el-table-column>
        <el-table-column prop="msgCount" label="消息数" width="">
        </el-table-column>
        <el-table-column prop="msgCount" label="平均响应时长" width="">
        </el-table-column>
        <el-table-column prop="msgCount" label="平均会话时长" width="">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import StatisticsItem from "@/components/index/StatisticsItem.vue";
import EntryItem from '@/components/index/EntryItem.vue';

var echarts = require("echarts");

export default {
  
  data: function () {
    return {
      tableData: [
        {
          name: '客服小美',
          status: '在线',
          duration: '6h',
          sessionCount: '30',
          msgCount:'389',
          respondtime:'24s',
          conversation:'5min',
        },
         {
          name: '客服小美',
          status: '在线',
          duration: '6h',
          sessionCount: '30',
          msgCount:'389',
          respondtime:'24s',
          conversation:'5min',
        }, 
      ],
      items: [
        {
          title: "总会话量",
          count: 230,
          desc: "较昨日上涨10%",
          colorValue: {
            color: "rgba(0, 110, 255, 0.898039215686275)",
          },
        },
        {
          title: "处理中的会话量",
          count: 200,
          desc: "较昨日上涨10%",
          colorValue: {
            color: "#FF6262",
          },
        },
        {
          title: "在线客服数",
          count: 30,
          desc: "较昨日上涨10%",
          colorValue: {
            color: "#2ED477",
          },
        },
        {
          title: "今日消息数",
          count: 2300,
          desc: "较昨日上涨10%",
          colorValue: {
            color: "#FF9138",
          },
        },
      ],
      entryItems:[
        {
          icon:'#icon-pinglun',
          title:'当前会话',
          path:'/main/session',
          styleObj:{
            backgroundColor:'#006eff'
          }
        },
        {
          icon:'#icon--jiaoseguanli',
          title:'访客管理',
          path:'/main/visitor',
          styleObj:{
            backgroundColor:'#ff6262'
          }
        },
        {
          icon:'#icon-data',
          title:'历史会话',
          path:'/main/history',
          styleObj:{
            backgroundColor:'#2ed477'
          }
        },
        {
          icon:'#icon-wode',
          title:'客户管理',
          path: '/main/customer',
          styleObj:{
            backgroundColor:'#ff9138'
          }
        },
        {
          icon:'#icon-jilu',
          title:'工单中心',
          path:'/main/order',
          styleObj:{
            backgroundColor:' #006eff'
          }
        },
        {
          icon:'#icon-bianji',
          title:'数据报表',
          path:'/main/statistic',
          styleObj:{
            backgroundColor:'#ff6262'
          }
        },
        {
          icon:'#icon-gengduo',
          title:'编辑入口',
          path:'/main/setting11',
          styleObj:{
            backgroundColor:'#e4e4e4'
          }
        },
      ],
      option: {
        title: {
          text: "访问量统计",
        },
        tooltip: {
          trigger: "axis",
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30",
            "13:00",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
            "16:00",
            "16:30",
            "17:00",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "总访问量",
            type: "line",
            stack: "总量",
            data: [
              120,
              132,
              101,
              134,
              90,
              230,
              210,
              220,
              182,
              191,
              234,
              290,
              330,
              310,
            ],
          },
          {
            name: "总会话量",
            type: "line",
            stack: "总量",
            data: [
              220,
              182,
              191,
              234,
              290,
              330,
              310,
              120,
              132,
              101,
              134,
              90,
              230,
              210,
            ],
          },
          {
            name: "有效会话量",
            type: "line",
            stack: "总量",
            data: [
              150,
              232,
              201,
              154,
              190,
              330,
              410,
              220,
              182,
              191,
              234,
              290,
              330,
              280,
            ],
          },
        ],
      },
    };
  },
  // methods:{
  //   props:['icon','title','path'],
  //   handleClick:function(){
  //     console.log(11111)
  //    this.$router.push('/main/customer');
  //   }
  // },
  components: { StatisticsItem,EntryItem },
  mounted: function () {
    let myChart = echarts.init(this.$refs.line);
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(this.option);
  },
  created: function () {
    this.$axios.get("/cs/monitor").then((resp) => {
      this.tableData = resp.data.monitor;
    });
  },
};
</script>

<style scoped>
.items {
  display: flex;
  left: 100px;
  top: 200px;
  justify-content: space-between;
  background-color: #fff;
  width: 90%;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 10px;
}
.line {
  width: 806px;
  height: 317px;
  padding: 20px;
  background-color: #fff;
}
.entry {
  width: 405px;
  height: 317px;
  padding: 20px;
  background-color: rgba(0, 110, 255, 0.05);
}

.title{
  font-size: 10px;
}
.titlethree{
  font-size: 18px;
  margin-bottom: 47px;
}
/* .entry-box{
  display: flex;
} */
.entry-item{
  float: left;
  color: black;
  margin-left: 30px;
  margin-bottom: 30px;
}
.el-table{
  position: relative;
  top:-50px;
  left: 5px;
}

.online{
    color: green;
}
/* .customer-monitor {
} */




.workspace{
  position: relative;
  top: 100px;
  left: 70px;
}
</style>