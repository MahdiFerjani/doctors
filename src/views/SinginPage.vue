<template>
  
    <ion-page>

        <ion-content :fullscreen="false">
            <div class="center">
                <ion-input v-model="user.email"  placeholder="Email" class="custom"></ion-input>
                <ion-input v-model="user.password" type="password" placeholder="Password" class="custom"></ion-input>
                <ion-button class="butt" @click="handleLogin()" shape="round" color="#FCAFB7" size="large">Sign in</ion-button>
            </div>
        </ion-content>

    </ion-page>
 
</template>
<script lang="ts">
import { IonContent,  IonPage,  IonButton,IonInput } from '@ionic/vue';
import { defineComponent } from 'vue'
export default defineComponent({

    name: 'SigninPage',
    components: {
 
      IonContent,
      IonInput,
      IonPage,
      IonButton
    },
    data() {
     
        return {
          user : {} as any ,
            isActive: true,
            hasError: false ,
            loading: false,
      message: "",
  
      loggedIn : true as any 
        }
    },
    computed: {
    LoggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    
    if (this.loggedIn) {
      this.$router.push("/signin");
    }
  },
    methods: {
        handleLogin() {
      this.loading = true;

      this.$store.dispatch("auth/login", this.user).then(
        () => {
          this.$router.push("/list");
        },
        (error : any) => {
            this.loading = false;
            this.message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
  mounted: function(){
     //  alert('hh)')
  //this.OneSignalInit()

  },
    
})
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
    --background: linear-gradient(90deg, rgb(116, 211, 168) 0%, rgb(46, 89, 198) 35%, rgb(11, 183, 217) 100%);
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    overflow: hidden;
}

ion-content {
    --background: url(../../public/assets/imgs/3.png) 0 0/100% 100% no-repeat;
}

.center {
    position: absolute;
    top: 504px;
    margin: auto;
    width: 100%;
}

.custom {
    --background: #F2F2F3;
    --color: rgb(27, 22, 22);
    --placeholder-color: rgb(66, 66, 66);
    --placeholder-opacity: .8;
   
    border-radius: 8px;
    --padding-bottom: 10px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 10px;
    width: 80%;
    margin: auto;
    margin-top: 10px;

}

ion-button {


    background-color: #2C2B47;
    
    border-radius: 8px;
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;


}
</style>