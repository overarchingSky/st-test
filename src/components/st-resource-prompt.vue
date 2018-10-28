<template>
    <div class="st-resource-prompt">
        <wt-row class="wt-resource-prompt-header">
            <div class="wt--resource-prompt-header-title" v-text="title"></div>
            <i class="icon icon-close" slot="rt" @click="close"></i>
        </wt-row>
        <wt-textarea rows="1" v-model="currentValue" placeholder="e.g Chrome, Firefox"></wt-textarea>
        <wt-box direction="row" class="wt-resource-prompt-btns">
            <wt-button @click.native="confirm">
                Add Resources
            </wt-button>
            <wt-button type="secondary" @click.native="cancel">
                Cancel
            </wt-button>
        </wt-box>
    </div>
</template>

<script>
export default {
    props:{
        title:String
    },
    data(){
        return {
            //外部获取的value
            value:'',
            //组件内部临时/当前的value
            currentValue:''
        }
    },
    methods:{
        close(){
            this.currentValue = ''
            this.$create.close()
        },
        cancel(){
            this.$emit('cancel')
            this.close()
        },
        confirm(){
            this.value = this.currentValue
            this.$emit('confirm',this.value)
            this.close()
        }
    }
}
</script>

<style lang="less">
@import '~less/var.less';
.st-resource-prompt{
    width:570px;
    box-sizing: border-box;
    padding:16px;
    background-color:white;
    .wt-resource-prompt-header{
        margin-bottom:10px;
        .icon-close{
            cursor: pointer;
            transition:transform .3s;
            transform:rotate(0);
            will-change: transform;
            color:@blue;
            &:hover{
                transform: rotate(90deg)
            }
        }
    }
    .wt-resource-prompt-btns{
        margin-top:10px;
        justify-content: flex-start;
        .wt-button + .wt-button{
            margin-left:10px;
        }
    }
    .wt-textarea{
        box-sizing: border-box;
        padding:6px 5px;
        border:1px inset #ccc;
        border-radius: 4px;
    }
}
</style>
