<template>
    <div class="st-history">
        history
        <ul>
            <li :title="history" v-for="(history, index) in data" :key="index" class="history-item hover" ref="historys">{{history}}</li>
        </ul>
    </div>
</template>

<script>
export default{
    name:'st-history',
    data(){
        return {
            data:['ksdfjaklsjdakd/jksdfkljklasjdklfj/jaslkdfjklsfj','ksdfjaklsjdakd/jksdfkljklasjdklfj/j aslkdfjk lsfjkljsg jaksgjklajsk jkljks','ksdfjaklsjdakd/jksdfkljklasjdklfj/jaslkdfjklsfj','ksdfjaklsjdakd/jksdfkljklasjdklfj/jaslkdfjklsfj','ksdfjaklsjdakd/jksdfkljklasjdklfj/jaslkdfjklsfj','ksdfjaklsjdakd/jksdfkljklasjdklfj/jaslkdfjklsfj']
        }
    },
    computed:{
        historys(){
            return this.$refs.historys
        }
    },
    mounted(){
        
        this.historys.forEach(history => {
            $clamp(history,{clamp:1,useNativeClamp:false})
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
        font-size:12px;
        color:#999;
    }
    li{
        margin:1em 0;
        cursor:pointer;
        transition:color .3s ease;
        will-change:color;
        overflow: hidden;
        list-style:none;
        word-wrap: no-warp;
    }
}
</style>