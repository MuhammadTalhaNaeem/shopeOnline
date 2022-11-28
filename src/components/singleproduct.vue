<script lang="ts" setup>
import { ref } from "vue";
import { products } from "../../public/db";
import store from "../store";
import router from "../router";
import Header from "./header.vue";
let id = ref(router.currentRoute.value.params.id);
let like = ref(false);
let quantity = ref(1);
let item = ref(products.filter((itm) => itm.id == Number(id.value))[0]);
let increasQuantity = () => {
  if (quantity.value < item.value.rating.count) {
    quantity.value++;
  }
};
let decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
let buyItem = () => {
  store.commit('setItem', {
    productId: Number(id.value),
    quantity: quantity.value
  })
router.push({ name: 'confirmToBuy'})
  
}
</script>
<template>
  <component :is='Header '></component>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container mx-auto px-5 py-4">
      <div class="  flex flex-wrap  justify-evenly flex-col md:flex-row lg:flex-row py-2">
        <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 sm:mx-auto w-full   flex justify-center items-center">
          <img alt="ecommerce" class="object-center h-72 w-full   " :src="item.image" />
        </div>
        <div
          class="flex flex-col justify-around  lg:w-3/5 md:w-3/5 w-full  lg:border-t-0 md:border-t-0  border-t px-4">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            Category : {{ item.category }}
          </h2>
          <h1 class="text-gray-900 text-xl title-font font-medium mb-1">
            {{ item.title }}
          </h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <span class="text-gray-600 px-1">{{ item.rating.rate }} </span>
              <font-awesome-icon icon="fas fa-star" class="text-yellow-300" />
              <span class="text-gray-600 px-3">Reviews </span>
            </span>
            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
              <font-awesome-icon icon="fas fa-share-nodes" size="lg" class="px-2 text-blue-700" />
              <a class="text-gray-500">
                <font-awesome-icon icon="fab fa-twitter" class="text-indigo-400 px-1" size="lg" />
              </a>
              <a class="text-gray-500">
                <font-awesome-icon icon="fab fa-facebook-f" class="text-indigo-600 px-1" size="lg" />
              </a>
              <a class="text-gray-500">
                <font-awesome-icon icon="fab fa-linkedin-in" class="text-indigo-400 px-1" size="lg" />
              </a>
            </span>
          </div>
          <div class="flex flex-wrap justify-between">
            <span>
              Quantity
              <font-awesome-icon icon="fa-solid fa-caret-left" size="lg" @click="decreaseQuantity"
                class="px-1 hover:text-blue-500" />
              <button class="w-4">{{ quantity }}</button>
              <font-awesome-icon icon="fa-solid fa-caret-right" size="lg" @click="increasQuantity"
                class="px-1 hover:text-blue-500" />
            </span>
            <span class="mr-28">
              <font-awesome-icon icon="fa-brands fa-docker" size="lg" />
              {{ item.rating.count }} pieces
            </span>
          </div>

          <div class="flex mt-3 pt-3 border-t-2">
            <span class="title-font font-medium text-2xl text-gray-900">Rs. {{ item.price }}</span>
            <button  @click="buyItem"
              class="flex justify-around items-center ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Buy
              <font-awesome-icon icon="far fa-credit-card" class="pl-2" />
            </button>
            <button v-if="!like" @click="like = !like"
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-blue-500 ml-4">
              <font-awesome-icon icon="far fa-heart" size="xl" />
            </button>
            <button v-else @click="like = !like"
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-blue-500 ml-4">
              <font-awesome-icon icon="fas fa-heart" size="xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t p-5">
      <h1 class="font-medium text-black">
        Product Details:
      </h1>
      <p class=" w-72 ml-14 leading-10">
        {{item.description}}
      </p>

    </div>
  </section>
</template>
