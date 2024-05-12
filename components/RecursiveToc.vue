<template>
    <ul>
        <li v-for="link in links" :key="link.id">
        <a :href="`#${link.id}`">{{ link.text }}</a>
        <RecursiveToc v-if="link.children" :links="link.children" />
        </li>
    </ul>
</template>

<script setup lang="ts">
type Link = {
    id: string,
    text: string,
    depth: number,
    children?: Link[]
}
const {links} = defineProps<{ links: Link[]}>();

</script>
