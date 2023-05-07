<template>
  <div class="app-container">
    <h1>表单输入绑定</h1>
    <ul>
      <li>v-model语法绑定到对于表单类型元素上会自动给你去识别绑定相应的dom属性和事件处理</li>
      <li>
        <p>1. <b>input</b>、<b>textarea</b> 绑定value属性和input事件</p>
      </li>
      <li>
        <p>2. <b>checkbox</b>、<b>radio</b> 绑定checked属性和change事件</p>
      </li>
      <li>
        <p>3. <b>select</b> 绑定value属性和change事件</p>
      </li>
      <li>
        <p>
          4. v-model 会忽略表单元素上的value、checked 或 selected
          attribute，将v-model绑定的值为数据来源
        </p>
      </li>
    </ul>
    <section>
      <h2>基本用法</h2>
      <div>
        <h3>文本</h3>
        <p>Message is: {{ inputVal }}</p>
        <input v-model="inputVal" placeholder="edit me" />
      </div>
      <hr />

      <div>
        <h3>多行文本</h3>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line">{{ textareaVal }}</p>
        <textarea v-model="textareaVal" placeholder="add multiple lines"></textarea>
      </div>
      <hr />

      <div>
        <h3>复选框</h3>
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
      </div>
      <hr />

      <div>
        <h3>单选</h3>
        <div>Picked: {{ picked }}</div>
        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>

        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>
      </div>
      <hr />

      <div>
        <h3>下拉选择器</h3>
        <div>Selected: {{ selected }}</div>

        <select v-model="selected">
          <option disabled value="">Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>

        <hr />
        <h3>多选 (值绑定到一个数组)：</h3>
        <div>Selected: {{ selectedArr }}</div>
        <select v-model="selectedArr">
          <option disabled value="">Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </section>

    <section>
      <h2>值绑定</h2>
      <div>
        <h3>复选框</h3>
        <!-- 内联箭头函数事件处理器和阻止默认事件的事件参数 -->
        <form action="#" method="get">
          <div>Selected: {{ toggle }}</div>
          <input
            name="checkbox"
            type="checkbox"
            v-model="toggle"
            true-value="yes"
            false-value="no"
          />
          <br />
          <input type="text" name="text" />
          <button>提交</button>
        </form>
      </div>
      <hr />

      <div>
        <h3>单选按钮</h3>
        <form action="#" method="get">
          <div>Selected: {{ pick }}</div>
          <input type="radio" v-model="pick" :value="first" />
          <input type="radio" v-model="pick" :value="second" />
        </form>
      </div>
      <hr />

      <div>
        <h3>选择器选项</h3>
        <div>Selected: {{ selected1 }}</div>
        <select v-model="selected1">
          <!-- 内联对象字面量 -->
          <option :value="{ number: 123 }">123</option>
        </select>
      </div>
    </section>

    <section>
      <h2>v-model的修饰符</h2>

      <div>
        <h3>.lazy</h3>
        <div>加 lazy 修饰符来改为在每次 change 事件后更新数据：: {{ lazyVal }}</div>
        <input type="text" v-model.lazy="lazyVal" />
      </div>
      <hr />

      <div>
        <h3>.number</h3>
        <p>无法转化成数字原样输出类似parseInt</p>
        <p>number 修饰符会在输入框有 type="number" 时自动启用。</p>
        <div>
          如果你想让用户输入自动转换为数字，你可以在 v-model 后添加 .number 修饰符来管理输入:
          {{ numberVal + ':' + typeof numberVal }}
        </div>
        <input type="text" v-model.number="numberVal" />
        <input type="number" v-model.number="numberVal" />
      </div>
      <hr />

      <div>
        <h3>.trim</h3>
        <div>自动去除用户输入内容中两端的空格 v-model 后添加 .trim 修饰符: {{ trimVal }}</div>
        <input type="text" v-model.trim="trimVal" />
      </div>
    </section>

    <section>
      <h2>组件上的v-model</h2>
      <div>
        <h3>v-model的参数</h3>
        <p>v-model在组件上使用默认会绑定:modelVal update:modelValue事件：{{ customLazyVal }}</p>
        <VModal v-model:title.lazy="customLazyVal" />
      </div>
      <hr />

      <div>
        <h3>多个v-model绑定</h3>
        <p>v-model在组件上使用默认会绑定:modelVal update:modelValue事件：{{ customLazyVal }}</p>
        <VModal v-model:title.lazy="customLazyVal" />
      </div>
      <hr />

      <div>
        <h3>v-model的自定义修饰符</h3>
        <p>v-model在组件上使用默认会绑定:modelVal update:modelValue事件：{{ customLazyVal }}</p>
        <VModal v-model:title.lazy="customLazyVal" />
      </div>
      <hr />
    </section>
  </div>
</template>

<script setup lang="ts">
import VModal from './components/vModal.vue'

const inputVal = ref('')
const textareaVal = ref('')
const picked = ref('')
const checked = ref('')
const selected = ref('')
const selectedArr = ref([])
const toggle = ref('')
const pick = ref('')
const first = ref('first')
const second = ref('second')
const selected1 = ref('')
const lazyVal = ref('')
const numberVal = ref('')
const trimVal = ref('')
const customLazyVal = ref('')
</script>

<style scoped></style>
