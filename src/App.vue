<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <div class="container">
        <router-view></router-view>
      </div>
      <br>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <router-view name='orderingGuide'></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name='delivery'></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name='history'></router-view>
          </div>
        </div>
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
