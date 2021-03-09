 <template>
  <div class="boxses">
    <el-tabs :tab-position="tabPosition" style="width: 100%; height: auto">
      <el-tab-pane label="数据总览" class="gunlun">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>

        <el-dropdown size="medium" split-button type="primary" class="di1">
            全部客服组
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>客服组1</el-dropdown-item>
              <el-dropdown-item>客服组2</el-dropdown-item>
              <el-dropdown-item>客服组3</el-dropdown-item>
              <el-dropdown-item>客服组4</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown size="medium" split-button type="primary" class="di1">
            全部客服
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>小王</el-dropdown-item>
              <el-dropdown-item>小陈</el-dropdown-item>
              <el-dropdown-item>小李</el-dropdown-item>
              <el-dropdown-item>小张</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div><button class="labelyoushang">导出当前数据</button></div>
        </div>
        <div class="count-box">
          <div class="count-item" v-for="item in navItems" :key="item.title">
            <div class="title1">{{ item.title }}</div>
            <div class="count">{{ item.count }}</div>
            <div class="perc">{{ item.perc }}</div>
          </div>
        </div>
        <div
          id="chartLineBox"
          data="option"
          style="width: 160vh; height: 60vh"
        ></div>
        <div id="main" style="width: 700px; height: 400px"></div>
        <div id="main1" style="width: 400px; height: 400px"></div>
       <div class="boxjietu"><img src="./china.png" alt=""></div>
      </el-tab-pane>

      <el-tab-pane label="工作量统计" class="gunlun"><div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>

          <el-dropdown size="medium" split-button type="primary" class="di1">
            全部客服组
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>客服组1</el-dropdown-item>
              <el-dropdown-item>客服组2</el-dropdown-item>
              <el-dropdown-item>客服组3</el-dropdown-item>
              <el-dropdown-item>客服组4</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown size="medium" split-button type="primary" class="di1">
            全部客服
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>小王</el-dropdown-item>
              <el-dropdown-item>小陈</el-dropdown-item>
              <el-dropdown-item>小李</el-dropdown-item>
              <el-dropdown-item>小张</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div><button class="labelyoushang">导出当前数据</button></div>
          <div class="count-box2">
            <div
              class="count-item1"
              v-for="item in navItems1"
              :key="item.title"
            >
              <div class="title11">{{ item.title }}</div>
              <div class="count1">{{ item.count1 }}</div>
              <div class="perc1">{{ item.perc }}</div>
            </div>
            <div
              id="chartLineBox5"
              data="option5"
              style="width: 80vh; height: 60vh"
            ></div>
            <div
              id="chartLineBox6"
              data="option6"
              style="width: 80vh; height: 60vh"
            ></div>
          </div>
        </div>
        <div>
          <el-table :data="tableData" stripe style="width: 95%">
            <el-table-column prop="nicheng" label="客服昵称"> </el-table-column>
            <el-table-column prop="xiaoxi" label="消息"> </el-table-column>
            <el-table-column prop="huihua" label="会话"> </el-table-column>
            <el-table-column
              prop="youxiao"
              label="有效会话数量"
            ></el-table-column>
            <el-table-column
              prop="jieshu"
              label="结束会话数量"
            ></el-table-column>
            <el-table-column prop="shichang" label="会话时长">
            </el-table-column>
            <el-table-column
              prop="xiaoxishu"
              label="平均会话消息数"
            ></el-table-column>
            <el-table-column
              prop="pingjunshichang"
              label="平均会话时长"
              width="150;"
            >
            </el-table-column>
          </el-table>
        </div>
        <el-pagination layout="prev, pager, next" :total="100"> </el-pagination>
      </el-tab-pane>

      <el-tab-pane label="工作质量统计" class="gunlun"
        ><div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>

          <el-dropdown size="medium" split-button type="primary" class="di1">
            全部客服组
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>客服组1</el-dropdown-item>
              <el-dropdown-item>客服组2</el-dropdown-item>
              <el-dropdown-item>客服组3</el-dropdown-item>
              <el-dropdown-item>客服组4</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown size="medium" split-button type="primary" class="di1">
            全部客服
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>小王</el-dropdown-item>
              <el-dropdown-item>小陈</el-dropdown-item>
              <el-dropdown-item>小李</el-dropdown-item>
              <el-dropdown-item>小张</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div><button class="labelyoushang">导出当前数据</button></div>
          <div class="count-box4">
            <div
              class="count-item2"
              v-for="item in navItems2"
              :key="item.title"
            >
              <div class="title12">{{ item.title }}</div>
              <div class="count2">{{ item.count2 }}</div>
              <div class="perc2">{{ item.perc }}</div>
            </div>
            <div
              id="chartLineBox3"
              data="option3"
              style="width: 80vh; height: 60vh"
            ></div>
            <div
              id="chartLineBox4"
              data="option4"
              style="width: 80vh; height: 60vh"
            ></div>
            <div id="main2" style="width: 400px; height: 400px"></div>
        <div id="main3" style="width: 400px; height: 400px"></div>
          </div>
          <div>
            <el-table :data="tableData1" stripe style="width: 95%">
              <el-table-column prop="nicheng" label="客服昵称">
              </el-table-column>
              <el-table-column prop="xiaoxi" label="有效会话量">
              </el-table-column>
              <el-table-column
                prop="shoucixiangying"
                label="首次平均响应时长"
                width="170"
              >
              </el-table-column>
              <el-table-column
                prop="pingjunxiangying"
                label="平均响应时长"
              ></el-table-column>
              <el-table-column prop="yijiejue" label="已解决">
              </el-table-column>
              <el-table-column
                prop="weijiejue"
                label="未解决"
              ></el-table-column>
              <el-table-column prop="haoping" label="好评"> </el-table-column>
              <el-table-column prop="zhongping" label="中评 "></el-table-column
              ><el-table-column prop="chaping" label="差评"></el-table-column>
              <el-table-column prop="weiping" label="未评"></el-table-column>
            </el-table>
            <el-pagination layout="prev, pager, next" :total="100">
            </el-pagination>
          </div></div
      ></el-tab-pane>
      <el-tab-pane label="考勤统计统计" class="gunlun"
        ><div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>

          <el-dropdown size="medium" split-button type="primary" class="di1">
            全部客服组
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>客服组1</el-dropdown-item>
              <el-dropdown-item>客服组2</el-dropdown-item>
              <el-dropdown-item>客服组3</el-dropdown-item>
              <el-dropdown-item>客服组4</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown size="medium" split-button type="primary" class="di1">
            全部客服
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>小王</el-dropdown-item>
              <el-dropdown-item>小陈</el-dropdown-item>
              <el-dropdown-item>小李</el-dropdown-item>
              <el-dropdown-item>小张</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div><button class="labelyoushang">导出当前数据</button></div>
          <div>
            <el-table :data="tableData2" stripe style="width: 90%">
              <el-table-column prop="nicheng" label="客服昵称">
              </el-table-column>
              <el-table-column prop="denglu" label="登录时长">
              </el-table-column>
              <el-table-column prop="kongxian" label="空闲时长" width="170">
              </el-table-column>
              <el-table-column prop="manglu" label="忙碌时长"></el-table-column>
              <el-table-column prop="zaixian" label="在线"> </el-table-column>
              <el-table-column prop="lixian" label="离线"></el-table-column>
            </el-table>
            <el-pagination layout="prev, pager, next" :total="100">
            </el-pagination>
          </div></div
      ></el-tab-pane>
      <el-tab-pane label="访问统计" class="gunlun"
        ><div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>

          <el-dropdown size="medium" split-button type="primary" class="di1">
            全部客服组
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>客服组1</el-dropdown-item>
              <el-dropdown-item>客服组2</el-dropdown-item>
              <el-dropdown-item>客服组3</el-dropdown-item>
              <el-dropdown-item>客服组4</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown size="medium" split-button type="primary" class="di1">
            全部客服
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>小王</el-dropdown-item>
              <el-dropdown-item>小陈</el-dropdown-item>
              <el-dropdown-item>小李</el-dropdown-item>
              <el-dropdown-item>小张</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div><button class="labelyoushang">导出当前数据</button></div>
          <div class="count-box3">
            <div
              class="count-item3"
              v-for="item in navItems3"
              :key="item.title"
            >
              <div class="title13">{{ item.title }}</div>
              <div class="count3">{{ item.count3 }}</div>
              <div class="perc3">{{ item.perc }}</div>
            </div>
            <div
              id="chartLineBox2"
              data="option2"
              style="width: 160vh; height: 60vh"
            ></div>
          </div>
          <el-table :data="tableData3" border style="width: 95%">
            <el-table-column prop="laiyuan" label="来源类型" width="180">
            </el-table-column>
            <el-table-column prop="liulanlianng" label="浏览量" width="180">
            </el-table-column>
            <el-table-column prop="fangkeliang" label="访客量">
            </el-table-column>
            <el-table-column prop="cishu" label="访问次数"> </el-table-column>
            <el-table-column prop="liulanshichang" label="平均页面浏览时长">
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
import echarts from "echarts";
export default {
  name: "",

  data: function () {
    const item = {
      nicheng: "客服小美",
      xiaoxi: "300",
      huihua: "26",
      youxiao: "18",
      jieshu: "10",
      shichang: "50m",
      xiaoxishu: "9",
      pingjunshichang: "9m8s",
      shoucixiangying: "26",
      pingjunxiangying: "9",
      yijiejue: "10",
      weijiejue: "10",
      haoping: "50",
      weiping: "40",
      chaping: "5",
      denglu: "12h",
      kongxian: "3h",
      manglu: "8h",
      zaixian: "7h",
      lixian: "1h",
    };
    return {
      charts: "",
      opinion: ["网页", "app", "小程序", "公众号", "头条号"],
      type: "pie",
      opinionData: [
        { value: 880, name: "网页" },
        { value: 300, name: "app" },
        { value: 200, name: "小程序" },
        { value: 130, name: "公众号" },
        { value: 60, name: "头条号" },
      ],
      msg: "Welcome to Your Vue.js App",
      tabPosition: "left",
      tableData: Array(20).fill(item),
      tableData1: Array(20).fill(item),
      tableData2: Array(20).fill(item),
      tableData3: [
        {
          laiyuan: "网页",
          liulanlianng: "5000",
          fangkeliang: "300",
          cishu: "3000",
          liulanshichang: "1000",
        },
        {
          laiyuan: "手机app",
          liulanlianng: "7000",
          fangkeliang: "500",
          cishu: "2000",
          liulanshichang: "8000",
        },
        {
          laiyuan: "微信公众号",
          liulanlianng: "7000",
          fangkeliang: "800",
          cishu: "9000",
          liulanshichang: "1000",
        },
        {
          laiyuan: "微信小程序",
          liulanlianng: "4000",
          fangkeliang: "500",
          cishu: "4000",
          liulanshichang: "3000",
        },
        {
          laiyuan: "微博",
          liulanlianng: "1000",
          fangkeliang: "500",
          cishu: "3000",
          liulanshichang: "300",
        },
        {
          laiyuan: "头条号",
          liulanlianng: "2000",
          fangkeliang: "500",
          cishu: "1500",
          liulanshichang: "300",
        },
      ],
      navItems: [
        {
          title: "总会话量",
          count: 230,
          perc: "有效会话数 200",
        },
        {
          title: "总客户量",
          count: 30,
          perc: "有效客户20",
        },
        {
          title: "总访问量",
          count: 208,
          perc: "访客对话率 50%",
        },
        {
          title: "平均会话时长",
          count: "9m3s",
          perc: "平均响应时间 30s",
        },
        {
          title: "好评率",
          count: "78%",
          perc: "评价率",
        },
        {
          title: "一次性解决问题率",
          count: "60%",
          perc: "解决率50%",
        },
        {
          title: "好评率",
          count: "78%",
          perc: "评价率",
        },
        {
          title: "总人工消息数",
          count: "2600",
          perc: "总客服消息数",
        },
        {
          title: "平均会话时长",
          count: "28",
          perc: "平均会话有效消息数15",
        },
        {
          title: "总消息数",
          count: 230,
          perc: "有效消息数 200",
        },
        {
          title: "总会话量",
          count: 30,
          perc: "结束会话数 20",
        },
      ],
      navItems1: [
        {
          title: "总消息数",
          count1: 230,
          perc: "有效消息数 200",
        },
        {
          title: "总会平均消息数",
          count1: 8,
          perc: "会话最大数 50",
        },
        {
          title: "总会话时长",
          count1: "60m",
          perc: "结束会话数 20",
        },
        {
          title: "平均会话时长",
          count1: "9m30s",
          perc: "最大会话时长",
        },
        {
          title: "总会话量",
          count1: 30,
          perc: "结束会话数 20",
        },
      ],
      navItems2: [
        {
          title: "首次平均响应时长",
          count2: "30s",
          perc: "首次平均响应时长 20s",
        },
        {
          title: "平均响应时长",
          count2: "20s",
          perc: "平均响应时长 50",
        },
        {
          title: "好评率",
          count2: "89%",
          perc: "客户评价率",
        },
        {
          title: "解决量",
          count2: "550",
          perc: "解决率 90%",
        },
        {
          title: "一次性解决量",
          count2: 60,
          perc: "一次性解决率 65%",
        },
      ],
      navItems3: [
        {
          title: "浏览量（PV）",
          count3: "2300",
          perc: "平均浏览页面20",
        },
        {
          title: "访客量（UV）",
          count3: "30",
          perc: "跳出率20%",
        },
        {
          title: "咨询会话数",
          count3: "208",
          perc: "咨询会话率",
        },
        {
          title: "总评价数",
          count3: "67",
          perc: "客户评价率 80%",
        },
        {
          title: "好评率",
          count3: "78%",
          perc: "评价率 67%",
        },
      ],
    };
  },
  mounted() {
    this.chartLine = echarts.init(document.getElementById("chartLineBox2"));

    // 指定图表的配置项和数据
    var option2 = {
      tooltip: {
        //设置tip提示
        trigger: "axis",
      },

      legend: {
        //设置区分（哪条线属于什么）
        data: ["网页", "手机app", "微信公众号", "微信小程序", "微博", "头条"],
      },
      color: ["#8AE09F", "#FA6F53"], //设置区分（每条线是什么颜色，和 legend 一一对应）
      xAxis: {
        //设置x轴
        type: "category",
        boundaryGap: false, //坐标轴两边不留白
        data: [
          "2019-1-1",
          "2019-2-1",
          "2019-3-1",
          "2019-4-1",
          "2019-5-1",
          "2019-6-1",
          "2019-7-1",
        ],
        name: "时间", //X轴 name
        nameTextStyle: {
          //坐标轴名称的文字样式
          color: "#FA6F53",
          fontSize: 16,
          padding: [0, 0, 0, 20],
        },
        axisLine: {
          //坐标轴轴线相关设置。
          lineStyle: {
            color: "#808bc6",
          },
        },
      },
      yAxis: {
        name: "浏览量",
        nameTextStyle: {
          color: "#FA6F53",
          fontSize: 16,
          padding: [0, 0, 10, 0],
        },
        axisLine: {
          lineStyle: {
            color: "#808bc6",
          },
        },
        type: "value",
      },
      series: [
        {
          name: "手机app",
          data: [220, 232, 201, 234, 290, 230, 220],
          type: "line", // 类型为折线图
          lineStyle: {
            // 线条样式 => 必须使用normal属性
            normal: {
              color: "#8AE09F",
            },
          },
        },
        {
          name: "网页",
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "line",
          lineStyle: {
            normal: {
              color: "#FA6F53",
            },
          },
        },
        {
          name: "微信小程序",
          data: [110, 200, 170, 20, 80, 210, 230],
          type: "line",
          lineStyle: {
            normal: {
              color: "#ff6600",
            },
          },
        },
        {
          name: "微博",
          data: [150, 100, 250, 60, 80, 110, 230],
          type: "line",
          lineStyle: {
            normal: {
              color: "#2db7f5",
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    this.chartLine.setOption(option2);

    this.chartLine = echarts.init(document.getElementById("chartLineBox"));
    var option = {
      tooltip: {
        //设置tip提示
        trigger: "axis",
      },

      legend: {
        //设置区分（哪条线属于什么）
        data: ["访问量", "总会话量", "有效会话量"],
      },
      color: ["#808bc6", "#8AE09F", "#FA6F53"], //设置区分（每条线是什么颜色，和 legend 一一对应）
      xAxis: {
        //设置x轴
        type: "category",
        boundaryGap: false, //坐标轴两边不留白
        data: ["10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00"],
        name: "时间", //X轴 name
        nameTextStyle: {
          //坐标轴名称的文字样式
          color: "#FA6F53",
          fontSize: 16,
          padding: [0, 0, 0, 20],
        },
        axisLine: {
          //坐标轴轴线相关设置。
          lineStyle: {
            color: "#808bc6",
          },
        },
      },
      yAxis: {
        name: "会话数",
        nameTextStyle: {
          color: "#FA6F53",
          fontSize: 16,
          padding: [0, 0, 10, 0],
        },
        axisLine: {
          lineStyle: {
            color: "#808bc6",
          },
        },
        type: "value",
      },
      series: [
        {
          name: "访问量",
          data: [40, 13, 25, 33, 15, 37, 20],
          type: "line", // 类型为折线图
          lineStyle: {
            // 线条样式 => 必须使用normal属性
            normal: {
              color: "#8AE09F",
            },
          },
        },
        {
          name: "总会话量",
          data: [12, 20, 15, 35, 47, 11, 13],
          type: "line",
          lineStyle: {
            normal: {
              color: "#FA6F53",
            },
          },
        },
        {
          name: "有效会话量",
          data: [30, 25, 40, 20, 50, 21, 30],
          type: "line",
          lineStyle: {
            normal: {
              color: "#4E7095",
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    this.chartLine.setOption(option);

    this.draw();
    this.draw1();
    this.draw2();
    this.draw3();
    this.$nextTick(function () {
      this.drawPie("main");
      this.drawPie("main1");
      this.drawPie("main2");
      this.drawPie("main3");
    });
    
  },
  methods: {
    
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: "客户来源占比", //主标题

          x: "center", //x轴方向对齐方式
        },
        color: ["#A4B6C9", "#4E7095"] /*饼状图的颜色*/,
        tooltip: {
          trigger: "item",
          formatter: "{b}({d}%)" /*饼状图触碰之后显示的注释文字*/,
        },
        legend: {
          left: "center" /*标签文字排成一行*/,
          y: "bottom" /*在垂直方向上的底部*/,
          data: this.opinion,
        },
        series: [
          {
            type: "pie", //饼状图
            center: ["50%", "40%"], //显示位置
            name: "",
            // type:'pie',
            radius: ["", "60%"] /*空心圆的占比*/,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              normal: {
                borderWidth: 5 /*隔开的白色边界*/,
                borderColor: "#fff" /*border*/,
                // labelLine :{show:true}
              },
            },

            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "inner",
                textStyle: {
                  fontWeight: 200,
                  fontSize: 20, //文字的字体大小
                },
                formatter: "{d}%" /*饼状图内显示百分比*/,
                // data:['40%','60%'],
              },

              emphasis: {
                show: false /*空心文字出现*/,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: this.opinionData,
          },
        ],
      });
    },
    draw() {
      // 实例化echarts对象
      let myChartDrawer = this.$echarts.init(
        document.getElementById("chartLineBox3")
      );
      // let myChartDrawer = this.$echarts.init(document.getElementById('chartLineBox4'))
      // 绘制条形图
      var option3 = {
        title: {
          text: "响应时长统计",
          top: 5,
          left: "center",
        },
        legend: {
          data: ["首次响应时长", "平均响应时长"],
          top: 30,
        },
        // X轴
        xAxis: {
          data: ["0-10s", "10-20s", "20-30s", "30-40s", "40以上"],
        },
        // Y轴
        yAxis: {},
        // 数据
        series: [
          {
            name: "首次响应时长",
            type: "bar",
            data: [12, 10, 44, 32, 15],
          },
          {
            name: "平均响应时长",
            type: "bar",
            data: [20, 12, 24, 33, 17],
          },
        ],
      };

      myChartDrawer.setOption(option3);
    },
    draw1() {
      // 实例化echarts对象
      let myChartDrawer = this.$echarts.init(
        document.getElementById("chartLineBox4")
      );
      // let myChartDrawer = this.$echarts.init(document.getElementById('chartLineBox4'))
      // 绘制条形图
      var option4 = {
        title: {
          text: "解决量统计",
          top: 5,
          left: "center",
        },
        legend: {
          data: ["解决量", "一次性解决"],
          top: 30,
        },
        // X轴
        xAxis: {
          data: ["10", "20", "30", "40", "40以上"],
        },
        // Y轴
        yAxis: {},
        // 数据
        series: [
          {
            name: "解决量",
            type: "bar",
            data: [2, 10, 4, 2, 5],
          },
          {
            name: "一次性解决",
            type: "bar",
            data: [2, 1, 4, 3, 7],
          },
        ],
      };

      myChartDrawer.setOption(option4);
    },
    draw2() {
      // 实例化echarts对象
      let myChartDrawer = this.$echarts.init(
        document.getElementById("chartLineBox5")
      );
      // let myChartDrawer = this.$echarts.init(document.getElementById('chartLineBox4'))
      // 绘制条形图
      var option5 = {
        title: {
          text: "消息数统计",
          top: 5,
          left: "center",
        },
        legend: {
          data: ["消息数", "平均消息数"],
          top: 30,
        },
        // X轴
        xAxis: {
          data: ["10", "20", "30", "40", "40以上"],
        },
        // Y轴
        yAxis: {},
        // 数据
        series: [
          {
            name: "消息数",
            type: "bar",
            data: [2, 10, 4, 2, 5],
          },
          {
            name: "平均消息数",
            type: "bar",
            data: [2, 1, 4, 3, 7],
          },
        ],
      };

      myChartDrawer.setOption(option5);
    },
    draw3() {
      // 实例化echarts对象
      let myChartDrawer = this.$echarts.init(
        document.getElementById("chartLineBox6")
      );
      // let myChartDrawer = this.$echarts.init(document.getElementById('chartLineBox4'))
      // 绘制条形图
      var option6 = {
        title: {
          text: "会话时长统计",
          top: 5,
          left: "center",
        },
        legend: {
          data: ["会话时长", "平均会话时长"],
          top: 30,
        },
        // X轴
        xAxis: {
          data: ["10s", "20s", "30s", "40s", "40s以上"],
        },
        // Y轴
        yAxis: {},
        // 数据
        series: [
          {
            name: "会话时长",
            type: "bar",
            data: [2, 10, 4, 2, 5],
          },
          {
            name: "平均会话时长",
            type: "bar",
            data: [2, 1, 4, 3, 7],
          },
        ],
      };

      myChartDrawer.setOption(option6);
    },
  },
};
</script>

<style >
.boxses {
  width: 1430px;
  height: 1500px;
  position: relative;
  top: 80px;
  left: 68px;
  background: rgb(253, 253, 253);
}
.gunlun {
  overflow: scroll;

  height: 1000px;
}
.di1 {
  display: none;
  margin-left: 40px;
  position: relative;
  top: 0px;
}
.labelyoushang {
  width: 140px;
  height: 30px;
  border: 1px solid gray;
  font-size: 20px;
  font-family: 隶书;
  color: gray;
  position: relative;
  left: 88%;
  top: -30px;
}

.block {
  /* height: auto; */
  position: relative;
  top: 0px;
}
.count-box {
  height: 500px;
  width: 1200px;
  border-radius: 4px;

  box-sizing: border-box;
  padding: 14px 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.count-box2 {
  height: 700px;
  width: 1200px;
  border-radius: 4px;

  box-sizing: border-box;
  padding: 14px 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.count-box3 {
  height: 650px;
  width: 1200px;
  border-radius: 4px;

  box-sizing: border-box;
  padding: 14px 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.count-box4 {
  height: 1150px;
  width: 1200px;
  border-radius: 4px;

  box-sizing: border-box;
  padding: 14px 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.count-item {
  width: 170px;
  height: 200px;
  background-color: rgba(0, 110, 255, 0.05);

  font-size: 13px;
  line-height: 3em;
  text-align: center;
}

.title1 {
  font-size: 15px;
  text-align: center;
}

.count {
  font-size: 3em;
  font-weight: 800;
  text-align: center;
}
.perc {
  font-size: 0.8;
  opacity: 0.6;
  text-align: center;
}

.count-item1 {
  width: 180px;
  height: 200px;
  background-color: rgba(0, 110, 255, 0.05);

  font-size: 13px;
  line-height: 3em;
  text-align: center;
}
.title11 {
  font-size: 15px;
  text-align: center;
}
.count1 {
  font-size: 3em;
  font-weight: 800;
  text-align: center;
  color: blue;
  padding: 20px 0;
}
.perc1 {
  font-size: 0.8;
  opacity: 0.6;
  text-align: center;
}
.count-item2 {
  width: 180px;
  height: 200px;
  background-color: rgba(0, 110, 255, 0.05);

  font-size: 13px;
  line-height: 3em;
  text-align: center;
}
.title12 {
  font-size: 15px;
  text-align: center;
}
.count2 {
  font-size: 3em;
  font-weight: 800;
  text-align: center;
  color: yellowgreen;
  padding: 20px 0;
}
.perc2 {
  font-size: 0.8;
  opacity: 0.6;
  text-align: center;
}
.count-item3 {
  width: 180px;
  height: 200px;
  background-color: rgba(0, 110, 255, 0.05);

  font-size: 13px;
  line-height: 3em;
  text-align: center;
}
.title13 {
  font-size: 15px;
  text-align: center;
}
.count3 {
  font-size: 3em;
  font-weight: 800;
  text-align: center;
  color: yellowgreen;
  padding: 20px 0;
}
.perc3 {
  font-size: 0.8;
  opacity: 0.6;
  text-align: center;
}
.count-item:nth-last-child(1) .count {
  color: aqua;
}
.count-item:nth-last-child(2) .count {
  color: blueviolet;
}
.count-item:nth-last-child(3) .count {
  color: yellowgreen;
}
.count-item:nth-last-child(4) .count {
  color: bisque;
}
.count-item:nth-last-child(5) .count {
  color: bisque;
}
.count-item:nth-last-child(6) .count {
  color: yellowgreen;
}
.count-item:nth-last-child(7) .count {
  color: bisque;
}
.count-item:nth-last-child(8) .count {
  color: yellowgreen;
}
.count-item:nth-last-child(9) .count {
  color: bisque;
}
.count-item:nth-last-child(10) .count {
  color: yellowgreen;
}
.count-item:nth-last-child(11) .count {
  color: bisque;
}
.el-pagination {
  position: relative;
  left: 900px;
}
#chartLineBox3 {
  width: 70%;
  min-height: 300px;
  clear: both;
  box-sizing: border-box;
  margin: 30px auto;
  position: relative;
  left: -300px;
}
#chartLineBox4 {
  width: 70%;
  min-height: 300px;
  clear: both;
  box-sizing: border-box;
  margin: 30px auto;
  position: relative;
        top:-515px;
        left: 500px;
}
#main1 {
  position: relative;
  top: -400px;
  left: 600px;
}
#chartLineBox6{
  position: relative;
  top: -425px;
  left: 550px;
}
#chartLineBox5{
  position: relative;
  top: 31px;
  left: -50px;
}
#main2 {
  position: relative;
  top: -34px;
  left: -120px;
  }
#main3 {
  position: relative;
  top: -550px;
  left: 00px;
}

.boxjietu{
  position: relative;
  top: -400px;
}
</style>


