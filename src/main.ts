import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import store from "./store"

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store as any)

  .use(VueGoogleMaps, {
    load: {
      version :'weekly',
      // libraries: "visualization"
      libraries: "places",
        key: 'AIzaSyBw834lTlc-gq-XDeBV8jSk3cleQl0i_j0',
        // language: 'de',
    },
})
router.isReady().then(() => {
  app.mount('#app');
});