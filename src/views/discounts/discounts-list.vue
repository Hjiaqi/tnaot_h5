<template>
    <div class="DisContainer" v-infinite-scroll="loadBottomAjax" infinite-scroll-disabled="bottomLock" infinite-scroll-distance="10" infinite-scroll-immediate-check="false" >
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
	                    <span class="more" @click="more"></span>
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
	                    <span class="more" @click="more"></span>
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
	                    <span class="more" @click="more"></span>
	                </div>
	            </li>
	        </ul>
	        <!-- 底部提示 -->
            <div class="bottomLoad" v-if="contentJson.length > 0">
                <div class="loading" v-show='bottomLoading'>加载中...</div>
                <div class="noData"  v-if='bottomNoData'>没有更多的内容了</div>
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import banner from "../../components/common/banner.vue";
// 引入mint-ui 上下拉刷新组件
import { Loadmore ,InfiniteScroll  } from 'mint-ui';
export default {
    data() {
        return {
        	receptionMSG: false,//是否接收广播状态
        	topStatus: '',          // 下拉状态
            bottomLock: false,      // 上滑开关
            bottomLoading: true,    // 底部loading
            bottomNoData: false,    // 底部nothing
            contentJson: [1,2],     // 整个列表数据（模拟）
        };
    },
    components: {
        banner
    },
    mounted() {
    },
    computed: {
        ...mapState('commom', [
            'popUp',
            'popUpType'
        ]),
	},
	watch: {
		popUp() {
			//判断组件是否接收广播（vuex全局分享弹框状态改变）
			if(this.receptionMSG){
				if(this.popUp){
					//触发了分享弹框
				}else{
                    this.receptionMSG = false;
					//用户点击了某个分享按钮
					if(this.popUpType == 1){
						console.log('转发');
					}else if(this.popUpType == 2){
						console.log('收藏');
					}else if(this.popUpType == 3){
						console.log('举报');
					}
				}
			}else{
				return;
			}
		}
	},
    methods:{
        ...mapMutations('commom', [
	       'set_popUp'
		]),
    	//点击更多调用弹框事件
    	more: function(){
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
                let arr1 = [3,3,4,5,6,7,8,99,9,0,2];
                this.contentJson.push(arr1);
                this.bottomLock = false; // 上滑开关
                
            }, 1000);
            // alert(1);
            console.log(this.contentJson);
            this.bottomNoData = false;
            // this.contentJson = [];
        },
    	// 处理滚动条位置的方法
        handleLocaltion(type) {
            if (type === 'get') {
                this.$nextTick(() => {
                	document.querySelector(".DisContainer").scrollTop = sessionStorage.getItem('disScrollTop');
            	})
            } else if (type === 'set') {
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
	.DisContainer {
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .live-shop-list{
        padding: 0 30px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        li{
            border-bottom: 1px solid #c7c7c7;
            /*color: #000000;*/
            padding-top: 30px;
            .information-header {
                padding: 0 0 20px 0;
                font-size: 28px;
                font-weight: bold;
            }
            // 用户信息
            .user{
                width: 75%;
                .mg-top{
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
            span{
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
            .information-in{
                line-height: 1.5;
                font-size: 36px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
            // 图片栏
            .pic-box{
                display: -webkit-flex; /* Safari */
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                margin: 24px 0 20px 0;
                span{
                    display: block;
                    overflow: hidden;
                }
                img{
                    max-height: 100%;
                    width: 100%;
                }
            }
            .pic-cont01 span{
                width:32.7%;
                max-height: 155px;
                margin: 0 0.6% 0.6% 0;
            }
            .pic-cont02 span{
                width:49%;
                margin: 0 0.8% 0.6% 0;                    
            }
            .pic-cont03 span{
                 width:60%;
            }
            //列表底部信息
            .list-tail{
                height: 40px;
                line-height: 40px;
                font-size: 24px;
                color: #999999;
                margin: 0 0 24px 0;
                span{
                    display: inline-block;
                    margin: 0 24px 0 0;
                }
                .classified{
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
                .more{
                    float: right;
                    height: 100%;
                    width: 42px;
                    background: url("../../assets/img/icon-more-life.png") no-repeat center center;
                    background-size: 100%;
                    margin: 0;
                }
            }
            &:last-child{
                border: none;
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

</style>

