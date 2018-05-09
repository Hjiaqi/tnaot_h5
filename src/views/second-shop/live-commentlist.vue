<template>
    <div class="contant">
        <h2 class="comment-title">留言</h2>
        <ul class="coment-list">
            <li>
                <a href="javascript:;" class="clearfix">
                    <div class="user-header">
                        <img src="../../assets/img/icon-User-Avatar.png" alt="">
                    </div>
                    <div class="comment-info fl-left">
                        <div class="user-info clearfix">
                            <span class="user fl-left">用户名</span>
                            <span class="fl-right">
                                <support-up :supportCount="this.supportCount" @supportChange="changeCount"></support-up>
                            </span>
                        </div>
                        <p class="com-txt">评论评论评论评论评论评论评论评论</p>
                        <div class="com-back">
                            <span class="time">16分钟</span> · 
                            <span class="all-back more">2条回复</span>
                        </div>
                        <div class="com-backlist">
                            <dl>
                                <dd>
                                    <p><span class="back-user">用户名</span>：
                                    这个是we下路的问题这个是we下路的问题这个是we下路的问题这个是we下路的问题这个是we下路的问题这个是we下路的问题这个是we下路的问题</p>
                                </dd>
                            </dl>
                            <span class="show-more">查看全部8条回复</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import supportUp from "../../components/common/support-up.vue";
export default {
    data(){
        return{
            supportCount:99
        }
    },
    methods:{
        changeCount: function(value) {
            this.supportCount =  value
        }
    },
    components: {
        supportUp
    }
}
</script>
<style lang="scss" scoped>
.contant {
    padding: 30px;
}
/*标题*/ 
.comment-title {
    margin: 0 0 40px 0;
    font-size: 36px 0 0 0;
    color: #000;
    font-weight: bold;
}
/*评论列表*/
.coment-list {
    li {
        position: relative;
        margin: 0 0 60px 0;
        .user-header{
            width: 72px;
            height: 72px;
            background: url("../../assets/img/icon-User-Avatar.png") no-repeat left top;
            background-size: cover;
            border-radius: 50%;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            -ms-border-radius: 50%;
            -o-border-radius: 50%;
            margin: 0 20px 0 0;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 999;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .comment-info{
            padding: 0 0 0 92px;
            .user{
                color: #2a9bdb;
                font-size: 32px;
            }
            .com-txt{
                font-size: 36px;
                color: #333333;
                line-height: 1.5;
                margin: 15px 0;
            }
            .com-back{
                height: 48px;
                line-height: 48px;
                font-size: 24px;
                color: #333333;
                margin: 0 0 20px 0;
                span{ 
                    display: inline-block;
                    height: 48px;
                }
                .more{
                    background: #f5f4ef;
                    border-radius: 48px;
                    -webkit-border-radius: 48px;
                    -moz-border-radius: 48px;
                    -ms-border-radius: 48px;
                    -o-border-radius: 48px;
                    padding: 0 24px;
                }
            }
            .com-backlist{
                background: #f4f4f4;
                padding: 30px 20px;
                dl,dd{
                    font-size: 36px;
                    line-height: 1.4;
                    margin: 0 0 15px 0;
                    .back-user{
                        color: #2a9bdb;
                    }
                }
                .show-more{
                    color: #2a9bdb;
                    font-size: 32px;
                    margin: 15px 0 0 0;
                }
            }
        }
    }
} 
</style>
