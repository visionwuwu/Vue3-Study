<template>
  <div class="app-container">
    <h1>响应式基础</h1>
    <h3>
      使用ref创建响应式的数据,一般都是基本数据类型的响应式比如：boolen string number Symbol BigInt
    </h3>
    <section>
      <p>{{ name }}</p>
      <p>{{ number }}</p>
      <p>{{ flag }}</p>
      <p>{{ symbol }}</p>
      <p>{{ bigint }}</p>
      <p>{{ obj }}</p>
    </section>
    <hr />

    <!-- 使用reactive创建响应式状态和改变其响应式状态 -->
    <h3>使用reactive创建响应式状态和改变其响应式状态</h3>
    <div>
      {{ state.title }} -- <b>{{ state.count }}</b>
      <el-button @click="handleCount('increment', 1)">Increment</el-button>
      <el-button @click="handleCount('decrement', 1)">Decrement</el-button>
    </div>
    <hr />

    <!-- 深层响应式也就是对象嵌套对象的响应式 -->
    <section>
      <h3>深层响应式也就是对象嵌套对象</h3>
      <div>
        <p>
          {{ deepState.nested.count }}
        </p>
        <p>
          {{ deepState.arr }}
        </p>
        <p>
          <el-button @click="mutateDeeply">改变深层响应式数据</el-button>
        </p>
      </div>
    </section>

    <section>
      <h3>浅层响应式对象，由shallowReactive创建的</h3>
      <div>
        <pre :style="{ fontWeight: 'bold' }">
          const shallowState = shallowReactive({
            foo: 1,
            nested: {
              bar: 2
            }
          })

          // 这个就不会被响应式
          shallowReactive.nested.bar++
        </pre>
      </div>
    </section>

    <section>
      <h3>reactive返回的是一个代理对象和原始对象是不相等，并且改变原始对象，也不会触发响应式</h3>
      <div>
        <p>proxy：{{ proxy.count }}</p>
        <p>raw: {{ raw.count }}</p>
      </div>
    </section>

    <h1>
      {{ obj.desc }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import type { IStateProps, CountType } from './interface'

const name = ref('ref创建字符串响应式状态')
const number = ref(666)
const flag = ref(false)
const symbol = ref(Symbol('symbol type'))
// eslint-disable-next-line no-undef
const bigint = ref(BigInt(1))
const obj = ref({
  desc: '11'
})
const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count')?.value)

const state = reactive<IStateProps>({
  title: '进行数量加减',
  count: 0
})

const handleCount = (type: CountType, number: number) => {
  state.count = type === 'increment' ? state.count + number : state.count - number
}

const deepState = reactive({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  deepState.nested.count++
  deepState.arr.push('baz')
}

// 浅层响应式对象
const shallowState = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

const raw = {
  count: 1
}
const proxy = reactive(raw)

// 代理对象和原始对象不是全等的
console.log(proxy === raw) // false

// 同一个对象进行reactive返回相同代理
console.log('同一个对象进行reactive返回相同代理', reactive(raw) === proxy)

// 在一个已代理对象再次代理会返回它自己
console.log('在一个已代理对象再次代理会返回它自己', reactive(proxy) === proxy)

// proxy.count = 1

// setTimeout(()=> {
//   // raw改变不会影响proxy
//   raw.count = 22
//   // 响应式状态改变会影响raw 触发响应式
//   proxy.count = 33
// }, 1000)
</script>

<style scoped></style>
