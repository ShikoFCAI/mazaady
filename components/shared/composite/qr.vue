<script setup>
const isActive = ref(true)
</script>

<template>
    <div class="flex flex-col gap-4 max-w-[407px] box">
        <div class="flex items-center justify-between">
            <SharedAtomTitle text="QR Code" />
            <div class="flex items-center gap-6">
                <IconEye />
                <IconShare />
                <IconDoc />
                <div @click="isActive = !isActive" class="rounded-full p-1 transition-all"
                    :class="[isActive ? 'bg-[#FBE7EE]' : 'bg-[#F6F4F5]', isActive ? 'rotate-180' : '']">
                    <IconArrowdown class="lg:hidden" />
                </div>
            </div>
        </div>
        <Transition name="slide-fade">
            <div v-if="isActive" class="flex items-center gap-2 bg-theme-paleOrange rounded-[18px] px-4 py-5">
                <IconDoc class="stroke-theme-orange" />
                <span class="text-sm">Download the QR code or share it with your friends.</span>
            </div>
        </Transition>
        <Transition name="slide-fade">
            <div v-if="isActive"
                class="qrcode flex flex-col justify-center items-center gap-4 py-4 w-full border-[20px] border-theme-orange rounded-[20px]">
                <IconMain />
                <SharedAtomTitle text="Hala Ahmed" />
                <img src="/qr.png" />
                <span class="text-sm capitalize">follow us on mazady</span>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: -translateY(10px);
    opacity: 0;
}</style>