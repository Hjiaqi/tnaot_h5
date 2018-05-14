<template>
	<div class="index-box">
		<div id="index">
	    	<!--头部-->
	    	<index-header></index-header>
	    	<!--内容区-->
	        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
			    <swiper-slide>
			    	<live-shoplist></live-shoplist>
			    </swiper-slide>
			    <swiper-slide>
			    	<DiscountsList></DiscountsList>
			    </swiper-slide>
			    <swiper-slide>
			    	<cecruit-list></cecruit-list>
			    </swiper-slide>
			    <swiper-slide>
			    	 <merchant-list></merchant-list>
			    </swiper-slide>
			</swiper>
	        
	        
	        
	        <share-box></share-box>
	    </div>
	</div>
    
</template>
<script>
// 引用list组件
import indexHeader from "./children/index_header.vue";
import liveShoplist from "../second-shop/live-shoplist.vue";
import DiscountsList from "../discounts/discounts-list.vue";
import cecruitList from "../recruit/recruit-list.vue"; 
import merchantList from "../merchant/merchant-list.vue";

import shareBox from "../../components/common/share-box.vue";
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return {
        	swiperOption: {
        		notNextTick: true,
        		on: {        			
        			slideChangeTransitionStart: this.slideChangeCallBack
        		}
        	}
        };
    },
    computed: {
        ...mapState('index', [
            'indexActive'
        ]),
        ...mapGetters('index', [
            'activeMeta'
        ]),
    },
    components: {
    	indexHeader,
        liveShoplist,
        DiscountsList,
        cecruitList,
        merchantList,
        shareBox
    },
    mounted() {
    },
    watch: {
        indexActive() {
            this.slideTo(300)
        }
    },
    methods: {
    	...mapMutations('index', [
            'set_indexActive'
        ]),
        slideTo(second) {
            this.$refs.mySwiper.swiper.slideTo(this.activeMeta.index, second, true) // 让swiper滚动到index位置
        },
		slideChangeCallBack() {
            let index = this.$refs.mySwiper.swiper.activeIndex
            this.set_indexActive(index)// 滚动完swiper需要改变vuex里面的indexActive，这是为了与栏目联动
       },
      	callback() {
    		
    	}
    }
};
</script>
<style scoped lang="scss">
.index-box{
	width: 100%;
	height: 100%;
	position: absolute;
    top: 0;
    left: 0;
}
	#index{
		position: relative;
	    width: 100%;
	    height: 100%;
	    overflow: hidden;
	}
    .swiper-container {
    	padding-top: 90px;
	    width: 100%;
	    height: 100%;
	    overflow: hidden;
	    box-sizing: border-box;
    }
    .swiper-slide{
    	width: 100%;
    }
</style>


