<template>
    <header class="st-header" direction="row">
        CRUISE
        <wt-box direction="row" ref="userInfo" class="user-info" @click.native="showPopUpMenu" >
            <wt-avatar size="40px" class="head-portrait">

            </wt-avatar>
            <i class="icon-angle-down"></i>
        </wt-box>
    </header>
</template>

<script>
import Vue from 'vue'
import wtAvatar from 'cps/base/wt-avatar'
import HeaderMenu from 'cps/header-menu'
export default {
    components:{
        wtAvatar,
    },
    computed:{
        userInfo(){
            return this.$refs.userInfo
        }
    },
    methods:{
        showPopUpMenu(e){
            this.$create(HeaderMenu,{},this.userInfo)
        }
    },
    created(){
        
        //Vue.createAPI(PopUpMenu, true)
    }
}
</script>

<style lang="less">
.st-header{
    display: flex;
    height:50px;
	flex-direction: column; 
	align-items: center;
	justify-content: center;
    flex-direction:row;
    position:relative;
    .user-info{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:0;
        color:#ccc;
        cursor:pointer;
    }
    .head-portrait{
        margin-right:6px;
        background-color:red;
        
    }
}
</style>