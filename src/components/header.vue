<script  setup lang="ts">
import { ref } from 'vue';
import store from '../store'
import router from '../router'
let countCart = ref<number>(store.state.cart.length);
let countLove = ref<number>(store.state.cart.length);
let showbtn = () => document.querySelector(`#btn`)?.classList.remove(`hidden`)
let hidebtn = () => document.querySelector(`#btn`)?.classList.add(`hidden`)
let logOut = () => {
    let user = {
        address: {
            geolocation: { lat: "", long: "" },
            city: "",
            street: "",
            number: 0,
            zipcode: "",
        },
        id: 0,
        email: "",
        username: "",
        password: "",
        name: { firstname: "", lastname: "" },
        phone: "",
        __v: 0,
    };
    store.commit('setUser', user);
}
const vMyDirective = {
    mounted: () => {
        let array = document.querySelectorAll(`nav`)
        array.forEach((ele: any) => (ele.childNodes as HTMLElement[]).forEach((e: HTMLElement) => {
            if (e.innerText.toString().toLowerCase() === router.currentRoute.value.name?.toString().toLowerCase())
                e.classList.add(`border-b-4`)
        }))
    }
}
</script>
  
<template>
    <div v-my-directive>
        <header class="text-gray-600 bg-red-300 body-font">
            <div class="container mx-auto flex flex-wrap md:flex-row justify-between items-center">
                <router-link to="/" class="flex title-font font-medium items-center text-gray-900 md:mb-0">
                    <img src="https://t4.ftcdn.net/jpg/03/31/93/85/360_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg"
                        class=" w-6 h-6 " alt="logo" />
                    <span class="ml-3 text-xl">Shope Online </span>
                </router-link>
                <nav id="nav" class=" md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <router-link to="/" class="mx-2 p-1 hover:text-gray-900 hover:text-lg hover:bg-gray-50 rounded-t">
                        Home</router-link>
                    <router-link to="/products"
                        class="mx-2 p-1 hover:text-gray-900 hover:text-lg hover:bg-gray-50 rounded-t">products
                    </router-link>
                    <router-link to="/users" v-if="store.state.user.username === ''"
                        class="mx-2 p-1 hover:text-gray-900 hover:text-lg hover:bg-gray-50 rounded-t">users
                    </router-link>
                    <router-link to="/profile" v-else
                        class="mx-2 p-1 hover:text-gray-900 hover:text-lg hover:bg-gray-50 rounded-t">Profile
                    </router-link>
                </nav>

                <div>
                    <router-link to="/login" @mouseenter="showbtn" @mouseleave="hidebtn"
                        v-if="store.state.user.username === ''" class="hover:bg-gray-200 rounded px-1">
                        <font-awesome-icon icon="fas fa-circle-user" size="lg" />
                        <span id="btn"
                            class="hidden items-center border-0 px-1 focus:outline-none hover:bg-gray-200 rounded text-base">
                            Log In
                            <font-awesome-icon icon="fas fa-arrow-right" class="pl-1" />
                        </span>
                    </router-link>

                    <div v-else class="flex items-center">
                        <router-link to="/" @mouseenter="showbtn" @mouseleave="hidebtn" @click="logOut"
                            class="hover:bg-gray-200 rounded px-1 cursor-pointer">
                            <font-awesome-icon icon="far fa-circle-user" size="lg" />
                            <button id="btn" @click="logOut"
                                class="hidden items-center border-0 px-1 focus:outline-none hover:bg-gray-200 rounded text-base">
                                Log Out

                                <font-awesome-icon icon="fas fa-arrow-right" class="pl-1" />
                            </button>
                        </router-link>
                        <div class="flex justify-between">
                            <router-link to="/cart" class="pl-1">
                                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                                <sup class="text-gray-200 -ml-1">{{ countCart }}</sup>
                            </router-link>
                            <router-link to="/love" class="pl-1">
                                <font-awesome-icon icon="fab fa-gratipay" size="lg" />
                                <sup class="text-gray-200 -ml-1">{{ countLove }} </sup>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <nav class=" hidden mx-auto flex-wrap text-base justify-center">
                    <router-link to="/" class="mx-2 p-1 hover:text-gray-900">Home</router-link>
                    <router-link to="/products" class="mx-2 p-1 hover:text-gray-900">Products</router-link>
                    <router-link to="/users" v-if="store.state.user.username === ''"
                        class="mx-2 p-1 hover:text-gray-900 hover:text-lg hover:bg-gray-50 rounded-t">users
                    </router-link>
                    <router-link to="/profile" v-else
                        class="mx-2 p-1 hover:text-gray-900 hover:text-lg hover:bg-gray-50 rounded-t">Profile
                    </router-link>
                </nav>
            </div>
        </header>
    </div>
</template>

  
  