const button = document.querySelector("form button");
const nameForm = document.querySelector("form");
const nameInput = document.querySelector("form input")
const userInfo = document.getElementById("ballon")
localStorageName();

function localStorageName (){
    if (localStorage.getItem("username") === null)
    {}
    else { nameInput.value = `Hi  ${localStorage.getItem("username")}`
    userInfo.innerText= `Hey  ${localStorage.getItem("username")}!  Come with me?`
            button.classList.add("hidden")}
}


function nameSubmitted(e){
    if (localStorage.getItem("username") === null){
    e.preventDefault();
    const userName= nameInput.value;
    localStorage.setItem("username",userName);
    nameInput.value = `Hi  ${userName}`
    userInfo.innerText=  `Hey  ${localStorage.getItem("username")}!  Come with me?`
    button.classList.add("hidden")
}
    else {nameInput.value = `Hi  ${userName}`
    button.classList.add("hidden")}
}





nameForm.addEventListener("submit",nameSubmitted)