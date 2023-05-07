<template>
  <div>
    <input
      type="text"
      :value="innerVal"
      @input="emitValue($event, 'input')"
      @change="emitValue($event, 'change')"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  // arg + Modifiers
  titleModifiers: { default: () => ({}) }
})
const emit = defineEmits(['update:title'])

console.log(props, '====')

function emitValue(e: Event, eventType: string) {
  const value = (e.target as any).value
  innerVal.value = value

  if (props.titleModifiers.lazy && eventType === 'change') {
    emit('update:title', value)
  }

  if (!props.titleModifiers.lazy && eventType === 'input') {
    emit('update:title', value)
  }
}

const innerVal = ref(props.title)
</script>

<style scoped></style>
