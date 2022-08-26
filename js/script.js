const main = document.getElementById('main');
const image = document.getElementById('image');

const txt = document.querySelector(".title");;


function page_load(){
	main.classList.add("loaded");
	image.classList.add("loaded");
	txt.classList.add("loaded");
	
}
var imgArray = ["imgs/pic1.jpg","imgs/pic2.jpg","imgs/pic3.jpg"];
var textArray = ["<h1> Experts Consultancy </h1> Stay safe, Stay Healthy","<h1> Total Care </h1> Stay safe, Stay Healthy", "<h1> Child Medicines </h1> your Child "];
const text = document.getElementById('text');
const serpic = document.getElementById('ser-pic');
var i;
	i = 0;
	serpic.src=imgArray[0];
	text.innerHTML=textArray[0];
function servicesImage(){
	
	if (i<imgArray.length) {
		
		text.innerHTML=textArray[i];
		serpic.src=imgArray[i];
			i++;
	}
	else{
		i=0;
		text.innerHTML=textArray[i];
		serpic.src=imgArray[i];
	}
		
	

	
} 
setInterval(servicesImage, 3000);

const navlist = document.querySelector("ul");
function disnav() {
	navlist.classList.toggle("active");
}
function nonavlist(){
	navlist.classList.remove("active");
}

const navbar = document.querySelector(".navbar");
window.onscroll=()=>{
	if (window.scrollY>100) {
		navbar.classList.add("scrolled");
	}else{
		navbar.classList.remove("scrolled");
	}
}
