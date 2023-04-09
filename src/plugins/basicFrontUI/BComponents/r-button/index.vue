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
export interface RButtonProps {
  onClick?: () => void
  size?: 'default' | 'sm' | 'lg'
  btnType?: 'primary' | 'default' | 'info' | 'warning' | 'danger' | 'success' | 'link'
  href?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<RButtonProps>(), {
  onClick: () => {},
  size: 'default',
  btnType: 'default',
  disabled: false
})

const classes = {
  'r-button': true,
  [`r-button-${props.size}`]: !!props.size,
  [`r-button-${props.btnType}`]: !!props.btnType,
  'is-disabled': props.disabled
}

const handleClick = () => {
  props.onClick()
}
const RButtonAttrs = {
  class: classes,
  disabled: props.disabled
}
</script>
<script lang="ts">
export default {
  name: 'RButton'
}
</script>

<template>
  <button v-if="props.btnType !== 'link'" v-bind="RButtonAttrs" @click="handleClick">
    <slot></slot>
  </button>
  <a v-else :href="props.href" :class="classes">
    <slot></slot>
  </a>
</template>
