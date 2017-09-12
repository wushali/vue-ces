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
                </router-link>
            </li>


            <!--<li>-->
                <!--<a href="javascript:;">-->
                    <!--<h2>4.xx</h2>-->
                    <!--<p>oooo</p>-->
                <!--</a>-->
            <!--</li>-->




        </ul>
    </div>

</div>
</template>
<script>
    //import $ from 'jquery';

    import  silder from './silder.vue';
    export default{
            data(){
                return{
                   arr:[ ]
                }
            },
        components:{
            silder
        },
//        created(){
//            this.$http({
//                url:'/data/index.data'
//            }).then((res)=>{
//            this.arr=res.data;
//            }).catch((res)=>{})
//        }
//    }
    created(){
        this.$store.dispatch('showLoading'); //显示loading
        setTimeout(()=>{//模拟
            this.$http({
//        url:'http://localhost:3000/index',
//        url:'http://localhost:80/index.php',
                url:'/data/index.data',
            }).then((res)=>{
//        console.log(res.data);
                this.$store.dispatch('hideLoading');//隐藏loading
                this.arr=res.data;

            }).catch((res)=>{
                console.log(res);
            })
        },2000);

    }
    }
</script>
<style>
    @import '../assets/css/index.css';
</style>