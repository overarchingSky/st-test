<template>
    <div class="pop-up-menu">
        <wt-row class="menu-item" v-for="(menuItem, index ) in data" :key="index" @click.native="popUpMenu(menuItem)">
            <i slot="lt" class="icon" :class="menuItem.icon"></i>{{menuItem.label}}
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
                    label:'Profile',
                    icon:'icon-id-card'
                },
                {
                    label:'Sign Out',
                    icon:'icon-sign-in'
                }
            ]
        }
    },
    methods:{
        popUpMenu(menuItem){
            this.$create.close()
        }
    }
}
</script>

<style lang="less">
.pop-up-menu{
    position:absolute;
    padding:10px 0;
    background-color:white;
    box-shadow:0 0 12px 1px #888;
    .menu-item{
        padding:6px 10px;
        cursor:pointer;
        transition:background-color .3s;
        &:hover{
            background-color:#EFEFEF;
        }
    }
    .icon{
        margin-right:10px;
    }
}
</style>