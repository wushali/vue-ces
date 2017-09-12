<template>
    <!--banner-->
    <div class="banner">
        <ul class="clearfix">
            <li><img src="src/assets/images/img_1.jpg" alt=""/>
                <div class="text-box">
                    <h2>提高个税起征点真能减负嘛？</h2>
                    <p>3月7日，财政部部长肖捷在发布会上表示，个人所得税免征额将根据消费水平综合测算，.. </p>
                </div>
            </li>
            <li><img src="src/assets/images/img_2.jpg" alt=""/>
                <div class="text-box">
                    <h2>飓风"艾尔玛"袭击美国 迈阿密部分市区被淹</h2>
                    <p>责编：赵建</p>
                </div>
            </li>
            <li><img src="src/assets/images/img_3.jpg" alt=""/>
                <div class="text-box">
                    <h2>武汉高校10米长巨型棋盘引围观 每个棋子120斤</h2>
                    <p>责编：张金</p>
                </div>
            </li>
            <li><img src="src/assets/images/img_4.jpg" alt=""/>
                <div class="text-box">
                    <h2>初秋新疆塔里木河色彩斑斓 风景如画 </h2>
                    <!--<p>刘德华11 / 文</p>-->
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    import $ from 'jquery';
    import Swipe from '../assets/js/swipe.js';
    export default {
        mounted(){
            var mySwipe=new Swipe($('.banner')[0],{
                auto:2000,
                continuous:true,
                stopPropation:true,
                callback:function (index,element){
                    $('.banner ol li').removeClass('active');
                    $('.banner ol li').eq(index).addClass('active');
                }
            })
        }
    }
</script>
<style scoped>
    img{height: 230px;width: 100%;}
</style>