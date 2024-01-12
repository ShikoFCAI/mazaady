<script setup>
const pages = ref([
    {
        name: "Home",
        active: true,
    },
    {
        name: "Blog",
        active: false,
    },
    {
        name: "Gifts",
        active: false,
    },
])
</script>

<template>
    <div class="flex items-center gap-2 lg:gap-10">
        <IconBurger class="lg:hidden" />
        <IconMain />
        <NavAtomPage class="max-lg:hidden" v-for="page in pages" :name="page.name" :active="page.active" />
    </div>
</template>