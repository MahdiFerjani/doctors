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

     <ion-content id="page" class="ion-padding">
      <ion-card>
  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
  <ion-card-header>
    <ion-card-title>Card Title</ion-card-title>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    Here's a small text description for the card content. Nothing more, nothing less.
  </ion-card-content>
  <ion-card-content>
    Here's a small text description for the card content. Nothing more, nothing less.
  </ion-card-content>
  <ion-card-content>
   
  <ion-item >
    <ion-avatar slot="start">
    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </ion-avatar>
  <ion-label>
   Mahdi
   <p>he si smart doctor</p>
  </ion-label>
  
  </ion-item>
  <ion-item >
    <ion-avatar slot="start">
    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </ion-avatar>
  <ion-label>
    Rafik
    <p>he si smart doctor</p>
  </ion-label>
  </ion-item>
  <ion-item > 
    <ion-avatar >
    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </ion-avatar>
  <ion-label>
    Mahdi
    <p>he si smart doctor</p>
  </ion-label>
  </ion-item>


  </ion-card-content>
</ion-card>
<GMapMap
    :center="center"
    :zoom="10"
    map-type-id="terrain"
    style="width: 100vw; height: 20rem"
  >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
      </ion-content>
    </ion-page>
  </template>
  <script lang="ts">
import {
      IonButton,
      IonContent,
      IonMenuToggle,
      IonPage,
    
    } from '@ionic/vue';
   
    import axios from  "axios";
    import { defineComponent } from 'vue';
    export default defineComponent({
      components: {
        IonButton,
        IonContent,
        IonMenuToggle,
        IonPage,
      },
      data(){
        return{
         doctor:"",
         center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
        {
          position: {
            lat: 51.198429,
            lng: 6.69529,
          },
        },
        {
          position: {
            lat: 51.165218,
            lng: 7.067116,
          },
        },
        {
          position: {
            lat: 51.09256,
            lng: 6.84074,
          },
        },
      ],
        }
      },
      methods:{
    getDoctors(){
      axios.get('http://localhost:3000/doctors').then((response)=>{
         this.doctor=response.data
        })
    }
      },
       
    created(){

        this.getDoctors();
       
    }
         
       
      
      
     
      
    });
  </script>
   <style scoped>

   ion-header ion-toolbar {
     overflow:hidden;
       }
   ion-chip{
    --background:#dfdfdf;
     float:right;
     color:rgb(27, 22, 22);
   }    
   #page{
       --background: #fff
   }
   #menu{
    --background: url(../../public/assets/imgs/6.png) 0 0/100% 100% no-repeat;
   }
   ion-button{
   position: absolute;
 
  
   }
  
   ion-card{
    background: #fff;
   }
   ion-card-title{
   color: #2C2B47;

   }
   ion-card-header {
    display: flex;
    flex-flow: column-reverse;
  }
   .back{
    --background:#fff;
    
   }
   .custom {
    --background: #dfdfdf;
    --color: rgb(27, 22, 22);
    --placeholder-color: rgb(66, 66, 66);
    --placeholder-opacity: .8;
    border-radius: 20px;
    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;
    width: 90%;
    margin: auto;
}
ion-list{
  --backgroud:#fff;
}
ion-item{
  --background:#fff;
  --color:#000;
}

   </style>
   