<template>
  <!-- app页面 -->
  <div id="app1">
    <!-- 根据路由跳转到app的二级路由页面 -->
    <transition name="router-fade" mode="out-in">
      <!-- keep-alive是Vue的内置组件,能在组件切换过程中将状态保留在内存中,防止重复渲染DOM。 -->
      <keep-alive>
        <!-- 如果路由中有meta属性且keepAlive为true  走这个路由 -->
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <!-- 如果路由中有meta属性且keepAlive为false  走这个路由 -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <!-- svg组件 -->
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import svgIcon from './components/common/svg';
export default {
  name: 'App',
  components:{
    svgIcon
  },
}
</script>

<style lang="scss">
// 引用基础样式
@import './style/common';


.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}

</style>
