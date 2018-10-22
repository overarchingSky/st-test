<template>
    <header class="st-header" direction="row">
        CRUISE
        <wt-box direction="row" class="user-info" @click.native="showPopUpMenu" >
            <wt-avatar size="40px" class="head-portrait">

            </wt-avatar>
            <icon-arrow-down></icon-arrow-down>
        </wt-box>
    </header>
</template>

<script>
import Vue from 'vue'
import IconArrowDown from 'svg-icon/arrow-down'
import wtAvatar from 'cps/base/wt-avatar'
import PopUpMenu from 'cps/pop-up-menu'
export default {
    components:{
        IconArrowDown,
        wtAvatar,
    },
    computed:{
        userInfo(){
            return this.$refs.userInfo
        }
    },
    methods:{
        showPopUpMenu(e){
            // this.$createPopUpMenu({
            //     data:[]
            // }).show()
            this.$create(PopUpMenu,{},e)
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