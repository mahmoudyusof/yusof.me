<script setup lang="ts">
useHead({
    title: "Welcome",
    meta: [
        {
            name: 'description',
            content: 'Mahmoud Youssef\'s personal website'
        }
    ],
})

const articles = await queryContent('/blog')
    .only(['title', 'description', '_path', 'date'])
    .sort({ date: -1 })
    .limit(5)
    .find()
</script>
<template>
    <section id="hero" class="pt-56 h-screen">
        <div class="container mx-auto flex flex-col space-y-20 justify-center items-center">
            <span class="fade-down">
                <span class="glow rounded-full bg-slate-800 px-5 py-1 text-sm">
                    Version 2.0
                </span>
            </span>
            <span>
                <h1 class="text-6xl font-bold text-center fade-down" style="animation-delay: 0.1s;">Congratulations, You
                    Found
                    It!</h1>
                <p class="text-center text-2xl mt-4 fade-down" style="animation-delay: 0.2s;">All of the treasure here
                    is
                    officially yours. Use it wisely</p>
            </span>
            <div class="space-x-3 mt-10 fade-down" style="animation-delay: 0.3s;">
                <a href="#projects"
                    class="bg-gradient-to-r from-indigo-500 to-indigo-800 group transition-all text-white px-5 py-3 rounded-full hover:py-5 focus:py-5">
                    <Icon name="mdi:code-tags" size="25" />
                    Check Projects
                </a>
                <a href="#blog"
                    class="glow mt-10 bg-gradient-to-r from-slate-800 to-sky-900 group transition-all text-white px-5 py-3 rounded-full hover:py-5 focus:py-5">
                    <Icon name="mdi:document" size="25" />
                    Read Blog
                </a>
            </div>
        </div>
    </section>
    <section id="about">
        <div class="container p-10 flex flex-col xl:w-1/2 lg:w-3/4 mx-auto rounded-2xl mb-36 ">
            <h2 class="mb-6">Mahmoud Youssef</h2>
            <p class="text-lg">A junior software engineer trying to build stuff and write about them.</p>
            <p class="text-lg">Check out some of the articles I wrote in below
                <Icon name="mdi:hand-pointing-down" size="25" />
            </p>
            <p class="text-lg">You don't care but I'll write it anyways (cuz it's MY website). I like poetry
                <Icon name="mdi:feather" size="25" class="text-indigo-500" />,
                Vollyball
                <Icon name="mdi:volleyball" class="text-stone-200" size="25" />
                and maybe some leetcode
                <Icon name="cib:leetcode" class="text-yellow-500" size="25" />.
            </p>
            <p class="text-lg mt-5 border-l-4 border-slate-100 pl-3 text-gray-100">I also write <strong>poetry</strong>
                <Icon name="mdi:feather" class="text-indigo-500" size="25" /> and might dedicate a part of this website
                just for it (stay tuned)
            </p>
        </div>
    </section>
    <section class="pb-10 mt-10">
        <h2 class="mb-10 text-center text-4xl" id="blog">Blog Posts</h2>
        <div class="container mx-auto xl:w-1/2 lg:w-3/5 divide-y-2">
            <!-- <ContentList v-slot="{ list }" path="/blog">
                <ArticleCard v-for="article of list" :key="article._path" :link="article._path" :title="article.title"
                    :description="article.description" :image="article.image" :date="article.date">
                </ArticleCard>
            </ContentList> -->

            <nuxt-link v-for="article in articles" :key="article._path" :to="article._path"
                class="grid grid-cols-12 grid-rows-2 items-center gap-x-8 p-5 clickable">
                <h3 class="col-span-10 row-span-1">{{ article.title }}</h3>
                <p class="col-span-10 row-span-1">{{ article.description }}</p>
                <p class="row-start-1 row-end-3 col-start-11 col-end-13 self-center border-l-2 border-white pl-5">
                    {{ new Date(article.date).toDateString() }}
                </p>
            </nuxt-link>
        </div>
    </section>

    <section class="mt-10">
        <h2 class="mb-10 text-center text-4xl" id="projects">Projects</h2>
        <div class="container mx-auto grid grid-cols-2 gap-5">
            <ArticleCard link="/projects/mnist-generator" title="MNIST Generator"
                description="Generate MNIST digits using a GAN model" image="/mnist.png" />
            <ArticleCard link="/projects/sorting-visualizer" title="Sorting Visualizer"
                description="Visualize sorting algorithms in action" image="/sorting.png" />
        </div>

    </section>
</template>

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

.clickable {
    position: relative;
}

.clickable::before, .clickable::after {
    content: '';
    position: absolute;
    transform-origin: top left;
    top: 0;
    bottom: 0;
    border-radius: inherit;
    opacity: 0;
    transition: all 0.3s ease-in-out;
}

.clickable::before {
    right: 80%;
    left: 0;
    background: linear-gradient(to right, theme('colors.violet.800'), transparent) /*#2225*/;
}

.clickable::after {
    left: 80%;
    right: 0;
    background: linear-gradient(to left, theme('colors.violet.800'), transparent) /*#2225*/;
}

.clickable:hover::before, .clickable:hover::after,
.clickable:focus::before, .clickable:focus::after {
    opacity: 1;
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
    /* background: linear-gradient(120deg, theme('colors.blue.700') 0%, theme('colors.cyan.700') 100%); */
    background-color: white;
    border-radius: 50%;
    opacity: 0.3;
    filter: blur(5rem);
}

#about {
    position: relative;
}

#about::before,
#about::after {
    content: '';
    opacity: 0.8;
    /* @apply backdrop-blur-3xl backdrop-brightness-110 backdrop-saturate-200; */
    position: absolute;
    inset: -50px 0;
    z-index: -1;
    filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.6)) blur(0.1rem);
}

#about::before {
    --initialY: -80px;
    --finalY: 80px;
    --skew-deg: -4deg;
    transform: translateY(var(--initialY)) skewY(var(--skew-deg));
    background: linear-gradient(-120deg, theme('colors.sky.600'), theme('colors.indigo.700'), theme('colors.purple.800'));
    animation: linear paralax forwards;
    animation-timeline: view();
}

#about::after {
    --initialY: 80px;
    --finalY: -80px;
    --skew-deg: 3deg;
    background: linear-gradient(120deg, theme('colors.sky.600'), theme('colors.indigo.500'), theme('colors.purple.400'));
    transform: translateY(var(--initialY)) skewY(var(--skew-deg));
    animation: linear paralax forwards;
    animation-timeline: view();
}

@keyframes paralax {
    0% {
        transform: translateY(var(--initialY)) skewY(var(--skew-deg));
    }

    100% {
        transform: translateY(var(--finalY)) skewY(var(--skew-deg));
    }
}

.glow {
    position: relative;
}

.glow::after,
.glow::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: conic-gradient(from var(--gradient-angle),
            theme('colors.purple.800'),
            theme('colors.sky.500'),
            transparent,
            theme('colors.teal.800'),
            theme('colors.sky.500'),
            transparent,
            transparent,
            theme('colors.purple.800'));
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