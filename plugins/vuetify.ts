import '@mdi/font/css/materialdesignicons.css'
import '@/assets/css/main.scss'
import '@/assets/css/_fonts.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify(
    {
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
