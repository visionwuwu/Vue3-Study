/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    /**
     * Vue组件命名要用多个单词命名eslint才不会报错比如：好的例子：todo-item TodoItem 坏的例子：Todoitem Sidebar todo
     * 一般会用用文件名作为组件命名比如：Item.vue --> name: Item
     */
    'vue/multi-word-component-names': ['error', {
      'ignores': ['Sidebar', 'Item', 'Layouts', 'Link', 'Logo', 'Navbar'] // 忽略校验得名称
    }]
  }
}
