<template>
    <!-- <mu-container class="wt-tabs">
        <mu-tabs :value.sync="currentIndex" :color="bgColor">
            <mu-tab v-for="(item,index) in data" :key="index">{{getLabel(item)}}</mu-tab>
        </mu-tabs>
    </mu-container> -->
    <wt-box class="wt-tabs" :style="'background-color:' + bgColor" direction="row">
        <div class="active-style" :class="{'disableAnimate':disableAnimate}" ref="active">
            <!-- 高亮插槽，可放置其它高亮效果，默认为底部线条的形式 -->
            <slot>
                <div class="active-line"></div>
            </slot>
        </div>
        <wt-box class="tab" ref="tabs" :class="{'tab-active':currentIndex == index}" v-for="(item,index) in data" :key="index" @click.native="onSelect(index)">{{getLabel(item)}}</wt-box>
    </wt-box>
</template>

<script>
import wtBox from 'cps.com/base/wt-box'
/**
 * 分类tab组件
 * @vuedoc 
 * @exports base/wt-tab
 * @example 
 * 支持两种使用模式：
 * 1.data直接传入成员为字符串的数组，如：【'tab1',tab2】,此模式下会高亮当前tab，并通过input事件抛出当前的tab名，在父组件中处理具体切换逻辑
 * <wt-tabs :data="['tab1','tab2']" v-model="currentTab"></wt-tabs>
 * 2.data传入一个成员为对象的数组，如：[{name:'tab1',to:'/path',{name:'tab2',to:'/path2'}],此模式会在模式1的基础上做路由的跳转
 * <wt-tabs :data="[{name:'tab1',to:'/path',{name:'tab2',to:'/path2'}]"></wt-tabs>
 */
export default {
    props:{
        //背景色
        bgColor:String,
        value:String,
        data:{
            type:Array,
            required:true
        }
    },
    components:{
        wtBox
    },
    data(){
        return {
            //当前高亮tab的index
            currentIndex:this.matchIndex(),
            //初次渲染时，禁用过渡动画
            disableAnimate:true
        }
    },
    computed:{
        //高亮元素盒子
        active(){
            return this.$refs.active
        },
        //当前存在的tab集合
        tabs(){
            return this.$refs.tabs
        }
    },
    methods:{
        getLabel(item){
            return _.isObject(item) ? item.name : item
        },
        onSelect(val){
            this.currentIndex = val
        },
        //根据路由匹配当前高亮的tab的index
        matchIndexByRouter(){
            let paths = this.$route.fullPath.split('/').filter(item => !!item);
            let index
            for (let i = 0; i < paths.length; i++) {
                const item = paths[i]
                index =  this.data.findIndex(atem => {
                    return _.isObject(atem) ? atem.to == item : atem == item
                })
                if(index > -1){
                    break
                }
            }
            return index
        },
        //根据value or 路由来得到当前高亮tab的在传入参数data中的index，即currentIndex
        matchIndex(){
            if(this.value){
                return this.data.findIndex(item =>_.isObject(item) ? item.name == this.value : item == this.value)
            }else{
                return this.matchIndexByRouter()
            }
        },
        //更新高亮块元素的样式
        updateActive(){
            console.log('this.tabs[this.currentIndex]',this.tabs[this.currentIndex])
            let currentTab = this.tabs[this.currentIndex].$el,
                width = currentTab.offsetWidth,
                offsetX = this.tabs.slice(0,this.currentIndex).reduce((a,b) => {
                    console.log('item',b)
                    return a + b.$el.offsetWidth
                },0)
            this.active.style = `transition-duration:0.3s;transform:translateX(${offsetX}px);width:${width}px;`;
            
        },
    },
    watch:{
        '$route'(){
            this.currentIndex = this.matchIndex()
        },
        value(){
            this.currentIndex = this.matchIndex()
        },
        currentIndex:{
            handler(){
                this.updateActive()
                let val = this.data[this.currentIndex]
                if(_.isObject(val)){
                    this.$router.replace(val.to)
                    val = val.name
                }
                //输出当前tab name
                this.$emit('input',val)
            },
            //immediate:true
        }
    },
    mounted(){
        this.updateActive()
        setTimeout(() => {
            this.disableAnimate = false
        }, 200);
    },
}
</script>
<style lang="less">
@import '~less/var.less';
.wt-tabs{
    width:min-content;
    height:2.5em;
    position: relative;
    .tab{
        padding:0 1em;
        color:@themeColor;
        .tab-active{
            color:currentColor;
            border-bottom:2px solid red;
        }
    }
    .active-style{
        position: absolute;
        bottom:0;
        top:0;
        left:0;
        transition:all 0.3s;
        will-change: width transform;
        &.disableAnimate{
            transition:none!important;
        }
        .active-line{
            position:absolute;
            bottom:0;
            display:block;
            width:100%;
            border-bottom:0.2em solid @themeColor;
        }
    }
    // .mu-tabs,
    // .mu-tab-active{
    //     color:currentColor;
    // }
    // .mu-tab-link-highlight {
    //     background-color: currentColor;
    //     transition-duration: 0ms;
    // }
    // .mu-tab{
    //     min-width:auto;
    // }
    // .mu-tab-wrapper{
    //     font-size:0.26rem;
    // }
}

</style>

