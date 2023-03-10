import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'gitart-vue-dialog/dist/style.css';
import { GDialog } from 'gitart-vue-dialog';

const app = createApp(App);
app.component('GDialog', GDialog);
app.mount('#app');
