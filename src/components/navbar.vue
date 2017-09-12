<template>
    <div class="nav">


            <router-link tag="p" to="/home" active-class="active"><a href="javascript:;" class="menu"></a></router-link>
            <router-link tag="p"  to="/follow" active-class="active">

                <router-link tag="span" to="/follow" active-class="active">关注</router-link>
                <router-link tag="span" to="/column" active-class="active">热点</router-link>




            </router-link>




            <!--<router-link tag="p" to="/column"-->
                         <!--active-class="active"><a href="javascript:;" ></a></router-link>-->

    </div>
</template>

<style>
    body{display:flex;flex-direction: column;}
    .nav{height:11.73vw;background:#494d4d;display: flex;justify-content: center;align-items: center;position:fixed;left: 0;top:0;width: 100%;}
    .nav p{height:7.5vw;overflow: hidden;border-radius: 3.75vw;text-align: center;display: flex;}
   .nav span{width: 17.81vw;height:7.5vw;background: #494d4d;color: #fff;text-align: center;font-size: 2vw; line-height: 7.5vw;}
    .nav span.active{background: #666666;}
    .nav .menu{position:absolute;left:5.31vw;top:0;bottom:0;margin:auto;width:4.53vw;height:1.125vw;background: #666;border-bottom: 2px solid #666666;border-top: 2px solid #666666}


</style>