<template>
  <div class="history-box">
    <el-container>
      <el-aside width="325px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item-group>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>历史会话</span>
              <div class="screen-button">
                <el-button type="text" @click="screenFormVisible = true"
                  >筛选</el-button
                >
                <el-dialog
                  title="筛选"
                  :visible.sync="screenFormVisible"
                  width="30%"
                  center
                >
                  <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="日期">
                      <el-col :span="11">
                        <el-date-picker
                          type="date"
                          placeholder="请选择日期"
                          v-model="form.date1"
                          style="width: 100%"
                        ></el-date-picker>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="关键词">
                      <el-input
                        v-model="form.name2"
                        placeholder="请输入关键词搜索"
                        style="width: 222px"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="客服">
                      <el-select v-model="form.region3" placeholder="请选择客服">
                        <el-option
                          label="全部客服"
                          value="全部客服"
                        ></el-option>
                        <el-option label="王美美" value="王美美"></el-option>
                        <el-option label="七尾" value="七尾"></el-option>
                        <el-option label="李想" value="李想"></el-option>
                        <el-option label="王志" value="王志"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="渠道">
                      <el-select v-model="form.region4" placeholder="请选择渠道">
                        <el-option
                          label="全部渠道"
                          value="全部渠道"
                        ></el-option>
                        <el-option
                          label="手动录入"
                          value="手动录入"
                        ></el-option>
                        <el-option
                          label="即时聊天"
                          value="即时聊天"
                        ></el-option>
                        <el-option
                          label="客户管理"
                          value="客户管理"
                        ></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item>
                      <el-button type="primary" @click="screenFormVisible = false"
                        >搜索</el-button
                      >
                      <el-button @click="screenFormVisible = false">返回</el-button>
                    </el-form-item>
                  </el-form>
                </el-dialog>
              </div>
            </template>
            <el-menu-item index="1-1">
              <div class="list">
                <img src="./computer.png" alt="" />
                <div class="session-list">
                  <div class="from">
                    北京客户
                    <p class="brief">你好，我想咨询一下</p>
                    <div class="time">10:08</div>
                  </div>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="1-1">
              <div class="list">
                <img src="./computer.png" alt="" />
                <div class="session-list">
                  <div class="from">
                    北京客户
                    <p class="brief">你好，我想咨询一下</p>
                    <div class="time">10:08</div>
                  </div>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="1-1">
              <div class="list">
                <img src="./computer.png" alt="" />
                <div class="session-list">
                  <div class="from">
                    北京客户
                    <p class="brief">你好，我想咨询一下</p>
                    <div class="time">10:08</div>
                  </div>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="1-1">
              <div class="list">
                <img src="./computer.png" alt="" />
                <div class="session-list">
                  <div class="from">
                    北京客户
                    <p class="brief">你好，我想咨询一下</p>
                    <div class="time">10:08</div>
                  </div>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="1-1">
              <div class="list">
                <img src="./computer.png" alt="" />
                <div class="session-list">
                  <div class="from">
                    北京客户
                    <p class="brief">你好，我想咨询一下</p>
                    <div class="time">10:08</div>
                  </div>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="1-1">
              <div class="list">
                <img src="./computer.png" alt="" />
                <div class="session-list">
                  <div class="from">
                    北京客户
                    <p class="brief">你好，我想咨询一下</p>
                    <div class="time">10:08</div>
                  </div>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="1-1">
              <div class="list">
                <img src="./computer.png" alt="" />
                <div class="session-list">
                  <div class="from">
                    北京客户
                    <p class="brief">你好，我想咨询一下</p>
                    <div class="time">10:08</div>
                  </div>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="1-1">
              <div class="list">
                <img src="./computer.png" alt="" />
                <div class="session-list">
                  <div class="from">
                    北京客户
                    <p class="brief">你好，我想咨询一下</p>
                    <div class="time">10:08</div>
                  </div>
                </div>
              </div>
            </el-menu-item>
            <el-menu-item index="1-1">
              <div class="list">
                <img src="./computer.png" alt="" />
                <div class="session-list">
                  <div class="from">
                    北京客户
                    <p class="brief">你好，我想咨询一下</p>
                    <div class="time">10:08</div>
                  </div>
                </div>
              </div>
            </el-menu-item>

            <!-- <el-pagination
              :page-size="20"
              :pager-count="4"
              layout="prev, pager, next"
              :total="300"
            >
            </el-pagination> -->
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <el-container>
        <div class="address">
          <el-header>
            <div class="from-title">北京市</div>
          </el-header>
        </div>
        <el-main>
          <div class="chat-box" ref="chatbox">
            <div class="morelight">更多记录</div>
            <div
              class="chat-item"
              :class="{ customer: chat.speaker != '客户' }"
              v-for="chat in chatItems"
              :key="chat.id"
            >
              <div class="head-box">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="chat.icon" />
                </svg>
              </div>
              <div class="chat-item-box">
                <div class="speaker-info">
                  <span class="speaker">{{ chat.speaker }}</span>
                  <span class="time">{{ chat.time }}</span>
                </div>
                <div class="chat-content">{{ chat.content }}</div>
              </div>
            </div>
          </div>
        </el-main>
        <el-footer height="250px">
          <div class="chat-input-box">
            <div class="tool">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiaolian" />
              </svg>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tubiaolunkuo-" />
              </svg>
            </div>
            <textarea placeholder="请输入内容" v-model="chat"></textarea>
            <el-button type="primary" @click="handleSend">发送</el-button>
          </div>
        </el-footer>
      </el-container>
      <el-aside width="450px">
        <div class="buttongroup">
          <div class="create-workorder">
            <el-button type="text" @click="createFormVisible = true"
              >创建工单</el-button
            >
            <el-dialog
              title="新建工单"
              :visible.sync="createFormVisible"
              width="30%"
              center
            >
              <el-form ref="form" :model="form" label-width="90px">
                <el-form-item label="工单分类">
                  <el-select v-model="form.region5" placeholder="请选择">
                    <el-option label="分类一" value="1"></el-option>
                    <el-option label="分类二" value="2"></el-option>
                    <el-option label="分类三" value="3"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="工单标题">
                  <el-input v-model="form.name6"></el-input>
                </el-form-item>
                <el-form-item label="工单描述">
                  <el-input type="textarea" v-model="form.desc7"></el-input>
                </el-form-item>

                <el-form-item label="抄送人">
                  <el-select v-model="form.region8" placeholder="请选择">
                    <el-option label="王美美" value="王美美"></el-option>
                    <el-option label="七尾" value="七尾"></el-option>
                    <el-option label="李想" value="李想"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="优先级">
                  <el-radio-group v-model="form.resource9">
                    <el-radio label="低"></el-radio>
                    <el-radio label="中"></el-radio>
                    <el-radio label="高"></el-radio>
                    <el-radio label="紧急"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="工单状态">
                  <el-select v-model="form.region10" placeholder="请选择">
                    <el-option label="未分配" value="未分配"></el-option>
                    <el-option label="待处理" value="待处理"></el-option>
                    <el-option label="处理中" value="处理中"></el-option>
                    <el-option label="已解决" value="已解决"></el-option>
                    <el-option label="已关闭" value="已关闭"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="受理客服组">
                  <el-select v-model="form.region11" placeholder="请选择">
                    <el-option label="客服组一" value="客服组一"></el-option>
                    <el-option label="客服组二" value="客服组二"></el-option>
                    <el-option label="客服组三" value="客服组三"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="受理客服">
                  <el-select v-model="form.region12" placeholder="请选择">
                    <el-option label="王美美" value="王美美"></el-option>
                    <el-option label="七尾" value="七尾"></el-option>
                    <el-option label="李想" value="李想"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="所属客户">
                  <el-select v-model="form.region13" placeholder="请选择">
                    <el-option label="王美美" value="王美美"></el-option>
                    <el-option label="七尾" value="七尾"></el-option>
                    <el-option label="李想" value="李想"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="createFormVisible = false"
                    >创建工单</el-button
                  >
                  <el-button @click="createFormVisible = false">取消</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>

          <div class="block">
            <el-button type="text" @click="blockFormVisible = true"
              >拉黑</el-button
            >
            <el-dialog
              title="拉黑客户"
              :visible.sync="blockFormVisible"
              width="30%"
              center
            >
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="拉黑原因">
                  <el-input
                    type="textarea"
                    v-model="form.desc14"
                    placeholder="请输入拉黑原因"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="blockFormVisible = false">保存</el-button>
                  <el-button @click="blockFormVisible = false">取消</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
          </div>
          <div class="end-session">
            <el-button type="text" @click="startFormVisible"
              >发起会话</el-button
            >
          </div>
        </div>
        <div class="card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="客户资料 " name="first">
              <div class="data">
                <div class="visitorinfo">
                  <div class="visitorinfo-title">访客信息</div>
                  <div class="info">
                    <div class="source">
                      <div class="question">来源：</div>
                      <div class="answer">113.128.230.51</div>
                    </div>
                    <div class="ip">
                      <div class="question">IP地址：</div>
                      <div class="answer">113.128.230.51</div>
                    </div>
                    <div class="chome">
                      <div class="question">浏览器：</div>
                      <div class="answer">Chrome 81.0.4044.138</div>
                    </div>
                    <div class="screen-size">
                      <div class="question">屏幕尺寸：</div>
                      <div class="answer">1440 x 900</div>
                    </div>
                    <div class="equipment">
                      <div class="question">设备：</div>
                      <div class="answer">Mac</div>
                    </div>
                  </div>
                </div>
                <div class="customerinfo">
                  <div class="customerinfo-title">
                    客户信息
                    <div class="edit-button">
                      <!-- 编辑按钮 -->
                      <el-button type="text" @click="dialogFormVisible = true"
                        >编辑</el-button
                      >
                      <el-dialog
                        title="编辑客户信息"
                        :visible.sync="dialogFormVisible"
                        width="30%"
                        center
                      >
                        <el-form ref="form" :model="form" label-width="80px">
                          <el-form-item label="客户名称">
                            <el-input v-model="form.name15"></el-input>
                          </el-form-item>
                          <el-form-item label="真实姓名">
                            <el-input v-model="form.name16"></el-input>
                          </el-form-item>
                          <el-form-item label="客户电话">
                            <el-input v-model="form.name17"></el-input>
                          </el-form-item>
                          <el-form-item label="客户邮箱">
                            <el-input v-model="form.name18"></el-input>
                          </el-form-item>
                          <el-form-item label="客户公司">
                            <el-input v-model="form.name19"></el-input>
                          </el-form-item>
                          <el-form-item label="客户地址">
                            <el-input v-model="form.name20"></el-input>
                          </el-form-item>

                          <el-form-item label="客户等级">
                            <el-select
                              v-model="form.region21"
                              placeholder="请选择"
                            >
                              <el-option
                                label="普通客户"
                                value="普通客户"
                              ></el-option>
                              <el-option
                                label="VIP客户"
                                value="VIP客户"
                              ></el-option>
                              <el-option
                                label="潜在客户"
                                value="潜在客户"
                              ></el-option>
                            </el-select>
                          </el-form-item>
                          <el-form-item label="客户来源">
                            <el-select
                              v-model="form.region22"
                              placeholder="请选择"
                            >
                              <el-option
                                label="客服录入"
                                value="客服录入"
                              ></el-option>
                              <el-option
                                label="网页介入"
                                value="网页介入"
                              ></el-option>
                            </el-select>
                          </el-form-item>
                          <el-form-item label="选择标签">
                            <el-checkbox-group v-model="form.type23">
                              <el-checkbox
                                label="潜在客户"
                                name="type"
                              ></el-checkbox>
                              <el-checkbox
                                label="上市公司"
                                name="type"
                              ></el-checkbox>
                            </el-checkbox-group>
                          </el-form-item>
                          <el-form-item label="客户备注">
                            <el-input
                              type="textarea"
                              v-model="form.desc24"
                            ></el-input>
                          </el-form-item>

                          <el-form-item label="工单标题">
                            <el-input
                              v-model="form.name25"
                              placeholder="请输入"
                            ></el-input>
                          </el-form-item>

                          <el-form-item>
                            <el-button type="primary" @click="dialogFormVisible = false"
                              >保存</el-button
                            >
                            <el-button @click="dialogFormVisible = false">取消</el-button>
                          </el-form-item>
                        </el-form>
                      </el-dialog>
                    </div>
                  </div>
                  <div class="info">
                    <div class="name">
                      <div class="question">客户名称：</div>
                      <div class="answer">北京市客户</div>
                    </div>
                    <div class="ture-name">
                      <div class="question">真实姓名：</div>
                      <div class="answer">王伟</div>
                    </div>
                    <div class="phone">
                      <div class="question">客户电话：</div>
                      <div class="answer">-</div>
                    </div>
                    <div class="email">
                      <div class="question">客户邮箱：</div>
                      <div class="answer">-</div>
                    </div>
                    <div class="company">
                      <div class="question">客户公司：</div>
                      <div class="answer">-</div>
                    </div>
                    <div class="address">
                      <div class="question">客户地址：</div>
                      <div class="answer">-</div>
                    </div>
                    <div class="grade">
                      <div class="question">客户等级：</div>
                      <div class="answer">普通客户</div>
                    </div>
                    <div class="source">
                      <div class="question">客户来源：</div>
                      <div class="answer">访客转化</div>
                    </div>
                    <div class="remarks">
                      <div class="question">客户备注：</div>
                      <div class="answer">-</div>
                    </div>
                    <div class="label">
                      <div class="question">客户标签：</div>
                      <div class="answer">
                        <div class="warning">
                          <div class="biaoqian">
                            <el-tag type="danger">已上市</el-tag>
                          </div>
                          <div class="biaoqian">
                            <el-tag type="danger">潜在客户</el-tag>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <!-- 会话数据 -->
            <el-tab-pane label="会话数据 " name="second">
              <div class="data">
                <div class="visitorinfo">
                  <div class="visitorinfo-title">基础数据</div>
                  <div class="info">
                    <div class="starttime">
                      <div class="question">开始时间：</div>
                      <div class="answer">2020-05-16 09:50:21</div>
                    </div>
                    <div class="endtime">
                      <div class="question">结束时间：</div>
                      <div class="answer">2020-05-16 22:40:17</div>
                    </div>
                    <div class="duration">
                      <div class="question">持续时长：</div>
                      <div class="answer">49分51秒</div>
                    </div>
                    <div class="average-response-time">
                      <div class="question">平均响应时长：</div>
                      <div class="answer">49分51秒</div>
                    </div>
                    <div class="first-response-time">
                      <div class="question">首次响应时长：</div>
                      <div class="answer">49分51秒</div>
                    </div>
                    <div class="number-of-customer-messages">
                      <div class="question">顾客消息数：</div>
                      <div class="answer">10</div>
                    </div>
                    <div class="number-of-customer-service-messages">
                      <div class="question">客服消息数：</div>
                      <div class="answer">11</div>
                    </div>
                  </div>
                </div>
                <div class="customerinfo">
                  <div class="customerinfo-title">评价</div>
                  <div class="info">
                    <div class="evaluation-time">
                      <div class="question">评价时间：</div>
                      <div class="answer">2020-05-16 09:50:21</div>
                    </div>
                    <div class="evaluation">
                      <div class="question">评价：</div>
                      <div class="answer">好评</div>
                    </div>
                    <div class="evaluation-details">
                      <div class="question">评价详情：</div>
                      <div class="answer">很好很不错，解决了</div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>

            <el-tab-pane label="历史工单" name="third">
              <div class="historyworkorder">
                <div class="workorderinfo-title">工单信息</div>
                <div class="info">
                  <div class="workordertitle">
                    <div class="question">工单标题：</div>
                    <div class="answer">分类一</div>
                  </div>
                  <div class="describe">
                    <div class="question">工单描述：</div>
                    <div class="answer">
                      客户需要型号SU-CC8990的产品的详细报价。
                    </div>
                  </div>
                  <div class="class">
                    <div class="question">工单分类：</div>
                    <div class="answer">分类一</div>
                  </div>
                  <div class="copyperson">
                    <div class="question">抄送人：</div>
                    <div class="answer">王涛，吴敏儿</div>
                  </div>
                  <div class="priority">
                    <div class="question">优先级：</div>
                    <div class="answer">低</div>
                  </div>
                  <div class="state">
                    <div class="question">工单状态：</div>
                    <div class="answer">处理中</div>
                  </div>
                  <div class="group">
                    <div class="question">法定客服组：</div>
                    <div class="answer">客服组一</div>
                  </div>
                  <div class="customer">
                    <div class="question">客户受理：</div>
                    <div class="answer">王先生</div>
                  </div>
                  <div class="creation-time">
                    <div class="question">创建时间：</div>
                    <div class="answer">2020/06/09 20:09</div>
                  </div>
                  <div class="update-time">
                    <div class="question">更新时间：</div>
                    <div class="answer">2020/06/09 20:09</div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      dialogFormVisible: false,
      createFormVisible: false,
      transferFormVisible: false,
      blockFormVisible: false,
      screenFormVisible: false,
      activeName: "first",//选定初始展示页面
      tabPosition: "left",
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
      chatItems: [
        {
          id: 1,
          icon: "#icon-kefu",
          speaker: "10号客服",
          time: "2020/09/28 17:26",
          content: "您好，请问有什么可以帮助您的？",
        },
        {
          id: 2,
          icon: "#icon-wode",
          speaker: "客户",
          time: "2020/09/28 17:26",
          content: "您好，我想问下资费的问题？",
        },
      ],
      chat: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSend: function () {
      let chatObj = {
        id: this.chatItems.length,
        icon: "#icon-kefu",
        speaker: "10号客服",
        time: new Date().toLocaleString(),
        content: this.chat,
      };
      Vue.set(this.chatItems, this.chatItems.length, chatObj); //更新数组
      this.chat = "";
      this.$refs.chatInput.focus(); //得到焦点，进行输入时直接跳转至对话末端
    },
    startFormVisible() {
      this.$router.replace("/main/history");
    },
  },
  updated: function () {
    //updated，生命周期函数，在状态修改后执行
    this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight;
  },
};
</script>

<style scoped>
.visitorinfo-title,
.customerinfo-title,
.workorderinfo-title {
  padding: 20px 0;
}
/*信息表单*/
.historyworkorder,
.customerinfo,
.visitorinfo {
  width: 100%;
  background-color: white;
  margin: 0 0 0 30px;
}
.info .question {
  color: rgb(138, 136, 136);
  font-size: 13px;
  display: inline-block;
  height: 25px;
}
.info .answer {
  display: inline-block;
  position: absolute;
  left: 100px;
  font-size: 13px;
  height: 25px;
}

.el-header,
.el-footer {
  background-color: white;
  color: #333;
  line-height: 60px;
}

.el-container .el-aside {
  background-color: white;
  color: #333;
  text-align: left;
  height: 590px;
}

.el-main {
  background-color: rgba(242, 242, 242, 0.498039215686275);
  color: #333;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/*简略框*/
.session-list {
  display: inline-block;
}
.from {
  display: inline-block;
  position: relative;
  top: -18px;
  color: black;
}
.time {
  display: inline-block;
  margin: 0px 0px 0px 100px;
  color: #ccc;
  font-size: 12px;
}
.brief {
  position: absolute;
  top: 13px;
  font-size: 12px;
  color: #cccc;
}
.list img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 12px;
  vertical-align: middle;
}

.el-menu-item .list {
  border-top: rgb(231, 227, 227) solid 1px;
}

/* 主要框 */
.session-box {
  width: 100%;
  height: auto;
}

/*标签*/
.warning {
  display: inline-block;
  margin: 0px 20px 0px 0px;
}
.biaoqian {
  margin: 0px 20px 0px 0px;
  display: inline-block;
}
/*编辑按钮*/
.customerinfo-title .edit-button {
  height: 5px;
  position: relative;
  left: 260px;
  bottom: 25px;
}
.el-form-item label {
  width: 80px;
}

.create-workorder,
.transfer,
.block,
.end-session {
  display: inline-block;
  margin: 12px 10px 0 0;
}
.template span,.screen-button{
  display: inline-block;
}
.template .screen-button{
  margin-left: 200px;
}
.history-box{
  position: relative;
  
  top: 80px;
  left: 70px;
}
/* 消息气泡 */
.chat-content {
  line-height: 22px;
  margin-top: 7px; 
  background-color: #ffffff;
  padding: 12px;
  border-radius: 4px;
  box-shadow: darkgrey 1px 1px 3px 2px;
  max-width:300px; /*限定最大气泡宽度 */
}
/* 气泡内内容 */
.chat-box {
  width: auto;
  height: 440px;
  overflow: auto;
  background-color: rgba(242, 242, 242, 0.5);
  word-wrap: break-word;/*超出边界后自动换行 */
}
.morelight {
  text-align: center;
  font-size: 12px;
  color: #ccc;
}

.chat-item {
  display: flex;
  margin: 20px 20px;
}
.chat-item.customer {
  flex-direction: row-reverse;
}

/* 输入框 */
.chat-input-box {
  width: 700px;
  height: 120px;
  box-sizing: border-box;
  padding: 16px 0px;
}
textarea {
  border: 1px solid #cccccc;
  padding: 6px;
  width: 100%;
  height: 80px;
  margin-top: 20px;
  outline-style: none;
}
.tool .icon {
  font-size: 20px;
  margin-right: 20px;

}
.tool{
  height: 7px;
  position: relative;
  bottom: 20px;
}
.chat-input-box .el-button {
  width: 120px;
  float: right;
  margin-right: 40px;
  margin-top: 5px;
}

/* 客户信息 */
.customer-info {
  width: 340px;
  min-height: 580px;
}
.el-tabs {
  padding-left: 20px;
}

.head-box {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c4c1c1;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 1.4em;
  margin: 0 10px;
}
.customer .head-box {
  background-color: #589df8;
}

.el-container .el-aside[data-v-7453a799]{
  height: 750px;
}
</style>