<template>
    <div class="card text-drak bg-light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <p class="card-text">1605993932@qq.com</p>

            <router-link to="/phone">电话</router-link>
            <router-link to="/personname">联系人</router-link>
        </div>


        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
