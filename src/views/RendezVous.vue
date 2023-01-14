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
    <ion-item >
    <ion-label><b>Dr</b></ion-label>
    <ion-label><b>Time</b></ion-label>
    <ion-label><b>Date</b></ion-label>
    </ion-item>
    <ion-item v-for="appointment in appointments" :key="appointment.id">
    <ion-label>{{appointment.doctor_name}}</ion-label>
    <ion-label>{{appointment.time}}</ion-label>
    <ion-label>{{appointment.date}}</ion-label>
    <br>
    <p v-for="(item, index) in starsnb2" :key="index" style="display: inline-block;">
  <ion-icon :icon="starSharp" style="color: yellow;" @click='Review(0,index+1)' ></ion-icon>
  </p>
   <p v-for="(item, index) in starsnb" :key="index" style="display: inline-block;">
  <ion-icon :icon="star" @click='Review(index+1,0)' ></ion-icon>
  </p>
    </ion-item>
  
  
 
 
</ion-list>

</ion-content>
</ion-page>
</template>
<script lang="ts">
import axios from  "axios";
import {starOutline,starSharp } from 'ionicons/icons';
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
    data(){
        return{
          appointments: [] as any,
          starsnb :[] ,
          starsnb2 :[] ,
          //heartOutline:heartOutline,
          star:starOutline,
          starSharp:starSharp
      }
    },
   /* computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },*/
      methods:{
    getbooking() {

    axios.get(`http://127.0.0.1:8000/api/mybookings/${this.$store.state.auth.user.id}`).then(response => {
      this.appointments = response.data
    });
  },

        Review (nb :any,nb2 :any)
{
 
  switch (nb) {
  case 1:

  this.starsnb2.length  =1 +this.starsnb2.length
  this.starsnb.length  =4 -this.starsnb2.length +1
    
    break;
  case 2:

  this.starsnb.length  =3-this.starsnb2.length
        this.starsnb2.length  =2 + this.starsnb2.length
  break;
  case 3:
  this.starsnb.length  =2 -this.starsnb2.length
        this.starsnb2.length  =3+ this.starsnb2.length
    break;
    case 4:
    this.starsnb.length  =1 -this.starsnb2.length
        this.starsnb2.length  =4+ this.starsnb2.length
    break;
    case 5:
    this.starsnb.length  =0
        this.starsnb2.length  =5
    break;
  default:
console.log("no review")
  }
  switch (nb2) {
    case 1:
  this.starsnb.length  =4
        this.starsnb2.length  =1
    break;
  case 2:
  this.starsnb.length  =3
        this.starsnb2.length  =2
  break;
  case 3:
  this.starsnb.length  =2
        this.starsnb2.length  =3
    break;
    case 4:
    this.starsnb.length  =1
        this.starsnb2.length  =4
    break;
    case 5:
    this.starsnb.length  =0
        this.starsnb2.length  =5
    break;
  default:
  console.log("no review")
  }
}
      },
      mounted: function(){
        this.getbooking()
        this.starsnb.length  =5
        this.starsnb2.length  =0
        
        
    //  if (this.currentUser == null) {
 //     this.$router.push('/signin');
 //   }
   //  alert('hh)')
//this.OneSignalInit()
},

       

       
})



</script>