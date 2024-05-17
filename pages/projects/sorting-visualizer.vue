<template>
    <div class="container mx-auto min-h-screen flex flex-col justify-evenly">
        <SortingElementContainer />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Sorting Visualizer',
    meta: [
        {
            name: 'description',
            content: 'A visualizer for sorting algorithms'
        },
        {
            name: 'og:title',
            content: 'Sorting Visualizer'
        },
        {
            name: 'og:description',
            content: 'A visualizer for sorting algorithms'
        },
        {
            name: 'og:image',
            content: '/sorting.png'
        },
        {
            name: 'og:url',
            content: 'https://mahmoudyusof.com/projects/sorting-visualizer'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'Sorting Visualizer'
        },
        {
            name: 'twitter:description',
            content: 'A visualizer for sorting algorithms'
        },
        {
            name: 'twitter:image',
            content: '/sorting.png'
        }
    ]
})
</script>