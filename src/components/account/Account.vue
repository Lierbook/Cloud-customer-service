<template>
  <div class="account">
    <el-badge is-dot class="item010">
  

      <img :src="account.avatar" alt="" class="avatar">
      <span class="accunt-name">{{account.name}}</span>
      <img :src="arrow" alt="" class="arrow">
</el-badge>
      <div class="account-status">
          <div :class="onLineClassList" @mouseenter="change(onLineClassList,true)" @mouseleave="change(onLineClassList,false)">在线</div>
      </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      account:{
        avatar:require('@/assets/u94.svg'),
        name:'戚薇客服'
      },
      arrow:require('./u93.svg'),
      onLineClassList:{
        'status-item':true,
        highlight:true
      },
      offLineClassList:{
        'status-item':true,
        highlight:false 
      }
    }
  },
  methods:{
    change:function(obj,isHighlight){
      // 通过修改状态，来修改页面的样式
      obj.highlight = isHighlight
      // vue不建议直接操作dom对象，元素js直接操作dom对象
    }
  }
}
</script>
<style>
  .account{
    height: 64px;position: relative;
  }
  .avatar {
    width: 40px;height: 40px;
    border-radius: 50%;margin: 12px;
    vertical-align: middle;
  }
  .account-status{
    width: 100%;
    position: absolute;
    z-index: 9;
    left: 0;
    top:66px;
    display: none;
    background-color:white;
    color: tomato;
    font-weight: 900;
    border-radius: 5px;
    
    
  }
  .account:hover .account-status{
    display: block;
  }

  .highlight{
    background-color: burlywood;
  }

  .item010 {
  margin-top: 5px;
  margin-right: 20px;
}
</style>