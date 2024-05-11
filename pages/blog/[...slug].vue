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
      <div class="bg-slate-800 p-10 rounded-3xl col-span-4">
        <ContentRenderer :value="doc" />
      </div>
      <div class="bg-slate-800 py-10 rounded-3xl col-span-1">
        <ul class=" sticky top-24">
          <li v-for="link in doc.body.toc.links" :key="link.id">
            <a :href="`#${link.id}`">{{ link.text }}</a>
            <ul v-if="link.children">
              <li v-for="child in link.children" :key="`${link.id}-${child.id}`">
                <a :href="`#${child.id}`">{{ child.text }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </ContentDoc>
  </div>
</template>

<style>
#article code,
#article pre {
  @apply bg-gray-950 text-white p-1 rounded px-5 text-wrap;
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
</style>
