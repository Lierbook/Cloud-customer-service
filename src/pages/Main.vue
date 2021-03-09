<template>
  <div class="main">
    <nav-bar @aaa='handleClick'></nav-bar>
    <div class="search-header">
      <div class="workspace-title">{{title}}</div>
      <account style="float:right"></account>
    </div>
    <!-- <div class="workspace"> -->
        <!-- 组件由路由决定的时候，使用router-view -->
        <router-view></router-view>
    <!-- </div> -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
import Account from '@/components/account/Account';
// import WorkOrder from '@/components/order/WorkOrder'

export default {
  components: { NavBar,Account },
  data:function(){
    return {
      title:'首页'
    }
  },
  methods:{
    handleClick:function(data){
      this.title = data;
    }
  }
};
</script>

<style>
.main{
    position: relative;
    height: 100%;
}
.search-header{
    height: 64px;
    position: fixed;
    z-index: 99999;
    left: 0;
    top: 0;
    right:0;
    margin-left: 64px;
    /* margin-right: 10px; */
    background-color: #fff;
}
/* .workspace{
    position: absolute;
    left: 74px;
    top: 74px;
    z-index: 0;
    width: 1400px;
    height: auto;
    background-color: #fff;

    padding: 21px 20px;
} */
.workspace-title{
border-width: 0px;
position:absolute;
left: 20px;
top: 20px;
width: 50px;
height: 21px;
display:flex;
font-size :18px;


}
</style>