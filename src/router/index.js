import { createRouter, createWebHistory } from "vue-router";
import home from "./home";
import admins from "./admin";
const routes =[...home,...admins]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router