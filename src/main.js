import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import router from './router'

import en from './locales/en.json';
import hu from './locales/hu.json';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    hu,
  },
});

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
