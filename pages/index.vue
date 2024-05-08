<template>
    <div>
        <ContentNavigation v-slot="{ navigation }">
            <ul>
                <li v-for="link of navigation" :key="link._path">
                    <NuxtLink v-if="!link.children" :to="`${link._path}`">{{ link.title }}</NuxtLink>
                    <ul v-else>
                        <li v-for="subLink of link.children" :key="subLink._path">
                            <NuxtLink :to="`${subLink._path}`">{{ subLink.title }}</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
            <pre>{{ navigation }}</pre>
        </ContentNavigation>
    </div>
</template>

<script setup>

</script>
