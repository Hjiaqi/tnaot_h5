<template>
    <div class="text-con">
        <detail-header></detail-header>
        <div class="contant">
            <!-- 发布者信息 -->
            <div class="information-header">
                <div class="user">
                    <span class="user-bg"></span>
                    <p class="strong">用户名xxx</p>
                    <p><span>发布时间</span> <span>发布地址</span></p>
                </div>
                <p class="money">$ 1000</p>
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
            <p>电话： 13526626357</p>
            <p>facebook: 111111</p>
        </div>
        <list-commentlist></list-commentlist>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import listCommentlist from "./live-commentlist.vue";
import detailHeader from "../../components/common/detail-header.vue";
export default {
    name:"liveDetail",
    data() {
        return {};
    },
    computed: {
        ...mapState('commom', [
            'detailPop'
        ])
    },
    watch:{
        detailPop() {
            //判断组件是否接收广播（vuex全局分享弹框状态改变）
			if(this.detailPop){
                console.log('详情页面分享');
                //调用app分享接口

                this.set_detailPop(false);
			}else{
				return;
			}
		}
    },
    methods: {
         ...mapMutations('commom', [
	       'set_detailPop'
		]),
    },
    components: {
        listCommentlist,
        detailHeader
    }
}
</script>
<style scoped lang="scss">
.text-con{
    height: 100%;
    overflow: auto;
    padding: 60px 0 0 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
}
.contant {
    padding: 30px;
    overflow: auto;
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
        margin: 20px 0 36px 0;
    }
    p{
        font-size: 30px;
        margin: 0 0 36px 0;
    }
}
</style>
