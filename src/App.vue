<template>
  <div id="app">
      <loading v-show="getLoading"></loading>
      <navbar v-show="getNav"></navbar>
      <transition
              enter-active-class="animated fadeIn"
      >
    <router-view></router-view>
      </transition>
      <footbar v-show="getFoot"></footbar>

  </div>
</template>

<script>
    import navbar from './components/navbar.vue';

    import footbar from './components/footbar.vue';

    import {mapGetters} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
    components:{
       navbar,footbar
    },
    computed:mapGetters([
        'getNav','getFoot','getLoading'
    ]),
    mounted(){
//      console.log('mounted',this.$route.path);
        this.changePath(this.$route.path);
    },
    methods:{
        changePath(path){
            if(/home|follow|column/.test(path)){
                this.$store.dispatch('showNav');
                this.$store.dispatch('showFoot');
            }
            if(/login|reg|detail/.test(path)){
                this.$store.dispatch('hideNav');
                this.$store.dispatch('hideFoot');
            }
            if(/user/.test(path)){
                this.$store.dispatch('hideNav');
                this.$store.dispatch('showFoot');
            }
        }
    },
    watch:{
        $route(to){
//        console.log('去哪了',to.path)//获取路由的指向
            this.changePath(to.path);
        }
    }
}
</script>

<style>



</style>
