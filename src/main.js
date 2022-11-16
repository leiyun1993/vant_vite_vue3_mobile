import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vant from "vant"
import App from './App.vue'
import router from './router'
import { ConfigProvider } from 'vant';
import "@/router/control";


import './assets/tailwind.css';
import 'vant/lib/index.css';
import './assets/main.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vant)
app.use(ConfigProvider)

app.mount('#app')
