<!-- 布局组件，内容水平垂直居中，可设置方向 -->
<template>
	<div class="wt-box" :style="{'flex-direction':direction}">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		direction: {
			type: String,
			default: "column"
		},
	},
	data() {
		return {};
	},
	components: {}
};
</script>

<style lang="less">
.wt-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
