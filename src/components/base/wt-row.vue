<!--布局组件-->
<template>
	<div class="wt-row">
		<slot name="lt" />
		<div class="content">
			<slot />
		</div>
		<slot name="rt" />
	</div>
</template>

<script>
export default {
	name: "wt-row",
};
</script>

<style lang="less">
.wt-row {
	display: flex;
	flex-direction: row;
	position: relative;
	> .content {
		flex: 1;
	}
}
</style>
