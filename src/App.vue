<template>
	<admin-view id="app">
    <home></home>
	</admin-view>
</template>

<script>
import AdminView from 'layout/admin-view'
import Home from 'pages/home'
export default {
  name: 'App',
  components: {
    AdminView,
    Home
  }
}
</script>

<style lang="less">


</style>
