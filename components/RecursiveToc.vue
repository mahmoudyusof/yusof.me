<template>
    <ul>
        <li v-for="link in links" :key="link.id">
            <nuxt-link active-class="text-white" class="hover:underline text-slate-200 hover:text-white"
                :href="`#${link.id}`">{{ link.text }}</nuxt-link>
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
const { links } = defineProps<{ links: Link[] }>();

</script>
