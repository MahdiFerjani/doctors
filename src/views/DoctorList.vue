<template>
   <!--  <ion-menu content-id="main-content">
      <ion-content id="menu" class="ion-padding">
        <ion-menu-toggle>
            <ion-button fill="clear">
  <ion-img :src="require('../../public/assets/imgs/cross2.png')"></ion-img>
</ion-button>
        </ion-menu-toggle>
      </ion-content>
    </ion-menu>-->
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
<ion-header class="back"><ion-toolbar  class="back">
<ion-searchbar class='custom'></ion-searchbar>
</ion-toolbar></ion-header>
<ion-header class="back"><ion-toolbar  class="back">
<ion-segment value="custom">
    <ion-segment-button value="custom">
      <ion-label>Custom</ion-label>
    </ion-segment-button>
    <ion-segment-button value="segment">
      <ion-label>Segment</ion-label>
    </ion-segment-button>
    <ion-segment-button value="buttons">
      <ion-label>Buttons</ion-label>
    </ion-segment-button>
  </ion-segment>
</ion-toolbar></ion-header>
     <ion-content id="page" class="ion-padding">
      <ion-list v-for="(n,index) in doctors" :key="index">
      <ion-card @click="add(n.id)">
  <img alt="Silhouette of mountains" :src="require('../../public/assets/imgs/doctor.jpg')" />
  <ion-card-header >
    <ion-card-title>{{ n.name }}</ion-card-title>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    Here's a small text description for the card content. Nothing more, nothing less.
  </ion-card-content>
</ion-card>
</ion-list>



 



      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  
   
import {
      IonButton,
      IonContent,
      IonMenuToggle,
      IonPage,
      IonSegment, IonSegmentButton
    } from '@ionic/vue';
    import axios from  "axios";
    import { defineComponent } from 'vue';
    export default defineComponent({
      components: {
        IonButton,
        IonContent,
        IonMenuToggle,
        IonPage,
        IonSegment, IonSegmentButton
      },
      data(){
        return{
         doctors:[] as any,
        }
      },
      computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
      methods:{
    getDoctors(){
      axios.get('http://localhost:3000/doctors').then((response)=>{
         this.doctors=response.data
        })
    },
       add(e:any){
        console.log(e)
        this.$router.push({ path:`/doctor/${e}`})
       }
      },
      mounted: function(){
      if (this.currentUser == null) {
      this.$router.push('/signin');
    }
   //  alert('hh)')
//this.OneSignalInit()
},
       
    created(){

        this.getDoctors();
        console.log(this.doctors)
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
    background: #FEF7DF;
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

ion-segment-button::part(indicator-background) {
    background: #2C2B47;
  }

  /* Material Design styles */
  ion-segment-button.md::part(native) {
    color: #000;
  }

  .segment-button-checked.md::part(native) {
    color: #2C2B47;
  }

  ion-segment-button.md::part(indicator-background) {
    height: 4px;
  }

  /* iOS styles */
  ion-segment-button.ios::part(native) {
    color:#2C2B47;
  }

  .segment-button-checked.ios::part(native) {
    color: #fff;
  }

  ion-segment-button.ios::part(indicator-background) {
    border-radius: 20px;
  }
   </style>
   