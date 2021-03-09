<template>
<!-- <router-link :to="path"> -->
  <!-- 当nav-item发生了点击事件后，他应该要将这件事通知给父组件 -->
  <div class="nav-item" @click="toWorkspace">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="icon" />
    </svg>
 
    <div class="title">
      
        {{title}}
    </div>
  </div>
<!-- </router-link> -->
</template>

<script>
export default {
    props:['icon','title','path'],
    methods:{
      toWorkspace:function(){
        this.$router.push(this.path);
        // 通知父组件clickNavItem事件发生了
        this.$emit('clickNavItemEvent',this.title);//自定义事件
      }
    }
};
</script>

<style >
.nav-item {
  width: 64px;
  height: 56px;

  font-size: 18px;
  font-weight: 1200;
  text-align: center;
  line-height: 56px;
  color: #fff;

  position: relative;
}
.title{
    position: absolute;
    z-index: 10;
    left: 72px;
    top: 13px;

    height: 30px;
    width: 36px;
    border-radius: 2px;

    background: #333;
    font-size: 10px;
    line-height: 30px;

    display: none;
}

.nav-item:hover .title{
    display: block;
}
.title::before{
    content: '';
    width: 0;
    height: 0;
    border: solid 10px;
    border-color: transparent #333 transparent transparent;

    position: absolute;
    top: 5px;
    left: -16px;
}
.nav-item:hover {
    color: #006eff;
    /* border: solid 1px red ; */
    border-radius:50%;
   
}
.icon{
  height: 20px;
  width: 20px;

}
</style>