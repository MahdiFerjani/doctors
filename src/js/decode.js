
export function decode (lat,long,myCallback)  {
    const geocoder = new window.google.maps.Geocoder();
    let adresse = null

const locationss = { 
    lat : parseFloat(lat),
    lng : parseFloat(long)
} ;                
    geocoder.geocode( { 'location': locationss}, (results, status) => {
                if (status == window.google.maps.GeocoderStatus.OK) {
                 //   console.log("results") 
                //  console.log(results[0].formatted_address) //returns correct data
               adresse = results[0].formatted_address 
               console.log(results[0])
               myCallback (results[0].formatted_address)
              
                          } 
                  }); 
                                       
 }

  
  // 👇️ named export (same as previous code snippet)
