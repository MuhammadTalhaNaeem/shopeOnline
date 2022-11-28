<script setup lang="ts">
import { ref } from "vue";
import { cart, users } from "../../public/db";
import * as validator from '../js/index.js'
import router from "../router";
import store from "../store";
import Header from "./header.vue";
let email = ref("john@gmail.com");
let password = ref("m38rmF$");
let errors = ref<string[]>([]);
let logIn = async () => {
  if (!validator.isEmail(email.value))
    errors.value.push("invalid Email")
  if (password.value === '')
    errors.value.push("invalid password")
  else {
    let u = users.filter(user => user.email === email.value && user.password === password.value)[0]
    if (u !== undefined) {
      store.commit('setUser', u);
      let c = cart.filter(p => p.userId === u.id)[0]
      if (c !== undefined) {
        store.commit(`setCart`, c.products)
      }
      router.push('/')
    }
  }

}


</script>
<template>
  <component :is="Header"></component>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="mx-auto lg:w-1/3 md:w-1/2 bg-indigo-50 p-4 rounded-lg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-center text-gray-900 text-xl mb-1 font-medium title-font">
          Sign In form
        </h2>
        <p class="leading-relaxed text-lg mb-2 text-gray-600 mx-auto">
          Log in for details
        </p>
        <ul>
          <li v-for="err in errors" :key="err" class="text-red-500">
            {{ err }}
          </li>
        </ul>
        <div class="relative mb-2">
          <label for="email" class="leading-7 text-lg text-gray-600">
            Email
          </label>
          <input placeholder="someone@example.com" v-model="email" type="email" id="email" name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-lg text-gray-600">
            Password
          </label>
          <input placeholder="Password" v-model="password" type="password" id="lPassword" name="lPassword"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button @click="logIn"
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          logIn
        </button>

      </div>
    </div>
  </section>
</template>
