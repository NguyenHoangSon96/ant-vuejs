import {createApp} from 'vue'
import App from './App.vue'
import antd from 'ant-design-vue'
import {createRouter, createWebHashHistory} from "vue-router"
import 'ant-design-vue/dist/antd.css'
import SalaryPage from "@/views/SalaryPage/SalaryPage";
import HomePage from "@/views/HomePage/HomePage";

const routes = [
    {path: '/', name: 'HomePage', component: HomePage, exact: true},
    {path: '/salary', name: 'SalaryPage', component: SalaryPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
const app = createApp(App)
app.use(router)
app.use(antd)
app.mount('#app')