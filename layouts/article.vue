<template>
    <div id="article" class="container mx-auto py-10">
        <slot />
    </div>
</template>

<script setup lang="ts">
</script>

<style>
#article code, #article pre {
    @apply bg-gray-800 text-white p-1 rounded px-5;
}

#article code {
    @apply inline;
}

#article p{
    @apply my-4 text-xl;
}

#article hr {
    @apply my-8 rounded-full;
}
</style>