<template>
    <wt-box direction="row" class="wt-button" :class="btnStyle">
        <wt-box class="btn-icon">
            <slot name="icon" />
        </wt-box>
        <wt-box direction="row" class="btn-text">
            <slot />
        </wt-box>
    </wt-box>
</template>

<script>
export default {
    name:'wt-button',
    props:{
        //['primary','secondary']
        type:{
            type:String,
            default:'primary'
        }
    },
    computed:{
        btnStyle(){
            return this.type? 'btn-' + this.type : ''
        }
    }
}
</script>

<style lang="less">
@import '~less/var.less';
.wt-button{
    height:30px;
    padding:0 10px;
    color:white;
    transition:background-color .3s ease;
    cursor: pointer;
    .icon{
        margin:0;
        font-size:18
    }
    .btn-icon{
        //如果填充了插槽(一般为icon)，就默认给一定右边距
        margin-left:0;
        :last-child{
            margin-right:10px;
        }
    }
    //按钮如果没有文字或其他内容，则添加负左外边距，抵消掉btn-icon的右边距
    .btn-text{
        margin-left:0;
        &:empty{
            margin-left:-10px;
        }
    }
    &.btn-primary{
        background-color:@blue;
        &:active{
            background-color:@blue-1;
        }
    }
    &.btn-secondary{
        background-color:@blueBlack-1;
        &:active{
            background-color:@blueBlack;
        }
    }
    &.btn-gray{
        background-color:@white;
        &:active{
            background-color:@gray;
        }
    }
    
}
</style>
