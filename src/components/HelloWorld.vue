<script setup lang="ts">

defineProps<{
  msg: string

}>()
</script>

<template>
  <div class="greetings">
    <h3>Basic-Fron-UI</h3>
    <br />
    <el-row class="mb-4">
      <RButton size="sm">small</RButton>
      <RButton>default</RButton>
      <RButton size="lg">larger</RButton>

      <RButton :disabled="true">disabled</RButton>
      <RButton btnType="link" href="www.baidu.com">disabled</RButton>

      <RButton btnType="default">default</RButton>
      <RButton btnType="primary">primary</RButton>
      <RButton btnType="success">success</RButton>
      <RButton btnType="danger">danger</RButton>
      <RButton btnType="info">info</RButton>
      <RButton btnType="warning">warning</RButton>
    </el-row>
    <br />
    <h3>Element-Plus Button</h3>
    <br />
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary" size="large">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
