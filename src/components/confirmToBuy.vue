<script setup lang="ts">
import { ref } from 'vue';
import { orders, products } from '../../public/db'
import router from '../router';
import store from '../store';
import { format, addDays } from 'date-fns'
let item = ref(products.filter(p => p.id === store.state.item.productId)[0])
let user = ref(store.state.user);
let fee = ref(100);
let totalPrice=ref(item.value.price* store.state.item.quantity)
let confirmOrder = () => {
    let newDate = new Date();
    let order = {
        id: orders.length + 1,
        orderDate: format(newDate, "dd/MM/yyyy"),
        diliverDate: format(addDays(newDate, 10), "dd/MM/yyyy"),
        userId: user.value.id,
        productId: item.value.id,
        fee: fee.value
    }
    orders.push(order)
    router.push({ name: "success" })
}
const vMyDirective = {
    mounted: () => {
        if (store.state.user.username === "")
            router.push({ name: 'login' })
    },
}
</script>       
<template>
    <section v-my-directive class="text-gray-600 body-font">
        <div class=" px-5 py-4 mx-auto flex flex-wrap items-center">
            <div class="border rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h1 class="text-gray-900 bg-yellow-50 rounded-md text-2xl font-semibold title-font mb-5 text-center">{{
                        user.name.firstname
                }}
                    {{ user.name.lastname }}</h1>
                <div class="flex justify-between flex-wrap sm:flex-col lg:flex-row md:flex-row ">
                    <div class="flex flex-col  justify-evenly ">
                        <h2 class="text-gray-900 text-xl font-medium title-font">Your Order Summary
                        </h2>
                        <div class="text-lg font-semibold col-span-2 ">{{ item.title }} </div>

                        <table class="">

                            <tr>
                                <td>
                                    <h2 class="text-lg font-semibold pr-2 ">address:</h2>
                                </td>
                                <td>
                                    <span> House: {{ user.address.number }}, street: {{ user.address.street }}, {{
                                            user.address.city
                                    }}</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-lg font-semibold ">Price: </td>
                                <td>{{ item.price }}</td>
                            </tr>
                            <tr>
                                <td class="text-lg font-semibold ">Quantity: </td>
                                <td>{{ store.state.item.quantity }}</td>
                            </tr>
                            <tr>
                                <td class="text-lg font-semibold ">Total Price: </td>
                                <td>{{ totalPrice }}</td>
                            </tr>
                            <tr>
                                <td class="text-lg font-semibold ">Delivery Fee: </td>
                                <td>{{ fee }}</td>
                            </tr>
                            <tr>
                                <td class="text-lg font-semibold ">Payable: </td>
                                <td class="text-lg font-semibold ">{{ (totalPrice + fee).toFixed() }}</td>
                            </tr>
                        </table>
                    </div>

                    <div class="border hidden lg:flex md:flex"><img :src="item.image" class="w-60 h-72" alt=""></div>
                </div>
                <button @click="confirmOrder"
                    class="text-white bg-indigo-500 border-0 py-2 mt-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Confirm
                    Order</button>
            </div>
        </div>
    </section>
</template>