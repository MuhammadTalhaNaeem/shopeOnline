<script lang="ts" setup>
import { ref } from 'vue';
import { products } from '../../public/db';
import router from '../router';
import store from '../store';
import Header from './header.vue';
import Item from './item.vue';
let items = ref(new Array())

const vMyDirective = {
    created: () => {
        for (let i = 0; i < products.length; i++)
            for (let j = 0; j < store.state.cart.length; j++)
                if (products[i].id === store.state.cart[j].productId)
                    items.value.push(products[i])
    },
    mounted:()=>{
        if(store.state.user.username==='')
            router.push('/login')
        
    },
}
</script>
<template>
    <component :is='Header'></component>
    <section v-my-directive class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto border">
    <div v-for="item in items" :key="item.id" >
    <component :is='Item' :item="item"></component></div>            
        </div>
    </section>

</template>