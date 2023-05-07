<template>
  <div class="app-container computedPage">
    <h1>
      类和样式的绑定-其实就是用v-bind绑定名为class和style的属性介绍对html元素和组件中如何使用,
      设计这个其实就是Vue对class和style属性绑定功能的增强
    </h1>
    <section>
      <h3>绑定组件和html元素class</h3>
      <div>
        <h4>字符串拼接方式</h4>
        <div>
          <p :class="`textColor ${borderRadius} ${fontSize}`">模板字符串拼接类名，拼接</p>
        </div>

        <hr />

        <h4>class属性绑定对象</h4>
        <div>
          <h5 :class="plainClassObj">
            <pre>
              普通对象形式绑定类名
              const plainClassObj = {
                'is-active': true,
                'is-disabled': disabled.value
              }
            </pre>
          </h5>
          <hr />
          <h5 :class="refClassObj">
            <pre>
              ref创建类名对象进行绑定
              const refClassObj = ref({
                'is-active': true
              })
            </pre>
          </h5>
          <hr />
          <h5 :class="reactiveClassObj">
            <pre>
              const classes3 = ['reactive', reactiveClassObj]
            </pre>
          </h5>
          <hr />
          <h5 :class="computedClassObj">
            <pre>
              计算属性创建类名对象进行绑定
              const computedClassObj = computed(() => {
                const sizeVal = size.value
                const isActive = sizeVal === 'sm' || sizeVal === 'lg'
                const isDisabled = sizeVal === 'sm' && disabled.value
                return {
                  'is-active': isActive,
                  'is-disabled': isDisabled
                }
              })
            </pre>
          </h5>
        </div>

        <div>
          <h4>绑定数组</h4>
          <h5 :class="classes">
            <pre>
              普通数组
              const classes = ['plainArray', borderRadius.value, fontSize.value]
            </pre>
          </h5>
          <hr />
          <h5 :class="classes1">
            <pre>
              普通数组里有对象
              const classes1 = ['plain', plainClassObj]
            </pre>
          </h5>

          <hr />
          <h5 :class="classes2">
            <pre>
              const classes2 = ['ref', refClassObj.value]
            </pre>
          </h5>
          <hr />
          <h5 :class="classes3">
            <pre>
              const classes3 = ['reactive', reactiveClassObj]
            </pre>
          </h5>
          <h5 :class="classes4">
            <pre>
              const classes4 = ['computed', computedClassObj.value]
            </pre>
          </h5>
        </div>

        <h4>组件中使用</h4>
        <div>
          <p>
            给组件绑定class的话如果组件只有一个根节点，class属性将直接作用到根节点，有多个根节点，那么class属性会包含在$attrs中
          </p>
          <h5>
            给组件绑定class属性，作用于一个根节点
            <BindClassAndStyle :class="refClassObj" />
          </h5>

          <h5>
            给组件绑定class属性，组件有多个根元素，使用$attrs属性进行绑定到需要的元素
            <div id="mutiple-root-node"></div>
          </h5>
        </div>
      </div>
    </section>

    <section>
      <h3>绑定内联样式</h3>

      <div>
        <h4>自动前缀</h4>
        <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">自动前缀</div>
      </div>

      <ul>
        <li v-for="(item, index) of reverseList" :key="index">{{ item }}</li>
      </ul>

      <input @keyup.page-down="(event) => warn('1', event)" />
      <!-- 使用内联箭头函数 -->
      <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button>
      <input @keyup.alt.enter="(event) => warn('Form cannot be submitted yet.', event)" />

      <button @click.ctrl.exact="(event) => warn('Form cannot be submitted yet.', event)">A</button>

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        :value="textareaVal"
        @input="(event: Event) => textareaVal = event.target.value"
      ></textarea>

      {{ textareaVal }}

      <select name="" id="" :value="selectVal" @change="$event = selectVal = $event.target.value">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      {{ selectVal }}

      <div>在被选中时值为a：<input type="radio" v-model="selectVal" value="a" /></div>

      <div>
        <form action="#" method="get" @submit="handleSubmit">
          <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
          <button>提交</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BindClassAndStyle from './components/BindClassAndStyle.vue'
const textareaVal = ref('textarea')
const selectVal = ref('1')
const toggle = ref(false)

const emits = defineEmits(['update:modelValue'])

const appInstance = createApp({
  template: `
    <div>111</div>
    <div>222</div>
  `
})

provide('globalData', {})

onMounted(() => {
  appInstance.mount('#mutiple-root-node')
})
const fontSize = ref('fs-sm')
const borderRadius = ref('border-sm')
const size = ref('lg')
const disabled = ref(true)
const list = ref([1, 2, 3])

const reverseList = computed(() => list.value.reverse())

function warn(message: string, event: Event) {
  console.log(message)
}

function handleSubmit() {
  console.log(toggle.value)
}

setTimeout(() => {
  list.value.push(4)
}, 2000)

const styleObj = computed(() => {
  return {
    fontSize: `var(--font-size-${size.value})`
  }
})

/**
 * 普通对象形式绑定类名，键名就是css类名，值为真就添加为假移除类名
 * 那么对于有些类名可以使用变量来控制其是否需要添加
 */
const plainClassObj = {
  'is-active': true,
  'is-disabled': disabled.value
}

// 使用reative来创建对象形式的类名
const reactiveClassObj = reactive({
  'is-active': true,
  'is-disabled': false
})

const refClassObj = ref({
  'is-active': true
})

// 对于一些需要复杂的计算然后生成类名，可以使用计算属性创建一个对象形式的类名
const computedClassObj = computed(() => {
  const sizeVal = size.value
  const isActive = sizeVal === 'sm' || sizeVal === 'lg'
  const isDisabled = sizeVal === 'sm' && disabled.value
  return {
    'is-active': isActive,
    'is-disabled': isDisabled
  }
})

/**
 * 使用数组来绑定类名，数组里面可以放类名字符串，js变量，响应式数据，以及对象，三元表达式有条件的渲染类名
 * 同样的可以使用计算属性，js数组，reactive ref 创建一个数组来绑定类名
 */
const classes = ['plainArray', borderRadius.value, fontSize.value]
const classes1 = ['plain', plainClassObj]
const classes2 = ['ref', refClassObj.value]
const classes3 = ['reactive', reactiveClassObj]
const classes4 = ['computed', computedClassObj.value]
</script>

<style scoped>
.computedPage {
  --font-size-base: 16px;
  --font-size-xs: calc(var(--font-size-base) * 0.75);
  --font-size-sm: calc(var(--font-size-base) * 0.875);
  --font-size-md: calc(var(--font-size-base) * 1);
  --font-size-lg: calc(var(--font-size-base) * 1.25);

  --border-radius-base: 6px;
  --border-radius-xs: calc(var(--border-radius-base) * 0.5);
  --border-radius-sm: calc(var(--border-radius-base) * 0.75);
  --border-radius-md: calc(var(--border-radius-base) * 1);
  --border-radius-lg: calc(var(--border-radius-base) * 1.25);
}
.fs-sm {
  font-size: var(--border-radius-sm);
}
.fs-sm {
  font-size: var(--border-radius-sm);
}

.fs-md {
  font-size: var(--border-radius-sm);
}

.fs-lg {
  font-size: var(--border-radius-sm);
}
</style>
