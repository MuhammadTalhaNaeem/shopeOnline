import  {createRouter,createWebHistory,RouteRecordRaw} from "vue-router";
const routes :Array<RouteRecordRaw> = [
    {
        path:"/",
        name: "home",
        component: ()=>import('../components/HomeView.vue')
    },
    {
        path:"/products",
        name: "products",
        component: ()=>import('../components/products.vue')
    },
    {
        path:"/product/:id",
        name: "product",
        component: ()=>import('../components/singleproduct.vue')
    },
    {
        path:"/confirm-to-buy",
        name: "confirmToBuy",
        component: ()=>import('../components/confirmToBuy.vue')
    },
    {
        path: "/perchased",
        name:"success",
        component : ()=>import('../components/success.vue')
    },
    {
        path: "/cart",
        name:"cart",
        component : ()=>import('../components/cart.vue')
    },
    {
        path: "/love",
        name:"love",
        component : ()=>import('../components/love.vue')
    },
    {
        path: "/users",
        name:"users",
        component : ()=>import('../components/users.vue')
    },
    {
        path: "/login",
        name:"login",
        component : ()=>import('../components/logIn.vue')
    },
    {
        path: "/profile",
        name:"profile",
        component : ()=>import('../components/profile.vue')
    },

]
export default createRouter({
    history : createWebHistory(),
    routes
})