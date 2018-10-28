<template>
    <textarea ref="textarea" class="wt-textarea" :value="currentValue" @input="inputHandler"></textarea>
</template>

<script>
/**
 * 自适应高度的textarea
 * 支持所有textarea原生属性
 */
export default {
    props:{
        //是否自适应文字高度
        autoHeight:{
            type:Boolean,
            default:false
        },
        value:{
            type:String,
            default:''
        },
    },
    data(){
        return {
            currentValue:this.value,
            timer:null
        }
    },
    watch:{
        value(){
            this.currentValue = this.value
        }
    },
    name:'wt-textarea',
    computed:{
        textarea(){
            return this.$refs.textarea
        },
    },
    methods:{
        inputHandler(e){
            if(this.autoHeight){
                this.textarea.style.height = ''
                let scrollHeight = this.textarea.scrollHeight
                this.textarea.style.height = scrollHeight + 2 + 'px'
            }
            this.currentValue = e.target.value
            this.$emit('input',this.currentValue)
        },
    }
}
</script>

<style lang="less">
.wt-textarea{
    width:100%;
    resize:none;    
    overflow: hidden;
    border:none;
}
</style>
