<template>

    <section id="hero" class="container mx-auto mt-24 flex flex-col justify-center items-center">
        <img src="/logo.svg" alt="Mahmoud Youssef" width="300" height="200" class="my-10 fade-down">
        <h1 class="text-6xl font-bold text-center fade-down" style="animation-delay: 0.1s;">Congratulations, You Found
            It!</h1>
        <p class="text-center text-2xl mt-4 fade-down" style="animation-delay: 0.2s;">All of the treasure here is
            officially yours. Use it wisely</p>
    </section>
    <section class="columns-2 md:columns-3 container mx-auto space-y-3 mt-56">
        <ContentList v-slot="{ list }" path="/blog">
            <ArticleCard v-for="article of list" :key="article._path"
                :article="{ link: article._path, title: article.title, description: article.description, image: article.image }">
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
</style>