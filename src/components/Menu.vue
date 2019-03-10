<template>
    <div class="row">
        <!-- 菜单 -->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入</th>
                    </tr>
                </thead>
                <tbody v-for='item in getMenuItems' :key='item.name'>
                    <tr>
                        <td>
                            <strong>{{item.name}}</strong>
                        </td>
                    </tr>
                    <tr v-for="option in item.options" :key='option.size'>
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td><button class="btn btn-sm btn-outline-success" @click='addToBasket(item,option)'>+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 购物车 -->
        <div class="col-md-4 col-sm-12">
            <div v-if="baskets.length>0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>数量</th>
                            <th>品种</th>
                            <th>价格</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item,index) in baskets" :key='index'>
                        <tr>
                            <td>
                                <button class="btn btn-sm" @click='decreaseQuantity(item)'>-</button>
                                <span>{{item.quantity}}</span>
                                <button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
                            </td>
                            <td>{{item.name}}{{item.size}}</td>
                            <td>{{item.price * item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>总价：{{total + "RMB"}}</p>
                <button class="btn btn-success btn-block">提交</button>
            </div>
            <div v-else>
                {{basketText}}
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios"
export default {
    data(){
        return {
            baskets:[],
            basketText:"购物车没有任何商品",
            //getMenuItems:{}
        }
    },
    created(){
        this.fetchData();
    },
    methods:{
        fetchData(){
            // fetch('https://wd1522943092wgreok.wilddogio.com/menu.json').then(res => {
            //     //console.log(res);
            //     return res.json();
            // }).then(data => {
            //     //console.log(data);
            //     this.getMenuItems = data;
            // })

            // axios.get('/menu.json').then(res => {
            //     return res.data;
            // }).then(data => {
            //     //console.log(data);
            //     this.getMenuItems = data;
            // })

            // this.axios.get('menu.json').then(res => {
            //     return res.data;
            // }).then(data => {
            //     this.getMenuItems = data;
            // })


            //将请求的数据存储在vuex中
            this.axios.get('menu.json').then(res => {
                return res.data;
            }).then(data => {
                this.$store.commit('setMenuItems',data);
                //this.getMenuItems = data;
            })

        },
        addToBasket(item,option){
            let basket = {
                name:item.name,
                size:option.size,
                price:option.price,
                quantity:1
            }

            if(this.baskets.length > 0){
                //过滤
                let result = this.baskets.filter(basket => {
                    return basket.name === item.name && basket.price === option.price && basket.size === option.size;
                })

                if(result != null && result.length>0){
                    result[0].quantity ++;
                }else{
                    this.baskets.push(basket)
                }
            }else{
                this.baskets.push(basket);
            }
            
        },
        decreaseQuantity(item){
            item.quantity --;
            if(item.quantity <= 0){
                this.removeFromBasket(item);
            }
        },
        increaseQuantity(item){
            item.quantity++
        },
        removeFromBasket(item){
            this.baskets.splice(this.baskets.indexOf(item),1);
        }
    },
    computed:{
        getMenuItems(){
            //在vuex获取数据
            //return this.$store.state.menuItems;
            
            //通过getters获取数据
            return this.$store.getters.getMenuItems;
        },
        total(){
            let totalCost = 0;
            this.baskets.forEach((item,index) => {
                totalCost+=item.quantity * item.price;
            })
            return totalCost
        }
    }
}
</script>

<style>

</style>