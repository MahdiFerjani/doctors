<template>
<ion-header>

<ion-toolbar>
    <ion-title>Pick The Time</ion-title>
  <ion-buttons slot="start">
    <ion-button @click="closeModal">
      <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="end">
    <ion-icon  name="ellipsis-vertical"></ion-icon>
  </ion-buttons>
</ion-toolbar>
</ion-header>

    <ion-content class="ion-text-center">
      <ion-chip v-for="time in times" :key="time.id" @click="selectTime(time)" :class="time.isSelected ? 'ionchips2' : 'ionchips'">
        {{ time.time }}
      </ion-chip>
      <ion-button  @click="createBooking()" color="tertiary" class="appointment">
       Book Appointment
     </ion-button>
    </ion-content>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import {modalController} from "@ionic/vue";
  import axios from  "axios";
  export default defineComponent({ 
    name: "BooKing",
    setup() {
    const closeModal = () => {
      modalController.dismiss();
      
    }
    return { closeModal  };
    
},
props: {
		day: Object,
        doctor:Object
},

    data() {
      return {
        times: [],
        time:""
        
      }
    },
    methods: {
      selectTime(time) {
        this.times.forEach(item => {
          item.isSelected = false
        })
        time.isSelected = true
        this.time=time
       },

    async createBooking() {
      const bookingData = {
        user_id: this.$store.state.auth.user.id,
        doctor_id: this.$props.doctor.id ,
        time: this.time.time,
        appointment_id:this.time.appointment_id,
        date: this.$props.day.date,
        time_id:this.time.id
      }
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/booking', bookingData)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    },
mounted: function(){
this.times=this.$props.day.times
console.log(this.$props.day.date)
console.log('this is the doctor id blabla vla',this.$props.doctor.id)
console.log(this.$store.state.auth.user.id)
},
  })
  </script>
  <style>
.ionchips {
    background: #c6c6c6;
     
    color: rgb(8, 8, 8);
  }
  .ionchips2 {
    background: #3880ff;
     
    color: rgb(255, 255, 255);
  }

  .btn-time-appointment .appointment {
	text-transform: capitalize;
	width: 200px;
    
}
</style>