<!--首页-->
<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3>{{ product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <router-link :to="{path: 'detail/' + item.toKey}">{{ item.name }}</router-link>
              <!--根据属性值显示标记-->
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <!--最后一项没有分割横线-->
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <!--幻灯片-->
      <slide-show :slides="slides" :inv="invTime"></slide-show>
      <!--右侧产品列表-->
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item, index) in boardList"
          :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <!--点击立即购买跳转到对应路由页面-->
              <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import slideShow from '../components/slideShow'

  export default {
    components: {
      slideShow
    },
//    实例创建完成后执行
    created: function () {
      this.$ajax({
        method: "get",
        url: "api/getNewsList",
      }).then((res) => {
        this.newsList = res.data
      }).catch((err) => {
        console.log(err)
      })
    },
    data() {
      return {
//        传给slideShow幻灯片组件自动切换的时间间隔
        invTime: 2000,
//        传给slideShow幻灯片组件的数据
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'Web前端开发神器，最强大的HTML5编辑器',
            href: 'detail/webStorm'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: '开放源代码的、基于Java的可扩展开发平台',
            href: 'detail/eclipse'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: '一个专业的快速原型设计工具',
            href: 'detail/axure'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: '一套功能强大，可取代记事本的文字编辑器',
            href: 'detail/editPlus'
          }
        ],
//        右侧产品列表数据
        boardList: [
          {
            title: 'WebStorm',
            description: 'Web前端开发神器，最强大的HTML5编辑器',
            id: 'car',
            toKey: 'webStorm',
            saleout: false
          },
          {
            title: 'Eclipse',
            description: '开放源代码的、基于Java的可扩展开发平台',
            id: 'loud',
            toKey: 'eclipse',
            saleout: false
          },
          {
            title: 'Axure',
            description: '一个专业的快速原型设计工具',
            id: 'earth',
            toKey: 'axure',
            saleout: true
          },
          {
            title: 'EditPlus',
            description: '一套功能强大，可取代记事本的文字编辑器',
            id: 'hill',
            toKey: 'editPlus',
            saleout: false
          }
        ],
//        最新消息数据
        newsList: [],
//        左侧列表数据
        productList: {
          pc: {
            title: '软件产品',
            list: [
              {
                name: 'WebStorm',
                toKey: 'webStorm'
              },
              {
                name: 'Eclipse',
                toKey: 'eclipse'
              },
              {
                name: 'Axure',
                toKey: 'axure',
                hot: true
              },
              {
                name: 'EditPlus',
                toKey: 'editPlus'
              }
            ]
          },
          app: {
            title: '技术服务',
            last: true,
            list: [
              {
                name: '跨域服务',
              },
              {
                name: '安全防护',
                hot: true
              },
              {
                name: '数据恢复',
              },
              {
                name: '增值服务',
              }
            ]
          }
        }
      }
    }
  }
</script>

<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }

  .index-right {
    float: left;
    width: 900px;
  }

  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }

  .index-left-block .hr {
    margin-bottom: 20px;
  }

  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }

  .index-left-block ul {
    padding: 10px 15px;
  }

  .index-left-block li {
    padding: 5px;
  }

  .index-board-list {
    overflow: hidden;
  }

  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }

  .index-board-car .index-board-item-inner {
    background: url(../assets/images/1.png) no-repeat;
  }

  .index-board-loud .index-board-item-inner {
    background: url(../assets/images/2.png) no-repeat;
  }

  .index-board-earth .index-board-item-inner {
    background: url(../assets/images/3.png) no-repeat;
  }

  .index-board-hill .index-board-item-inner {
    background: url(../assets/images/4.png) no-repeat;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }

  .line-last {
    margin-right: 0;
  }

  .index-board-button {
    margin-top: 20px;
  }

  .lastest-news {
    min-height: 406px;
  }

  .hot-tag {
    background: red;
    color: #fff;
  }

  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
