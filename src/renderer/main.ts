import { createApp } from 'vue'
import './style.css';
import App from './App.vue'
import vuetify from '../plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App).use(vuetify).mount('#app');
