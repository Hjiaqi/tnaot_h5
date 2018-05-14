<template>
<div class="merList">
	<div class="list-item" @click="toParticulars(1)">
		<!--图片-->
		<div class="item-img">
			<img src="../../../assets/img/mer-img.png"/>
		</div>
		<!--信息-->
		<div class="item-text">
			<p class="mer-name">商家名称</p>
			<p class="mer-type">
				<span>餐馆类型</span>
				<span class="grade">评分  4.7</span>
				<img src="../../../assets/img/icon-pf@2x.png"/>
				<div class="clear"></div>
			</p>
			<p class="site">地址：XXXXXXXX</p>
		</div>
		<!--收藏-->
		<div class="collect">
			<img src="../../../assets/img/icon-shc@2x.png"/>
			<img style="display: none;" src="../../../assets/img/icon-shc-2@2x.png"/>
			<span>收藏</span>
			<span style="display: none;">已收藏</span>
		</div>
		<div class="clear"></div>
	</div>
	
	<div class="list-item" @click="toParticulars(2)">
		<!--图片-->
		<div class="item-img">
			<img src="../../../assets/img/mer-img.png"/>
		</div>
		<!--信息-->
		<div class="item-text">
			<p class="mer-name">商家名称</p>
			<p class="mer-type">
				<span>餐馆类型</span>
				<span class="grade">评分  4.7</span>
				<img src="../../../assets/img/icon-pf@2x.png"/>
				<div class="clear"></div>
			</p>
			<p class="site">地址：XXXXXXXX</p>
		</div>
		<!--收藏-->
		<div class="collect">
			<img style="display: none;" src="../../../assets/img/icon-shc@2x.png"/>
			<img src="../../../assets/img/icon-shc-2@2x.png"/>
			<span style="display: none;">收藏</span>
			<span class="collected">已收藏</span>
		</div>
		<div class="clear"></div>
	</div>
</div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    components: {
    },
    mounted() {
    },
    methods: {
    	toParticulars(id) {
    		this.$router.push('/merParticulars/'+id);
    	}
    }
};
</script>

<style scoped lang="scss">
.merList{
	width: 100%;
	.list-item{
		position: relative;
		border-bottom: 1px solid #f2f2f2;
		padding: 30px 0;
		.item-img{
			width: 222px;
			height: 150px;
			float: left;
			margin-right: 30px;
			overflow: hidden;
			img{
				width: 100%;
			}
		}
		.item-text{
			float: left;
			.mer-name{
				font-size: 30px;
				color: #333;
				padding-top: 5px;
				padding-bottom: 15px;
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
					margin-right: 12px;
				}
				img{
					width: 20px;
					height: 20px;
					float: left;
					vertical-align: middle;
				}
			}
			.site{
				font-size: 24px;
				color: #666;
				padding-top: 15px;
			}
		}
		.collect{
			position: absolute;
			top: 30px;
			right: 0;
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
}
.clear{
	clear: both;
}
</style>