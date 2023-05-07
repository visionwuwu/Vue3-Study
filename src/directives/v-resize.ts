import useResize from '../hooks/useResize'
import type { ObjectDirective } from 'vue'

export default {
  mounted(el, binding) {
    const { value } = binding
    useResize(el, value)
  }
} as ObjectDirective
