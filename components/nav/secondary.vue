<template>
    <div class="flex items-center gap-8">
        <div class="flex items-center gap-6 h-full">
            <IconSearch />
            <div class="w-px h-8 bg-theme-orange max-lg:hidden"></div>
            <IconBell />
            <div class="w-px h-9 bg-theme-orange max-lg:hidden"></div>
            <IconPfp />
            <SharedAtomButton class="max-lg:hidden" icon text="Add new product" />
        </div>
        <div class="flex items-center gap-[9px] max-lg:hidden">
            <IconGlobe />
            <div class="w-px h-6 bg-[#E0E0E0]"></div>
            <span class="font-bold text-lg">EN</span>
        </div>
    </div>
</template>