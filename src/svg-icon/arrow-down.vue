<!--箭头-下-->
<template>
    <arrow-right class="arrow-down"></arrow-right>
</template>

<script>
import arrowRight from 'svg-icon/arrow-right'
export default {
    name:'arrow-down',
    components:{
        arrowRight
    }
}
</script>

<style scoped>
.arrow-down{
    transform:rotate(90deg);
}
</style>