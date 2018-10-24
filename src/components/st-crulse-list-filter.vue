<template>
    <wt-row class="st-crulse-list-filter">
        <div class="tab" slot="lt"></div>
        <wt-input class="search" type="text">
            <i class="icon-search" slot="lt"></i>
        </wt-input>
    </wt-row>
</template>

<script>
export default {
    name:'st-crulse-list-filter'
}
</script>

<style lang="less">
@import '~less/var.less';
.st-crulse-list-filter{
    .tab{
        width:300px;
        height:50px;
    }
    .search{
        height:30px;
        margin-left:60px;
        margin-right:60px;
        background-color:@white;
    }
}
</style>
