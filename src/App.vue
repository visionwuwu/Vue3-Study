<template>
  <router-view />
</template>

<script setup lang="ts">
import { AppInjectKeys } from './config'
const originalObj = {
  userInfo: {
    id: 1,
    name: 'Visionwu'
  },
  orgId: '60001',
  orgName: '大厦科技',
  tendid: '10001'
}
// 依赖注入所提供的数据是非响应式的-除非他提供一个响应式的数据
const globalInjectData = reactive(originalObj)

setTimeout(() => {
  globalInjectData.orgName = '牛马工厂'
  originalObj.orgName = '牛马工厂'
}, 1000)

provide(AppInjectKeys.globalInjectKeys, originalObj)
</script>
