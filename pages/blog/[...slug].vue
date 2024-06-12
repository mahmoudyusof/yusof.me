<script setup>

const route = useRoute();
const { data: page } = await useAsyncData('my-page', queryContent(route.fullPath).findOne)

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg',
      href: '/favicon.svg'
    }
  ],
})

defineOgImageComponent('BlogPost', {
  logo: '/logo-white.svg'
})

useSeoMeta({
  ogTitle: page.value.title,
  title: page.value.title,
  twitterTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
  twitterDescription: page.value.description,
  // ogImage: page.value.image,
  // twitterImage: page.value.image,
  ogUrl: page.value.url,
  twitterUrl: page.value.url,
  ogType: page.value.type,
  twitterCard: page.value.type,
})


</script>
<template>
  <div id="article" class=" border-gray-50 border-t border-b bg-zinc-950 grid grid-cols-5">
    <ShareToSocial :title="page.title" :fullPath="route.fullPath"  />
    <article class="p-10 lg:col-span-3 col-span-5">
      <ContentRenderer :value="page" />
    </article>
    <div class="border-l border-double border-gray-300 pt-4 lg:col-span-1 lg:block hidden">
      <span class="sticky top-28">
        <RecursiveToc v-if="page.body?.toc" :links="page.body.toc.links" />
      </span>
    </div>
  </div>
</template>

<style>
#article p {
  @apply my-4 text-lg;
}

article {
  font-size: 1.25rem;
}

#article hr {
  @apply my-8 rounded-full;
}

#article blockquote {
  @apply bg-gray-800 px-4 py-3 my-8 border-l-4 border-indigo-500 text-gray-300;

}

#article blockquote>p {
  font-size: inherit;
}

#article p>code {
  @apply bg-zinc-600 italic text-white px-2 py-0.5 rounded;
}

article p a,
article li a {
  @apply text-indigo-300 underline;
}

article p a:hover,
article li a:hover {
  @apply text-indigo-500;
  text-decoration: none;
}


#article :is(h1, h2, h3, h4, h5, h6) {
  @apply font-bold my-5;
}

#article :is(h1, h2, h3, h4, h5, h6)::before {
  content: '#';
  color: theme('colors.indigo.500');
  font-weight: lighter;
  @apply mb-3 mt-2 mr-3;
}
</style>
