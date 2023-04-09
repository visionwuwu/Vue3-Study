<template>
  <div class="app-container">
    <h1>CssModule</h1>
    {{ $style }}
    <h3 :class="$style.a">red</h3>
    <h3 :class="$style.b">
      green
      <p :class="$style.c">blue</p>
    </h3>
    <h3 :class="$style.d">yellow</h3>

    <!-- 在模板上没有ts类型提示 -->
    <h3 :class="contentStyle.e">purple</h3>
  </div>
</template>

<script setup lang="ts">
const style = useCssModule()
const contentStyle = useCssModule('content')

console.log(style, 'style')
console.log(contentStyle, 'contentStyle')
</script>

<style scoped lang="scss">
.scoped {
  color: orange;
}
</style>

<!-- 默认名称的css module -->
<style module lang="scss">
.a {
  color: red;
}
.b {
  color: green;
  .c {
    color: blue;
  }
}
.d {
  color: yellow;
}
</style>
<!-- 覆盖了上面的css module -->
<!-- <style module>
.d {
  color: yellow;
}
</style> -->
<!-- 具名的css module -->
<style module="content">
.e {
  color: purple;
}
</style>
