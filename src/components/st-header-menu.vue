<template>
    <div class="pop-up-menu">
        <wt-box direction="row" class="menu-item" v-for="(menuItem, index ) in data" :key="index" @click.native="popUpMenu(menuItem)">
            <i class="icon" :class="menuItem.icon"></i>{{menuItem.label}}
        </wt-box>
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
    padding:10px 0;
    background-color:white;
    .menu-item{
        justify-content: flex-start;
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