<template>
 <ion-header>

  <ion-toolbar>
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

<ion-content>
  <div id="profile-info">
    <div id="profile-image" class='icon-container'>
  <img :src="'http://127.0.0.1:8000/profile/'+Doctor.image" />
  <div v-if="Doctor.status=='online'" class='status-circle-online'>
  </div>
  <div  v-if="Doctor.status=='offline'" class='status-circle-offline'>
  </div>
</div>
  
    <span id="profile-description">{{Doctor.specialite}}</span>
    <h3 id="profile-name">Dr. {{Doctor.name}}</h3>

    <div class="ion-text-center group-actions">
      <ion-button :style="{background:'#5260ff29'}">
        <ion-icon slot="icon-only" :icon="chatbox"></ion-icon>
      </ion-button>
      <ion-button :style="{background:'#ffc40929'}"> 
        <ion-icon slot="icon-only" :icon="navigate"></ion-icon>
      </ion-button>
      <ion-button :style="{background:'#BEC0C629'}">
        <ion-icon slot="icon-only" :icon="call"></ion-icon>
      </ion-button>
      <ion-button :style="{background:'#eb445a29'}"  @click="setOpen(true)">
        <ion-icon slot="icon-only" :icon="compassOutline"></ion-icon>
     </ion-button>


    </div>

  </div>

  <ion-item lines="none" class="title">

    <ion-label>
      <div class="sub-title">
        <strong slot="start">About</strong>
      </div>
      <p id="about-description">{{Doctor.description }}</p>
    </ion-label>
   
  </ion-item>  
 
  <ion-item lines="none" class="title schedules">
    <ion-label>
      <div class="sub-title">
        <strong slot="start">Schedules</strong>
      </div>
    </ion-label>

    <ion-chip class="chip-months">
  
      <ion-icon @click="getMonate('prev')" :icon="chevronBack"></ion-icon>

      <ion-label>
        <strong>{{ b }}</strong>
      </ion-label>
      <ion-icon @click="getMonate('next')" :icon="chevronForward"></ion-icon>

    </ion-chip>

  </ion-item>

  <ion-grid>

<ion-row>

      <ion-col :key="index" v-for="(item, index) in Days" size="1.68">
        <div v-if="item.name=='sun'">
        <ion-badge class="group-week-day" color="warning">

          <div class="week">

            {{ item.day }}
          </div>
          <div class="day">
            <ion-text color="tertiary">
              {{ item.name }}
            </ion-text>
          </div>
        </ion-badge>
      </div>
      <div v-else>
        <ion-badge :key="item.day" @click="select(item.day)"  class="group-week-day" :color="item.day == selectedDay ? 'primary' : 'light'">

          <div class="week">

            {{ item.day }}
          </div>
          <div class="day">
            <ion-text color="tertiary">
              {{ item.name }}
            </ion-text>
          </div>
        </ion-badge>
      </div>
      </ion-col>     
    </ion-row>
  </ion-grid>

  <div class="ion-text-center btn-time-appointment">
    <ion-button color="tertiary" class="appointment">
      Appointment
    </ion-button>
  </div>

</ion-content>
<ion-modal :is-open="isOpen">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="setOpen(false)">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <GMapMap :zoom="10"  style="width: 92vw; height: 600px"

 :center="{ lat: 41.85, lng: -87.65 }">
      <DirectionsRenderer travelMode="DRIVING" :origin="origin" :destination="destionation"/>
    
    </GMapMap>
      </ion-content>
    </ion-modal>
</template>

<script lang="ts">
import { IonIcon } from '@ionic/vue';
import { IonContent, IonHeader, IonToolbar,modalController,IonButton,IonButtons,IonItem,IonChip} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from  "axios";
import {chevronBack,chevronForward,time,videocam,call,navigate,chatbox,camera,location}  from 'ionicons/icons';
import DirectionsRenderer from '../js/DirectionsRenderer.js'
import * as  decode from '../js/decode.js'
export default defineComponent({
  name: "ModaL",
  components: { IonContent, IonHeader,  IonToolbar ,IonIcon,IonButton,IonButtons, IonItem,IonChip, DirectionsRenderer
},
  setup() {
    const closeModal = () => {
      modalController.dismiss();
    };
    return { closeModal };
  },
  props: {
		doctor: Object ,

	},
  
  data(){
    
    const d = new Date();
    let month = d.getMonth()+1;
    return{
      selectedDay :'' ,
      start: "" as any ,
    end: "" as any ,
                    center: { lat: 37.7749, lng: -122.4194 },
   
          markers: [
            {
              id: "" ,
            position: {
            lat: 37.7749, lng: 6.842120
            },
            }
            , // Along list of clusters
        ],
    compassOutline:location ,
    chevronBack:chevronBack,
    camera:camera ,
    chevronForward:chevronForward,
    time:time,
    videocam:videocam,
    call:call,
    navigate:navigate,
    chatbox:chatbox,
    currentMonth: month,
    b:"",  
    Days :[] as any,  
    Doctor :{} as any ,
    isOpen: false,
    DoctorDays:[] as any
        }
      },
      computed: {
         
         destionation() {
           if (!this.end) return null;
           return { query: this.end };
         },
         origin() {
           if (!this.start) return null;
           return { query: this.start };
         },
           },
        methods: {
        setOpen(isOpen: boolean) {
        this.isOpen = isOpen;
        
      },
       getMonate(e){
       if(e=="prev"){
        this.currentMonth--
        if(this.currentMonth<1)
        this.currentMonth=12
          }
        if(e=="next"){
        this.currentMonth++
        if(this.currentMonth>12)
       this.currentMonth=1
        }
        switch(this.currentMonth){
        case 1: this.b = "January";
            break;
        case 2: this.b = "February";
            break;
        case 3: this.b = "March";
            break;
        case 4: this.b = "April";
            break;
        case 5: this.b = "May";
            break;
        case 6: this.b = "June"; 
            break;
        case 7: this.b = "July";
            break;
        case 8: this.b = "August";
            break;
        case 9: this.b = "September";
            break;
        case 10: this.b = "October";
            break;
        case 11: this.b = "November";
            break;
        case 12: this.b = "December";
            break;
        }
        this.Days=this.getDays(this.currentMonth);
    }
    , 
  getDays(month) {
  var monthIndex = month - 1; // 0..11 instead of 1..12
  var names = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
  var d=new Date();
  var year=d.getFullYear();
  var date = new Date(year, monthIndex, 1);
  var result=[] as any;
  while (date.getMonth() == monthIndex) {
  var date2=new Date( year, month-1, date.getDate() )
  var formattedDate = date2.toISOString().slice(0, 10);
   let a={day:date.getDate(),name:names[date.getDay()],date:formattedDate}
    result.push(a);
    date.setDate(date.getDate() + 1);
  }
  return result;
},
getDoctorsDays(id){
  axios.get(`http://127.0.0.1:8000/api/doctor/${id}`).then((response)=>{
  this.DoctorDays=response.data
  console.log(this.DoctorDays)
})
}
,
   async setLocationLatLng () {
     
        navigator.geolocation.getCurrentPosition(geolocation => {
          this.center.lat= geolocation.coords.latitude,
          this.center.lng= geolocation.coords.longitude

       console.log( "this.center.lat")
       setTimeout(()=>
       {     
        decode.decode(this.center.lat, this.center.lng,(result1 :any )=>{         
        
       decode.decode(this.Doctor.latitude, this.Doctor.longitude,(result2 :any )=>{         
        this.start = result1,
        this.end = result2 
})
    }) 
       }
       , 
       1000)
       //   this.drawMarkers()

        });
     //   alert("3"+this.center.lat)

    },

    drawMarkers(){
      this.markers = [
        {
            id: 'dfsldjl3r',
            position: this.center
        },
      ]
    },

    clearMap(){
      this.markers = [];
    },

    select(e:any){
      let d= new Date();
      let d2=new Date(d.getFullYear(),this.currentMonth-1,e)
      console.log(d2);
      this.selectedDay=e
    }

    },
  mounted: function(){
    this.getMonate("");
   this.setLocationLatLng()
    this.getDoctorsDays(this.doctor.id)
    console.log(this.DoctorDays)
    this.Days=this.getDays(this.currentMonth);
    console.log(this.Days);


this.Doctor  = this.doctor
console.log(this.Doctor.id)


},
});
</script>
<style scoped>
.vue-map-container,
.vue-map-container .vue-map {
  position: relative;

    width: 500px;
    height: 343px;
  
}
.icon-container {
  width: 50px;
  height: 50px;
  position: relative;
}

img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

.status-circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: grey;
  border: 2px solid white;
  bottom: 0;
  right: 0;
  position: absolute;
}
.status-circle-online {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #22ff00;
  border: 2px solid white;
  bottom: 0;
  right: 0;
  position: absolute;
}
.status-circle-offline {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgb(255, 0, 0);
  border: 2px solid white;
  bottom: 0;
  right: 0;
  position: absolute;
}
ion-header {
	z-index: 0;
}

#profile-info {
	width: 100%;
	z-index: 2;
	text-align: center;
}

#profile-image {
	display: block;
	border-radius: 50px;
	width: 115px;
	height: 115px;
	margin: 12px auto 45px;
}

#profile-description {
	font-size: 22px;
	color: #1b1818;
	font-weight: 500;
}

#profile-name {
	font-size: 26px;
	font-weight: 700;
	margin-top: 8px;
}

.title .sub-title {
	margin-bottom: 12px;
}
.status-circle-online {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #22ff00;
  border: 2px solid white;
  bottom: 0;
  right: 0;
  position: absolute;
}
.status-circle-offline {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgb(255, 0, 0);
  border: 2px solid white;
  bottom: 0;
  right: 0;
  position: absolute;
}
#about-description {
	white-space: pre-line;
	font-size: 16px;
	color: #444 85;
	font-weight: 500;
	line-height: 25px;
}

.sub-title strong {
	font-size: 26px;
	line-height: 41px;
}

.group-actions ion-button {
	--border-radius: 20px;
	height: 50px;
	margin: 10px;
	--box-shadow: none;
}

.schedules {
	display: flex;
	align-items: baseline;
}

.schedules .chip-months {
	--background: transparent;
}

.group-week-day {
	margin: 6px;
	height: 60px;
	display: inline-grid;
	border-radius: 10px;
	padding: 8px;
	width: 45px;
}

.group-week-day .week {
	font-weight: bold;
}

.group-week-day .day {
	color: var(--ion-color-secondary);
}

.btn-time-appointment ion-button {
	--box-shadow: none;
	--border-radius: 25px;
	height: 80px;
	font-size: 18px;
	font-weight: bold;

}

.btn-time-appointment .time {
	--background: #bec0c6 29;
	width: 80px;
}

.btn-time-appointment .appointment {
	text-transform: capitalize;
	width: 200px;
}

</style>