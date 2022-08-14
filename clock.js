const clockContainer = document.getElementById("clockContainer");



function clock(){
  const time= new Date();
  const hours = String(time.getHours()).padStart(2,"0");
  const minutes = String(time.getMinutes()).padStart(2,"0");
  const seconds = String(time.getSeconds()).padStart(2,"0");
  clockContainer.innerHTML=`${hours}:${minutes}:${seconds}`

}
clock();
setInterval(clock,1000);