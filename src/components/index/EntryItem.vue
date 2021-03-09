<template>
  <div class="entry-item" @click="handlerClick">
    <div class="svg-box" :style='styleObj'>
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="icon" />
      </svg>
    </div>
    <div class="titleone">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
    props:['icon','title','styleObj','path'],
    methods:{
      handlerClick:function(){
        console.log(12222)
         this.$router.push(this.path);
        this.$store.commit(this.title);
      }
    }
};
</script>

<style scoped>
.entry-item {
  height: 88px;
  width: 60px;
  color: #fff;
}
.svg-box {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: 60px;
  text-align: center;
  margin-bottom: 9px;
}
.titleone {
  width: 60px;
  height: 19px;
  line-height: 19px;
  color: #333;
}
</style>