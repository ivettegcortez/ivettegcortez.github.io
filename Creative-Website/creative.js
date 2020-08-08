// this is the javascript for the professional website
// goals:
// have a toggle kind of button where if clicked the section of each heading is shown and scrolled down
// then if clicked on more info then all the info's text for each art piece will appear



var date = new Date();
var day = date.getDay();

var music = document.querySelector("audio");
var header_color = document.querySelector("header");
var h2 = document.querySelectorAll("h2");
var h3 = document.querySelectorAll("h3");
var i;

let songName = document.getElementById('audiotitle');
let plusArt = document.getElementById('ArtInfo');
let artStyle = document.getElementById('Art').style;
let digitalStyle = document.getElementById('digital').style;
let plusDigital = document.getElementById('DigitalInfo');

function mtw(){
	console.log("Day: " + day);
	header_color.style.backgroundColor = "#eda02d";
	// pink
	header_color = document.querySelector("header").style.backgroundColor = "#eda02d";
	for (i = 0; i<h2.length; i++){
		h2[i].style.color = header_color;
	}
	for(i = 0; i<h3.length; i++){
		h3[i].style.color = header_color;
	}

}
function thf(){
	console.log("Day: " + day);
	header_color.style.backgroundColor = "#47c1d1";
	// light blue
	header_color = document.querySelector("header").style.backgroundColor = "#63d4e2";
	for (i = 0; i<h2.length; i++){
		h2[i].style.color = header_color;
	}
	for(i = 0; i<h3.length; i++){
		h3[i].style.color = header_color;
	}
}
function weekend(){
	console.log("Day: " + day);
	header_color.style.backgroundColor = "#73c172";
	// green
	header_color = document.querySelector("header").style.backgroundColor = "#73c172";
	for (i = 0; i<h2.length; i++){
		h2[i].style.color = header_color;
	}
	for(i = 0; i<h3.length; i++){
		h3[i].style.color = header_color;
	}
}
	if (day == 1 || day == 2 || day == 3){
		mtw();
		if(day == 1){
			songName.textContent = "The Muffin Song";
			music.src = "audio/muffin-song.mp3";
			
		}
		else if(day == 2){
			songName.textContent = "Black M - Sur Ma Route";
			music.src = "audio/black-m_sur-ma-route.mp3";
		}
		else{
			songName.textContent = "Danny Ocean - Epa Wei";
			music.src = "audio/danny-ocean_epa-wei.mp3";
		}
	} else if (day == 4 || day == 5){
		thf();
		if(day == 4){
			songName.textContent = "Pentagon - Naughty Boy";
			music.src = "audio/pentagon-naughty-boy.mp3";
		}
		else{
			songName.textContent = "The Cheetah Girls - Strut";
			music.src = "audio/cheetah-girls_strut.mp3";
		}
	} else if (day == 6){
		weekend();
		songName.textContent = "Flo-Rida ft Maluma - Hola";
		music.src = "audio/florida-maluma_hola.mp3";
		
	} else {
		weekend();
		songName.textContent = "Noel - Your Voice";
		music.src = "audio/noel_your-voice.mp3";
	}

plusArt.onclick = function reveal(){
	if(artStyle.display == "none"){
		artStyle.display = "block";
		plusArt.textContent = "-"
		// artStyle.padding = "10em";
	}else{
		artStyle.display = "none";
		plusArt.textContent = "+";
	}
}

plusDigital.onclick = function digReveal(){
	if(digitalStyle.display == "none"){
		digitalStyle.display = "block";
		plusDigital.textContent = "-"
		// artStyle.padding = "10em";
	}else{
		digitalStyle.display = "none";
		plusDigital.textContent = "+";
	}
}



