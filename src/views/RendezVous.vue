<template>
    <ion-page id="main-content"> 
    <ion-header class="back"><ion-toolbar class="back">
        <ion-menu-toggle>
            <ion-button fill="clear">
  <ion-img :src="require('../../public/assets/imgs/barss.png')"></ion-img>
</ion-button>
        </ion-menu-toggle>
        <ion-chip>
  <ion-avatar>
    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </ion-avatar>
  <ion-label>Mahdi</ion-label>
</ion-chip>
</ion-toolbar></ion-header>
<ion-content>
  <ion-list>
  <ion-item>
    <ion-label>Rendez vous docteur 1</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Rendez vous docteur 2</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Rendez vous docteur 3</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Pac-Man</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Super Mario World</ion-label>
  </ion-item>
</ion-list>
</ion-content>
</ion-page>
</template>
<script>
import axios from  "axios";
import { defineComponent } from 'vue';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonMenuToggle,
    IonLabel,IonIcon
  } from '@ionic/vue';
export default defineComponent({
    components: {
      IonMenuToggle,
      IonLabel,    
      IonContent,
      IonHeader,
      IonPage,
    },
})



</script>