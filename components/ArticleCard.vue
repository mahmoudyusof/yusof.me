<template>
    <nuxt-link :to="article.link">
        <div class="bg-gray-800/10 hover:scale-105 group transition-all relative break-inside-avoid rounded-3xl overflow-hidden border mb-3 border-violet-600">
            <img v-if="article.image" class="w-full opacity-50 group-hover:opacity-100 transition-all" :src="article.image" :alt="article.title">
            <div class=" px-5 py-3">
                <h3 class="text-3xl">{{ article.title }}</h3>
                <p>{{ article.description }}</p>
            </div>
        </div>
    </nuxt-link>
</template>

<script setup lang="ts">
type Article = {
    title: string,
    description: string,
    image?: string,
    link: string
}
const { article } = defineProps<{ article: Article }>();
</script>

<style lang="scss" scoped></style>