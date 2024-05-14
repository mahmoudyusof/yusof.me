<template>
    <div
        class="shine h-full bg-gray-800 group opacity-75 hover:opacity-100 hover:scale-105 transition-all relative rounded-3xl border border-slate-600">
        <nuxt-link :to="article.link" class="block h-full">
            <div class="bg-gray-800 rounded-3xl flex h-full">
                <nuxt-img v-if="article.image" class="w-full rounded-l-3xl transition-all max-w-56" width="224" :src="article.image"
                    :alt="article.title" />
                <div class="flex flex-col justify-evenly px-6 py-3">

                    <h3 class="text-3xl">{{ article.title }}</h3>
                    <p class="">{{ article.description }}</p>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
type Article = {
    title: string,
    description: string,
    image?: string,
    link: string
}
const article = defineProps<Article>();
</script>

<style>
@property --gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.shine {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 100%;
}

.shine::after,
.shine::before {
    inset: -2px;
    content: '';
    position: absolute;
    background: conic-gradient(from var(--gradient-angle), transparent 0%, theme('colors.violet.400') 1%, transparent 10%, transparent 19%, theme('colors.violet.400') 20%, transparent 30%);
    animation: linear infinite 7s rotation;
    break-inside: avoid;
    z-index: -1;
    @apply rounded-3xl break-inside-avoid break-before-avoid break-after-avoid;
}

.shine::after {
    filter: blur(3rem);
}

@keyframes rotation {
    0% {
        --gradient-angle: 360deg;
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        --gradient-angle: 0deg;
    }
}
</style>