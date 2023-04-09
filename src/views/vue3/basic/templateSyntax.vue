<template>
  <div class="app-container">
    basic/templateSyntax
    {{ $style }}
    <h3 :class="$style.a">red</h3>
    <h3 :class="$style.b">
      green
      <p :class="$style.c">blue</p>
    </h3>
    <h3 :class="$style.d">red</h3>
  </div>
</template>

<script setup lang="ts">
const style = useCssModule()

console.log(style, 'style')
</script>

<style scoped lang="scss"></style>

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
</style>
<style module>
.d {
  color: yellow;
}
</style>
