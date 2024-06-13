import App from './App.vue'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: {
          hello: 'hello world'
      },
    }
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
