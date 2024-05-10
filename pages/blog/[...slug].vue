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
  <div id="article" class="container mx-auto py-10 bg-slate-800 p-10 rounded-3xl my-10">
    <ContentDoc />
  </div>
</template>

<style>
#article code, #article pre {
    @apply bg-gray-950 text-white p-1 rounded px-5;
}

#article code {
    @apply inline;
}

#article p{
    @apply my-4 text-xl;
}

#article hr {
    @apply my-8 rounded-full;
}
</style>
