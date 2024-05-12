<template>
    <nav :class="`bg-black/5 flex fixed top-0 py-2 left-0 w-full backdrop-blur-3xl z-50
        backdrop-brightness-110 backdrop-saturate-200 justify-between px-16 align-middle`">
        <div id="logo" class="flex gap-8 justify-center items-center">
            <nuxt-link to="/">
                <img src="/logo.svg" alt="Nuxt Logo" width="90" height="60" />
            </nuxt-link>
        </div>
        <div class="flex items-center space-x-3">
            <nuxt-link active-class="text-white" to="/">
                <Icon name="uil:home-alt" size="25" />
            </nuxt-link>
            <a target="_blank" href="https://twitter.com/mahmoudyusof">
                <Icon name="fa6-brands:x-twitter" size="25" />
            </a>
            <a target="_blank" href="https://stackoverflow.com/users/9979796/mahmoud-youssef">
                <Icon name="fa6-brands:stack-overflow" size="25" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/mahmoud-yusof-a39ab5151/">
                <Icon name="fa6-brands:linkedin-in" size="25" />
            </a>
            <a target="_blank" href="mailto:mahmoud.yusof27@gmail.com">
                <Icon name="fa:envelope-o" size="25" />
            </a>
        </div>
    </nav>
    <div class="pt-16">
        <slot />
    </div>
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