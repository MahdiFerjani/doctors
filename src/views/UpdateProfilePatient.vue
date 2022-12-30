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
  <ion-label>{{doctor.name}}</ion-label>
</ion-chip>
</ion-toolbar></ion-header>
<ion-content>
  <form>
    <ion-item lines="full">
      <ion-label position="floating">Name</ion-label>
      <ion-input v-model="doctor.name" type="text" required></ion-input>
    </ion-item>
    <ion-item lines="full">
      <ion-label position="floating">Email</ion-label>
      <ion-input v-model="doctor.email" type="email" required></ion-input>
    </ion-item>
  
    <ion-item lines="full">
      <ion-label position="floating">Mobile</ion-label>
      <ion-input type="text" v-model="doctor.phone_number"  required></ion-input>
    </ion-item>
    <ion-radio-group v-model="gender" lines="full">
      <ion-list-header>
        <ion-label>Gender</ion-label>
      </ion-list-header>
      <ion-item>
        <ion-label>Male</ion-label>
        <ion-radio slot="start" value="male" :checked='doctor.gender === "female"' ></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Female</ion-label>
        <ion-radio slot="start"  :checked='doctor.gender === "male"'  value="female"></ion-radio>
      </ion-item>
    </ion-radio-group>

    <ion-list>
    <ion-item>
      <ion-select placeholder="Select fruit">
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
    <ion-row>
      <ion-col>
        <ion-button type="submit" color="danger" expand="block">Submit</ion-button>
      </ion-col>
    </ion-row>
  </form>
</ion-content>
</ion-page>
</template>
<script lang="ts">
import axios from  "axios";
import {starOutline,starSharp } from 'ionicons/icons';
import { defineComponent } from 'vue';
import {IonChip,IonAvatar,IonImg,IonButton,IonInput,IonItem,IonRadioGroup ,IonRadio,IonListHeader ,
    IonContent,
    IonHeader,
    IonPage,
    IonMenuToggle,
    IonLabel,IonIcon,IonToolbar
  } from '@ionic/vue';
export default defineComponent({
    components: {
      IonImg,IonButton,IonInput,IonItem,IonRadioGroup ,IonRadio,IonListHeader,
      IonToolbar,
      IonMenuToggle,
      IonLabel,    
      IonContent,
      IonHeader,
      IonPage,
      IonChip,IonAvatar,
    },
    data(){
        return{
          gender :'',
      doctor :{} as any
      }
    },
   /* computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },*/
      methods:{
      
        getDoctorsById(){
        const id =this.$store.state.auth.user.id ;
      axios.get('http://localhost:8000/api/get/doctor/'+id).then((response)=>{
         this.doctor=response.data
       //  this.doctor.gender="male"
         console.log( this.doctor.name)
        })
    },
},
mounted: function(){


  this.getDoctorsById()
},
       

       
})



</script>