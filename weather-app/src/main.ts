import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'
import de from '@/locales/de.json'
import { vuetify } from './plugins/vuetify'

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr,
    de,
    en,
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(vuetify)

app.mount('#app')
