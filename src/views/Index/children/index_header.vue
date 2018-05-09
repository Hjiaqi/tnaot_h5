<template>
	<div class="header_box">
		<ul>
			<li :class="{item_actve: indexActive == 0}" @click.stop="navClick(0)"><span>二手</span></li>
			<li :class="{item_actve: indexActive == 1}" @click.stop="navClick(1)"><span>优惠</span></li>
			<li :class="{item_actve: indexActive == 2}" @click.stop="navClick(2)"><span>招聘</span></li>
			<li :class="{item_actve: indexActive == 3}" @click.stop="navClick(3)"><span>商家</span></li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
	data() {
        return {
        };
    },
    computed: {
    	...mapState('index', [
            'indexActive'
        ]),
    },
	methods: {
		...mapMutations('index', [
            'set_indexActive'
        ]),
		navClick(type) {
            this.set_indexActive(type) // 点击栏目需要改变vuex内的indexActive值，这是为了与swiper联动
        },
	}
}
</script>

<style scoped lang="scss">
.header_box{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 90px;
	line-height: 90px;
	/*background-color: #fff;*/
	border-bottom: 1px solid #ccc;
	z-index: 97;
	ul{
		width: 100%;
		display: -webkit-box;
		display: flex;
		li{
			flex: 1;
			text-align: center;
			font-size: 30px;
			span{
				height: 86px;
				display: inline-block;
			}
		}
		.item_actve{
			height: 86px;
			span{
				color: #f05c28;
				border-bottom: 4px solid #f05c28;
			}
		}
	}
}
</style>