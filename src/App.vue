<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  //注册组件
  components:{
    //有两种体现方式
    //"app-header":Header
    appHeader:Header
  }
  
}
</script>

<style>

</style>
