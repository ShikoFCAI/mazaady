<script setup>
const products = ref([
    {
        title: "Six-piece clothing set (blouse - pants - hat and ...",
        img: "/product1.jpg",
        fav: false,
    },
    {
        title: "Six-piece clothing set (blouse - pants - hat and ...",
        img: "/product2.jpg",
        fav: true,
    },
    {
        title: "Jeep Car, new, used for only one time",
        img: "/product3.jpg",
        fav: false,
    },
    {
        title: "Six-piece clothing set (blouse - pants - hat and ...",
        img: "/product4.jpg",
        fav: false,
    },
    {
        title: "Jeep Car, new, used for only one time",
        img: "/product1.jpg",
        fav: false,
    },
])

const tabs = ref([
    {
        title: "Products",
        active: true,
    },
    {
        title: "Articles",
        active: false,
    },
    {
        title: "Reviews",
        active: false,
    },
])
</script>

<template>
    <div class="box w-full">
        <div class="flex justify-between">
            <div class="flex gap-2.5">
                <SharedAtomTab v-for="tab in tabs" :title="tab.title" :active="tab.active" />
            </div>
            <SharedAtomButton class="max-lg:hidden" icon text="Add Review" />
        </div>
        <div class="pt-6">
            <h3 class="text-2xl lg:text-4xl font-extrabold pb-2 lg:pb-4">Products</h3>
            <div class="flex flex-col gap-6">
                <SharedAtomProduct v-for="product in products" :title="product.title" :img="product.img" :fav="product.fav" />
            </div>
        </div>
    </div>
</template>