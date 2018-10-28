<template>
    <header class="st-header" direction="row">
        <img class="logo" src="@/assets/logo/logo.svg" alt="" srcset="">
        <wt-box direction="row" class="user-info" @click.native="showPopUpMenu" >
            <wt-avatar size="40px" class="head-portrait" ref="avatar">
                <img class="avatar" src="@/assets/avatar.jpg" alt="" srcset="">
            </wt-avatar>
            <i class="icon-angle-down"></i>
        </wt-box>
    </header>
</template>

<script>
import Vue from 'vue'
import wtAvatar from 'cps/base/wt-avatar'
import HeaderMenu from 'cps/st-header-menu'
export default {
    components:{
        wtAvatar,
    },
    computed:{
        avatar(){
            return this.$refs.avatar
        }
    },
    methods:{
        showPopUpMenu(e){
            this.$create(HeaderMenu,{},this.avatar)
        }
    },
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
    .logo{
        width:80px;
    }
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
    .avatar{
        width:100%;
    }
}
</style>