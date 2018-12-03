import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 引入线上和线下环境的配置文件
import { routerMode } from '../config/env'


// 引用主页面APP.vue  对应index.html
import App from '../App.vue'

// require.ensure 分模块打包  按需要请求加载页面  异步加载
// webpack中利用require.ensure()实现按需加载
// require.ensure 意思是在打包的时候的把每个页面都打包成一个单独的js
//分模块打包之后在 dist目录下是这样的, 这样就把一个大的 js文件分为一个个小的js文件了,按需去下载,其他的使用方法和import的效果一样


//home页面
const home = r => require.ensure([],() => r(require('../page/home/home')),'home')
//城市信息页面
const city = r => require.ensure([],() => r(require('../page/city/city')),'city')





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,   //顶层路由，对应index.html
      children:[        //二级路由，对应App.vue
        // 地址为空时跳转home页面
        {
          path:'',
          redirect:'/home'
        },
        // 首页城市列表页
        {
          path:'/home',
          name:'home',
          component:home
        },
        // 当前选择城市页
        {
          path:'/city/:cityid',
          component:city
        },
      ]
    }
  ],
  mode:routerMode,
  strict:process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      if(from.meta.keepAlive){
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
