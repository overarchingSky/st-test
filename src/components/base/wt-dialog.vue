<template>
    <mu-dialog :fullscreen="fullscreen" :open.sync="scan" :overlay="false" class="wt-dialog">
        <div class="content">
            <div class="wt-loading detail">
                <slot />
            </div>
            <div class="theme-bg confirm">
                <slot name="footer"/>
            </div>
        </div>
    </mu-dialog>
</template>

<script>
export default {
    props:{
        fullscreen:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return {
            scan:false
        }
    },
    methods:{
        show(){
            this.scan = true
        },
        hide(){
            this.scan = false
            this.$emit('on-close')
        },
        confirm(){
            alert(123)
            this.$emit('on-confirm')
        }
    },
}
</script>

<style lang="less">
.wt-dialog{
    .mu-dialog-body,.content{
        height:100%;
    }
    .content{
        display:flex;
        flex-direction:column;
        overflow: hidden;
    }
    .detail{
        flex:1;
        overflow-y:auto;
        padding:0.2rem;
        line-height: 1.5em;
        -webkit-overflow-scrolling: touch;
    }
    .confirm{
        margin:0.2rem!important;
    }
    z-index:889!important;
}
</style>
