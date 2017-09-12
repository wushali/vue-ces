<template>

    <div class="newsList">
        <div class='question'>
            <div class="mask">
                <h2>热点城市房价会否持续疯涨？</h2>
                <p>610期</p>
                <div class="result">
                    <p><span>正方</span><span>反方</span></p>
                    <progress value="75" max="100"></progress>
                    <p><span>75%</span><span>25%</span></p>
                </div>
                <a class="join" href="javascript:;">进入专题></a>
            </div>
        </div>
        <div v-for="(item,index) in arr" :key="index" class="list">
            <router-link tag="li" :to="'/detail/'+item.id">
                <span class="times">609期</span>
                <h2>{{item.id}}.{{item.title}}</h2>
                <p v-html="item.detail"></p>
                <a class="join" href="javascript:;"> > </a>
            </router-link>
        </div>




    </div>
</template>

<script>
    export default{
        data(){
            return{
                arr:[ ]
            }
        },

        created(){
            this.$http({
                url:'/data/index.data'
            }).then((res)=>{
                this.arr=res.data;
            }).catch((res)=>{})
        }
    }
</script>
<style>
    body{ background:floralwhite;}
    /*.newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;background:#f0ad4e}*/
    .nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;}
    .nav ul{width:4.38rem;height:0.6rem; margin:0 auto;}
    .nav ul li{width:1.46rem;height:0.6rem; float:left;}
    .nav ul li a{ display:block;width:1.46rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.3rem; color:#9e9a95;}
    .nav ul li.active a{height:0.5rem; border-bottom:0.1rem solid #5477b2; color:#5477b2;}


    .newsList .question{
        height: 4rem;
        width: 100%;
        background: url(../assets/point/pointBg.jpg);
        }
    .newsList .question .mask{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 4rem;
        width: 100%;
        position: relative;
        background: rgba(0,0,0,0.3);}
    .newsList .question .mask h2{
        font-size: 0.5rem;
        font-weight: bold;
    }
    .newsList .question .mask p{
        font-size: 0.3rem;
        margin: 10px 0;
    }
   .result{
        height: 5rem;
        width: 80%;

   }
p{
        display: flex;
        justify-content: space-between;
    }
    progress {
        width: 100%;
        background-color:#005588;
        color: #E94C3D; /*IE10*/
    }
    progress::-moz-progress-bar { background: #E94C3D; }
    progress::-webkit-progress-bar { background: #005588; }
    progress::-webkit-progress-value  { background: #E94C3D; }

    .join{
        color: #E94C3D;
        position: absolute;
        bottom: 15rem;
        right: 15rem;
    }

    .prev{
        padding: 1rem;}

    /*.mask{*/ .list{

                   margin-bottom: 0.1rem;
                   overflow: hidden;


        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.6);
        position: relative;}
    /*.list h2{*/
        /*font-size: 0.3rem;*/
        /*font-weight: bold;*/
        /*width: 100%;*/
        /*text-align: center;*/
        /*padding: 0 1rem;*/
        /*overflow: hidden;*/
        /*white-space: nowrap;*/
        /*text-overflow: ellipsis;*/
    /*}*/
    /*p{*/
        /*color: #eee;*/
        /*margin: 10px 20px;*/
        /*line-height: 1.3;*/
        /*font-size: 0.2rem;*/
        /*overflow: hidden;*/
        /*display: -webkit-box;*/
        /*word-break: break-all;*/
        /*-webkit-line-clamp: 2;*/
        /*text-overflow: ellipsis;*/
        /*-webkit-box-orient: vertical;*/
    /*}*/
    /*.times{*/
        /*position: absolute;*/
        /*left: 0;*/
        /*top: 0;*/
        /*color: #eee;*/
        /*display: inline-block;*/
        /*padding: 2px;*/
        /*font-size: 13px;*/
    /*}*/
    /*.join{*/
        /*position: absolute;*/
        /*right: 5px;*/
        /*bottom: 0;*/
        /*color: #eee;*/
        /*color: #E94C3D;*/
        /*display: inline-block;*/
        /*padding: 10px;*/
        /*font-size: 13px;*/
    /*}*/


</style>
