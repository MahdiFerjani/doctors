<template>
  <ion-app>
    <MenuPage></MenuPage>

  </ion-app>
</template>

<script lang="ts">
import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';
import MenuPage from './views/MenuPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    MenuPage
  }
});
</script>