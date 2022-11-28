<script lang="ts" setup>
import { products} from '../../public/db';
import Header from './header.vue';
import Item from './item.vue';

</script>
<template>
    <component :is='Header'></component>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto border">
            <div v-for="product in products" :key="product.id">
                <component :is='Item' :item="product" ></component>
            </div>
        </div>
    </section>

</template>