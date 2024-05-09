<template>
    <nav style="background-color: rgba(0,0,0,0.01)"
        class="flex fixed top-0 py-2 left-0 w-full backdrop-blur-3xl z-50 backdrop-brightness-110 backdrop-saturate-200 justify-between px-16 align-middle">
        <div id="logo" class="flex gap-8 justify-center items-center">
            <img src="/logo.svg" alt="Nuxt Logo" width="90" height="60" />
        </div>
        <div class="flex items-center space-x-3">
            <nuxt-link active-class="text-white" to="/">
                <Icon name="uil:home-alt" size="25" />
            </nuxt-link>
            <a href="https://twitter.com/mahmoudyusof">
                <Icon name="fa6-brands:x-twitter" size="25" />
            </a>
            <a href="https://stackoverflow.com/users/9979796/mahmoud-youssef">
                <Icon name="fa6-brands:stack-overflow" size="25" />
            </a>
            <a href="https://www.linkedin.com/in/mahmoud-yusof-a39ab5151/">
                <Icon name="fa6-brands:linkedin-in" size="25" />
            </a>
            <a href="mailto:mahmoud.yusof27@gmail.com">
                <Icon name="fa:envelope-o" size="25" />
            </a>
        </div>
    </nav>
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
    <footer class="bg-black text-white">

        <div class="container mx-auto py-8">
            <div class="grid grid-cols-3">
                <div class="mb-5">
                    <p class="text-sm text-gray-400 mb-5">Social Media</p>
                    <div class="flex flex-col space-y-5">
                        <a class="text-gray-400 hover:text-white transition-colors" target="_blank"
                            href="https://twitter.com/mahmoudyusof">
                            <Icon name="fa6-brands:x-twitter" class="mr-2" size="25" />
                            @mahmoudyusof
                        </a>
                        <a class="text-gray-400 hover:text-white transition-colors" target="_blank"
                            href="https://stackoverflow.com/users/9979796/mahmoud-youssef">
                            <Icon name="mdi:stack-overflow" class="mr-2" size="25" />
                            mahmoud-youssef
                        </a>
                        <a class="text-gray-400 hover:text-white transition-colors" target="_blank"
                            href="https://www.linkedin.com/in/mahmoud-yusof-a39ab5151/">
                            <Icon name="fa6-brands:linkedin-in" class="mr-2" size="25" />
                            mahmoud-yusof
                        </a>
                    </div>
                </div>
                <div>
                    <p class="text-sm text-gray-400 mb-5">Contact Me</p>
                    <div class="flex flex-col space-y-5">
                        <a class="text-gray-400 hover:text-white transition-colors"
                            href="mailto:mahmoud.yusof27@gmail.com">
                            <Icon name="fa:envelope-o" class="mr-2" size="25" />
                            mahmoud.yusof27@gmail.com
                        </a>
                        <a @click.prevent class="text-gray-400 hover:text-white transition-colors" href="#">
                            <Icon name="mdi:phone" class="mr-2" size="25" />
                            +20 111 601 0514
                        </a>
                    </div>
                </div>
            </div>
            <p class="">&copy; 2024 Designed and Created by ... well, you can guess</p>
        </div>
    </footer>
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