<template>
    <wt-col :scroll="true" class="page home">
        <st-overview slot="head"></st-overview>
        <wt-row class="bar" slot="head">
            <st-crulse-list-filter @on-filter="setFilterData"></st-crulse-list-filter>
            <wt-box class="views-switching" direction="row" slot="rt">
                <i v-for="(view, index) in views" :key="index" :class="setViewsClass(view)" @click="setCurrentView(view)"></i>
            </wt-box>
        </wt-row>
        <st-crulse-list :filter="filterData"></st-crulse-list>
    </wt-col>
</template>

<script>
import StOverview from 'cps/st-overview';
import StCrulseListFilter from 'cps/st-crulse-list-filter'
import StCrulseList from 'cps/st-crulse-list'

export default {
    name:'home',
    components:{
        StOverview,
        StCrulseListFilter,
        StCrulseList
    },
    data(){
        return {
            filterData:{},
            views:['card','list'],
            viewType:'list'
        }
    },
    methods:{
        setViewsClass(view){
            let isActive = view == this.viewType ? 'active' : ''
            return `icon icon-btn icon-th-${view} ${isActive}`
        },
        setCurrentView(view){
            this.viewType = view
        },
        setFilterData(val){
            this.filterData = val
        }
    }
}
</script>

<style lang="less">
@import '~less/var.less';
.home.page{
   .bar{
       margin-top:@spacing;
       margin-bottom:@spacing;
       background-color:white;
       .icon{
           margin: 0 10px;
       }
   }
   .st-crulse-list{
       overflow-y: auto;
   }
   .icon-btn{
       cursor:pointer;
       &.active{
           color:@blue;
       }
   }
   .content-scroll{
       
   }
}
</style>
