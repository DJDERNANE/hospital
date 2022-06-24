var image = document.querySelector(".view");
var listImg = ['imgs/pic3.png','imgs/pic4.png'];
var i =0;
setInterval( function(){
    i++;
  if(i >= listImg.length){
        i = 0;
    }
    image.src=listImg[i];
},2200)
var btn = document.querySelector(".spanbar");
nav = document.querySelector(".navigation_bar"),
links = document.querySelector("ul");
btn.addEventListener("click",function(){
    btn.classList.toggle('clicked');
    links.classList.toggle('clicked');
})