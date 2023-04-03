<script setup lang="ts">
// const props = defineProps({
//   onClick: {
//     type: Function,
//     required: false,
//     default: () => {}
//   },
//   size: {
//     type: String,
//     required: false,
//     default: 'default',
//     validator: (size: string) => ['default', 'lg', 'sm'].includes(size)
//   }
// })
import { onMounted, ref, toRefs, useCssVars } from 'vue';

export interface RButtonProps {
  onClick?: () => void,
  size?: 'default' | 'sm' | 'lg',
  btnType?: 'default' | 'sm' | 'lg' | 'link',
  href?: string,
  disabled?: boolean
}

const props = withDefaults(defineProps<RButtonProps>(), {
  onClick: () => {},
  size: 'default',
  disabled: false 
})

const classes = {
  'r-button': true,
  [`r-button-${props.size}`]: !!props.size
}

const handleClick = () => {
  props.onClick()
}
</script>
<script lang="ts">
export default {
  name: 'RButton'
}
</script>

<template>
  <div
    :class="classes"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>


<style scoped lang="scss">
@import './styles';
</style>