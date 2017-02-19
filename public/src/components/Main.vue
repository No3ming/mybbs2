<template>
  <section>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20">
      <el-col :span="3" class="theme-menu">
        <div class="grid-content bg-purple"><img
          src="http://upload.jianshu.io/collections/images/12/1239240801.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/195/h/195"
          alt=""></div>
      </el-col>
      <el-col :span="3" class="theme-menu">
        <div class="grid-content bg-purple"><img
          src="http://upload.jianshu.io/collections/images/12/1239240801.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/195/h/195"
          alt=""></div>
      </el-col>
      <el-col :span="3" class="theme-menu">
        <div class="grid-content bg-purple"><img
          src="http://upload.jianshu.io/collections/images/12/1239240801.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/195/h/195"
          alt=""></div>
      </el-col>
      <el-col :span="3" class="theme-menu">
        <div class="grid-content bg-purple"><img
          src="http://upload.jianshu.io/collections/images/12/1239240801.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/195/h/195"
          alt=""></div>
      </el-col>
      <el-col :span="3" class="theme-menu">
        <div class="grid-content bg-purple"><img
          src="http://upload.jianshu.io/collections/images/12/1239240801.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/195/h/195"
          alt=""></div>
      </el-col>
      <el-col :span="3" class="theme-menu">
        <div class="grid-content bg-purple"><img
          src="http://upload.jianshu.io/collections/images/12/1239240801.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/195/h/195"
          alt=""></div>
      </el-col>
      <el-col :span="3" class="theme-menu">
        <div class="grid-content bg-purple"><img
          src="http://upload.jianshu.io/collections/images/12/1239240801.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/195/h/195"
          alt=""></div>
      </el-col>
      <el-col :span="3" class="theme-menu">
        <div class="grid-content bg-purple"><img
          src="http://upload.jianshu.io/collections/images/12/1239240801.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/195/h/195"
          alt=""></div>
      </el-col>
    </el-row>
    <article-list></article-list>
  </section>
</template>

<script>
 // import articleList from './list/Articlelist.vue'
  export default {
    components: {
      // articleList
    }
  }
</script>

<style scoped lang="less">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .theme-menu {

    .grid-content {
      height: 60px;
      border: 1px solid #ccc;
      border-radius: 5px;

      img {
        width: 100%;
        height: 100%;
      }
    &:hover {
       transform: scale(1.2);
       transition: transform  .5s ease;
     }
    }
  }
</style>
