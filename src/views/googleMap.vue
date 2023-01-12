    <template>

<div>
    <b>Start:</b>
    <select v-model="start">
      <option value="chicago, il">Chicago</option>
      <option value="st louis, mo">St Louis</option>
      <option value="joplin, mo">Joplin, MO</option>
    </select>
    <b>End:</b>
    <select v-model="end">
      <option value="chicago, il">Chicago</option>
      <option value="st louis, mo">St Louis</option>
      <option value="joplin, mo">Joplin, MO</option>
    </select>
    <ion-icon :icon="camera"></ion-icon>



    <GMapMap :zoom="10"       style="width: 100vw; height: 100vh"
 :center="{ lat: 41.85, lng: -87.65 }">
      <DirectionsRenderer travelMode="DRIVING" :origin="origin" :destination="destionation"/>
      <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      
    />
    </GMapMap>
  </div>
        </template>
        
        <script lang="ts">
        import { IonIcon } from '@ionic/vue';

import DirectionsRenderer from '../js/DirectionsRenderer.js'
import * as  decode from '../js/decode.js'
import {camera}  from 'ionicons/icons';

            import { defineComponent } from 'vue';

            export default defineComponent({
            components: {
                DirectionsRenderer,IonIcon
            },
            
            data(){
                return{
                  camera:camera,
                    start: "" as any ,
    end: "" as any ,
                    center: { lat: 37.7749, lng: -122.4194 },
   
          markers: [
            {
            position: {
                lat: 37.7749, lng: 6.842120
            },
            }
            , // Along list of clusters
        ]
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
            methods:{
        
        },
    
        mounted: function(){
       /*   const myTimeout = setTimeout(()=>
       {
        this.start = 'lyon',
        this.end = 'paris'
     //  this.end = 'okland' 
       }
       , 
       900);*/
       setTimeout(()=>
       {
        decode.decode(this.center.lat, this.center.lng,(result :any )=>{         
         //    alert(result)
             this.start = result,
       this.end = 'okland' 
    }) 
       }
       , 
       900)
     
       

  },
            });
        
        
        </script>
        