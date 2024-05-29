<template>
    <div class="border border-zinc-500 bg-zinc-900 rounded-lg">
        <div v-if="$props.filename" class="p-3 border-b flex justify-between border-zinc-500 text-white rounded-t-lg">
            <span>
                <Icon name="mdi:file" size="20" class="text-yellow-200" />
                {{ $props.filename }}
            </span>
            <Icon @click="() => console.log('hello')" name="fa:copy" size="20" class="ml-2" />
        </div>
        <pre :class="`${$props.class} p-5`"><slot /></pre>
    </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})
</script>

<style>
pre code .line {
  display: block;
}
</style>