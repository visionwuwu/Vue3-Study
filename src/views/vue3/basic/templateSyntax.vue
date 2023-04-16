<template>
  <div class="app-container">
    <h1>模板语法</h1>
    <hr>

    <h2>模板语法可以支持js表达式比如:</h2>
    
    <section>
      <ul>
        <li>
          <p>{{ 1 + 2 }}</p>
        </li>
        <li>
          <p>{{ true ? 'true' : 'false'  }}</p>
        </li>
        <li>
          <p>{{ { name: 1 }.name }}</p>
        </li>
        <li>
          <p>
            {{ [1,2,3,4].map(item => 'item' + item) }}
          </p>
        </li>
      </ul>
    </section>

    <hr>

    <h2>Vue中内置的一些指令：Directive</h2>
    <section>
      <ul>
        <li>
          <h3>v-text: </h3>
          <span v-text="`绑定一个文本值被渲染成文本:标签里面是不能放文本`"></span>
        </li>
        <hr>
        
        <li>
          <h3>v-html: </h3>
          <div v-html="`
            <p>
              其实就是用innerHTML为当前元素插入html标签比如<b>我是一个b标签</b> <i>我是i标签</i>
            </p>
            <p>同样使用了v-html指令得标签里面是不能写任何内容的</p>
          `"></div>
        </li>
        <hr>

        <li>
          <h3>v-for：可以对对象和数组进行遍历操作</h3>
          <h4>数组遍历：用 v-for...in语法</h4>
          <p v-for="(item, index) in [{name: 'zs', id: 1}]" :key="index">
            {{ `索引:${index} -- 值：${item.name}` }}
          </p>
          <h4>数组遍历：用 v-for...of语法</h4>
          <p v-for="(item, index) of [{name: 'ls', id: 1}]" :key="index">
            {{ `索引:${index} -- 值：${item.name}` }}
          </p>
          <h4>对象遍历：用 v-for...in语法</h4>
          <p v-for="(value, key) in {name: 'visionwu'}" :key="key">
            {{ `键名:${key} -- 值：${value}` }}
          </p>
          <h4>对象遍历：用 v-for...of语法 不会遍历 键为symbol的属性</h4>
          <p v-for="(value, key) of obj" :key="key">
            {{ `键名:${key} -- 值：${value.real}` }}
          </p>
        </li>
        <hr>

        <li>
          <h4>v-if和v-else: 为真就显示真的，为假就显示假的，其实就是对元素的移除和创建操作</h4>
          <span v-if="true">我被创建了</span>
          <span v-else>我被删除了</span>
        </li>
        <hr>

        <li>
          <h4>v-show指令：</h4>
          <span v-show="true">其实就是css样式的切换display: block和 display: none</span>
        </li>
        <hr>

        <li>
          <h4>v-bind：指令可以对标签绑定属性和组件绑定一些Props 后面绑定一个Arguments参数作为指令绑定的属性</h4>
          <p :title="':props'">v-bind指令简写用 <b>:props</b>进行简写</p>
          <p v-bind:style="{ color: 'red' }">绑定属性值为对象形式：使用v-bind绑定style属性给文本设置红色字体</p>
          <p :class="{ textColorBlue: true, fontSizeBase: false }">为元素动态绑定calss属性 <b>{ textColorBlue: true, fontSizeBase: false }</b>true就添加对于类否则不添加</p>
          <p :style="[{ color: 'red' }, { fontWeight: 'bold' }, { fontSize: '30px' }]">绑定数据值为</p>
        </li>
        <hr>

        <li>
          <h4>v-on: 为元素和组件绑定事件</h4>
          <button
            v-on:click.stop="handleKeyDown"
            v-on:click="count++"
            @click="handleClick"
          >点赞{{ count }}</button>
        </li>
        <hr>

        <li>
          <h4>v-bind和v-on后面也可以绑定动态参数语法v-bind:[attr] v-on:[evnentName]，对于动态参数的值只能是字符串和null</h4>
          <el-button v-on:[evnentName]="handleClick">11</el-button>
        </li>
        <hr>

        <li>
          <h4>事件修饰符号：capture、stop、passive、prevent、self、once、left、middle、right</h4>

          <h5>capture：指向内部的元素的事件，在被内部元素触发前，先触发自己</h5>
          <div @click.capture="handleParentClick">
            parent element
            <div @click="handleChildClick">
              child elememt
            </div>
          </div>
          <hr>

          <h5>stop：阻止事件冒泡</h5>
          <div @click="handleParentClick">
            parent element
            <div @click.stop="handleChildClick">
              child elememt
            </div>
          </div>
          <hr>

          <h5>passive：</h5>
          <hr>


          <h5>prevent：阻止默认事件，form表单的submit事件、a标签跳转事件</h5>
          <el-link href="#" @click.prevent="handleClick">阻止a标签跳转事件</el-link>
          <form action="#" method="get" enctype="application/x-www-form-urlencoded" @submit.prevent="handleSubmit">
            <el-form-item label="姓名">
              <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="model.age"></el-input>
            </el-form-item>
            <el-form-item >
              <button>提交</button>
            </el-form-item>
          </form>
          <hr>

          <h5>self：事件只会在自己身上触发，并不会来自子元素</h5>
          <div @click.self="handleParentClick">
            parent element
            <div>
              child elememt
            </div>
          </div>
          <hr>


          <h5>once：只会执行一次</h5>
          <el-button @click.once="handleParentClick">
            只会执行一次
          </el-button>
          <hr>

          <h5>lefe：鼠标左键</h5>
          <el-button @click.left.prevent="handleClick">鼠标左键</el-button>
          <el-button @click.middle.prevent="handleClick">鼠标中键</el-button>
          <el-button @click.right.prevent="handleClick">鼠标右键</el-button>
          <hr>

        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)
const model = reactive({
  name: '',
  age: ''
})
const evnentName = 'click'

const handleKeyDown = (e: any) => {
  console.log(e)
}

const handleClick = (e: any) => {
  console.log(e)
}

const handleParentClick = () => {
  console.log('父级元素click')
}

const handleChildClick = () => {
  console.log('子元素click')
}

const handleSubmit = () => {
  console.log('表单提交');
}

const obj = {name: { alias: 'visionwu', real: 'bw' }, [Symbol('1')]: { real: '1' } }
// for in -- 原型和自己，能遍历可枚举，不能遍历symbol
// 自身非原型上，枚举不枚举都能，不能遍历symbol
Object.getOwnPropertyNames({})
// 自身非原型，枚举不枚举都能，只能遍历symbol
Object.getOwnPropertySymbols({})
// 自身非原型，枚举能，不能遍历symbol
Object.keys({})
// 自身非原型，枚举不枚举都能，能遍历symbol
Reflect.ownKeys({})
const obj1 = {}
Object.defineProperty(obj1, 'a', {
  // 可枚举的 能否被遍历
  enumerable: true,
  writable: false,
  // 可配置的
  configurable: false,
  value: 5
})
</script>

<style scoped lang="scss"></style>
