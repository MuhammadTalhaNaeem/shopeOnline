<script lang="ts" setup>
import { ref } from 'vue';
import { products } from '../../public/db';
import Header from './header.vue';
let items = ref(products);


</script>
<template>
    <component :is='Header'></component>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-4 mx-auto">
            <div class="flex flex-wrap -m-4">
                <div v-for="item in items" :key="item.id" class=" lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative  -px-1">
                        <div class="absolute overflow-hidden h-64">

                            <img alt="gallery" class="object-cover object-center    " :src="item.image" />
                        </div>
                        <div
                            class="px-8 py-2 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 h-64 overflow-auto">

                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                {{ item.title }}
                            </h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ item.category }}</h1>
                            <p class="leading-relaxed h-20 overflow-hidden ">{{ item.description }}</p>
                            <router-link :to="{ name: 'products' }"
                                class="flex text-blue-500 items-center justify-end hover:text-blue-700 hover:underline">
                                Mor Info
                                <font-awesome-icon icon="fas fa-arrow-right" class="pl-2" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>