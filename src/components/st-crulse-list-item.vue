<template>
    <div class="st-crulse-list-item">
        <div class="picture">
            <img :src="os" alt="">
        </div>
        <wt-row class="t-lt">
            <span class="source" slot="lt">
                <i class="icon icon-desktop"></i>
                {{data.name}}
            </span>
            <span class="meta building" v-if="data.status == 'building'">building</span>
            <span class="meta idle"  v-if="data.status == 'idle'">Idle</span>
        </wt-row>
        <wt-row direction="row" class="t-rt">
            <span class="icon-warp">
                <i class="icon icon-info"></i>
                {{data.ip}}
            </span>
            <span class="icon-warp">
                <i class="icon icon-folder"></i>
                {{data.location}}
            </span>
        </wt-row>
        <wt-box direction="row" class="b-lt add">
            <wt-button @click.native="addResource" ref="addBtn">
                <i class="icon icon-plus" slot="icon"></i>
            </wt-button>
            <wt-chip :data="data.resources" class="resources"></wt-chip>
        </wt-box>
        <wt-box direction="row" class="b-rt">
            <wt-button>
                <i class="icon icon-deny" slot="icon"></i>
                Deny
            </wt-button>
        </wt-box>
    </div>
</template>

<script>
import stResourcePrompt from 'cps/st-resource-prompt'
export default {
    name:'st-crulse-list-item',
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    computed:{
        addBtn(){
            return this.$refs.addBtn
        },
        os(){
            return 'static/os icons/' + this.data.os + '.png'
        }
    },
    methods:{
        addResource(e){
            this.$create(stResourcePrompt,{attrs:{title:'Separate multiple resource name with commas'}},this.addBtn,'resource-dialog')
            .then(resource => {
                console.log('resource',resource)
                if(resource.trim()){
                    this.data.resources.push(resource)
                }else{
                    alert('不能添加空标签')
                }
            }).catch(_ => {
                console.log('点击了取消')
            })
            
        }
    }
}
</script>

<style lang="less">
@import '~less/var.less';
.st-crulse-list-item{
    background-color:white;
    display:grid;
    grid-template-columns:repeat(12,1fr);
    grid-template-rows:60px 60px;
    align-items:center;
    grid-template-areas:
    "icon icon t-lt t-lt t-lt t-lt t-lt t-rt t-rt t-rt t-rt t-rt"
    "icon icon b-lt b-lt b-lt b-lt b-lt b-lt b-lt b-lt b-rt b-rt";
    &+.st-crulse-list-item{
        margin-top:@spacing;
    }
    .picture{
        grid-area:icon;
        justify-self: center;
        align-self:center;
        font-size:0;
    }
    .t-lt{
        grid-area:t-lt;
    }
    .t-rt{
        grid-area:t-rt;
    }
    .b-lt{
        grid-area:b-lt;
        justify-content:flex-start!important;
        overflow-x: auto;
    }
    .b-rt{
        grid-area:b-rt;
        justify-self: center;
    }
    .icon-warp{
        .icon{
            vertical-align:-1px;
        }
        
    }
    .icon{
        margin-right:10px;
    }
    .source{
        color:@blue;
        margin-right:20px;
    }
    .meta{
        padding:2px 6px;
        color:white;
        &.building{
            background-color:@orgin;
        }
        &.idle{
            background-color:@green;
        }
    }
    .resources{
        padding:5px;
    }
    .add{
        .wt-button{
            height:30px;
            width:30px;
            padding:0;
        }
        
    }
}
.resource-dialog{
    .wt-pop-up-arrow{
        &:before{
            border:1px solid @blue;
        }
    }
    .wt-pop-up-content{
        border:1px solid @blue;
    }
}
</style>
