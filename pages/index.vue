<template>

    <section id="hero" class="container mx-auto mt-24 flex flex-col justify-center items-center">
        <div class="img-container before:animate-pulse">
            <img src="/logo.svg" alt="Mahmoud Youssef" width="300" height="200" class="my-10 fade-down">
        </div>
        <h1 class="text-6xl font-bold text-center fade-down" style="animation-delay: 0.1s;">Congratulations, You Found
            It!</h1>
        <p class="text-center text-2xl mt-4 fade-down" style="animation-delay: 0.2s;">All of the treasure here is
            officially yours. Use it wisely</p>
    </section>
    <section class="container mx-auto card-container pb-10 mt-56">
        <ContentList v-slot="{ list }" path="/blog">
            <ArticleCard v-for="article of list" :key="article._path"
                :link="article._path" :title="article.title" :description="article.description" :image="article.image">
            </ArticleCard>
        </ContentList>
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
#hero .img-container::before{
    content: '';
    position: absolute;
    inset: 5px;
    background: linear-gradient(120deg, theme('colors.blue.700') 0%, theme('colors.violet.700') 100%);
    border-radius: 50%;
    filter: blur(5rem);
}
</style>