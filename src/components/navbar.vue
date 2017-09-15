<template>
    <div class="nav">



               <!--<h3 v-if="onl"><img src="../assets/images/tt2.jpg" alt="">{{username}}
               </h3>
                <b  @click.stop="clear"  v-if="onl">注销登录</b>
                <a href="javascript:;" @click="go" v-if="!onl">qsqsqs</a>-->
        <div class="odiv">
        <h3 ><img src="../assets/images/tt2.jpg" alt="">
        </h3>
        {{username}}<b @click="clear">{{omsg}}</b></div>
        <!--<b  @click.stop="clear"  v-if="onl">注销登录</b>
        <a href="javascript:;" @click="go" v-if="!onl">qsqsqs</a>-->
        <!--<router-link tag="div" to="/" active-class="odiv">-->
            <!--<h3>欢迎 {{name}}</h3>-->
            <!--<a href="#" @click="quit">注销登录</a>-->

        <!--</router-link>-->

            <router-link tag="p"  to="/follow" active-class="active">

                <router-link tag="span" to="/follow" active-class="active">关注</router-link>
                <router-link tag="span" to="/column" active-class="active">热点</router-link>




            </router-link>




            <!--<router-link tag="p" to="/column"-->
                         <!--active-class="active"><a href="javascript:;" ></a></router-link>-->

    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        data(){
          return{
              username:"",
              omsg:""
          }
        },
        created(){
            this.$http({
                url:"http://localhost:3000/only",
                method:"get"
            }).then((res)=>{
                if(res.data.flag){
                    this.username=res.data.content
                    this.omsg="注销登录"
                }else{
                    this.username="";
                    this.omsg="请登录!!!"
                }
            })
        },
        methods:{
            clear(){
                this.$http({
                    url:"http://localhost:3000/clear",
                    method:"get"
                }).then(()=>{
                    location.reload()
                })
            }
        }
    }
</script>

<style scoped>
    body{display:flex;flex-direction: column;}
    .nav{height:13.73vw;background:#fff;display: flex;justify-content:space-between;align-items: center;position:fixed;left: 0;top:0;width: 100%;}
    .nav p{height:7.5vw;overflow: hidden;border-radius: 3.75vw;text-align: center;display: flex;}
   .nav span{width: 17.81vw;height:7.5vw;background: #494d4d;color: #fff;text-align: center;font-size: 2vw; line-height: 7.5vw;}
    .nav span.active{background: #666666;}
    .odiv {width:50vw;display: flex;}
    .odiv h3{margin-right: 1vw;width:30.53vw;display: flex;justify-content:space-between;color: #f96268}
    .odiv h3 img{width:10.53vw;height:10.125vw;}
    .odiv p{ }




</style>