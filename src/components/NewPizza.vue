<template>
    <form @submit.prevent='addMenuItem'>
        <h3 class='text-muted my-5'>添加新的pizza</h3>
        <div class="form-group row">
            <label for="" class="col-sm-2">品种</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-2">描述</label>
            <div class="col-sm-10">
                <textarea rows="5" class='form-control' v-model="newPizza.description"></textarea>
            </div>
        </div>
        <p><strong>选项1</strong></p>
        <div class="form-group row">
            <label for="" class="col-sm-2">尺寸</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.size1">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-2">价格</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.price1">
            </div>
        </div>
        <p><strong>选项2</strong></p>
        <div class="form-group row">
            <label for="" class="col-sm-2">尺寸</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.size2">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-2">价格</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <div class="form-group row">
            <button class="btn btn-success btn-block">添加</button>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return{
            newPizza:{}
        }
    },
    methods:{
        addMenuItem(){
            let data = {
                name:this.newPizza.name,
                description:this.newPizza.description,
                options:[
                    {
                        size:this.newPizza.size1,
                        price:this.newPizza.price1
                    },
                    {
                        size:this.newPizza.size2,
                        price:this.newPizza.price2
                    }
                ]
            }

            // fetch('https://wd1522943092wgreok.wilddogio.com/menu.json',{
            //     method:"POST",
            //     headers:{
            //         'Content-type':'application/json'
            //     },
            //     body:JSON.stringify(data)
            // }).then(res => {
            //     return res.json();
            // }).then(data => {
            //     console.log(data);
            //     //跳转至菜单页面
            //     this.$router.push('/menu');
            // }).catch(err => {
            //     console.log(err);
            // })

            this.axios.post('menu.json',data).then(res => {
                //this.$router.push('/menu');
                //数据同步到vuex中
                this.$store.commit('pushTomenuItems',data)
            }).catch(err =>{
                console.log(err);
            })


            return false;
        },
    }
}
</script>

<style>

</style>
