<template>
	<div class="banner">		
		<swiper class="swiper-banner" :options="swiperOptionBanner" ref="mySwiper" @someSwiperEvent="callback">
		    <swiper-slide>
		    	<img src="../../assets/img/banner-1.png"/>
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../../assets/img/banner-2.png"/>
		    </swiper-slide>
		    <swiper-slide>
		    	<img src="../../assets/img/banner-3.png"/>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		
	</div>
</template>

<script>
export default {
    data() {
        return {
        	swiperOptionBanner: {
        		notNextTick: true,
        		autoplay: true,
        		loop:true,
        		autoplay:{
	            	disableOnInteraction:false
	           	},
	           	pagination: {
			   		el: '.swiper-pagination',
			  	},
			  	on:{
				    click: function(e){
				      //some code
				      console.log(e);
				    }
				}
        	}
        }
    },
    mounted() {
    },
    methods :{
    	callback() {
    		
    	}
    }
    
}
</script>

<style scoped lang="scss">
	.swiper-banner{
		position: relative;
		.swiper-slide{
			img{
				width: 100%;
			}
		}
	}
</style>