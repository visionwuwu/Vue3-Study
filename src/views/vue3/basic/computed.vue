<template>
  <div>
    <h1>计算属性</h1>
    <pre>
      1. 计算属性是vue中用来处理复杂的逻辑非常常见的手法
      2. 具有缓存，计算属性会监听其内部响应式数据变化，从而判断其是否要重新计算
      3. 计算属性默认定义好后默认是其get方法，还有其set方法，常常用来做一些处理操作，比如和v-modal指令结合去使用
      4. 计算属性和方法 - 在模板中使用方法和计算属性，组件每次渲染时都会重新调用方法，而计算属性是会根据其响应式依赖是否变化而去判断是否重新执行getter函数，
      所以再有复杂计算时推荐使用计算属性防止每次被调用
      5. 计算属性一般用来获取值，不会进行设置其值-如果要设置其值可以使用-可写计算属性
    </pre>

    <section>
      <h3>计算属性具有缓存作用，计算属性和方法</h3>
    </section>

    <section>
      <h3>可写的计算属性</h3>
      {{ fullName }}
    </section>

    <section>
      <h3>最佳实践-注意事项</h3>
      <p>计算属性getter函数内部就是用来计算获取返回值不应该有任何副作用异步请求或者更改 DOM</p>
      <p>
        计算属性不要直接修改其值，认为他是一个可读的，应该改变其内部依赖，触发计算属性getter函数重新执行
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
const firstName = ref('Vision')
const lastName = ref('wuwu')

// 使用computed返回一个计算属性ref
const fullName = computed({
  get() {
    // ref在计算属性中是不会进行自动解包的
    return `${firstName.value}-${lastName.value}`
  },
  set(newValue) {
    // 解构赋值语法
    ;[firstName.value, lastName.value] = newValue.split('-')
  }
})
</script>
<script lang="ts">
export default {
  name: 'ComputedCom'
}
</script>

<style scoped></style>
