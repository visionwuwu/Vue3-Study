import VResize from './v-resize'
import type { App, Directive } from 'vue'

type DirectiveNames = 'resize'

type DirectiveEntry = {
  [k in DirectiveNames]: Directive
}

const directiveEntry: DirectiveEntry = {
  resize: VResize
}

export default {
  install(app: App) {
    Object.keys(directiveEntry).forEach((key) => {
      app.directive(key, directiveEntry[key as DirectiveNames])
    })
  }
}
