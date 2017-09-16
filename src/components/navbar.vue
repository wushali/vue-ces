<template>
    <div class="nav">

        <h3 ><img src="../assets/images/tt2.jpg" alt="">
            <router-link to="/login" tag="u">{{getSession}}</router-link>
            <b @click="clear" v-if="getSession!=''&&getSession!='亲，请登录'">退出登录</b>
        </h3>
            <router-link tag="p"  to="/follow" active-class="active">
                <router-link tag="span" to="/follow" active-class="active">关注</router-link>
                <router-link tag="span" to="/column" active-class="active">热点</router-link>
            </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters,mapMutations} from 'vuex'
    export default {
        data(){
          return{
          }
        },
        computed:{
            ...mapGetters(['getSession']),
        },
        created(){
            this.$http({
                url:"http://localhost:3000/only",
                method:"get"
            }).then((res)=>{
                if(res.data.flag){
                    this.session(res.data.content);
                }else{
                    this.session("亲，请登录")
                }
            })
        },
        methods:{
            ...mapMutations(
                {session:"SESSION"}
            ),
            clear(){
                this.$http({
                    url:"http://localhost:3000/clear",
                    method:"get"
                }).then(()=>{
                    this.session("亲，请登录")
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
    .nav h3{margin-right: 1vw;width:45.53vw;display: flex;justify-content:space-between;line-height: 12vw}
    .nav h3 u{color: #f96268;margin-right: 1vw;font-size: 6vw; }
    .odiv h3 img{width:10.53vw;height:10.125vw;}
    .odiv p{ }




</style>