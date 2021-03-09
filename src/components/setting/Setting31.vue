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

    <div class="commonwords-box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="个人库" name="first">
          <div class="personallibrary-title">
            <div class="search-box">
              <el-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="请输入关键词"
                :remote-method="remoteMethod"
                :loading="loading"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <div class="add-category">
              <el-button type="text" @click="addcategoryFormVisible = true"
                >添加分类</el-button
              >
              <el-dialog
                title="添加分类"
                :visible.sync="addcategoryFormVisible" 
                width="30%"
                center
                append-to-body
             
              > <!-- 更改遮罩层 -->
                <el-form ref="form" :model="form" label-width="90px">
                  <el-form-item label="分类名称">
                    <el-input
                      v-model="form.name1"
                      placeholder="请输入分类名称"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="addcategoryFormVisible = false">确认</el-button>
                    <el-button @click="addcategoryFormVisible = false">取消</el-button>
                  </el-form-item>
                </el-form>
              </el-dialog>
            </div>
            <div class="add-commonwords">
              <el-button type="text" @click="addcommonwordsFormVisible = true"
                >添加常用语</el-button
              >
              <el-dialog
              append-to-body
                title="添加常用语"
                :visible.sync="addcommonwordsFormVisible"
                width="30%"
                center
              >
                <el-form ref="form" :model="form" label-width="90px">
                  <el-form-item label="选择分类">
                    <el-select v-model="form.region2" placeholder="请选择">
                      <el-option label="默认分组" value="1"></el-option>
                      <el-option label="欢迎语" value="2"></el-option>
                      <el-option label="业务相关" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="常用语内容">
                    <el-input
                      v-model="form.content3"
                      placeholder="请输入常用语"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="addcommonwordsFormVisible = false">确认</el-button>
                    <el-button @click="addcommonwordsFormVisible = false">取消</el-button>
                  </el-form-item>
                </el-form>
              </el-dialog>
            </div>
          </div>
          <div class="personallibrary-body">
            <el-row class="commonwords-navmenu">
              <el-col :span="24">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-submenu index="1">
                    <template slot="title">
                      <span>欢迎语</span>
                      <div class="title-edit">
                        <el-button
                          type="text"
                          @click="titleeditFormVisible = true"
                          ><i class="el-icon-edit"></i
                        ></el-button>
                        <el-dialog
                        append-to-body
                          title="编辑分类"
                          :visible.sync="titleeditFormVisible"
                          width="30%"
                          center
                        >
                          <el-form ref="form" :model="form" label-width="90px">
                            <el-form-item label="分类名称">
                              <el-input
                                v-model="form.name4"
                                placeholder="请输入分类名称"
                              ></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="titleeditFormVisible = false"
                                >保存</el-button
                              >
                              <el-button @click="titleeditFormVisible = false">取消</el-button>
                            </el-form-item>
                          </el-form>
                        </el-dialog>
                      </div>
                      <div class="title-delete">
                        <el-button
                          type="text"
                          @click="titledeleteFormVisible = true"
                          
                          ><i class="el-icon-delete" :append-to-body="false"></i
                        ></el-button>
                        <el-dialog
                        append-to-body
                          title="删除确认"
                          :visible.sync="titledeleteFormVisible"
                          width="30%"
                          center
                        >
                          <el-form ref="form" :model="form" label-width="260px">
                            <el-form-item
                              label="删除后无法恢复，确定删除此信息吗？"
                            ></el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="titledeleteFormVisible = false"
                                >确认</el-button
                              >
                              <el-button @click="titledeleteFormVisible = false">取消</el-button>
                            </el-form-item>
                          </el-form>
                        </el-dialog>
                      </div>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                      <el-menu-item index="1-2"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                      <el-menu-item index="1-3"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title">
                      <span>业务相关用语</span>
                      <div class="title-edit2">
                        <el-button
                          type="text"
                          @click="titleeditFormVisible = true"
                          ><i class="el-icon-edit"></i
                        ></el-button>
                        <el-dialog
                        append-to-body
                          title="编辑分类"
                          :visible.sync="titleeditFormVisible"
                          width="30%"
                          center
                        >
                          <el-form ref="form" :model="form" label-width="90px">
                            <el-form-item label="分类名称">
                              <el-input
                                v-model="form.name5"
                                placeholder="请输入分类名称"
                              ></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="titleeditFormVisible = false"
                                >保存</el-button
                              >
                              <el-button @click="titleeditFormVisible = false">取消</el-button>
                            </el-form-item>
                          </el-form>
                        </el-dialog>
                      </div>
                      <div class="title-delete2">
                        <el-button
                          type="text"
                          @click="titledeleteFormVisible = true"
                          ><i class="el-icon-delete"></i
                        ></el-button>
                        <el-dialog
                        append-to-body
                          title="删除确认"
                          :visible.sync="titledeleteFormVisible"
                          width="30%"
                          center
                        >
                          <el-form ref="form" :model="form" label-width="260px">
                            <el-form-item
                              label="删除后无法恢复，确定删除此信息吗？"
                            ></el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="titledeleteFormVisible = false"
                                >确认</el-button
                              >
                              <el-button @click="titledeleteFormVisible = false">取消</el-button>
                            </el-form-item>
                          </el-form>
                        </el-dialog>
                      </div>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="2-1"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                      <el-menu-item index="2-2"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                      <el-menu-item index="2-3"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="公共库" name="second">
          <div class="publiclibrary-title">
            <div class="search-box">
              <el-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="请输入关键词"
                :remote-method="remoteMethod"
                :loading="loading"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <div class="add-category">
              <el-button type="text" @click="addcategoryFormVisible = true"
                >添加分类</el-button
              >
              <el-dialog
              append-to-body
                title="添加分类"
                :visible.sync="addcategoryFormVisible"
                width="30%"
                center
              >
                <el-form ref="form" :model="form" label-width="90px">
                  <el-form-item label="分类名称">
                    <el-input
                      v-model="form.name6"
                      placeholder="请输入分类名称"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="addcategoryFormVisible = false">确认</el-button>
                    <el-button @click="addcategoryFormVisible = false">取消</el-button>
                  </el-form-item>
                </el-form>
              </el-dialog>
            </div>

            <div class="add-commonwords">
              <el-button type="text" @click="addcommonwordsFormVisible = true"
                >添加常用语</el-button
              >
              <el-dialog
              append-to-body
                title="添加常用语"
                :visible.sync="addcommonwordsFormVisible"
                width="30%"
                center
              >
                <el-form ref="form" :model="form" label-width="90px">
                  <el-form-item label="选择分类">
                    <el-select v-model="form.region7" placeholder="请选择">
                      <el-option label="默认分组" value="1"></el-option>
                      <el-option label="欢迎语" value="2"></el-option>
                      <el-option label="业务相关" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="常用语内容">
                    <el-input
                      v-model="form.content8"
                      placeholder="请输入常用语"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="addcommonwordsFormVisible = false">确认</el-button>
                    <el-button @click="addcommonwordsFormVisible = false">取消</el-button>
                  </el-form-item>
                </el-form>
              </el-dialog>
            </div>
          </div>
          <div class="personallibrary-body">
            <el-row class="commonwords-navmenu">
              <el-col :span="24">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-submenu index="1">
                    <template slot="title">
                      <span>生鲜产品业务常用语</span>
                      <div class="title-edit">
                        <el-button
                          type="text"
                          @click="titleeditFormVisible = true"
                          ><i class="el-icon-edit"></i
                        ></el-button>
                        <el-dialog
                        append-to-body
                          title="编辑分类"
                          :visible.sync="titleeditFormVisible"
                          width="30%"
                          center
                        >
                          <el-form ref="form" :model="form" label-width="90px">
                            <el-form-item label="分类名称">
                              <el-input
                                v-model="form.name9"
                                placeholder="请输入分类名称"
                              ></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="titleeditFormVisible = false"
                                >保存</el-button
                              >
                              <el-button @click="titleeditFormVisible = false">取消</el-button>
                            </el-form-item>
                          </el-form>
                        </el-dialog>
                      </div>
                      <div class="title-delete">
                        <el-button
                          type="text"
                          @click="titledeleteFormVisible = true"
                          ><i class="el-icon-delete"></i
                        ></el-button>
                        <el-dialog
                        append-to-body
                          title="删除确认"
                          :visible.sync="titledeleteFormVisible"
                          width="30%"
                          center
                        >
                          <el-form ref="form" :model="form" label-width="260px">
                            <el-form-item
                              label="删除后无法恢复，确定删除此信息吗？"
                            ></el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="titledeleteFormVisible = false"
                                >确认</el-button
                              >
                              <el-button @click="titledeleteFormVisible = false">取消</el-button>
                            </el-form-item>
                          </el-form>
                        </el-dialog>
                      </div>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                      <el-menu-item index="1-2"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                      <el-menu-item index="1-3"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title">
                      <span>推广常用语</span>
                      <div class="title-edit2">
                        <el-button
                          type="text"
                          @click="titleeditFormVisible = true"
                          ><i class="el-icon-edit"></i
                        ></el-button>
                        <el-dialog
                        append-to-body
                          title="编辑分类"
                          :visible.sync="titleeditFormVisible"
                          width="30%"
                          center
                        >
                          <el-form ref="form" :model="form" label-width="90px">
                            <el-form-item label="分类名称">
                              <el-input
                                v-model="form.name10"
                                placeholder="请输入分类名称"
                              ></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="titleeditFormVisible = false"
                                >保存</el-button
                              >
                              <el-button @click="titleeditFormVisible = false">取消</el-button>
                            </el-form-item>
                          </el-form>
                        </el-dialog>
                      </div>
                      <div class="title-delete2">
                        <el-button
                          type="text"
                          @click="titledeleteFormVisible = true"
                          ><i class="el-icon-delete"></i
                        ></el-button>
                        <el-dialog
                        append-to-body
                          title="删除确认"
                          :visible.sync="titledeleteFormVisible"
                          width="30%"
                          center
                        >
                          <el-form ref="form" :model="form" label-width="260px">
                            <el-form-item
                              label="删除后无法恢复，确定删除此信息吗？"
                            ></el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="titledeleteFormVisible = false"
                                >确认</el-button
                              >
                              <el-button @click="titledeleteFormVisible = false">取消</el-button>
                            </el-form-item>
                          </el-form>
                        </el-dialog>
                      </div>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="2-1"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                      <el-menu-item index="2-2"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                      <el-menu-item index="2-3"
                        >你好，请问有什么可以帮您？</el-menu-item
                      >
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
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
      activeName: "first",
      value: true,
      title: "首页1",
      dialogTableVisible: false,
      dialogFormVisible: false,
      addcategoryFormVisible: false,
      addcommonwordsFormVisible: false,
      titleeditFormVisible: false,
      titledeleteFormVisible: false,
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
    };
  },

  methods: {
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
.commonwords-box {
  position: absolute;
  width: 1000px;
  height: 640px;
  left: 320px;
  top: 0px;

  background-color: white;
  z-index: 3;
  border-radius: 4px;
}
.search-box,
.add-category,
.add-commonwords {
  display: inline-block;
  margin: 0 0 0 20px;
}
.add-category,
.add-commonwords {
  float: right;
  margin-right: 10px;
}
.el-submenu {
  border-top: 1px solid #e4dddd;
}
.personallibrary-title,
.publiclibrary-title{
  margin: 0 0 15px 0;
}
span,
.title-edit,
.title-delete,
.title-edit2,
.title-delete2 {
  display: inline-block;
}
.title-edit,
.title-delete,
.title-edit2,
.title-delete2{
  float: right;
  margin-right: 5px;
}
span{
  margin-left: 10px;
}
</style>