import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./route"
import "./styles/main.css";

createApp(App)
    .use(router)
    .mount('#app')