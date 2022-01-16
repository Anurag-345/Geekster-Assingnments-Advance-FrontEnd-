navigator.geolocation.getCurrentPosition(function(event){

    console.log(event.coords.latitude);
    console.log(event.coords.longitude);

    var map = L.map("map").setview([21.2513844, 81.6296413],13);

    L.tileLayer()

},function () {
    alert('could not get your location');
})