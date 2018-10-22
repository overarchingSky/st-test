<template>
	<div class="admin-view">
        <wt-box direction="row" class="header">
            <st-header class="st-header"></st-header>
        </wt-box>
        <nav class="nav">
            <st-menu class="st-menu"></st-menu>
            <st-history class="st-history"></st-history>
        </nav>

		<div class="main" direction="row">
            <slot />
        </div>
        <footer class="footer">
			footer
		</footer>
	</div>
</template>

<script>
import Vue from 'vue'
import StHeader from 'cps/st-header'
import StMenu from 'cps/st-menu'
import StHistory from 'cps/st-history'
export default {
  name: 'App',
  components: {
    StHeader,
    StMenu,
    StHistory
  }
}
</script>

<style lang="less">
@import '~less/var.less';
.admin-view{
    height:100%;
    display:grid;
	grid-template-columns: 1fr 300px 900px 1fr;
	grid-template-rows:50px 1fr 2em;
	grid-template-areas: 
	"header header header header"
	". nav main ."
    "footer footer footer footer";
    background-color:@white;
    .header{
		grid-area:header;
        background-color:white;
        box-shadow:0 0 12px 1px #ccc;
	}
    .st-header{
        width:1200px;
    }
    .nav{
        grid-area:nav;
        padding:20px 0;
        background-color:@blueBlack;
        display:flex;
        flex-direction:column;
        overflow-y:auto;
        .st-menu{
            flex:1;
        }
        .st-history{
            max-height:300px;
        }
    }
	.main{
        grid-area:main;
        overflow-y: auto;
        padding:10px 0 10px 20px;
	}
	.footer{
		grid-area:footer;
	}
    .wt-header{
        box-shadow:0 0 1px 1px #ccc;
    }
}
</style>
