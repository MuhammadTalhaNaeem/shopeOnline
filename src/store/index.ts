import { cartInterface, userInterface, itemInterface } from './../../public/db';
import { createStore } from "vuex";
const store = createStore({
    state: {
        user: <userInterface> 
        {
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
        },
        item: <itemInterface>{},
        cart: new Array(),
    },
    mutations: {
        setUser: (state, user: userInterface) => state.user = user,
        setItem: (state, item: itemInterface) => state.item = item,
        setCart: (state, products: cartInterface[]) => state.cart = Array.from(products),
        addToCart: (state, product: cartInterface) => state.cart.push(product),
    },
});
export default store;
