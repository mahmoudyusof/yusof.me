<template>
    <div class="bg-zinc-900 border border-zinc-500 rounded-lg my-2">
        <div v-if="$props.filename" class="flex justify-between rounded-t-lg bg-indigo-950 border-b-zinc-500 border-b p-3">
            <span>{{ $props.filename }}</span>
            <span>{{ $props.language }}</span>
        </div>
        <pre :class="`p-5 ${$props.class}`"><slot /></pre>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
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
