<template>
    <div class="discountsDetail">
        <div class="contant">
            <!-- 发布者信息 -->
            <div class="information-header">
                <div class="user">
                    <span class="user-bg"></span>
                    <p class="strong">用户名xxx</p>
                    <p><span>发布时间</span> <span>发布地址</span></p>
                </div>
                <!--<p class="money">$ 1000</p>-->
            </div>
            <!-- 正文 -->
            <div class="cont-text">
                <p>这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文</p>
                <img src="../../assets/img/banner-1.png" alt="">
                <p>这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文</p>
            </div>
        </div>
        <div class="contact-box">
        	<h3>联系电话</h3>
            <p>
            	<img src="../../assets/img/icon-life-add-night@2x.png"/>
            	具体地址XXX
            </p>
            <h3>联系电话</h3>
            <p>电话： 13526626357</p>
            <p>facebook: 111111</p>
        </div>
		<!--推荐-->
        <div class="dis-recommend">
        	<p class="title">查看过该优惠的人还看过</p>
        	<recommendList></recommendList>
        </div>
        <share-box></share-box>
    </div>
</template>
<script>
import recommendList from './children/recommend-list.vue'
import shareBox from "../../components/common/share-box.vue";
export default {
    data() {
        return {};
    },
    components: {
    	recommendList,
    	shareBox
    },
    activated() {
//  	document.querySelector(".discountsDetail").scrollTop = 0;
    	console.log(document.querySelector(".discountsDetail").scrollTop);
    }
}
</script>
<style scoped lang="scss">
.discountsDetail{
	height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
}
.contant {
    padding: 30px;
}
/*用户信息*/ 
.information-header {
    padding: 30px 0 20px 0;
    font-size: 28px;
    font-weight: bold;
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
    font-size: 36px;
    color: #f05c28;
    margin: 30px 0 0 0;
    
}
// 正文
.cont-text{
    font-size: 36px;
    line-height: 1.5;
    img{
        width: 100%;
        margin: 18px 0;
    }
}
.contact-box{
    color: black;
    border-bottom: 10px solid #cecece;
    padding: 0 30px;
    h3{
        font-size: 36px;
        font-weight: bold;
        margin: 20px 0 30px 0;
    }
    p{
        font-size: 30px;
        margin: 0 0 26px 0;
        img{
        	display: block;
        	float: left;
        	width: 26px;
        	height: 34px;
        	margin-right: 18px;
        	vertical-align: middle;
        }
    }
    p:last-child{
    	margin: 0 0 38px 0;
    }
}
.dis-recommend{
	padding: 0 30px;
	.title{
		font-size: 30px;
		color: #747474;
		margin-top: 34px;
		margin-bottom: 32px;
	}
}
</style>
