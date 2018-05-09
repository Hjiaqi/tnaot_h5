<template>
    <div>
        <transition name="fade">
            <!-- 遮罩层 -->
            <div class="black" @click="colose" v-show="popUp" @touchmove.prevent>
                <!-- 弹出窗 -->
                <div class="more-box">
                    <ul>
                        <li @click.stop="transmit">转发</li>
                        <li @click.stop="collecting">收藏</li>
                        <li @click.stop="inform">举报该条消息</li>
                    </ul>
                </div>
            </div>   
        </transition>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return{
        	Show: false,
        	message: ''
        }
    },
    mounted() {
    },
    computed: {
    	...mapState('commom', [
            'popUp',
            'popUpType'
        ]),
    },
	methods: {
		...mapMutations('commom', [
	       'set_popUp',
	       'set_popUpType'
		]),
		transmit() {
		    this.closePopUp(false,1);
		},
		collecting() {
			this.closePopUp(false,2);
		},
		inform() {
			this.closePopUp(false,3);
		},
		colose() {
            this.closePopUp(false,0);
		},
		closePopUp(type,num) {
			this.set_popUp(type);
			this.set_popUpType(num);
		}
	}
}
</script>
<style lang="scss" scoped>
    // 遮罩层
    .black{
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 9998;
        background: rgba(51, 51, 51, 0.5%);
        &.fade-enter-active, &.fade-leave-active{
            transition: all 0.5s;
        }
        &.fade-enter, &.fade-leave-active{
            opacity: 0;
            background: rgba(51, 51, 51, 0.5%);
        }
        // 弹出窗
        .more-box{
            width: 330px;
            padding: 18px 36px;
            background: #ffffff;
            position: fixed;
            left: 50%;
            top: 50%;
            z-index: 9999;
            transform: translate(-50%, -50%);
            li{
                font-size: 30px;
                color: #000000;
                padding: 36px 0;
                border-bottom: 1px solid #999;
                &:last-child{
                    border: none;
                }
            }
        }          
    }
</style>
