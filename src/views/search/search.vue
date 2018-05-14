<template>
	<div class="search">
		<!--搜索框-->
		<div class="sea-box">
			<span class="sea-return">
				<img src="../../assets/img/icon-back_normal@2x.png"/>
			</span>
			<div class="sea-input">
				<img class="lens" src="../../assets/img/icon-search-magnifier@2x.png"/>
				<input type="text" name="" id="" value="" placeholder="搜你想搜的" v-model="seaText"/>
				<span class="sea-del" v-if="seaText != ''" @click="seaText = ''"><img src="../../assets/img/icon-cancel@2x.png"/></span>
			</div>
			<span class="sea-btn">搜索</span>
		</div>
		
		<!--头部-->
		<div class="header_box">
			<ul>
				<li :class="{item_actve: active == 0}" @click.stop="navClick(0)"><span>二手</span></li>
				<li :class="{item_actve: active == 1}" @click.stop="navClick(1)"><span>优惠</span></li>
				<li :class="{item_actve: active == 2}" @click.stop="navClick(2)"><span>招聘</span></li>
				<li :class="{item_actve: active == 3}" @click.stop="navClick(3)"><span>商家</span></li>
			</ul>
		</div>
		<!--列表-->
		<div class="shwo-list">
			<!--二手市场列表-->
			<div class="secound-list" v-if="active == 0">
				<ul class="live-shop-list">
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left">
								<span class="user-bg"></span>
								<p class="strong">用户名xxx</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<span class="money fl-right">$ 10000</span>
						</div>
						<router-link to="/liveDetail/1">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
							<div class="pic-box pic-cont01">
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
							</div>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">二手</span>
							<span>手机</span>
							<span>点赞 666</span>
							<span>留言 666</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left ">
								<p class="mg-top strong">商品价格</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<span class="money fl-right">$ 10000</span>
						</div>
						<router-link to="/liveDetail/2">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
							<div class="pic-box pic-cont02">
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
							</div>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">二手</span>
							<span>手机</span>
							<span>点赞 666</span>
							<span>留言 666</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left">
								<span class="user-bg"></span>
								<p class="strong">用户名xxx</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<span class="money fl-right">$ 10000</span>
						</div>
						<router-link to="/liveDetail/3">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
							<div class="pic-box pic-cont03">
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
							</div>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">二手</span>
							<span>手机</span>
							<span>点赞 666</span>
							<span>留言 666</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
				</ul>
			</div>
			<!--优惠折扣-->
			<div class="discounts-list" v-if="active == 1">
				<ul class="live-shop-list">
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left">
								<span class="user-bg"></span>
								<p class="strong">用户名xxx</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<!--<span class="money fl-right">$ 10000</span>-->
						</div>
						<router-link to="/discountsDetail/1">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
							<div class="pic-box pic-cont01">
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
							</div>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">折扣优惠 </span>
							<span>美食</span>
							<span>时间</span>
							<span>地点</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left ">
								<span class="user-bg"></span>
								<p class="mg-top strong">商品价格</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<!--<span class="money fl-right">$ 10000</span>-->
						</div>
						<router-link to="/discountsDetail/2">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
							<div class="pic-box pic-cont02">
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
							</div>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">折扣优惠</span>
							<span>服装</span>
							<span>时间</span>
							<span>地点</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left">
								<span class="user-bg"></span>
								<p class="strong">用户名xxx</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<!--<span class="money fl-right">$ 10000</span>-->
						</div>
						<router-link to="/discountsDetail/3">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
							<div class="pic-box pic-cont03">
								<span><img src="../../assets/test/img/list-pc01.jpg" alt=""></span>
							</div>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">折扣优惠</span>
							<span>服装</span>
							<span>时间</span>
							<span>地点</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
				</ul>
			</div>
			<!--招聘-->
			<div class="search-list" v-if="active == 2">
				<ul class="live-shop-list">
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left">
								<span class="user-bg"></span>
								<p class="strong">用户名xxx</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<span class="recruit-infor fl-right">招聘 职位</span>
						</div>
						<router-link to="/recruitDetail/1">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">招聘</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left ">
								<p class="mg-top strong">商品价格</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<span class="recruit-infor fl-right">招聘 职位</span>
						</div>
						<router-link to="/recruitDetail/2">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">招聘</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left">
								<span class="user-bg"></span>
								<p class="strong">用户名xxx</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<span class="recruit-infor fl-right">招聘 职位</span>
						</div>
						<router-link to="/recruitDetail/3">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">招聘</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left">
								<span class="user-bg"></span>
								<p class="strong">用户名xxx</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<span class="recruit-infor fl-right">招聘 职位</span>
						</div>
						<router-link to="/recruitDetail/3">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">招聘</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left">
								<span class="user-bg"></span>
								<p class="strong">用户名xxx</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<span class="recruit-infor fl-right">招聘 职位</span>
						</div>
						<router-link to="/recruitDetail/3">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">招聘</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left">
								<span class="user-bg"></span>
								<p class="strong">用户名xxx</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<span class="recruit-infor fl-right">招聘 职位</span>
						</div>
						<router-link to="/recruitDetail/3">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">招聘</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left">
								<span class="user-bg"></span>
								<p class="strong">用户名xxx</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<span class="recruit-infor fl-right">招聘 职位</span>
						</div>
						<router-link to="/recruitDetail/3">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">招聘</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
					<li>
						<!-- 发布信息 -->
						<div class="information-header clearfix">
							<div class="user fl-left">
								<span class="user-bg"></span>
								<p class="strong">用户名xxx</p>
								<p><span>发布时间</span> <span>发布地址</span></p>
							</div>
							<span class="recruit-infor fl-right">招聘 职位</span>
						</div>
						<router-link to="/recruitDetail/3">
							<h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
						</router-link>
						<!--归类 -->
						<div class="list-tail">
							<span class="classified">招聘</span>
							<!--<span class="more" @click="more"></span>-->
						</div>
					</li>
				</ul>
			</div>
			<!--商家-->
			<div class="merchant-list" v-if="active == 3">
				<ul class="mer-list">
					<li class="mer-item">
						<div class="item-img">
							<img src="../../assets/img/icon-User-Avatar.png"/>
						</div>
						<div class="item-text">
							<p class="mer-name">商家名称</p>
							<p class="mer-brief">商家简介最长16个字符多部分省略字符多部分省略</p>
							<p class="item-grade">
								<span>评分</span>
								<img src="../../assets/img/icon-pf@2x.png"/>
								<span>商家地址</span>
							</p>
						</div>
						<div class="collect">
							<div class="col-btn">收藏</div>
						</div>
						<div class="clear"></div>
					</li>
					<li class="mer-item">
						<div class="item-img">
							<img src="../../assets/img/icon-User-Avatar.png"/>
						</div>
						<div class="item-text">
							<p class="mer-name">商家名称</p>
							<p class="mer-brief">商家简介最长16个字符多部分省略字符多部分省略</p>
							<p class="item-grade">
								<span>评分</span>
								<img src="../../assets/img/icon-pf@2x.png"/>
								<span>商家地址</span>
							</p>
						</div>
						<div class="collect">
							<div class="col-btn btn-act">已收藏</div>
						</div>
						<div class="clear"></div>
					</li>
				</ul>
			</div>
			
			
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				seaText: ''
			};
		},
		mounted() {},
		computed: {},
		methods: {
			navClick(num) {
				this.active = num;
			},
			goBack: function () {
	            this.$router.go(-1); // 返回上一个路由
	        },
			more() {

			}
		}
	};
</script>

<style scoped lang="scss">
	.search {
		height: 100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
	/*搜索*/
	.sea-box{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88px;
		line-height: 88px;
		background-color: #fff;
		border-bottom: 1px solid #ccc;
		.sea-return{
			display: block;
		    float: left;
		    width: 1.2rem;
		    height: 100%;
			img{
				width: 0.533333rem;
   				margin: 0.333333rem 0 0 0.333333rem;
			}
		}
		.sea-input{
			width: 514px;
			height: 58px;
			float: left;
			background-color: #f2f2f2;
			border: 2px solid #e2e2e2;
			border-radius: 8px;
			margin-top: 15px;
			.lens{
				width: 28px;
				float: left;
				margin-left: 20px;
				margin-top: 15px;
				margin-right: 24px;
				vertical-align: middle;
			}
			input{
				width: 380px;
				height: 100%;
				background-color: transparent;
				border: none;
				float: left;
				font-size: 32px;
			}
			.sea-del{
				display: block;
				float: right;
				margin-right: 20px;
				height: 100%;
				img{
					width: 28px;
					height: 28px;
					margin-top: 15px;
					vertical-align: middle;
				}
			}
		}
		.sea-btn{
			display: block;
			height: 100%;
			float: right;
			margin-right: 30px;
			font-size: 32px;
			color: #2a9bdb;
		}
	}
	
	
	/*头部*/
	.header_box {
		position: fixed;
		top: 88px;
		left: 0;
		width: 100%;
		height: 90px;
		line-height: 90px;
		background-color: #fff;
		border-bottom: 1px solid #ccc;
		z-index: 97;
		ul {
			width: 100%;
			display: -webkit-box;
			display: flex;
			li {
				flex: 1;
				text-align: center;
				font-size: 30px;
				span {
					height: 86px;
					display: inline-block;
				}
			}
			.item_actve {
				height: 86px;
				span {
					color: #f05c28;
					border-bottom: 4px solid #f05c28;
				}
			}
		}
	}
	/*二手市场*/
	
	.shwo-list {
		width: 100%;
		margin-top: 180px;
	}
	
	.live-shop-list {
		padding: 0 30px;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		li {
			border-bottom: 1px solid #c7c7c7;
			/*color: #000;*/
			.information-header {
				padding: 30px 0 20px 0;
				font-size: 28px;
				font-weight: bold;
			}
			// 用户信息
			.user {
				width: 75%;
				.mg-top {
					margin: 10px 0 0 0;
				}
			}
			.user-bg {
				float: left;
				width: 72px;
				height: 72px;
				background: url("../../assets/img/icon-User-Avatar.png") no-repeat left top;
				background-size: cover;
				margin: 0 20px 0 0;
			}
			span {
				font-weight: normal;
				color: #999999;
				font-size: 24px;
			}
			// 价格
			.money {
				font-size: 32px;
				color: #f05c28;
				margin: 16px 0 0 0;
			}
			.information-in {
				line-height: 1.5;
				font-size: 36px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
			}
			// 图片栏
			.pic-box {
				display: -webkit-flex;
				/* Safari */
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				margin: 0 0 20px 0;
				span {
					display: block;
					overflow: hidden;
				}
				img {
					max-height: 100%;
					width: 100%;
				}
			}
			.pic-cont01 span {
				width: 32.7%;
				max-height: 155px;
				margin: 0 0.6% 0.6% 0;
			}
			.pic-cont02 span {
				width: 49%;
				margin: 0 0.8% 0.6% 0;
			}
			.pic-cont03 span {
				width: 60%;
			}
			.information-in {
				margin-bottom: 24px;
			}
			//列表底部信息
			.list-tail {
				height: 40px;
				line-height: 40px;
				font-size: 24px;
				color: #999999;
				margin: 0 0 24px 0;
				span {
					display: inline-block;
					margin: 0 24px 0 0;
				}
				.classified {
					border: 2px solid #f05c28;
					height: 36px;
					/*line-height: 36px;*/
					border-radius: 10px;
					-webkit-border-radius: 10px;
					-moz-border-radius: 10px;
					-o-border-radius: 10px;
					border-radius: 10px;
					color: #f05c28;
					padding: 0 10px;
				}
				.more {
					float: right;
					height: 100%;
					width: 42px;
					background: url("../../assets/img/icon-more-life.png") no-repeat center center;
					background-size: 100%;
					margin: 0;
				}
			}
			&:last-child {
				border: none;
			}
		}
	}
	
	/*商家列表*/
	.mer-list{
		padding: 0 30px;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		.mer-item{
			width: 100%;
			padding: 30px 0;
			border-bottom: 1px solid #c7c7c7;
			.item-img{
				float: left;
				width: 120px;
				height: 120px;
				border-radius: 60px;
				margin-right: 20px;
				img{
					width: 100%;
				}
			}
			.item-text{
				float: left;
				p{
					line-height: 1;
					margin-bottom: 14px;
				}
				.mer-name{
					font-size: 32px;
					color: #f05c28;
				}
				.mer-brief{
					font-size: 24px;
					color: #333;
					width: 5.4rem;
					white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				}
				.item-grade{
					font-size: 24px;
					color: #999;
					span{
						float: left;
					}
					img{
						width: 0.266667rem;
    					height: 0.266667rem;
						float: left;
						vertical-align: middle;
						margin-right: 20px;
						margin-left: 5px;
					}
				}
			}
			.collect{
				float: right;
				.col-btn{
					width: 118px;
					height: 58px;
					line-height: 58px;
					background-color: #F05C28;
					color: #fff;
					border-radius: 10px;
					font-size: 26px;
					text-align: center;
					margin-top: 31px;
				}
				.btn-act{
					width: 114px;
					height: 54px;
					line-height: 58px;
					border: 2px solid #F05C28;
					color: #F05C28;
					background-color: transparent;
					border-radius: 10px;
					font-size: 26px;
					text-align: center;
					margin-top: 31px;
				}
			}
			
			
		}
		
	}
	
</style>