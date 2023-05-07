<template>
  <div class="app-container">
    <h1>CreateVueApp Page</h1>

    <div>
      <h3>注入全局的数据</h3>
      {{ globalInjectData?.orgName }}
    </div>

    <div>
      <h3>观察：依赖注入的数据是否为响应式的</h3>
      {{ computedOrgName }}
    </div>

    <ElButton>111</ElButton>
  </div>
</template>

<script setup lang="ts">
import { AppInjectKeys } from '@/config'
const globalInjectData = inject<Record<string, any>>(AppInjectKeys.globalInjectKeys)
// inheritAttrs: true 控制是否启用默认组件的arrtibute透传
// 为true则表示组件接收透传的attribute，也即是非props上的数据讲放置在单节点组件上作为其html attribute
// 为false表示组件属性不透传attribute，非props属性讲放在$attrs中
// $listeners为一个对象，接收传递给组件的所有事件监听器
const computedOrgName = computed(() => {
  return globalInjectData?.orgName + 'l-d-g-b'
})
</script>

<script lang="ts">
export default {
  // 不接收组件透传attributes
  inheritAttrs: false
}
</script>

<style scoped></style>
