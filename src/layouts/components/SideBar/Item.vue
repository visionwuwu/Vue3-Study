<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { title, icon } = toRefs(props)
    const vnodes: any[] = []
    if (icon.value) {
      vnodes.push(<el-icon class={['sub-el-icon']}>{h(resolveComponent(icon.value))}</el-icon>)
    }

    if (title.value) {
      vnodes.push(<span>{title.value}</span>)
    }
    return () => <>{vnodes.map((node) => node)}</>
  }
})
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1rem !important;
  height: 1rem !important;
}
</style>
