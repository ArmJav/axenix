import MainPage from "./MainPage.vue"
import LoginPage from "@/pages/LoginPage.vue";
export const routes = [
    {
        path: '/',
        component: MainPage,
        name: 'MainPage'
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'LoginPage'
    }

  ] 