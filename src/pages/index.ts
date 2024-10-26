import MainPage from "./MainPage.vue"
import LoginPage from "@/pages/LoginPage.vue";
import CabinetPage from "@/pages/CabinetPage.vue";
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
    },
    {
        path: '/cabinet',
        component: CabinetPage,
        name: 'CabinetPage'
    }

  ] 