<template>
    <div>
        <h1>Home</h1>
        <button class="btn btn-success" @click="goToMenu">Let's order!</button>
    </div>
    
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{

        }
    },
    methods:{
        goToMenu(){
            //跳转至上一次浏览页面
            //this.$router.go(-1);


            //指定跳转的地址
            //this.$router.replace('/menu');


            //如果路由设置有名字name
            //this.$router.replace({name:"menuLink"});


            //更常用的跳转方式push
            // this.$router.push('/admin');
            this.$router.push({name:"menuLink"});
        }
    }
}
</script>

<style>

</style>