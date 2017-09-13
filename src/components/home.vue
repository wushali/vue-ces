<template>
<div class="home">


    <!--banner-->
    <silder></silder>
    <!--home列表-->
    <div class="newsList">
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <router-link tag="li" :to="'/detail/'+item.id">
                    <h2>{{item.id}}.{{item.title}}</h2>
                    <p v-html="item.detail"></p>
                    <img :src=item.src alt="">
                </router-link>
            </li>







        </ul>
    </div>

</div>
</template>
<script>

    import  silder from './silder.vue';
    export default{
            data(){
                return{
                   arr:[]
                }
            },
        components:{
            silder
        },
    created(){
        this.$store.dispatch('showLoading'); //显示loading
        setTimeout(()=>{//模拟
            this.$http({
                url:'data/index.data',
            }).then((res)=>{
      // console.log(res);
                this.$store.dispatch('hideLoading');//隐藏loading
                this.arr=res.data;
              //  console.log(arr);
            }).catch((res)=>{
               // console.log(res);
            })
        },2000);

    }
    }
</script>
<style scoped>
    @import '../assets/css/index.css';
    .newsList{width: 100%;}
    li{margin-bottom: 2px;overflow-y:hidden}
    h2{width: 100%}
    p{float: left;width: 70%}
    img{float:right;width: 30%;height: 100px;}

</style>