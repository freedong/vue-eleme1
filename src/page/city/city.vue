<template lang="html">
    <div class="city_container" id="city">
      <!-- 头部栏 -->
      <head-top :head-title="cityname" go-back='true'>
        <router-link :to="/home/" class="change_city" slot="changecity">切换城市</router-link>
      </head-top>

      <!-- 信息提交 -->
      <form class="city_form" v-on:submit.prevent>
        <div class="">
          <input type="search" name="city" placeholder="输入学校、商务楼、地址" class="city_input input_style" required v-model='inputVaule'>
        </div>
        <div class="">
          <input type="submit" name="submit" class="city_submit input_style" @click='postpois' value="提交">
        </div>
      </form>
    </div>
</template>

<script>
import headTop from 'src/components/header/head'
export default {
  name:'city',
  components:{
    headTop
  },
}
</script>


<style lang="scss" scoped>
    @import 'src/style/mixin';
    .city_container{
        padding-top: 2.35rem;
    }
    .change_city{
        right: 0.4rem;
        @include sc(0.6rem, #fff);
        @include ct;
    }
    .city_form{
        background-color: #fff;
        border-top: 1px solid $bc;
        border-bottom: 1px solid $bc;
        padding-top: 0.4rem;
        div{
            width: 90%;
            margin: 0 auto;
            text-align: center;
            .input_style{
                border-radius: 0.1rem;
                margin-bottom: 0.4rem;
                @include wh(100%, 1.4rem);
            }
            .city_input{
                border: 1px solid $bc;
                padding: 0 0.3rem;
                @include sc(0.65rem, #333);
            }
            .city_submit{
                background-color: $blue;
                @include sc(0.65rem, #fff);
            }
        }
    }
    .pois_search_history{
        border-top: 1px solid $bc;
        border-bottom: 1px solid $bc;
        padding-left: 0.5rem;
        @include font(0.475rem, 0.8rem);
    }
    .getpois_ul{
        background-color: #fff;
        border-top: 1px solid $bc;
        li{
            margin: 0 auto;
            padding-top: 0.65rem;
            border-bottom: 1px solid $bc;
            .pois_name{
                margin: 0 auto 0.35rem;
                width: 90%;
               @include sc(0.65rem, #333);
            }
            .pois_address{
                width: 90%;
                margin: 0 auto 0.55rem;
                @include sc(0.45rem, #999);
            }
        }
    }
    .search_none_place{
        margin: 0 auto;
        @include font(0.65rem, 1.75rem);
        color: #333;
        background-color: #fff;
        text-indent: 0.5rem;
    }
    .clear_all_history{
        @include sc(0.7rem, #666);
        text-align: center;
        line-height: 2rem;
        background-color: #fff;
    }
</style>
