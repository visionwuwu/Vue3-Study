<template>
  <div>
    <h1>ChildCom</h1>

    {{ injectData?.orgId }}
  </div>
</template>

<script setup lang="ts">
import { AppInjectKeys } from '@/config'

// 设计一个体系
const injectData = inject<Record<string, any>>(AppInjectKeys.globalInjectKeys)

console.log(injectData, '')
</script>

<style scoped></style>
