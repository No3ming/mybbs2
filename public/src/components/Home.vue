<template>
  <el-row class="panel">
    <!--顶部导航栏-->
    <el-col :span="24" class="panel-top">
      <el-col :span="18">
        <span class="logo-txt"><router-link :to="{ path: '/' }">首页</router-link></span>
      </el-col>
      <el-col :span="6">
        <el-button type="text">登陆</el-button>
        <el-button type="warning">注册</el-button>
        <el-button :plain="false" type="danger">写文章</el-button>
      </el-col>
    </el-col>
    <!--顶部导航栏END-->
    <el-col :span="24" class="panel-center">
      <!--右侧内容-->
      <section class="panel-c-c">
        <div class="grid-content bg-purple-light">
          <!--右侧顶部面包屑-->
          <el-col :span="24" class="panel-inner-top">
            <strong>{{$route.name}}</strong>
            <el-breadcrumb separator="/" class="bread-crumb">
              <el-breadcrumb-item :to="{ path: '/' }" v-if="$route.path!='/'">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-if="$route.path!='/'">{{$route.matched[0].name}}</el-breadcrumb-item>
              <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <!--右侧顶部面包屑END-->
          <el-col :span="24" class="panel-inner-bottom">
            <!--路由视图-->
            <router-view></router-view>
          </el-col>
        </div>
      </section>
      <!--右侧内容END-->
      <!--左侧导航菜单-->
      <aside class="left-aside">
        <!--<h5 class="admin"><i class="fa fa-user" aria-hidden="true"></i>欢迎系统管理员</h5>-->
        <!--<el-menu :default-active="$route.path" :default-openeds="openedArr" class="aside-menu" @open="handleopen"
                 @close="handleclose" @select="handleselect" theme="dark" unique-opened router>
          &lt;!&ndash;通过循环构造右侧菜单&ndash;&gt;
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            &lt;!&ndash;对于非单个菜单的&ndash;&gt;
            <el-submenu :index="index+''" v-if="!item.leaf">
              &lt;!&ndash;标题&ndash;&gt;
              <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
              &lt;!&ndash;内嵌菜单&ndash;&gt;
              <el-menu-item v-for="child in item.children" v-if="!child.hidden" :index="child.path">{{child.name}}
              </el-menu-item>
            </el-submenu>
            &lt;!&ndash;单个菜单&ndash;&gt;
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i
              :class="item.iconCls"></i>{{item.children[0].name}}
            </el-menu-item>
          </template>
        </el-menu>-->
        <div class="aside-menu">
          <el-button size="large" type="success" class="memu-list">新上榜</el-button>
          <el-button size="large" type="warning" class="memu-list">日报</el-button>
          <el-button size="large" type="danger" class="memu-list">7日热门</el-button>
          <el-button size="large" type="info" class="memu-list">30日热门</el-button>
        </div>
        <div class="Advertisement"></div>
        <el-recommend></el-recommend>
      </aside>
      <!--左侧导航菜单END-->
    </el-col>
  </el-row>
</template>

<script>
  import elRecommend from './Recommend.vue'
  export default {
    components: {
      elRecommend
    },
    created() {
      console.log(this.$router.options.routes)
    },
    data() {
      return {
        openedArr: [],
        currentPath: ''
      }
    },
    watch: {
      '$route' (to, from) {//监听路由改变
        if (to.path == '/') {
          this.openedArr = [];
        }
      }
    },
    methods: {
      onSubmit() {
        // console.log('submit!');
      },
      handleopen(){
        // console.log('handleopen');
      },
      handleclose(){
        // console.log('handleclose');
      },
      handleselect: function (a, b) {
      },
      logout: function () {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          type: 'warning'
        }).then(() => {
          _this.$router.replace('/login');
        }).catch(() => {
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .panel {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }

  .panel-top {
    height: 60px;
    line-height: 60px;
    background: #1F2D3D;
    color: #c0ccda;
  }

  .panel-center {
    background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }

  .logo-txt {
    margin-left: 10px;
    a {
      font-size: 32px;
      margin-left: 100px;
      color: #ea6f5a;
      text-decoration: none;

      &:hover {
        color: #ec6149;
      }
    }
  }
  .left-aside {
    width: 300px;
    position: absolute;
    right:0;
    .aside-menu {

      .memu-list {
        width: 90%;
        margin: 10px;
      }
    }

    .Advertisement {
      width: 100%;
      margin: 0 10px;
      height: 300px;
      border: 1px;
    }

    .recommend {

    }
  }
  .panel-c-c {
    background: #f1f2f7;
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 300px;
    overflow-y: scroll;
    padding: 20px;

    .panel-inner-top {
      margin-bottom: 15px;

      .bread-crumb {
        height: 22px;
        line-height: 22px;
        float: right;
      }

      strong {
        width: 200px;
        float: left;
        color: #475669;
      }

    }
    .panel-inner-bottom {
      background-color: #fff;
      box-sizing: border-box;
      padding: 15px;
    }
  }
  .logout {
    background-size: contain;
    width: 20px;
    height: 20px;
    float: left;
  }

  .logo {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }

  .tip-logout {
    float: right;
    margin-right: 20px;
    padding-top: 5px;
  }

  .tip-logout i {
    cursor: pointer;
  }

  .admin {
    color: #c0ccda;
    margin-left: 20px;

    i {
      margin-right: 5px;
    }

  }
</style>
