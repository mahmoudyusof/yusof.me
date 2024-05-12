<template>
    <ul>
        <li v-for="link in links" :key="link.id">
        <a :href="`#${link.id}`">{{ link.text }}</a>
        <RecursiveToc v-if="link.children" :links="link.children" />
        </li>
    </ul>
</template>

<script setup lang="ts">
const {links} = defineProps<{ links: any[]}>();
</script>
