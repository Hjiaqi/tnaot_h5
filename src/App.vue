<template>
  <div id="app" :class="{'nighttime':nighttime}">
  	<div :class="{'shade':nighttime}"></div>
  	<transition :name='transitionName'>
        <keep-alive exclude='liveDetail'>
            <router-view class='child-view'/>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import './assets/css/transition.css'
export default {
    name: 'App',
    data(){
      return {
      	transitionName: ''
      }
    },
    watch: {
		  '$route' (to, from) {
		    const toDepth = to.path.split('/').length
		    const fromDepth = from.path.split('/').length
		    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
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
	    //切换日/夜间模式
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
    .child-view {
        transition: all .3s ease;
    }
}

/*过度效果*/
.slide-left-enter,.slide-right-leave-active {
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active,.slide-right-enter {
    transform: translate3d(-100%, 0, 0);
}
.toggleSide-enter,.toggleSide-leave-active{
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
}
.toggleSide-enter-active，.toggleSide-leave{
    -webkit-transform: translate3d(0, 0%, 0);
    transform: translate3d(0, 0%, 0);
}
/*动画效果*/
.fadeIn-enter-active {
    animation: fadeInRight .3s ease;
}
.fadeIn-leave-active {
    animation: fadeOutRight .3s ease;
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeOutRight {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3,.3,.3);
        transform: scale3d(.3,.3,.3);
        }
    50% {
        opacity: 1;
    }
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
