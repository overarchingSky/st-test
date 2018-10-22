<template>
    <wt-box class="wt-avatar" :style="'width:' + size + ';height:'  + size + ';'">
        <slot />
    </wt-box>
</template>

<script>
export default {
    props:{
        //size:1rem,1px,10%,需要带单位
        size:{
            type:[String]
        },
    },
}
</script>

<style lang="less">
.wt-avatar{
    // background-color:currentColor;
    border-radius: 100%;
    overflow: hidden;
    >img,
    >.wt-img{
        width:101%;
        height:101%;
    }
}
</style>
