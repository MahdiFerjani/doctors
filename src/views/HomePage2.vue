<template>
    <ion-page>
     
      <ion-content :fullscreen="true">
        <ion-button class="button1"  @click="$router.push('/signup')" shape="round" color="#7FD9B2" size="large">Sign in</ion-button>
        <ion-button   @click="$router.push({path:'/signup' })" class="button2"  shape="round" color="#7FD9B2" size="large">Sign up</ion-button>
      </ion-content>
     
      
      
   
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent,  IonPage,  IonButton, } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HomePage2',
    components: {
      IonContent,
      IonPage,
      IonButton
    }
  });
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    
    color: #8c8c8c;
    
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  ion-header ion-toolbar {
          
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
    overflow:hidden;
      }
    ion-content{
      --background: url(../../public/assets/imgs/02.png) 0 0/100% 100% no-repeat;
  }
  .button1{
  position: absolute;
  top: 518px; 
  left: 59px; 
  width: 70%;
  background-color:#2C2B47;
    border : 2px solid #2C2B47;
    border-radius: 8px;
  
  }
  .button2{
  position: absolute;
  top: 586px; 
  left: 59px; 
  width: 70%;
  background-color:#2C2B47;
  border : 2px solid #2C2B47;
  border-radius: 8px;
  
  }
  </style>
  