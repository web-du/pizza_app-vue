<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- 添加pizza -->
            <app-new-pizza></app-new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!-- 品种展示 -->
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class='table-default'>
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="(item,index) in getMenuItems" :key="index">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>
                            <button class="btn btn-outline-danger btn-sm" @click="deleteData(item)">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import NewPizza from './NewPizza.vue'
export default {
    data(){
        return{
            //name:"Henry",
            //getMenuItems:[]
        }
    },
    components:{
        'app-new-pizza':NewPizza
    },
    computed:{
        getMenuItems:{
            //在vuex获取数据
            get(){
                //return this.$store.state.menuItems;
                return this.$store.getters.getMenuItems;
            },
            set(){

            }
        },
    },
    created(){
        fetch('https://wd1522943092wgreok.wilddogio.com/menu.json').then(res => {
            //console.log(res);
            return res.json();
        }).then(data => {
            //console.log(data);
            let menuArray = [];
            for(let key in data){
                console.log(data[key]);
                data[key].id = key;
                menuArray.push(data[key]);
            }

            //this.getMenuItems = menuArray;
            //数据同步
            this.$store.commit('setMenuItems',menuArray);
        })
    },
    methods:{
        deleteData(item){
            fetch('https://wd1522943092wgreok.wilddogio.com/menu/'+item.id+'/.json',{
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                }
            }).then(res => {
                return res.json();
            }).then(data => {
                //this.$router.push('/menu');
                //把数据同步到vuex中，不用跳转页面就能刷新数据
                this.$store.commit('removeMenuItems',item);
            }).catch(err => {
                console.log(err);
            })
        }
    }
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