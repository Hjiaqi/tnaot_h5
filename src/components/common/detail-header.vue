<template>
    <div>
        <div class="detail-header">
            <span class="back" @click="goBack">
                <img src="../../assets/img/back_normal.png" alt="">
            </span>
            <span class="headerText">{{title}}</span>
            <span class="share" @click.stop="detailShare">
                <img src="../../assets/img/icon-navigation-shure.png" alt="">
            </span>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            
        };
    },
    props: {
    	//标题
		title: {
			default: ''
		}
    },
    computed: {
    },
    methods: {
        ...mapMutations('commom', [
	       'set_detailPop'
		]),
        goBack: function () {
            this.$router.go(-1); // 返回上一个路由
        },
        //分享事件
        detailShare: function(){
            this.set_detailPop(true);
        }
    }
}
</script>
<style lang="scss" scoped>
//详情顶部导航
.detail-header{
    background: #fff;
    width: 100%;
	height: 90px;
	line-height: 90px;
    position: fixed;
    left: 0;
    top: 0;
    border-bottom: 1px solid #dadada;
    text-align: center;
    background-color: #fff;
    z-index: 999;
    .back{
        display: block;
        float: left;
        width: 90px;
        height: 100%;
        img{
            width: 40px;
            margin: 25px 0 0 25px;
        }
    }
    .share{
        float: right;
        width: 90px;
        height: 100%;
        img{
            width: 44px;
            margin: 25px 0 0 20px;
        }
    }
    .headerText{
    	font-size: 36px;
    	color: #333;
    }
    
}
</style>
