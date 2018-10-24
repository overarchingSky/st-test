<!--全屏上中下三分布局组件，body部分高度自适应-->
<template>
    <div class="wt-col">
        <div class="head">
            <slot name="head" />
        </div>
        <div class="body" :class="{'content-scroll':scroll}">
            <slot />
        </div>
        <div class="footer">
            <slot name="footer" />
        </div>
	</div>
</template>

<script>
export default {
    props:{
        //设置body区域是否可滚动，如果为false,那么footer部分可能会被往下挤。如果设置为true,那么footer会始终停留在父容器底部，body会出现滚动条。
        scroll:{
            type:Boolean,
            default:false
        }
    },
}
</script>

<style lang="less">
.wt-col{
    display:flex;
    flex-direction: column;
    height:100%;
    .body{
        flex:1
    }
    .content-scroll{
        overflow-y:auto;
    }
    .footer{
        height:auto;
        padding:0;
    }
}
</style>
