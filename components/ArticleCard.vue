<template>
    <div
        class="glow bg-gray-800 group transition-all mb-3 relative break-inside-avoid rounded-3xl border border-violet-600">
        <nuxt-link :to="article.link">
            <div class="bg-gray-800 rounded-3xl">
                <img v-if="article.image" class="w-full rounded-t-3xl transition-all"
                    :src="article.image" :alt="article.title">
                <h3 class="px-5 py-3 text-3xl">{{ article.title }}</h3>
                <p class="px-5 py-3">{{ article.description }}</p>
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
const { article } = defineProps<{ article: Article }>();
</script>

<style>
@property --gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

.glow {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 100%;
    height: fit-content;
}

.glow::after,
.glow::before {
    inset: -5px;
    content: '';
    position: absolute;
    /* background: conic-gradient(from var(--gradient-angle),
    theme('colors.violet.500'),
    theme('colors.teal.500'),
    theme('colors.violet.950'),
    theme('colors.teal.500'),
    theme('colors.violet.500')); */
    background: conic-gradient(from var(--gradient-angle), transparent 0%, theme('colors.violet.400') 1%, transparent 10%, transparent 19%, theme('colors.violet.400') 20%, transparent 30%);
    animation: linear infinite 7s rotation;
    break-inside: avoid;
    z-index: -1;
    @apply rounded-3xl break-inside-avoid break-before-avoid break-after-avoid;
}

.glow::after {
    filter: blur(3.5rem);
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