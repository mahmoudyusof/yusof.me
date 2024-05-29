<script setup lang="ts">
useHead({

  link: [
    {
      rel: 'icon',
      type: 'image/svg',
      href: 'http://localhost:3000/favicon.svg'
    }
  ]
})

defineOgImageComponent('pergel', {
  headline: 'Welcome to my blog',
})
</script>
<template>
  <div id="article" class="container mx-auto my-10 grid grid-cols-5 gap-4">
    <ContentDoc v-slot="{ doc }">
      <article class="bg-slate-900 p-10 rounded-lg shadow-2xl shadow-gray-950 lg:col-span-4 col-span-5">
        <ContentRenderer :components="{}" :value="doc" />
      </article>
      <div class="bg-slate-900 py-10 rounded-lg shadow-2xl shadow-gray-950 lg:col-span-1 lg:block hidden">
        <span class="sticky top-24">
          <RecursiveToc v-if="doc.body?.toc?.links" :links="doc.body?.toc?.links" />
        </span>
      </div>
    </ContentDoc>
  </div>
</template>

<style>
#article p {
  @apply my-4 text-lg;
}

#article hr {
  @apply my-8 rounded-full;
}

#article blockquote {
  @apply bg-gray-800 px-4 py-3 my-8 border-l-4 border-indigo-500 text-gray-300;

}

#article blockquote > p {
  font-size: inherit;
}

article p a, article li a{
  @apply text-indigo-300 underline;
}

article p a:hover, article li a:hover{
  @apply text-indigo-500;
  text-decoration: none;
}


#article :is(h1, h2, h3, h4, h5, h6)::before {
  content: '#';
  color: theme('colors.indigo.500');
  font-weight: lighter;
  @apply mb-3 mt-2 mr-3;
}
</style>
