<script setup>
import UserTick from '@/components/icon/userTick.vue'
import UserProfile from '@/components/icon/userProfile.vue'
import Rating from '@/components/icon/rating.vue'

</script>

<template>
    <div class="flex flex-col gap-4 lg:gap-6 max-w-[407px] box">
        <div class=" flex flex-col gap-2 lg:gap-4">
            <img class="aspect-square max-w-[100px] rounded-3xl object-cover" src="/pfp.jpg">
            <SharedAtomTitle text="Hala Ahmed" />
            <p class="text-[#4F4F4F] text-sm">
                I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.
            </p>
        </div>
        <div class="flex gap-1.5 lg:gap-4 items-center justify-between">
            <SharedAtomStat :icon="UserTick" stat="20" title="Followers" />
            <SharedAtomStat :icon="UserProfile" stat="20" title="Followers" />
            <SharedAtomStat :icon="Rating" stat="20" title="Followers" extra="( 15 )" />
        </div>
        <SharedAtomButton class="justify-center" text="Follow" />
    </div>
</template>