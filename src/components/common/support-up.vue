<template>
    <div>
        <div class="supportup" @click="toggleCount()">
            <span class="icon-support" :class="{ supported: supported}">{{Count}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            supported: false,
            Count: 0
        }
    },
    props:["supportCount"],
    created() {
        this.Count = this.supportCount;
    },
    methods :{
        toggleCount: function () {
            this.supported = !this.supported;
            if(this.supported){
                this.Count++;
            }else {
                this.Count--;
            }               
            this.$emit("supportChange",this.Count);
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .supportup {
        min-width: 100px;
        height: 30px;
        line-height: 30px;
        font-size: 24px;
        color: #666666;
        .icon-support{
            padding: 0 0 0 44px;
            background: url("../../assets/img/icon-support.png") no-repeat left top;
            background-size: contain;
            &.supported{
                background: url("../../assets/img/icon-supported.png") no-repeat left top;
                background-size: contain;
            }
        }
    }
</style>
