<template>
	<div class="merchant" v-infinite-scroll="loadBottomAjax" infinite-scroll-disabled="bottomLock" infinite-scroll-distance="10" infinite-scroll-immediate-check="false" >
		<!-- 列表 -->
		<mt-loadmore :top-method="loadTopAjax" @top-status-change="handleTopChange" ref="loadmore">
			<!-- 下拉提示 -->
			<div slot="top" class="mint-loadmore-top">
				<span v-show="topStatus == 'pull'"> ↓ 下拉推荐</span>
				<span v-show="topStatus == 'drop'">↑ 松开推荐</span>
				<span v-show="topStatus == 'loading'">正在拉取新资讯</span>
			</div>
			<!-- 上拉加载 -->
			<!--图片轮播-->
			<banner></banner>
			<!--服务类型-->
			<div class="serviceType">
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
			</div>

			<!--推荐列表-->
			<div class="recommend">
				<p class="rec_title">精品推荐</p>
				<list-view></list-view>
			</div>
			<!-- 底部提示 -->
			<div class="bottomLoad" v-if="contentJson.length > 0">
				<div class="loading" v-show='bottomLoading'>加载中...</div>
				<div class="noData" v-if='bottomNoData'>没有更多的内容了</div>
			</div>
		</mt-loadmore>

	</div>
</template>

<script>
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
	import banner from "../../components/common/banner.vue";
	import listView from "./children/list-view.vue";
	import Swiper from "swiper";
	// 引入mint-ui 上下拉刷新组件
	import { Loadmore, InfiniteScroll } from 'mint-ui';

	export default {
		data() {
			return {
				receptionMSG: false, //是否接收广播状态

				topStatus: '', // 下拉状态
				bottomLock: false, // 上滑开关
				bottomLoading: true, // 底部loading
				bottomNoData: false, // 底部nothing
				contentJson: [1, 2], // 整个列表数据（模拟）
			};
		},
		components: {
			banner,
			listView
		},
		mounted() {},
		computed: {
			...mapState('commom', [
				'popUp',
				'popUpType'
			])
		},
		watch: {},
		methods: {
			...mapMutations('commom', [
				'set_popUp'
			]),
			...mapMutations('merchant', [
				'setHeaderText'
			]),

			//点击更多调用弹框事件
			more: function() {
				this.receptionMSG = true;
				this.set_popUp(true);
			},

			// mint-ui 下拉组件的状态
			handleTopChange(status) {
				this.topStatus = status;
			},

			// 顶部下拉请求
			loadTopAjax() {
				setTimeout(() => {
					this.$refs.loadmore.onTopLoaded();
				}, 1500);
			},
			// 底部滚动请求
			loadBottomAjax() {
				this.bottomLock = true; // 上滑开关
				setTimeout(() => {
					let arr1 = [3, 3, 4, 5, 6, 7, 8, 99, 9, 0, 2];
					this.contentJson.push(arr1);
					this.bottomLock = false; // 上滑开关
					console.log('aaa');
				}, 1000);
				// alert(1);
				console.log(this.contentJson);
				this.bottomNoData = false;
				// this.contentJson = [];
			},
			//跳转到商家列表
			toList(id, content) {
				this.$router.push('/typesList/' + id);
				//保存用户点击“服务类型”的头部标题
				this.setHeaderText(content);
			},
			// 处理滚动条位置的方法
			handleLocaltion(type) {
				if(type === 'get') {
					this.$nextTick(() => {
						document.querySelector(".DisContainer").scrollTop = sessionStorage.getItem('disScrollTop');
					})
				} else if(type === 'set') {
					let scrollTop = document.querySelector(".DisContainer").scrollTop;
					sessionStorage.setItem('disScrollTop', scrollTop);
				}
			},
			saveScroll() {
				this.handleLocaltion('set')
			},
		},
		activated() {
			this.handleLocaltion('get');
			window.addEventListener('beforeunload', this.saveScroll); // 为了刷新之后保持当前滚动条位置，监听方法不能带参数
		},
		deactivated() {
			this.handleLocaltion('set');
			window.addEventListener('beforeunload', this.saveScroll); // 为了刷新之后保持当前滚动条位置，监听方法不能带参数
		}
	};
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