 const API_KEY = "fa54bdd798447c4fd5d0dd44a6d71f93"


function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
        const welcomeContainer = document.getElementById("welcomeContainer")
        const cityName = data.name;
        const weather = data.weather[0].main;
        welcomeContainer.innerHTML=`Hi there ${cityName}!!  Is it ${weather} outside?`
    })
}
function onGeoError(){
 alert("Please Allow to get you location")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError); 
