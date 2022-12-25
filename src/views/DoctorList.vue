<template>
   <ion-header class="back"><ion-toolbar class="back">
        <ion-menu-toggle>
            <ion-button fill="clear">
  <ion-img :src="require('../../public/assets/imgs/barss.png')"></ion-img>
</ion-button>
        </ion-menu-toggle>
        <ion-chip>
  <ion-avatar>
    <img alt="Silhouette of a person's head" src="https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true" />
  </ion-avatar>
  <ion-label>Mahdi</ion-label>
</ion-chip>
</ion-toolbar></ion-header>

<ion-content>
  <ion-item class="header" lines="none">
    <strong slot="start">Doctor <br> Appointment</strong>

    

  </ion-item>

  <ion-item lines="none" class="search">
    <ion-input placeholder="Search, e.g. Dr.Louis Pasterur">
      <ion-button color="tertiary">
        <ion-icon name="search-outline" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-input>
  </ion-item>

  <div class="sub-title">
    <strong slot="start">Categories</strong>
  </div>


  <ion-slides pager="false" :options=slideOpts>
    <ion-slide :key="index"
        v-for="(item, index) in categories">
      <div class="card-categories ion-activatable ripple-parent" :style="{ color: item.color, background:item.bkColor }">
        <ion-ripple-effect></ion-ripple-effect>
        <ion-icon :icon="item.icon"></ion-icon>
        <span>
          <strong>
            {{ item.name }}
          </strong>
        </span>
      </div>
    </ion-slide>

  </ion-slides>

  <div class="sub-title">
    <strong slot="start">Top Doctors</strong>
  </div>

  <div class="list-doctors">
    <ion-item :key="index"
        v-for="(item, index) in doctors" lines="none" class="ion-activatable ripple-parent" @click="openModal">
      <ion-ripple-effect></ion-ripple-effect>
      <ion-thumbnail slot="start">
        <ion-img :src="item.avatar">
        </ion-img>
      </ion-thumbnail>

      <ion-label class="ion-text-wrap">
        <p> {{ item.specialty }} </p>
        <ion-text>
          <h3>
            <strong>
              {{ item.name }}
            </strong>
          </h3>
        </ion-text>
      </ion-label>

      <ion-icon name="ellipsis-vertical-outline" size="small" slot="end"></ion-icon>
    </ion-item>
  </div>


</ion-content>
  </template>
  
  <script lang="ts">
  
import {skullOutline, heartOutline } from 'ionicons/icons';
import {
      IonButton,
      IonContent,
      IonMenuToggle,
      modalController,
      IonPage,
      IonSegment, IonSegmentButton
    } from '@ionic/vue';
    import axios from  "axios";
    import ModaL from "./ProfilePage.vue"
    import { defineComponent } from 'vue';
    export default defineComponent({
      components: {
        IonButton,
        IonContent,
        
      },
      data(){
        return{
          skullOutline:skullOutline,
          heartOutline :heartOutline,
       
    slideOpts : {
    initialSlide: 0,
    slidesPerView: 3.3,
  },

  doctors:[
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Cardiologist',
      name: 'Dr. Alan C Braverman',
      status: true
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Orthodontist',
      name: 'Dr. Michael Aaron',
      status: false
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Eye Specialist',
      name: 'Dr. Shelley Rahman',
      status: false
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Orthodontist',
      name: 'Dr. Michael Aaron',
      status: false
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Eye Specialist',
      name: 'Dr. Shelley Rahman',
      status: false
    }
  ],

  categories:[
    {
      name: 'Heart',
      bkColor: '#008aff',
      color: 'white',
      icon: heartOutline
    },
    {
      name: 'Brain',
      bkColor: '#a2c3f7',
      color: 'black',
      icon: skullOutline
    },
    {
      name: 'Kidney',
      bkColor: '#f7be3021',
      color: 'black',
      icon: heartOutline
    },
    {
      name: 'Brain',
      bkColor: '#a2c3f7',
      color: 'black',
      icon: skullOutline
    },
    {
      name: 'Kidney',
      bkColor: '#f7be3021',
      color: 'black',
      icon: heartOutline
    }
  ]
        }
      },
      setup() {
    const openModal = async () => {
      const modal = await modalController.create({
        component: ModaL, //Modal is name of the component to render inside ionic modal
      });
      return modal.present();
    };

    return { openModal };
  },
   /*   computed: {
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
    }*/
         
       
      
      
     
      
    });
  </script>
   <style scoped>


ion-header ion-toolbar {
	overflow: hidden;
}

ion-chip {
	--background: #dfdfdf;
	float: right;
	color: rgb(27, 22, 22);
}

#page {
	--background: #fff
}

#menu {
	--background: url(../../public/assets/imgs/6.png) 0 0/100% 100% no-repeat;
}

ion-button {
	position: absolute;


}

.back {
	--background: #fff;
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

.header strong {
	font-size: 28px;
	line-height: 36px;
}

.header ion-avatar {
	--border-radius: 10px;
	width: 50px;
	height: 50px;
}

.sub-title {
	padding: 16px;
}

.sub-title strong {
	font-size: 18px;
	line-height: 36px;
}

.search {
	margin-top: 40px;
	display: flex;
}

.search ion-input {
	background: var(--ion-color-light);
	border-radius: 10px;
	height: 45px;
	--padding-start: 16px;
	font-size: 12px;
}

.search ion-button {
	height: 45px;
	width: 50px;
	--border-radius: 30px 10px 10px 10px;
	order: 1;
}

.list-doctors {
	padding: 16px;
}

.list-doctors .status {
	width: 20px;
	background: green;
}

.list-doctors ion-thumbnail {
	--border-radius: 10px;
}

.list-doctors ion-item {
	--background: var(--ion-color-light);
	--border-radius: 10px;
	margin-bottom: 8px;
}

.list-doctors ion-item:first-child {
	--background: #f7be30 21;
	opacity: none;
	opacity: 1;
}

.card-categories {
	padding: 16px;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	background: var(--ion-color-light);
	border-radius: 10px;
	color: white;
	width: 110px;
	opacity: 0.8;
}

.card-categories ion-icon {
	font-size: 40px;
	margin-bottom: 8px;
}
  /* Material Design styles */

  
   </style>
   