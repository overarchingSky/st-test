<template>
    <wt-row direction="row" class="st-crulse-list-filter">
        <wt-tab-selector :data="filterData" slot="lt" v-model="filter.type"></wt-tab-selector>
        <wt-input class="search" v-model="filter.keyWords" type="text">
            <i class="icon-search" slot="lt"></i>
        </wt-input>
    </wt-row>
</template>

<script>

export default {
    name:'st-crulse-list-filter',
    data(){
        return {
            filterData:[
                {text:'All',value:'1'},
                {text:'physical',value:'2'},
                {text:'Virtual',value:'3'}
            ],
            filter:{
                type:'1',
                keyWords:''
            },
        }
    },
    watch:{
        filter:{
            handler(){
                this.$emit('on-filter',this.filter)
            },
            deep:true
        }
    },
}
</script>

<style lang="less">
@import '~less/var.less';
.st-crulse-list-filter{
    .search{
        height:30px;
        margin-left:60px;
        margin-right:60px;
        background-color:@white;
    }
    .tab{
        height:50px;
        width:97px;
    }
}
</style>
