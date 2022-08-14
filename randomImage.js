const imageContainer = document.getElementById("randomImage");
const images=["traveler (1).png","traveler.png","traveller (1).png","traveller.png"];



const randomImg=images[Math.floor(Math.random() * images.length)];
const bgImg=document.createElement("img");
const mainImg=document.querySelector("#randomImage");


bgImg.src=`img/${randomImg}`;
mainImg.appendChild(bgImg);



