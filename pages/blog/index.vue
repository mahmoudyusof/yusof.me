<template>
    <div class="min-h-screen flex flex-col mp-10 justify-center bg-slate-900 z-20 relative">
        <h1 class="mb-10 text-center text-4xl" id="blog">Blog Posts</h1>
        <div class="container mx-auto xl:w-1/2 lg:w-3/5 divide-y-2">
            <nuxt-link v-for="article in articles" :key="article._path" :to="article._path"
                class="grid grid-cols-12 grid-rows-2 items-center gap-x-8 p-5 clickable">
                <h3 class="col-span-10 row-span-1">{{ article.title }}</h3>
                <p class="col-span-10 row-span-1">{{ article.description }}</p>
                <p class="row-start-1 row-end-3 col-start-11 col-end-13 self-center border-l-2 border-white pl-5">
                    {{ new Date(article.date).toDateString() }}
                </p>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">
const articles = await queryContent('/blog')
    .only(['title', 'description', '_path', 'date'])
    .sort({ date: -1 })
    .find()
</script>

<style scoped>

</style>