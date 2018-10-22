<!--右箭头-->
<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1538042941157" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="5082" width="128" height="128">
        <path :d="path" p-id="5083"/>
    </svg>
</template>

<script>
export default {
    props:{
        path:{
            type:String,
            required:true
        }
    },
    name:'arrow-right',
}
</script>

<style scoped>
.icon{
    width:1em;
    height:1em;
    fill:currentColor;
}
</style>
