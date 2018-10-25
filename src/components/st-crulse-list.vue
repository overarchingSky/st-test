<template>
    <div class="st-crulse-list">
        <st-crulse-list-item v-for="item in data" :key="item.id" :data="item"></st-crulse-list-item>
    </div>
</template>

<script>
import StCrulseListItem from 'cps/st-crulse-list-item'
export default {
    name:'st-crulse-list',
    props:{
        filter:{
            type:Object,
            validator(){
                return true
            }
        }
    },
    data(){
        return {
            data:[]
        }
    },
    components:{
        StCrulseListItem
    },
    methods:{
        load(){
            this.$http.get('/agents').then(response => {
                this.data = response.data
            })
        }
    },
    created(){
        this.load()
    }
}
</script>

<style>

</style>
