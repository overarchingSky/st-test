<!-- 插入其他组件 -->
<template>
		<!-- 启用loading -->
		<span class="wt-img" v-if="enAbleLoading">
			<wt-box class="svg-wrapper" v-if="isShowLoading">
				<draw-svg-path class="svg-loading theme-color"></draw-svg-path>
			</wt-box>
			<!-- 懒加载 -->
			<img v-if="lazy" v-lazy :data-src="defaultFileName" :data-srcset="fileName1x + ' 1x,' + fileName2x + ' 2x,' + fileName3x + ' 3x'" class="lazy-load" ref="lazyImg" v-on="$listeners" @load="loadHandler"/>
			<!-- 非懒加载 -->
			<img v-else :src="defaultFileName" :srcset="fileName1x + ' 1x,' + fileName2x + ' 2x,' + fileName3x + ' 3x'" v-on="$listeners" @load="loadHandler"/>
		</span>
		<!-- 懒加载 + 不使用loading-->
		<img v-else-if="!enAbleLoading && lazy" v-lazy :data-src="defaultFileName" :data-srcset="fileName1x + ' 1x,' + fileName2x + ' 2x,' + fileName3x + ' 3x'" class="lazy-load" ref="lazyImg" v-on="$listeners" @load="loadHandler"/>
		<!-- 不使用懒加载 + 不使用loading-->
		<img v-else :src="defaultFileName" :srcset="fileName1x + ' 1x,' + fileName2x + ' 2x,' + fileName3x + ' 3x'" v-on="$listeners" @load="loadHandler"/>
</template>
<script>
/*
 * src:图片路径，该目录中无需包含1x,2x,3x这层目录，例如正常使用路劲为'../../assets/images/1x/***.png',则本组件接收'../../assets/images/***.png'
 *注：此组件一般情况下，仅适用于工程中的图片，网络图片请直接使用原生的<img>
*/
import drawSvgPath from 'cps.com/base/draw-svg-path'
export default {
	name: "wt-img",
	props: {
		src: {
			type: String
		},
		//是否使用原图格式，为false时使用jpg
		orgin:{
			type:Boolean,
			default:false
		},
		isFullPath:{
			type:Boolean,
			default:false
		},
		//图片资源地址
		host:{
			type:String,
			default:process.env.imagesPath
		},
		lazy:{
			type:Boolean,
			default:false
		},
		//是否使用加载动画
		enAbleLoading:{
			type:Boolean,
			default:false
		}
	},
	components:{
		drawSvgPath
	},
	data(){
		console.log('enAbleLoading',this.enAbleLoading)
		return {
			isShowLoading:this.enAbleLoading
		}
	},
	computed: {
		type(){
			return this.orgin ? '' : 'jpg-'
		},
		fileName() {
			if(this.isFullPath){
				return this.src
			}
			// let pathInfo = this.src.split("/");
			// let name = pathInfo[pathInfo.length - 1];
			console.log('fileName',this.src)
			return process.env.imagesPath + this.src
		},
		defaultFileName(){
			return this.fileName + this.$store.state.compress
		},
		fileName1x() {
			return this.fileName + this.$store.state[this.type + '1x']
		},
		fileName2x() {
			return this.fileName + this.$store.state[this.type + '2x']
		},
		fileName3x() {
			return this.fileName + this.$store.state[this.type + '3x']
		},
		lazyImg(){
			return this.$refs.lazyImg
		},
	},
	methods: {
		builder(x) {
			// let sp = this.fileName.split(".");
			// let filename = sp[0];
			// let ext = sp[1];
			//filename += x;
			//return process.env.imagesPath + filename + "." + ext
			if(this.isFullPath){
				return this.fileName
			}else{
				return this.host + this.fileName
			}
			// return process.env.imagesPath
			// 	? process.env.imagesPath + filename + "." + ext
			// 	: require("staticImages/" + filename + "." + ext);
		},
		loadHandler(){
			this.isShowLoading = false
		}
	}
};
</script>

<style lang="less">
.wt-img{
	display:inline-block;
	position: relative;
	.svg-wrapper{
		position:absolute;
		top:0;
		width:100%;
		height:100%;
		.svg-loading{
			width:50%;
		}
	}
	img{
		width:100%;
		height:100%;
	}
}
.lazy-loading{
	animation: lazy-loading 2.8s infinite;
	opacity: 0;
	background: #000;
	width: 15px;
    height: 15px;
  &:nth-child(2){
	  animation-delay: .7s;
  }
  &:nth-child(3){
	  animation-delay: 2.1s;
  }
  &:nth-child(4){
	  animation-delay: 1.4s;
  }
}
@keyframes lazy-loading{
  0% {
    opacity: .5;
    background: #000;
  }

  30% {
    opacity: .5;
    background: #666;
  }
  60% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: .5;
    background: #000;
  }
}
</style>
