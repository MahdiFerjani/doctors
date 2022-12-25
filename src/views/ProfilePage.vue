<template>
 <ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button @click="closeModal">
        <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="end">
      <ion-icon slot="icon-only" name="ellipsis-vertical"></ion-icon>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <div id="profile-info">
    <img id="profile-image"
      :src="'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true'">
    <span id="profile-description">Cardiologist</span>
    <h3 id="profile-name">Dr. Alan C Braverman</h3>


    <div class="ion-text-center group-actions">
      <ion-button :style="{background:'#5260ff29'}">
        <ion-icon slot="icon-only" name="chatbox" color="tertiary"></ion-icon>
      </ion-button>
      <ion-button :style="{background:'#ffc40929'}"> 
        <ion-icon slot="icon-only" name="call" color="warning"></ion-icon>
      </ion-button>
      <ion-button :style="{background:'#BEC0C629'}">
        <ion-icon slot="icon-only" name="videocam" color="medium"></ion-icon>
      </ion-button>
      <ion-button :style="{background:'#eb445a29'}">
        <ion-icon slot="icon-only" name="navigate" color="danger"></ion-icon>
      </ion-button>

    </div>

  </div>

  <ion-item lines="none" class="title">
    <ion-label>
      <div class="sub-title">
        <strong slot="start">About</strong>
      </div>
      <p id="about-description">Dr. Alan C. Braverman is a cardiologist in Saint Louis, Missouri and is addiliadted with
        multiple hospitals in the area. </p>
    </ion-label>
  </ion-item>

  <ion-item lines="none" class="title schedules">
    <ion-label>
      <div class="sub-title">
        <strong slot="start">Schedules</strong>
      </div>
    </ion-label>

    <ion-chip class="chip-months">
      <ion-icon name="chevron-back"></ion-icon>
      <ion-label>
        <strong>January</strong>
      </ion-label>
      <ion-icon name="chevron-forward"></ion-icon>
    </ion-chip>
  </ion-item>

  <ion-grid>

    <ion-row>

      <ion-col size="1.68">
        <ion-badge class="group-week-day" color="tertiary">

          <div class="week">
            Su
          </div>
          <div class="day">
            <ion-text color="light">
              10
            </ion-text>
          </div>
        </ion-badge>
      </ion-col>

      <ion-col size="1.68">
        <ion-badge class="group-week-day" color="light">
          <div class="week">
            Mo
          </div>
          <div class="day">
            11
          </div>
        </ion-badge>
      </ion-col>
      <ion-col size="1.68">
        <ion-badge class="group-week-day" color="light">
          <div class="week">
            Tu
          </div>
          <div class="day">
            12
          </div>
        </ion-badge>
      </ion-col>
      <ion-col size="1.68">
        <ion-badge class="group-week-day" color="light">
          <div class="week">
            We
          </div>
          <div class="day">
            13
          </div>
        </ion-badge>
      </ion-col>
      <ion-col size="1.68">
        <ion-badge class="group-week-day" color="light">
          <div class="week">
            Th
          </div>
          <div class="day">
            14
          </div>
        </ion-badge>
      </ion-col>
      <ion-col size="1.68">
        <ion-badge class="group-week-day" color="light">
          <div class="week">
            Fri
          </div>
          <div class="day">
            15
          </div>
        </ion-badge>
      </ion-col>
      <ion-col size="1.68">
        <ion-badge class="group-week-day" color="light">
          <div class="week">
            Sa
          </div>
          <div class="day">
            <ion-text>
              16
            </ion-text>
          </div>
        </ion-badge>
      </ion-col>
    </ion-row>
  </ion-grid>

  <div class="ion-text-center btn-time-appointment">

    <ion-button class="time">
      <ion-icon name="time" color="secondary"></ion-icon>
    </ion-button>
    <ion-button color="tertiary" class="appointment">
      Appointment
    </ion-button>
  </div>

</ion-content>
</template>

<script>
import { IonContent, IonHeader, IonToolbar,modalController } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModaL",
  components: { IonContent, IonHeader,  IonToolbar },
  setup() {
    const closeModal = () => {
      modalController.dismiss();
    };
    return { closeModal };
  },
});
</script>
<style scoped>
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
	margin: 25px;
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