<script setup>
const props = defineProps({
    title: String,
    img: String,
    fav: {
        type: Boolean, 
        default: false,
    }
})
const tabs = ref([
    {
        number: 2,
        time: "days",
    },
    {
        number: 10,
        time: "hours",
    },
    {
        number: 50,
        time: "minutes",
    },
])
</script>

<template>
    <div class="flex gap-4 rounded-[34px]">
        <!-- <img :src="img" class="h-20 lg:h-32 w-full max-w-20 lg:max-w-36 object-cover rounded-2xl lg:rounded-[28px]" /> -->

        <div class="relative h-20 lg:h-32 w-full max-w-20 lg:max-w-36 object-cover rounded-2xl lg:rounded-[28px] bg-center bg-cover bg-no-repeat"
            :style="{ backgroundImage: `url('${img}')` }">
            <div class="absolute bg-theme-red bottom-0 right-0 py-1 lg:py-2 px-2 lg:px-4 text-white text-[8px] lg:text-xs extra">
                Live auction
            </div>
        </div>
        <div class="flex flex-col gap-2 w-full">
            <div class="flex justify-between w-full">
                <span class="text-xs lg:text-lg">{{ title }}</span>
                <div class="rounded-full p-2">
                    <IconHeart class="" :class="[ fav ? 'fill-theme-red' : 'fill-white' ]" />
                </div>
            </div>
            <p class="text-xs lg:text-lg text-[#828282] capitalize">
                starting price
                <span class="text-xs lg:text-2xl text-black font-bold">1000 EGP</span>
            </p>
            <span class="text-xs lg:text-lg text-[#828282]">Lot starts in</span>
            <div class="flex gap-2 lg:gap-4">
                <div v-for="tab in tabs" class="tab">
                    <span class="text-xs lg:text-xl">
                        {{ tab.number }}
                    </span>
                    {{ tab.time }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tab {
    @apply border border-theme-orange bg-theme-paleOrange text-theme-orange capitalize font-bold text-[8px] lg:text-sm py-1.5 px-3.5 rounded-3xl;
}

.extra {
    @apply capitalize;
    border-radius: 33.804px 0px;
}
</style>