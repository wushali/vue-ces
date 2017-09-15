<template>
  <div class="error">

    <!--nav-->
      <swipe class="my-swipe">
          <swipe-item class="slide1"><img src="../assets/img/2.jpg" alt=""></swipe-item>
          <swipe-item class="slide2"><img src="../assets/img/3.jpg" alt=""></swipe-item>
          <swipe-item class="slide3"><img src="../assets/img/4.jpg" alt=""></swipe-item>
      </swipe>
    <!--<nav>-->
      <!--<img class="oimg" src="../assets/images/r.jpg" alt="">-->
    <!--</nav>-->
    <!--section -->
    <section>
      <ul>
        <!--<li>-->
          <!--<i ><img class="ico" src="../assets/images/bw.png" alt=""></i>-->
          <!--<span>训练中心</span>-->
        <!--</li>-->
        <li v-for="(item,index) in arr" :key="index">
     <router-link tag="b" :to="'/detail/'+item.id">
           <i> <img class="ico" :src=item.src alt=""></i>
            <span>{{item.title}}</span>

        </router-link>
        </li>

      </ul>
    </section>
    <main>
      <router-link tag="p" :to="'/user/'">
      活动
      </router-link>
      <img src="../assets/images/16.jpg" alt="">

      <div>
        <u>米动员动员动员</u>
        <span>剩动员</span>
      </div>
    </main>
  </div>
</template>

<script>
    //import { Swipe, SwipeItem } from 'vue-swipe';
    export default{
        data(){
            return{
                arr:[ ]
            }
        },

        created(){
            this.$http({
                url:'/data/follow.data'
            }).then((res)=>{
                this.arr=res.data;
            }).catch((res)=>{})
        }

    }
</script>


<style scoped>

 @import '../assets/css/yd.css';
  .ico{width:16vw;height: 16vw;}

 .my-swipe {
     height: 200px;
     color: #fff;
     font-size: 30px;
     text-align: center;
 }

 .slide1 {
     /*background:url("../assets/img/2.jpg")no-repeat center;*/
     color: #fff;
 }
 .slide1 img,.slide2 img,.slide3 img{width: 100%;height: 100%;}

 .slide2 {
     /*background:url("../assets/img/3.jpg")no-repeat center;*/
     color: #000;
 }

 .slide3 {
     /*background:url("../assets/img/4.jpg")no-repeat center;*/
     color: #fff;
 }

</style>