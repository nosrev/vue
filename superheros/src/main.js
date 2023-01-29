import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/inkline.scss';
import { InklineIcons, fasBrain, fasDumbbell, fasRunning, fasBatteryThreeQuarters, fasBolt, fasUserNinja } from '@inkline/icons';
import "./main.scss";

import './assets/main.css'

const app = createApp(App)

app.use(router)

axios.defaults.baseURL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/';
app.use(VueAxios, axios)

InklineIcons.add({
    fasBrain,
    fasDumbbell,
    fasRunning,
    fasBatteryThreeQuarters,
    fasBolt,
    fasUserNinja
});

app.use(Inkline, {
    components
});

app.use(InklineIcons);

app.mount('#app')
