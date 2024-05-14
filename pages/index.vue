<script setup lang="ts">
useHead({
    meta: [
        {
            name: 'description',
            content: 'Mahmoud Youssef\'s personal website'
        }
    ],
})
</script>
<template>
    <section id="hero" class="container mx-auto mt-24 flex flex-col justify-center items-center">
        <div class="img-container">
            <nuxt-img src="/logo.svg" alt="Mahmoud Youssef" width="300" height="200" class="my-10 fade-down" />
        </div>
        <h1 class="text-6xl font-bold text-center fade-down" style="animation-delay: 0.1s;">Congratulations, You Found
            It!</h1>
        <p class="text-center text-2xl mt-4 fade-down" style="animation-delay: 0.2s;">All of the treasure here is
            officially yours. Use it wisely</p>
    </section>
    <section class="container p-10 flex flex-col xl:w-1/2 lg:w-3/4 mx-auto rounded-2xl my-36 glow bg-slate-800">
        <h2 class="mb-6">Mahmoud Youssef</h2>
        <p class="text-lg">A junior software engineer trying to build stuff and write about them.</p>
        <p class="text-lg">Check out some of the articles I wrote in below <Icon name="mdi:hand-pointing-down" size="25" /></p>
        <p class="text-lg">You don't care but I'll write it anyways (cuz it's MY website). I like poetry<Icon name="mdi:feather" size="25" class="text-emerald-500" />,
            Vollyball <Icon name="mdi:volleyball" class="text-blue-500" size="25" />
            and maybe some leetcode <Icon name="cib:leetcode" class="text-yellow-500" size="25" />.
        </p>
        <p class="text-lg mt-5 border-l-4 border-slate-500 pl-3 text-gray-400">I also write <strong>poetry</strong> <Icon name="mdi:feather" class="text-emerald-500" size="25" /> and might dedicate a part of this website just for it (stay tuned)</p>
    </section>
    <section class="pb-10 mt-10">
        <h2 class="mb-10 text-center text-4xl">Blog Posts</h2>
        <div class="container mx-auto card-container">
            <ContentList v-slot="{ list }" path="/blog">
                <ArticleCard v-for="article of list" :key="article._path" :link="article._path" :title="article.title"
                    :description="article.description" :image="article.image">
                </ArticleCard>
            </ContentList>
        </div>
    </section>

    <section class="mt-10">
        <h2 class="mb-10 text-center text-4xl">Projects</h2>
        <div class="container mx-auto">
            <nuxt-link to="/projects/mnistGenerator">Mnist Generator</nuxt-link>
        </div>

    </section>
</template>

<script setup>

</script>
<style>
@keyframes fadeDown {
    0% {
        transform: translateY(-30px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.fade-down {
    transform: translateY(-30px);
    opacity: 0;
    animation: 0.8s ease-in-out 1 fadeDown forwards;

}

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    gap: 1rem;
}

#hero .img-container {
    position: relative;
}

#hero .img-container::before {
    content: '';
    position: absolute;
    inset: 5px;
    /* background: linear-gradient(120deg, theme('colors.blue.700') 0%, theme('colors.violet.700') 100%); */
    background-color: white;
    border-radius: 50%;
    opacity: 0.3;
    filter: blur(5rem);
}

.glow {
    position: relative;
}
.glow::after, .glow::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: conic-gradient(from var(--gradient-angle),
    theme('colors.violet.400'),
    theme('colors.gray.200'),
    theme('colors.teal.500'),
    theme('colors.gray.200'),
    theme('colors.violet.400'));
    animation: linear infinite 7s rotation-opace;
    z-index: -1;
    border-radius: inherit;
}

.glow::after {
    filter: blur(2rem);
}

@keyframes rotation-opace {
    0% {
        --gradient-angle: 360deg;
    }

    100% {
        --gradient-angle: 0deg;
    }
}
</style>