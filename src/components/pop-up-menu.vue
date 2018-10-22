<template>
    <div class="pop-up-menu">
        <wt-row class="menu-item" v-for="(menuItem, index ) in data" :key="index" @click="popUpMenu(menuItem)">
            <span slot="lt">icon</span>{{menuItem.label}}
        </wt-row>
    </div>
</template>

<script>
export default{
    name:'popUpMenu',
    data(){
        return {
            data:[
                {
                    label:'Profile'
                },
                {
                    label:'Sign Out'
                }
            ]
        }
    },
    methods:{
        popUpMenu(menuItem){
            alert(`您点击了${menuItem.label}`)
            
        }
    }
}
</script>

<style lang="less">
.pop-up-menu{
    position:absolute;
    padding:6px 0;
    .menu-item{
        padding:6px 8px;
    }
}
</style>