<template>
<div class="mer-par">
	<detail-header title="商家详情"></detail-header>
	<div class="mer-par-content">
		<!--图片轮播-->
    	<banner></banner>
    	<!--商家信息-->
    	<div class="mer-content">
    		<div class="content-box">
    			<p class="mer-name">酒吧名字</p>
    			<p class="mer-type">
    				<span>酒吧类型</span>
    				<span class="grade">评分  4.7</span>
    				<img src="../../assets/img/icon-pf@2x.png"/>
    				<div class="clear"></div>
    			</p>
    			<p class="site">地址：XXXXXXXX</p>
    		</div>
    		<!--收藏-->
			<div class="collect">
				<img src="../../assets/img/icon-shc@2x.png"/>
				<img style="display: none;" src="../../assets/img/icon-shc-2@2x.png"/>
				<span>收藏</span>
				<span style="display: none;">已收藏</span>
			</div>
    	</div>
    	<!--商家简介-->
    	<div class="introduction">
    		<p class="int-title">餐馆简介</p>
    		<div class="int-content">
    			<p>餐馆简介餐馆简介餐馆简介餐馆简介餐馆简介餐馆简介餐馆简介餐馆简介餐馆简介餐馆简介餐馆简介餐馆简介餐馆简介餐馆简介</p>
    		</div>
    		<div class="contact">
    			<p class="contact-title">联系方式</p>
	    		<p>电话：1101234</p>
	    		<p>facebook：1001234</p>
    		</div>
    	</div>
	</div> 
</div>
</template>

<script>
import banner from "../../components/common/banner.vue";
import detailHeader from "../../components/common/detail-header.vue";
export default {
    data() {
        return {
        	
        };
    },
    components: {
    	detailHeader,
    	banner
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style scoped lang="scss">
.mer-par{	
	height: 100%;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	.mer-par-content{
		margin-top: 90px;
		.mer-content{
			position: relative;
			padding-top: 30px;
			padding-bottom: 30px;
			border-bottom: 1px solid #cdcdcd;
			.content-box{
				padding: 0 30px;
				.mer-name{
					font-size: 36px;
					color: #333;
					line-height: 1;
					margin-bottom: 26px;
				}
				.mer-type{
					font-size: 24px;
					color: #666;
					line-height: 1;
					span{
						float: left;
					}
					.grade{
						margin-left: 20px;
						margin-right: 14px;
					}
					img{
						width: 20px;
						height: 20px;
						float: left;
						vertical-align: middle;
					}
				}
				.site{
					padding-top: 24px;
					font-size: 24px;
					color: #666;
				}
			}
			
			.collect{
				position: absolute;
				top: 30px;
				right: 30px;
				width: 96px;
				text-align: center;
				img{
					width: 38px;
					height: 38px;
					margin: 0 auto 12px;
					text-align: center;
				}
				span{
					font-size: 20px;
					color: #333;
				}
				.collected{
					color: #ed4343;
				}
			}
		}
		.introduction{
			padding: 30px;
			.int-title{
				font-size: 36px;
				color: #333;
			}
			.int-content{
				margin-top: 28px;
				margin-bottom: 30px;
				p{
					font-size: 30px;
					color: #333;
					line-height: 1.5;
				}
			}
			.contact{
				.contact-title{
					font-size: 32px;
				}
				p{
					font-size: 28px;
					color: #333;
					padding-bottom: 26px;
				}
			}
		}
	}
}
.clear{
	clear: both;
}
</style>