<template>
    <div class="st-history">
        history
        <ul>
            <li v-for="(history, index) in data" :key="index" class="hover" ref="historys">{{history}}</li>
        </ul>
    </div>
</template>

<script>
export default{
    name:'st-history',
    data(){
        return {
            data:['考虑到附近上空拦截的饭卡上打开链接付款了按实际疯狂拉升阶段克里夫','考虑到附近上空拦截的饭卡上打开链接付款了按实际疯狂拉升阶段克里夫']
        }
    },
    computed:{
        historys(){
            return this.$refs.historys
        }
    },
    mounted(){
        
        this.historys.forEach(history => {
            $clamp(history,{clamp:2,useNativeClamp:false})
        })
    },
}
</script>

<style lang="less">
.st-history{
    padding:0 14px;
    font-size:24px;
    color:#ccc;
    ul{
        list-style-type: disc;
        -webkit-padding-start: 1.2em;
        text-indent:0.8em;
        font-size:12px;
        color:#999;
    }
    li{
        margin:1em 0;
        cursor:pointer;
        transition:color .3s ease;
        will-change:color;
    }
}
</style>