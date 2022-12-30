<template>

  <div class="head">
    <ion-menu-toggle>
              <ion-button fill="clear">
    <ion-img :src="require('../../public/assets/imgs/burger.png')"></ion-img>
  </ion-button>
          </ion-menu-toggle>
          <ion-chip>
    <ion-avatar>
      <img alt="Silhouette of a person's head" src="https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true" />
    </ion-avatar>
    <ion-label>Mahdi</ion-label>
  </ion-chip>
    <ion-item class="head2" lines="none">
      <strong style="color:white;" >Doctor Appointment</strong>
    </ion-item>
    <ion-item class="cirles" lines="none">
      
    </ion-item>
    <div lines="none" class="search">
      <ion-input placeholder="Search, e.g. Dr.Louis Pasterur">
        <ion-button color="tertiary">
          <ion-icon :icon="searchOutline" slot="icon-only"></ion-icon>
        </ion-button>
      </ion-input>
    </div>
  </div>
  <ion-content>
  <div>
    <div class="sub-title">
      <strong slot="start">Categories</strong>
    </div>
    <swiper :slides-per-view="3">
      <swiper-slide :key="index" v-for="(item, index) in specialites" >
        <div  @click="filtre(item,index)" class="card-categories ion-activatable ripple-parent" :style="{background:item.color}">
          <ion-ripple-effect></ion-ripple-effect>
          <ion-thumbnail>
          <img :src="'http://127.0.0.1:8000/icons/'+item.image" />
          </ion-thumbnail>
          <span>
            <strong style="color: black;">
              {{item.specialite}}
            </strong>
          </span>
        </div>
      </swiper-slide>
    </swiper>
    <div class="sub-title">
      <strong slot="start">Top Doctors</strong>
    </div>
    <div class="list-doctors">
      <ion-item :key="index"
          v-for="(item, index) in array1" lines="none" class="ion-activatable ripple-parent" @click="openModal(item)">
        <ion-ripple-effect></ion-ripple-effect>
        <ion-thumbnail  class='icon-container' slot="start">
          <ion-img :src="'http://127.0.0.1:8000/profile/'+item.image">
          </ion-img>
          <div v-if="item.status=='online'" class='status-circle-online'>
    </div>
    <div  v-if="item.status=='onfline'" class='status-circle-offline'>
    </div>
        </ion-thumbnail>
    
        <ion-grid>
  <ion-row>
    <ion-col ><ion-label class="ion-text-wrap">
        <p> {{ item.specialite }} </p>
        <ion-text>
          <h3>
            <strong>
             Dr. {{ item.name }}
            </strong>
          </h3>
        </ion-text>
      </ion-label></ion-col>
   

  </ion-row>
  <ion-row>
<ion-col>   
       <star-rating v-bind:increment="0.5"
             v-bind:max-rating="5"
             :rating="3.3"
             inactive-color="white"
             active-color="#ffd500"
             v-bind:star-size="16">
</star-rating>



    </ion-col>
  </ion-row>
</ion-grid>
        <ion-icon name="ellipsis-vertical-outline" size="small" slot="end"></ion-icon>
      </ion-item>
    </div>
  </div>
  </ion-content>
    </template>
    
    <script lang="ts">

  import {searchOutline } from 'ionicons/icons';
  import {
       IonButton,
       IonContent,
       IonMenuToggle,
       modalController,
       IonThumbnail,
       IonChip,
       IonAvatar,
       IonText,
       IonLabel,
       IonInput,
       IonItem,
       IonRippleEffect,
       IonIcon 

      } from '@ionic/vue';
      import 'swiper/css';
      import '@ionic/vue/css/ionic-swiper.css';
      import { Swiper, SwiperSlide } from 'swiper/vue';
      import axios from  "axios";
      import ModaL from "./ProfilePage.vue"
      import { defineComponent } from 'vue';
      import StarRating from 'vue-star-rating'

      export default defineComponent({
        components: {
          IonButton,
        IonContent,
        IonIcon,
        IonMenuToggle,
       IonThumbnail,
       Swiper,
       SwiperSlide,
       IonChip,
       IonAvatar,
       IonText,
       IonLabel,
       IonInput,
       IonItem,
       IonRippleEffect,
     //  StarRating
        },
        data(){
          return{
            searchOutline:searchOutline,   
      slideOpts : {
      initialSlide: 0,
      slidesPerView: 3.3,
    },
    Doctors :[]as any,
    array1 :[]as any,
    specialites:[]as any,

          }
        },
        setup() {
      const openModal = async (doctor) => {
        const modal = await modalController.create({
          component: ModaL, 
          componentProps: { 
          doctor:doctor ,
        }
        });
        return modal.present();
      };
  
      return { openModal };
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
        methods:{
      getDoctors(){
        axios.get('http://localhost:8000/api/doctors').then((response)=>{
           this.Doctors=response.data
           this.array1=this.Doctors
           
          })
      },
      getSpecialites(){
        axios.get('http://localhost:8000/api/specialite').then((response)=>{
           this.specialites=response.data
          
          })
          
      },
         add(e:any){
          console.log(e)
          this.$router.push({ path:`/doctor/${e}`})
         },
         filtre(e,index){
         var prevcolor=this.specialites[index].color
         if(prevcolor!="#2C2B47"){
         this.specialites.forEach((a)=>{
          a.color=prevcolor;
         })
        }
         this.specialites[index].color="#2C2B47"
         this.array1=this.Doctors       
         var table=this.array1.filter((item) => {
         return item.specialite == e.specialite
         })
         this.array1=table
         
    }
         
        },
        mounted: function(){
        if (this.currentUser == null) {
        this.$router.push('/signin');
     }
  },
         
      created(){
          this.getDoctors();
          this.getSpecialites(); 
      }
      });
  
  
    </script>
     <style scoped>
  .icon-container {
    width: 50px;
    height: 50px;
    position: relative;
  }
  .cirles{
    --background:white;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
  .head{
    background-color: #2C2B47;
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
  
  ion-header ion-toolbar {
    overflow: hidden;
  }
  
  ion-chip {
    --background: #dfdfdf;
    float: right;
    color: rgb(27, 22, 22);
  }
  .head2{
    --background:#2C2B47;
    height: 40px;
  }
  
  #page {
    --background: #fff
  }
  
  #menu {
    --background: url(../../public/assets/imgs/6.png) 0 0/100% 100% no-repeat;
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
    top: 40px;
    display: flex;
    background:white ;
  }
  
  .search ion-input {
    background: rgb(234, 232, 232);
    border-radius: 10px;
    width:50px;
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
   
    --border-radius: 10px;
  }
  
  .list-doctors .status {
    width: 20px;
    background: green;
  }
  
  .list-doctors ion-thumbnail {
    --border-radius: 10px;
  }
  
  .list-doctors ion-item {
    background-color:#f7be3021;
    border-radius: 10px;
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
    margin-left:10px;
    opacity: 0.8;
  }
  
  .card-categories ion-icon {
    font-size: 40px;
    margin-bottom: 8px;
  }
    /* Material Design styles */
  
    
     </style>
     