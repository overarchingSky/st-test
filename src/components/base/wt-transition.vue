<template>
  <div>
    <transition :name="animate" mode="out-in" v-on="$listeners" v-bind="$attrs">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
/**
 * 过渡组件，目前支持淡入淡出动画fade
 */
export default {
  props:{
    //指定使用的动画名称
    animate:{
      type:String,
      default:'fade'
    }
  },
}
</script>

<style type="text/css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity .15s
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>