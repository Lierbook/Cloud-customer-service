<template>
  <div class="statistics-item">
      <div class="titletwo">{{title}}</div>
      <div class="count" :style='colorValue'>{{count}}</div>
      <div class="desc">{{desc}}</div>
  </div>
</template>

<script>
export default {
    props:['title','count','desc','colorValue']
}
</script>

<style scoped>
    .statistics-item{
        height: 174px;
        width: 280px;
        background-color: rgba(0, 110, 255, 0.05);
        text-align: center;
        
    }
    .titletwo,.desc{
        height: 50px;
        line-height: 50px;
    }
    .desc{
        opacity: .6;
    }
    .count{
        height: 74px;
        line-height: 74px;
        font-size: 3em;
        font-weight: 800;
    }
</style>