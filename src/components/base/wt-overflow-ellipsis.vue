<!--多行溢出显示省略号组件-->
<template>
    <div class="wt-overflow-ellipsis" ref="ellipsis">
        <slot />
    </div>
</template>

<script>
export default {
    name:'wt-overflow-ellipsis',
    props:{
        //最大显示行
        row:{
            type:[String,Number],
            default:1
        },
        //是否使用原生的溢出省略
        userNative:{
            type:Boolean,
            default:false
        },
    },
    computed:{
        ellipsis(){
            return this.$refs.ellipsis
        }
    },
    methods:{
        getStyle(element) {
            if(element.currentStyle) {
                return element.currentStyle
            } else {
                return getComputedStyle(element, false)
            }
        },
        nativeOverflowEllipsis(){
             this.ellipsis.style['-webkit-line-clamp'] = this.row
            let computedStyle = this.getStyle(this.ellipsis)
            let lineHeight = parseInt(computedStyle.lineHeight)
            console.log('lineHeight',lineHeight)
            this.ellipsis.style['max-height'] = this.row * lineHeight - 1 + 'px'
        }
    },
    mounted(){
        if(this.userNative){
            this.nativeOverflowEllipsis()
        }else{
            
        }
       
    }
}
</script>

<style>
.wt-overflow-ellipsis{
    display:-webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
}
</style>
