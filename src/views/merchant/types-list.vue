<template>
<div class="types-list">
	<detail-header v-bind:title="headerText"></detail-header>
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
    }
};
</script>

<style lang="scss">
.types-list{
	height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
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