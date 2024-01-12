<script setup>
defineProps({
    title: String, 
    active: {
        type: Boolean, 
        default: false,
    }
})
</script>

<template>
    <div 
    class="py-2 px-6 border rounded-[14px]"
    :class="{ 'border-theme-orange': active  ,'bg-theme-paleOrange': active, 'text-theme-orange': active, 'font-bold': active }"
    >
        {{ title }}
    </div>
</template>