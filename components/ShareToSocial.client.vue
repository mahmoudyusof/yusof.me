<template>
      <div class="border-r border-double border-gray-300 pt-4 lg:col-span-1 lg:flex lg:justify-end hidden">
        <span class="sticky h-fit space-y-4 top-28 px-5 flex flex-col items-end text-xl">
          <span class="text-2xl mb-5">Share</span>
          <Icon name="mdi:link-variant" size="30" class="cursor-pointer" @click="handleCopy" />
          <a :href="tweetUrl.toString()" target="_blank">
            <Icon name="fa6-brands:x-twitter" size="30" />
          </a>
          <!-- <a :href="linkedInUrl.toString()" target="_blank">
            <Icon name="fa6-brands:linkedin-in" size="25" />
          </a> -->
          <Icon name="mdi:share-variant" size="30" @click="handleShare" class="cursor-pointer" />
        </span>
        <Teleport to="body">
            <Transition name="toast">
                <div v-if="showToast" class="fixed top-28 left-5 text-violet-500 px-10 py-5 border border-violet-500 z-30 ">
                    <span>Copied to clipboard</span>
                </div>
            </Transition>
        </Teleport>
      </div>
</template>

<script setup lang="ts">
let base = useSiteConfig().url;
base = base.endsWith('/') ? base.slice(0, -1) : base;
const {title, fullPath} = defineProps<{title: string, fullPath: string}>();

const tweetUrl = new URL('https://twitter.com/intent/tweet');
tweetUrl.searchParams.append('text', `${title}\n${base}${fullPath}`);

// const linkedInUrl = new URL('https://www.linkedin.com/shareArticle');
// linkedInUrl.searchParams.append('url', `${base}${fullPath}`);
// linkedInUrl.searchParams.append('title', title);
const showToast = ref(false);


const handleCopy = () => {
    navigator.clipboard.writeText(`${base}${fullPath}`);
    showToast.value = true;
    setTimeout(() => {
        showToast.value = false;
    }, 2000);
}

const handleShare = () => {
    if(navigator.share) {
        navigator.share({
            title,
            url: `${base}${fullPath}`
        });
    } else {
        handleCopy();
    }
}

</script>

<style>
.toast-enter-active,
.toast-leave-active {
  transition: left 0.5s linear;
}

.toast-enter-from,
.toast-leave-to {
  left: -100%;
}
</style>