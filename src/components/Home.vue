<template>
    <div class='row'>
        <div id='home' class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家品尝pizza</h1>
                <h2>这里有你非常喜欢的pizza</h2>
                <button class="btn btn-success" @click="goToMenu">Let's order!</button>
            </div>
        </div>
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
    #home{
        background: url('../../src/assets/pizza.jpg');
        height: 85vh;
        padding: 10%;
    }
    h1,h2{
        margin: 6%;
    }
    .background{
        background-color: #eee;
        opacity: 0.8;
        max-width: 70vw;
        margin: 0 auto;
        padding: 20px 0;
    }
</style>