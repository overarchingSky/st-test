<template>
    <div class="st-menu">
        <wt-row class="st-menu-item hover" v-for="(menu, index) in data" :key="index">
            <span slot="lt">icon</span>
            {{menu.label}}
        </wt-row>
    </div>
</template>

<script>
export default{
    name:'st-menu',
    data(){
        return {
            data:[
                {
                    label:'DASHBOARD'
                },
                {
                    label:'AGENT'
                },
                {
                    label:'MYCRUISF'
                },
                {
                    label:'HELP'
                }
            ]
        }
    }
}
</script>

<style lang="less">
@import '~less/var.less';
.st-menu{
    .st-menu-item{
        height:45px;
        padding:0 14px;
        justify-content: flex-start;
        cursor:pointer;
        color:@white;
        transition:color .3s ease;
        will-change:color;
        &:hover{
            background-color:@blueBlack-1;
        }
    }
}
</style>