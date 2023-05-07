// 遍历对象的几种方式
// 可原型和自身属性，symbol属性
// 可原型可自身,非symbol
// 非原型自身，不能symbol
// 非原型自身，能symbol
const obj = {
  id: 1,
  name: 'Visionwu',
  [Symbol('Symbol')]: 'Symbol Props'
}
Object.setPrototypeOf(obj, { pid: 0, pname: 'proto' })
// 非原型可自身，非symbol
console.log(Object.keys(obj), 'Object.keys()')
// 可原型可自身，非symbol
const keys = []
// eslint-disable-next-line guard-for-in, no-restricted-syntax
for (const key in obj) {
  keys.push(key)
}
console.log(keys, 'for...in')
// 获取对象的原型对象
const objProto = Object.getPrototypeOf(obj)
console.log(objProto, 'Object.getPrototypeOf')
// 非原型非自身，symbol
const symbolKeys = Object.getOwnPropertySymbols(obj)
console.log(symbolKeys, 'Object.getOwnPropertySymbols')
// 非原型自身，非symbol
const ownPropertyNames = Object.getOwnPropertyNames(obj)
console.log(ownPropertyNames, 'Object.getOwnPropertyNames')
// 非原型，自身，symbol
const reflectOwnKeys = Reflect.ownKeys(obj)
console.log(reflectOwnKeys, 'Reflect.ownKeys')

// Proxy有13中代理方式，那么就有13中基于Reflect的反射方式
const data = {
  id: 1,
  name: 'Visionwu',
  desc: '111',
  hobites: [1, 2, 3],
  info: {
    address: '江西'
  }
}

const proxyData = new Proxy(data, {
  get: (target, name, receiver) => {
    console.log('被取值了: {}', target, name, receiver)
    return target[name]
  },
  set: (target, name, newValue, receiver) => {
    console.log('被赋值了：{}', target, name, newValue, receiver)
    if (target[name] !== newValue) {
      target[name] = newValue
    }
    return true
  },
  // 拦截属性的删除
  deleteProperty: (target, name) => {
    console.log('属性被删除了: {}', target, name)
  },
  // 拦截属性的定义，也就是Object.defineProperty
  defineProperty: (target, name, descriptor) => {
    console.log('添加一个属性', target, name, descriptor)
    return true
  },
  // for in 拦截
  has: () => {},
  // Reflect.ownKeys 拦截
  ownKeys: () => {}
})
// proxy只能代理对象的一层属性
// console.log(proxyData.id)
// proxyData.id = 2
// proxyData.c = '111'
// delete proxyData.desc

// Object.defineProperty(proxyData, 'newProps', {
//   value: 'newProps',
//   enumerable: true,
//   writable: true,
//   configurable: true
// })

console.log(proxyData.hobites[0])
