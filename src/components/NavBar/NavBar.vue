<template >

  <div class="nav-bar">
    <div class="logo-box">
      <logo />
    </div>
    <nav-bar-item v-bind="navItem" v-for="navItem in navItems" :key="navItem.title" @clickNavItemEvent='handleClick' />
  </div>
</template>

<script>
import Logo from "./Logo";
import NavBarItem from "./NavBarItem";

export default {
  components: {
    Logo,
    NavBarItem,
  },
  data: function () {
    return {
      navItems: [
        {
          icon: "#icon-shouye",
          title: "首页",
          path:'/main/index'
        },
        {
          icon: "#icon-pinglun",
          title: "消息",
          path:'/main/session'
        },
        {
          icon: "#icon--jiaoseguanli",
          title: "访客",
          path:'/main/visitor'
        },
        {
          icon: "#icon-data",
          title: "历史",
           path:'/main/history'
        },
        {
          icon: "#icon-wode",
          title: "客户",
          path:'/main/customer'
        },
        {
          icon: "#icon-jilu",
          title: "工单",
          path:'/main/order',
        },
        {
          icon: "#icon-bianji",
          title: "统计",
          path:'/main/statistic',
        },
        // {
        //   icon: "#el-icon-minus",
        //   title: "统计",
        // },
       
        {
          icon: "#icon-gengduo",
          title: "设置",
        
          path: "/main/setting11",
        },
        {
          icon: "#icon-guanbi",
          title: "退出",
          path: "/main/logout",
          
        },
        // {
         
        //   title: "新工单",
        //   path:'/main/WorkOrderNew',
          
        // },
      ],
    };
  },
  methods:{
    handleClick:function(data){
      this.$emit('aaa',data);
    }
  }
};
</script>

<style >
.nav-bar {
  width: 64px;
  height: 100%;
  background-color: rgba(23, 28, 58, 1);
  position: fixed;
  z-index: 100000;


}
.logo-box {
  padding: 29px 8px;
}

</style>