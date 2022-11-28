<script setup lang="ts">
import { format } from 'date-fns';
import store from '../store';
import { addToCart, cart } from '../../public/db';
import router from '../router';
const props = defineProps({
    item: Object
})
let setCart = (itemId: number) => {
    if (store.state.user.username === '') {
        router.push('/login');
        return;
    }
    let id = store.state.user.id;
    let c = cart.filter(detail => detail.userId === id)[0];
    if (c !== undefined) {
        let exist = c.products.findIndex(p => p.productId === itemId);
        if (exist < 0) {
            store.commit('addToCart', {
                productId: itemId,
                quantity: 1
            })
        }
    } else {
        let c = {
            id: cart.length,
            userId: id,
            date: format(new Date, 'yyyy-MM-dd'),
            products: [
                {
                    productId: itemId,
                    quantity: 1
                }
            ],
            __v: 0,
        }
        addToCart(c);
    }
}
</script>
<template>
    <div class="flex items-center border-b  pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div
            class="sm:w-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img :src="item!.image" alt="image" class="relative">
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0 ">
            <h2 class="text-gray-900 text-lg title-fo   nt font-medium mb-2">{{ item!.title }}</h2>
            <p class="leading-relaxed text-base h-12 overflow-auto">{{ item!.description }}</p>
            <div class="flex justify-between pt-4">
                <div class=" w-1/2 flex justify-around">
                    <RouterLink :to="{ name: 'product', params: { id: item!.id } }"
                        class="flex w-1/3 text-white bg-indigo-500 hover:bg-indigo-300  rounded-md px-2 pb-1 items-center justify-center border h-10 active:bg-indigo-400">
                        Buy
                        Now
                        <font-awesome-icon icon="far fa-credit-card" class="pl-2" />
                    </RouterLink>
                    <button @click="setCart(item!.id)"
                        class="w-1/3 text-white  bg-indigo-500 hover:bg-indigo-300 rounded-md px-2 pb-1 items-center border  h-10 active:bg-indigo-400">Add
                        cart
                        <font-awesome-icon icon="fas fa-cart-shopping" class="pl-2" />
                    </button>
                </div>
                <div class=" border-l-2 px-2 w-1/2 flex justify-around items-center">
                    <span>
                        {{ item!.rating.rate }}
                        <font-awesome-icon icon="fas fa-star" class="text-yellow-300" />
                    </span>
                    <span>
                        <font-awesome-icon icon="fas fa-wallet" />
                        RS. {{ item!.price }}
                    </span>
                    <span>
                        Stock : {{ item!.rating.count }}
                    </span>

                </div>
            </div>
        </div>
    </div>
</template>