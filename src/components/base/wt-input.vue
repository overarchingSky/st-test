<template>
    <wt-row class="wt-input">
        <wt-box class="prepend" slot="lt">
            <slot name="lt"/>
        </wt-box>
        <input class="input-self" :type="type" v-bind="$attrs" v-on="$listeners"/>
        <wt-box class="append" slot="rt">
            <slot name="rt"/>
        </wt-box>
    </wt-row>
</template>

<script>
export default {
    name:'wt-input',
    props:{
        type:{
            type:String,
            default:'text'
        }
    },
}
</script>

<style lang="less">
.wt-input{
    width:min-content;
    box-sizing: border-box;
    padding-top:4px;
    padding-bottom:4px;
    @spacing:10px;
    .prepend,
    .append{
        //如果填充了插槽(一般为icon，文字)，就默认给左右一定间距
        :first-child{
            padding-left:@spacing;
        }
        :last-child{
            padding-right:@spacing;
        }
    }
    .append{
        &:empty{
            padding-right:@spacing;
        }
    }
    .input-self{
        background-color:transparent;
        outline: none;
        color:currentColor;
    }
}
</style>
