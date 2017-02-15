<template>
  <div class="recommend">
    <el-row class="title">
      <el-col :span="16">推荐作者</el-col>
      <el-col :span="8" >
        <el-col :span="12" >2/23</el-col>
        <el-col :span="12" class="page-count">
          <span class="el-icon-arrow-left"></span>
          <span class="el-icon-arrow-right"></span>
        </el-col>
      </el-col>
    </el-row>
    <div class="list"></div>
    <router-link :to="{path: '/'}" class="el-button find-more">查看全部 ></router-link>
  </div>
</template>

<style scoped lang="less">
  .recommend {
    margin: 0 10px 10px 10px;
  }
  .title {
    height: 36px;
    line-height: 36px;

    .reload {
      float: right;
    }

    .page-count {
     text-align: center;
    }
  }

  .find-more {
    padding: 7px 7px 7px 12px;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }
</style>