<template>
  <main>
    <ContentDoc :path="path" />
  </main>
</template>

<script setup>
  const route = useRoute()
  const path = route.fullPath.replace("/blog", "");
</script>