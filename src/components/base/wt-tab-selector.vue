<template>
    <wt-box class="wt-tab-selector" direction="row">
        <wt-box class="tab" :class="isActive(item)" v-for="(item,index) in data" :key="index" @click.native="onSelect(item.value)">{{item.text}}</wt-box>
    </wt-box>
</template>

<script>
export default {
    props:{
        value:String,
        data:{
            type:Array,
            required:true
        }
    },
    data(){
        return {
            currentValue:this.value
        }
    },
    methods:{
        isActive(item){
            return this.currentValue == item.value ? 'active' : ''
        },
        onSelect(val){
            this.currentValue = val
            this.$emit('input',val)
        },
    },
    watch:{
        value(){
            this.currentValue = this.value
        },
    },
}
</script>
<style lang="less">
@import '~less/var.less';
.wt-tab-selector{
    width:min-content;
    position: relative;
    .tab{
        box-sizing:border-box;
        padding:0 1em;
        cursor:pointer;
        &.active{
            position:relative;
            color:@blue;
            &::after{
                content:'';
                position:absolute;
                left:0;
                bottom:0;
                width:100%;
                height:0;
                border-bottom:3px solid @blue;
            }
        }
    }
}

</style>

