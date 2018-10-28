<template>
    <wt-box direction="row" class="wt-chip" :class="delay" ref="chipsWrap">
        <wt-box direction="row" ref="chips" class="wt-chip-cell" v-for="(chip,index) in chipsData" :key="index">
            {{chip}}
            <i class="icon-trash icon" @click="deleteHandler(index)"></i>
        </wt-box>
        <wt-button type="gray" v-if="overflow" class="expansion" @click.native="showOthers">
            <img class="view-more" src="~assets/more.svg" slot="icon" alt="" srcset="">
        </wt-button>
    </wt-box>
</template>

<script>

let otherChipsComponent = {
    name:'view-all',
    render(h){
        h('div',{
            attrs:{
                class:'view-all'
            }
        },
            
        )
    }
}

export default {
    name:'wt-chip',
    props:{
        data:{
            type:Array,
            required:true
        },
        showAll:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            chipsData:this.data,
            //是否有溢出
            overflow:false,
            delay:"delay"
        }
    },
    watch:{
        "data.length"(){
            this.update()
        }
    },
    computed:{
        chipsWrap(){
            return this.$refs.chipsWrap
        },
        chips(){
            return this.$refs.chips
        }
    },
    methods:{
        showOthers(){
            this.$create(this.$options,{attrs:{style:'padding:10px;background-color:white;max-width:500px;flex-wrap: wrap;justify-content:flex-start;'},props:{data:this.data,showAll:true}},this.chipsWrap)
        },
        deleteHandler(index){
            this.data.splice(index,1)
            this.update()
        },
        //检查是否有溢出情况
        checkOverflow(){
            let warpScrollWidth = this.chipsWrap.$el.scrollWidth,
                warpWidth = this.chipsWrap.$el.offsetWidth
            console.log(warpScrollWidth , warpWidth)
            return warpScrollWidth > warpWidth
        },
        //循环遍历chip-item,截取并返回刚好塞满容器时chip-item的集合，超出容器的隐藏
        //注意，这里计算宽度时，包含了显示全部chips的展开按钮
        getAppropriateChips(){
            let chips = this.chips.map(chip => chip.$el),
                warpWidth = this.chipsWrap.$el.offsetWidth,
                chipsWidth = 0;
            for (let i = 0; i < chips.length; i++) {
                const chip = chips[i];
                //这里10是每个chip的左右外边距之和
                chipsWidth += (chip.offsetWidth + 10)
                if(chipsWidth + 30 > warpWidth){
                    return this.data.slice(0,i)
                }
            }
            return this.data
        },
        update(){
            //每次更新时，渲染全部的chips，强制滚动条出现（如果有的话）,以保证getAppropriateChips方法中获取的warpWidth和warpScrollWidth是期望的值
            this.chipsData = this.data
            if(!this.showAll){
                this.$nextTick(_ => {
                    if(this.overflow = this.checkOverflow()){

                        this.chipsData = this.getAppropriateChips()
                    }else{
                        //当不需要显示省略号按钮时，尝试关闭可能存在的弹出框
                        this.$create.close()
                        this.chipsData = this.data
                    }
                    //取消延迟显示的样式
                    this.delay = ''
                })
            }else{
                //取消延迟显示的样式
                    this.delay = ''
            }
            
            
        }

    },
    mounted(){
        this.update()
    }
}
</script>

<style lang="less">
@import '~less/var.less';
.wt-chip{
    font-size:16px;
    overflow-x: auto;
    overflow-y:hidden;
    flex-direction: row;
    .wt-chip-cell{
        padding:6px;
        margin-left:5px;
        margin-right:5px;
        margin:5px;
        background-color:@white;
        flex-shrink: 0;
    }
    &.delay{
        visibility: hidden!important
    }
    .expansion{
        width:10px;
        flex-shrink: 0;
        .btn-icon{
            height:100%;
            width:100%;

        }
        .view-more{
            height:100%;
            width:100%
        }
    }
    .icon{
        margin-left:6px;
        margin-right:0;
        cursor: pointer;
    }
    
}
</style>
