/* eslint-disable */
const http = require('http')
const fs = require('fs')
const { resolve } = require('path')

const resolvePath = (...paths) => {
  return resolve(__dirname, ...paths)
}

/**
 * X-Frame-Options http响应头 用来控制iframe如何嵌入当前网页
 * deny: 不允许嵌入当前网页到iframe中
 * sameorigin: 只允许使用相同源的网页嵌入
 * allow-from uri 允许使用指定uri嵌入网页到iframe
 */

/**
 * https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors#syntax
 * frame-ancestors (CSP内容安全策略的指令) 用来控制哪些网页可以嵌入到指定网页中
 * 语法： Content-Security-Policy: frame-ancestors <source> <source>;
 * 'none'
 * 'self'
 * uri -- > host source http://localhost:3000
 * 'self' uri 
 * schema source
 */

/**
 * Vue3中使用VeeValidate表单校验
 * Vue3中使用immutable.js防止数据被修改 增加学习成本但是不是特别大 --> 保证系统数据安全
 */

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    // 'X-Frame-Options': 'sameorigin'
    'Content-Security-Policy': "frame-ancestors http://localhost:3000"
  })
  const homeHtml = fs.readFileSync(resolvePath('./pages/home.html'), { encoding: 'utf-8' })
  res.end(homeHtml)
})

server.listen(3000, () => {
  console.log('server is running 3000 port')
})


