<script setup>
defineProps({
    stat: String,
    extra: String,
    title: String,
    icon: Object,
})
</script>

<template>
    <div class="flex items-center gap-1.5 px-2 py-4 rounded-[18px] bg-theme-paleOrange w-full">
        <component :is="icon" />
        <div class="flex flex-col">
            <div class="flex items-center gap-1">
                <span class="font-bold text-sm">{{ stat }}</span>
                <span class="text-[#828282] text-[10px]">{{ extra }}</span>
            </div>
            <span class="text-theme-orange text-xs">{{ title }}</span>
        </div>
    </div>
</template>