<template>
<div>
        <!-- 列表 -->
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
                <div @click="toDiscountsDetail(1)">
                    <h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
                    <div class="pic-box pic-cont01">
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                    </div>
                </div>
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
                <div @click="toDiscountsDetail(2)">
                    <h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
                    <div class="pic-box pic-cont02">
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                    </div>
                </div>
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
                <div @click="toDiscountsDetail(3)">
                    <h2 class="information-in">发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息发布的相关信息</h2>
                    <div class="pic-box pic-cont03">
                        <span><img src="../../../assets/test/img/list-pc01.jpg" alt=""></span>
                    </div>
                </div>
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
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return {
        	receptionMSG: false,//是否接收广播状态
        };
    },
    mounted() {
    },
    computed: {
    	...mapState('commom', [
            'popUp'
        ]),
    },
    methods:{
    	...mapMutations('commom', [
	       'set_popUp'
		]),
    	//点击更多调用弹框事件
    	more: function(){
    		this.set_popUp(true);
    	},
    	toDiscountsDetail: function(id){
    		this.$router.push('/discountsDetail/'+id)
    		document.querySelector(".discountsDetail").scrollTop = 0;
    	}
    }
};
</script>

<style scoped lang="scss">
    .live-shop-list{
        /*padding: 0 30px;*/
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        li{
            border-bottom: 1px solid #c7c7c7;
            color: #000000;
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
                background: url("../../../assets/img/icon-User-Avatar.png") no-repeat left top;
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
                    line-height: 36px;
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
                    background: url("../../../assets/img/icon-more-life.png") no-repeat center center;
                    background-size: 100%;
                    margin: 0;
                }
            }
            &:last-child{
                border: none;
            }
        }
    }
</style>
