<template>
    <!--<div class="foot-btn" >-->
        <!--<ul>-->
            <!--&lt;!&ndash;<li class="home"><a href="index_m.html"></a></li>&ndash;&gt;-->
            <!--<li class="home"><router-link to="/home"></router-link></li>-->
            <!--<li class="write"><router-link to="/follow"></router-link></li>-->
            <!--<li class="my"><router-link to="/user"></router-link></li>-->
        <!--</ul>-->
    <!--</div>-->

    <footer>
        <ul>
            <li >
                <router-link to="/home"><i class="t1 "></i>首页</router-link>
            </li>
            <li >
                <router-link to="/follow"><i class="t2"></i>关注</router-link>

            </li>
        </ul>
        <p><input  type="file" accept="image/gif, image/jpeg"/></p>
        <ul>
            <li>
                <router-link to="/login"><i class="t3"></i>登录</router-link>

            </li>
            <li >
                <router-link to="/reg"><i class="t4"></i>注册</router-link>

            </li>
        </ul>
    </footer>
</template>

<style>
    footer{height: 13.75vw;display: flex;justify-content: space-between;border-top:1px solid rgba(0,0,0,.15) ;position:fixed;left: 0;bottom: 0;width: 100%;background:#fff;}
    footer ul{display: flex;justify-content:space-around;width:38.12vw;padding-top:1.875vw;}

    footer ul li a{display: block;}
    footer ul li a i{display: block;width:5vw;height: 5vw;background:url(../assets/images/t5.jpg) no-repeat;background-size:10vw 20vw;margin:auto; }
    footer ul li a i.t1{}
    footer ul li a i.t2{background-position: -0 -5vw;}
    footer ul li a i.t3{background-position:0 -10vw;}
    footer ul li a i.t4{background-position:0 -15vw;}
    footer ul li a span{display:block;text-align:center;color:#ccc;font:3.75vw/6.875vw "";}

    footer ul li a.active i.t1{background-position:-5vw 0;}
    footer ul li a.active span{color:#0dc441;}
    footer p{width:15.78vw;height:15.78vw;border:.3125vw solid #dfdfdf;position:absolute;left:0;right:0;margin:auto;bottom:0;border-radius:50%;background:#fff url(../assets/images/t1.jpg) no-repeat center;background-size:9.21vw 8.59vw;z-index: 2}
    footer p input{width:10vw;position: absolute;bottom:3vw;left: 3vw;opacity: 0;}
</style>