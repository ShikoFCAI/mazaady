<script setup>
defineProps({
    icon: {
        type: Boolean,
        default: false,
    },
    text: String,
})
</script>

<template>
    <button class="flex items-center gap-2 px-4 py-2.5 rounded-[10px] bg-gradient-to-r from-theme-red to-theme-orange">
        <IconAdd v-if="icon" />
       <span class="font-bold text-sm text-white"> {{ text }}</span>
    </button>
</template>