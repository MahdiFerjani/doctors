<template>
  
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>
  </div>
 
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({

    name: 'ProfilePage',
    components: {
 
   
    },
    data() {
     
        return {
        
        }
    },
    computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  
    methods: {
   
  },
  mounted: function(){
     //  alert('hh)')
  //this.OneSignalInit()
  if (!this.currentUser) {
      this.$router.push('/login');
    }
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