<template>
    <div class="st-overview">
        <wt-row class="item builling">
            <span class="meta" slot="lt">Builling</span>
            <i class="icon icon-cog"></i>
            <span class="count" slot="rt">3</span>
        </wt-row>
        <wt-row class="item idle">
            <span class="meta" slot="lt">Idle</span>
            <i class="icon icon-coffee"></i>
            <span class="count" slot="rt">3</span>
        </wt-row>
        <wt-box class="item other-info" direction="row">
            <wt-box class="info-item">
                All
                <div class="count">8</div>
            </wt-box>
            <wt-box class="info-item">
                PHYSICAI
                <div class="count">4</div>
            </wt-box>
            <wt-box class="info-item">
                VTRTUAI
                <div class="count">4</div>
            </wt-box>
        </wt-box>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import '~less/var.less';
.st-overview{
    display:flex;
    flex-direction: row;
    color:@white;
    .builling{
        background-color:@orgin;
    }
    .idle{
        background-color:@green;
    }
    .builling,
    .idle{
        .count{
            font-size:45px;
            align-self: flex-end;
        }
    }
    .item{
        flex:1;
        box-sizing: border-box;
        padding:1em;
        //height:
        text-align:center;
        &+.item{
            margin-left:20px;
        }
    }
    .content{
        margin:-2em;
    }
    .meta{
        font-size:18px;
        font-weight: bold;
        vertical-align:top;
    }
    .icon{
        font-size:144px;
        opacity: 0.2;
    }
    .info-item{
        flex:1;
        height:100%;
        font-size:12px;
        color:black;
        background-color:white;
        
        .count{
            font-size:20px;
            margin-top:34px;
            font-weight: bold;
        }
    }
    .other-info{
        padding:0;
    }
}
</style>
