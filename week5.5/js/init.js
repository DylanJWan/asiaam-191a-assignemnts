// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}



// fetch("map.geojson")
//     .then(response => {
//         return response.json()
//     })
//     .then(data =>{
//         // Basic Leaflet method to add GeoJSON data
//         L.geoJSON(data, {
//                 pointToLayer: (feature, latlng) => { 
//                     return L.circleMarker(latlng, {color: feature.properties.color})
//                 }
//             }).bindPopup(layer => {
//                 return layer.feature.properties.place;
//             }).addTo(map);
//     })


const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSrf30ac2dDFL5_3paK9rnugj50Pj8F7E1eDJ_UG8sbz6O29ponl1dMwM1A3a6z7CuWS0Jmr6A0Xdat/pub?output=csv" 
       

function loadData(url){
            Papa.parse(dataUrl, {
                header: true,
                download: true,
                complete: function(results) {
                    console.log(results)
                    addMarker(results.lat, results.lng, results["What is the restaurant called?"],results["What is your favorite dish?"])
                }
            })
        }

loadData(dataUrl)

