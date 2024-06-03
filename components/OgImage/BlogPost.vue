<script setup lang="ts">
const {title, logo, description} = withDefaults(defineProps<{
  title?: string
  logo?: string,
  description?: string,
  tags?: string[]
}>(), {
  title: 'title',
  logo: 'https://nuxt.com/assets/design-kit/logo-white.png',
})

const MAX_LENGTH = 100;

const computedDescription = computed(() => {
    if(!description || description.length < MAX_LENGTH) {
        return description;
    }
    let lastSpaceIndex = description.indexOf(" ", MAX_LENGTH);
    if(lastSpaceIndex === -1) {
        return description;
    }
    return description.substring(0, lastSpaceIndex) + "...";
})

</script>

<template>
  <div
    :style="{ backgroundImage: 'radial-gradient(ellipse farthest-side at top left, #302b63, #0f0c29)' }"
    class="h-full w-full flex items-start justify-start"
  >
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full p-20">
        <img :src="logo" height="100">
        <div class="text-white">
            <h1 class="text-[60px] mb-4 font-bold text-left">
              {{ title }}
            </h1>
            <p class="text-4xl" v-if="description">{{ computedDescription }}</p>
        </div>
        <span class="mt-4">
            <span class="border mx-1 border-violet-300 text-violet-300 bg-transparent rounded-full px-5 py-1 text-2xl" v-for="tag in tags">{{ tag }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
