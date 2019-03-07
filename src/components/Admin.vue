<template>
    <h1>Admin</h1>
</template>

<script>
export default {
    data(){
        return{
            name:"Henry"
        }
    },
    //路由独享守卫
    // beforeRouteEnter:(to,from,next) => {
    //     //在执行之前，没有渲染data里的数据；
    //     //alert("hello" + this.name);
    //     //可以在next中写回调
    //     next(vm => {
    //         alert('hello' + vm.name);
    //     })
    // },
    // beforeRouteLeave:(to,from,next) => {
    //     if(confirm('确认离开么？') == true){
    //         next();
    //     }else{
    //         //留在此页面
    //         next(false);
    //     }
    // }
}
</script>

<style>

</style>