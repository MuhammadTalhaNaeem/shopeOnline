<script setup lang="ts">
import store from '../store';

const vMyDirective={
    unmounted:()=> {
        store.commit('setItem',{
            productId:1,
            quantity: 0,
        })
    },
}
</script>
<template>
    <div class="h-screen flex justify-center flex-col"> 
        <h1 class="text-7xl font-bold text-center border p-3 pt-0 rounded-3xl w-fit bg-slate-300 text-white mx-auto ">Your Order is Placed Successfully</h1>
        <p class="text-center my-10"><router-link :to="{name:'home'}" class="text-blue-500 hover:text-blue-700" > <font-awesome-icon icon="fa-solid fa-house" size="xl"  class="px-2"/>click</router-link> here to go Home </p>
    </div>
</template>