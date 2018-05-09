<template>
  <div id="app" :class="{'nighttime':nighttime}">
  	<div :class="{'shade':nighttime}"></div>
  	<transition>
        <keep-alive exclude='liveDetail'>
            <router-view/>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    name: 'App',
    data(){
      return {
      }
    },
    mounted() {
    	//在获取日/夜间模式之后改变状态
    	this.getpattern(false);
    },
    //映射夜间模式
    computed: {
    	...mapState('commom', [
            'nighttime'
        ]),
    },
		methods: {
			...mapMutations('commom', [
	        'set_nighttime'
	    ]),
	    getpattern(type) {
	    	this.set_nighttime(type)
	    }
		}
}
</script>

<style lang="scss">
#app{
	  position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}


/*夜间模式样式*/
.nighttime{
	background-color: #3a3a3a !important;
	color: #fff !important;
	border-color: #434343 !important;
	p, li, h2, h3, a, span{
		color: #fff !important;
	}
	.classified{
		color: #f05c28 !important;
	}
	/*弹框夜间模式*/
	.more-box{
		background-color: #434343 !important;
		color: #fff !important;
	}
	.black{
		background: rgba(51, 51, 51, 0) !important;
	}
}
.shade{
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.5);
	z-index: 98;
	pointer-events:none;
}
</style>
