<script setup>
defineProps({
    name: String,
    active: Boolean
})
</script>

<template>
    <a href="" class="relative text-[#828282] text-lg" :class="{ 'text-theme-red': active, 'font-bold': active }">
        {{ name }}
    </a>
</template>

<style scoped>
.frame {
    border-radius: 8px 8px 0px 0px;
}
</style>