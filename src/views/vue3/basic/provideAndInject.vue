<template>
  <div></div>
</template>

<script setup lang="ts">
import { AppInjectKeys } from '@/config'

const globalInjectData = reactive({
  userInfo: {
    id: 1,
    name: 'Visionwu'
  },
  orgId: '60001',
  orgName: '大厦科技',
  tendid: '10001'
})

provide(AppInjectKeys.globalInjectKeys, globalInjectData)
</script>

<style scoped></style>
