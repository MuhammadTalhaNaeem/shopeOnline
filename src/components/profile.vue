<script setup lang="ts">
import { ref } from 'vue';
import store from '../store'
import router from '../router'
import Header from './header.vue';
let user = ref(store.state.user||null)
const vMyDirective = {
    mounted: () => {
        if (store.state.user.username === "")
            router.push({ name: 'users' })
    },
}
</script>
<template>
    <component :is='Header' v-my-directive></component>
    <div class="text-gray-600 body-font">
        <div class="px-4 mx-auto  ">
            <div class="bg-gray-100 rounded-md flex justify-between mt-2 w-full">
                <div class="w-3/5 pl-4">
                    <table class=" h-full w-full">
                        <tr>
                            <td class="font-semibold">First Name:</td>
                            <td> {{ user .name.firstname }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Last Name:</td>
                            <td> {{ user.name.lastname }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">User Name:</td>
                            <td> {{ user.username }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">contect:</td>
                            <td> {{ user.phone }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Email:</td>
                            <td class="">{{ user.email }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">password:</td>
                            <td>{{ user.password }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Address</td>
                            <td>House No. {{ user.address.number }}, Street {{ user.address.street }},
                                {{ user.address.city }}</td>
                        </tr>
                    </table>
                </div>
                <div>

                    <img class="rounded-md m-2"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hDa6EuD3j-mjCJxbliIFSGCr6f5Z_QZgE4Tj7YEjFdq3zTD5aQoKXwYrpOPe3qyJptQ&usqp=CAU"
                        alt="user image">
                </div>
            </div>
        </div>
    </div>
</template>