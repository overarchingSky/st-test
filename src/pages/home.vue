<template>
    <div class="page home">
        <st-overview></st-overview>
        <st-crulse-list-filter></st-crulse-list-filter>
        <st-crulse-list></st-crulse-list>
    </div>
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
.home.page{
   
}
</style>
