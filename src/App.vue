<template>

<div id="app">
    <router-view></router-view>
 </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  font-size: 14px;
  height: 100%;
}
body{
  background-color: rgba(0, 110, 255, 0.0980392156862745);
  font-family: "PingFangSC-Regular", "PingFang SC", sans-serif;
  height: 100%;
}
/* iconfont使用的css */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app{
height: 100%;
margin: 0px 0px 0px 0px;
}
</style>
