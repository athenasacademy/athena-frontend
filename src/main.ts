/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import axios from 'axios';
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Store
import store from './store';

const app = createApp(App);

app.config.globalProperties.$axios = axios;

registerPlugins(app)

app.use(store);
app.config.globalProperties.$axios = axios;
axios.defaults.baseURL = 'https://back.athena-academy.tech/api/v1';

app.mount('#app')
