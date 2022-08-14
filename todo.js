const todoContainer = document.getElementById("todoForm");
const todoInput = document.querySelector("main form input")
const cityList = document.getElementById("cityList")
const CITIES_KEY = "cities";
let cities = [];



function saveCities(){
    localStorage.setItem(CITIES_KEY,JSON.stringify(cities));
}

function buttonClicked(event){
    const li = event.target.parentElement;
    li.remove();
    cities = cities.filter((city) => city.id !== parseInt(li.id));
    saveCities();
}
function paintCity(newCityObj){
    const li = document.createElement("li")
    li.id=newCityObj.id;
    const span = document.createElement("span")
    span.innerText=newCityObj.text;
    const button =document.createElement("button");
    const cancelImg = document.createElement("img");
    cancelImg.src=`img/airplane.png`;
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click",buttonClicked);
    button.appendChild(cancelImg);
    cityList.appendChild(li);
    
    
}
function addCity(event){
    event.preventDefault();
    const newCity= todoInput.value;
    todoInput.value="";
    const newCityObj={
        text:newCity,
        id: Date.now()
    };
    cities.push(newCityObj);
    paintCity(newCityObj);
    saveCities();
}


todoContainer.addEventListener("submit",addCity)

let savedCities = localStorage.getItem(CITIES_KEY);
if (savedCities !==null){
    const parsedCities = JSON.parse(savedCities);
    cities = parsedCities
    parsedCities.forEach(paintCity);
}

