// javascript for the home screen



var date = new Date();
var day = date.getDay();

let music = document.querySelector('audio');
// let songName = document.getElementById('audiotitle');

// music changes in home screen based on day of the week

function musicChange(){
	console.log("Day: " + day);
	if (day == 1 || day == 2 || day == 3){
		// monday
		if(day == 1){
			// songName.textContent = "The Muffin Song";
			music.src = "audio/muffin-song.mp3";
		}
		// tuesday
		else if(day == 2){
			// songName.textContent = "Black M - Sur Ma Route";
			music.src = "audio/black-m_sur-ma-route.mp3";
		}
		// wednesday
		else{
			// songName.textContent = "Danny Ocean - Epa Wei";
			music.src = "audio/danny-ocean_epa-wei.mp3";
		}
	} else if (day == 4 || day == 5){
		// thursday
		if(day == 4){
			// songName.textContent = "Pentagon - Naughty Boy";
			music.src = "audio/pentagon-naughty-boy.mp3";
		}
		// friday
		else{
			// songName.textContent = "The Cheetah Girls - Strut";
			music.src = "audio/cheetah-girls_strut.mp3";
		}
		// saturday
	} else if (day == 6){
		// songName.textContent = "Flo-Rida ft Maluma - Hola";
		music.src = "audio/florida-maluma_hola.mp3";
		
	} else {
		// songName.textContent = "Noel - Your Voice";
		music.src = "audio/noel_your-voice.mp3";
	}
}
window.onload = musicChange;

const circlegrid = document.querySelector("#projects");
const circles = document.querySelectorAll(".circle");

function circleChange(event){
	if(event.target.className == "circle"){
		for(let i =0; i<circles.length;i++){
			circles[i].style.opacity = "0.5";
		}
		event.target.style.transform = "scale(1.3)";
		event.target.style.opacity = "1.0"

		event.target.addEventListener("mouseout", circleChangeReset, false);
	}
	event.stopPropagation();
}


function circleChangeReset(){
	for(let i = 0;i<circles.length;i++){
		circles[i].style.opacity = "1.0";
		circles[i].style.transform = "scale(1)";
	}
}

circlegrid.addEventListener('mouseover', circleChange, false);


function visualart(){
	location.href = "visual-art/visualart.html";
}

function digitalart(){
	location.href = "digital-art/digitalart.html";
}

function videoart(){
	location.href = "video-art/videoart.html";
}



