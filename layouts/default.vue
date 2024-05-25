<template>
    <nav :class="`bg-black/5 flex fixed top-0 py-2 left-0 w-full backdrop-blur-3xl z-50
        backdrop-brightness-110 backdrop-saturate-200 justify-between px-16 align-middle`">
        <div id="logo" class="flex gap-8 justify-center items-center">
            <nuxt-link to="/">
                <nuxt-img src="/MJLogo.svg" alt="MJ Logo" width="90" height="60" />
            </nuxt-link>
        </div>
        <div class="flex items-center space-x-3">
            <nuxt-link active-class="text-white" to="/" aria-label="Home">
                <Icon name="uil:home-alt" size="25" />
            </nuxt-link>
            <a target="_blank" href="https://twitter.com/mahmoudyusof" aria-label="twitter">
                <Icon name="fa6-brands:x-twitter" size="25" />
            </a>
            <a target="_blank" href="https://stackoverflow.com/users/9979796/mahmoud-youssef"
                aria-label="stackoverflow">
                <Icon name="fa6-brands:stack-overflow" size="25" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/mahmoud-yusof-a39ab5151/" aria-label="linkedin">
                <Icon name="fa6-brands:linkedin-in" size="25" />
            </a>
            <a target="_blank" href="mailto:mahmoud.yusof27@gmail.com" aria-label="mail">
                <Icon name="fa:envelope-o" size="25" />
            </a>
        </div>
    </nav>
    <div class="pt-16">
        <slot />
    </div>
    <footer class="bg-black py-8 mt-5 gap-4 text-white flex flex-col justify-center items-center">
        <p class="">&copy; 2024 Designed and Created by ... well, you can guess</p>
        <div class="space-x-2">
            <a class="text-gray-400 hover:text-white transition-colors" aria-label="Twitter @mahmoudyusof" target="_blank"
                href="https://twitter.com/mahmoudyusof">
                <Icon name="fa6-brands:x-twitter" class="mr-2" size="25" />
            </a>
            <a class="text-gray-400 hover:text-white transition-colors" aria-label="Stackoverflow 9979796/mahmoud-youssef" target="_blank"
                href="https://stackoverflow.com/users/9979796/mahmoud-youssef">
                <Icon name="mdi:stack-overflow" class="mr-2" size="25" />
            </a>
            <a class="text-gray-400 hover:text-white transition-colors" aria-label="Linkedin mahmoud-yusof-a39ab5151" target="_blank"
                href="https://www.linkedin.com/in/mahmoud-yusof-a39ab5151/">
                <Icon name="fa6-brands:linkedin-in" class="mr-2" size="25" />
            </a>
            <a class="text-gray-400 hover:text-white transition-colors" aria-label="email mahmoud.yusof27@gmail.com" href="mailto:mahmoud.yusof27@gmail.com">
                <Icon name="fa:envelope-o" class="mr-2" size="25" />
            </a>
        </div>
    </footer>
</template>