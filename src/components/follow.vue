<template>

    <div class="newsList">
        <ul>
            <!--<li>-->
                <!--<a href="javascript:;">-->
                    <!--<h2>1.xx</h2>-->
                    <!--<p>oooo</p>-->
                <!--</a>-->
            <!--</li>-->
            <li v-for="(item,index) in arr" :key="index">
                <router-link tag="li" :to="'/detail/'+item.id">
                    <h2>{{item.id}}.{{item.title}}</h2>
                    <p v-html="item.detail"></p>
                </router-link>
            </li>




        </ul>
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
    @import "../assets/css/index.css";
    .newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>