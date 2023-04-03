import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://juejin.cn/post/7208099384070815803
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        // 内置预设
        'vue',
        'vue-router',

        // 自定义预设
        {
          '@vueuse/core': [
            // 命名导入
            'useMouse', // import { useMouse } from '@vueuse/core'
            // 设置别名
            ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core'
          ],
          'axios': [
            // 默认导入
            ['default', 'axios'] // import { default as axios } from 'axios' 
          ],

          // 语法
          // '[package-name]': [
          //   '[import-names]',
          //   // alias
          //   ['[from]', '[alias]'],
          // ],
        },

        /**
         * example type import
         * ts的类型自动引入
         */
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true
        },
      ],
      resolvers: [ElementPlusResolver()],
      // 自动导入目录的路径
      dirs: [
        './src/hooks/**',
      ],
      /**
       * 插件会在项目根目录生成类型文件 auto-imports.d.ts ，确保该文件在 tsconfig 中被 include
       * 自动生成.d.ts文件路径，在本地安装ts后启用--这个配置就是你如果项目用了ts的话，
       * 那么你想获取预设中的api类型提示的话这个unplugin-auto-import 插件会根据预设内容，生成对应的全局类型声明
       * 有了这些全局类型声明，我们就能够像全局变量那样使用 ref 等 Vue API，不需要先 import 对应的内容，TS 编译也不会报错。
       */
      dts: true,
      // 缓存多个vite构建之间的解析结果。
      cache: true,
      // 自动导入VueTemplate
      vueTemplate: true,
      /**
       * 如果使用了 eslint，需要设置 eslintrc 字段
       * 插件会在项目根目录生成类型文件 .eslintrc-auto-import.json ，确保该文件在 eslint 配置中被 extends：
       * unplugin-auto-import 插件会根据预设内容，生成对应的 eslint 配置文件，该文件定义了 h、ref 这些为全局变量，不需要引入就能直接使用。这样 ESlint 就不会报变量没有定义的错误了。
       */
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      directoryAsNamespace: true
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
