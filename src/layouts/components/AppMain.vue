<template>
  <section class="app-main">
    <!-- 内部应该显示子路由页面 -->
    <router-view v-slot="{ Component }">
      <transition name="fade-transform">
        <keep-alive v-if="route.meta && !route.meta.noCache">
          <component :is="Component"></component>
        </keep-alive>
        <component v-else :is="Component"></component>
      </transition>
    </router-view>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped></style>
