<template>
	<div class="merchant">
		<!--服务类型-->
			<!--<div class="serviceType">
				<ul>
					<li @click="toList(1,'美食')">
						<img src="../../assets/img/icon-ms@2x.png" />
						<span>美食</span>
					</li>
					<li @click="toList(2,'娱乐')">
						<img src="../../assets/img/icon-yl@2x.png" />
						<span>娱乐</span>
					</li>
					<li @click="toList(3,'旅行')">
						<img src="../../assets/img/icon-lvy@2x.png" />
						<span>旅行</span>
					</li>
					<li @click="toList(4,'购物')">
						<img src="../../assets/img/icon-gw@2x.png" />
						<span>购物</span>
					</li>
					<li @click="toList(5,'健身')">
						<img src="../../assets/img/icon-js@2x.png" />
						<span>健身</span>
					</li>
					<li @click="toList(6,'医疗')">
						<img src="../../assets/img/icon-yil@2x.png" />
						<span>医疗</span>
					</li>
					<li @click="toList(7,'教育')">
						<img src="../../assets/img/icon-jy@2x.png" />
						<span>教育</span>
					</li>
					<li @click="toList(8,'服务')">
						<img src="../../assets/img/icon-fw@2x.png" />
						<span>服务</span>
					</li>
					<div class="clear"></div>
				</ul>
			</div>-->
			<div  @click="toList(4,'购物')">442141</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	data() {
		return {}
	},
	methods: {
		...mapMutations('commom', [
				'set_popUp'
			]),
			...mapMutations('merchant', [
				'setHeaderText'
			]),
		//跳转到商家列表
			toList(id, content) {
					this.$router.push('/typesList/' + id);
				//保存用户点击“服务类型”的头部标题
//				this.setHeaderText(content);
			},
	}
}
</script>

<style scoped lang="scss">
	.merchant {
		height: 100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		.serviceType {
			width: 100%;
			border-bottom: 8px solid #f2f2f2;
			padding: 48px 64px 8px;
			ul {
				li {
					display: block;
					float: left;
					text-align: center;
					margin-bottom: 24px;
					margin-right: 100px;
					img {
						width: 80px;
						height: 80px;
						margin-bottom: 16px;
					}
					span {
						font-size: 26px;
						color: #333;
					}
				}
				li:nth-child(4n) {
					margin-right: 0;
				}
			}
		}
		.recommend {
			padding: 30px;
			.rec_title {
				font-size: 32px;
				color: #333;
			}
		}
	}
	.bottomLoad {
        width: 100%;
        position: relative;
        div {
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 16px;
            color: #999;
        }
    }
	.clear {
		clear: both;
	}
</style>