import {createApp} from 'vue'
import App from './App.vue'
import antd from 'ant-design-vue'
import {createRouter, createWebHashHistory} from "vue-router"
import 'ant-design-vue/dist/antd.css'
import Salary from "@/pages/Salary";

const Home = {template: '<div>Home</div>'}
const routes = [
    {path: '/', component: Home, exact: true},
    {path: '/salary', name: 'Salary', component: Salary},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
const app = createApp(App)
app.use(router)
app.use(antd)
app.mount('#app')