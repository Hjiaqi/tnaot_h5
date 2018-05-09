<template>
<div class="types-list">
	<detail-header v-bind:title="Text"></detail-header>
	<div class="list-box">
		<list-view></list-view>
	</div>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import listView from "./children/list-view.vue";
import detailHeader from "../../components/common/detail-header.vue";
export default {
    data() {
        return {
        	Text: '美食'//头部文字
        };
    },
    components: {
    	detailHeader,
    	listView
    },
    computed: {
    	...mapState('merchant', [
            'headerText'
        ]),
    },
    mounted() {
    },
    watch: {
    	headerText(){
    		this.Text = this.headerText;
    	}
    },
    methods: {
    }
};
</script>

<style lang="scss">
.types-list{
	.list-box{
		margin-top: 90px;
		.item-img{
			margin-left: 30px;
		}
	}
	.list-item{
		padding-left: 30px;
	}
}

</style>