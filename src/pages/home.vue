<template>
    <wt-col :scroll="true" class="page home">
        <st-overview slot="head"></st-overview>
        <wt-row class="bar" slot="head">
            <st-crulse-list-filter></st-crulse-list-filter>
            <!-- 高亮功能用tab来做 -->
            <wt-box class="views-switching" direction="row" slot="rt">
                <i class="icon icon-th-card"></i>
                <i class="icon icon-th-list"></i>
            </wt-box>
        </wt-row>
        <st-crulse-list></st-crulse-list>
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
   .content-scroll{
       
   }
}
</style>
