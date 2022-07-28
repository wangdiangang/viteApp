import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/reset.css"
import Vant from 'vant';
import 'vant/lib/index.css';
import router from "./router/index"
import "amfe-flexible"
import VueLuckyCanvas from '@lucky-canvas/vue'

createApp(App).use(Vant).use(router).use(VueLuckyCanvas).mount('#app')
