<template>
    <div>
        <Suspense>
            <AppMnistGenerator />
        </Suspense>
    </div>
</template>

<script setup lang="ts">
    useHead({
        title: 'MNIST Image Generator',
        meta: [
            {
                name: 'description',
                content: 'Generate MNIST digits using a GAN model running on the client side'
            },
            {
                name: 'og:title',
                content: 'MNIST Image Generator'
            },
            {
                name: 'og:description',
                content: 'Generate MNIST digits using a GAN model running on the client side'
            },
            {
                name: 'og:image',
                content: '/mnist.png'
            },
            {
                name: 'og:url',
                content: 'https://mahmoudyusof.com/projects/mnist-generator'
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:title',
                content: 'MNIST Image Generator'
            },
            {
                name: 'twitter:description',
                content: 'Generate MNIST digits using a GAN model running on the client side'
            },
            {
                name: 'twitter:image',
                content: '/mnist.png'
            }
        ]
    })
</script>
