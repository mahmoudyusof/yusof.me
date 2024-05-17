<script setup>
useHead({

  link: [
    {
      rel: 'icon',
      type: 'image/svg',
      href: 'http://localhost:3000/favicon.svg'
    }
  ]
})
</script>
<template>
  <div id="article" class="container mx-auto my-10 grid grid-cols-5 gap-4">
    <ContentDoc v-slot="{ doc }">
      <article class="bg-slate-800 p-10 rounded-3xl col-span-4">
        <ContentRenderer :value="doc" />
      </article>
      <div class="bg-slate-800 py-10 rounded-3xl col-span-1">
        <span class="sticky top-24">
          <RecursiveToc :links="doc.body.toc.links" />
        </span>
      </div>
    </ContentDoc>
  </div>
</template>

<style>
#article code,
#article pre {
  @apply bg-black text-white p-1 rounded px-5 text-wrap;
}

#article code {
  @apply inline;
}

#article p {
  @apply my-4 text-xl;
}

#article hr {
  @apply my-8 rounded-full;
}

#article :is(h1, h2, h3, h4, h5, h6)::before {
  content: '# ';
  color: theme('colors.emerald.500');
  font-weight: lighter;
  @apply mb-3 mt-2;
}
</style>
