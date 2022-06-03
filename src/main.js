import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
        path: "/allSchedule",
        name: "allSchedule",
        component: () => import("./components/ScheduleView")
    },
    {
        path: "/product/:id",
        name: "product-details",
        component: () => import("./components/ScheduleRow")
    },
    {
        path: "/addSchedule",
        name: "addSchedule",
        component: () => import("./components/AddSchedule")
    },
    {
        path: "/signIn",
        name: "signIn",
        component: () => import("./components/SignIn")
    },
    {
        path: "/register",
        name: "register",
        component: () => import("./components/register")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')