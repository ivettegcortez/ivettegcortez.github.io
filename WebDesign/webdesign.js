// javascript for webdesign page
let xBrowserScaling;
let yBrowserScaling;

function scaling(){
	let wbrowser = window.innerWidth;
	let hbrowser = window.innerHeight;

	xBrowserScaling = wbrowser / 120;
	yBrowserScaling = hbrowser / 120;
}

let svgelement = document.querySelectorAll('.arrow');


$('.svg').on("mouseover", function(){
	$(this).css("fill", "gold");

}), 

$('.svg').on("mouseout", function(){
	$(this).css("fill", "#92E6DD");
});

function webdevRedirect(){
	location.href = "../WebDev/index.html";
}

function creativeSite(){
	location.href = "../Creative-Website/index.html";
}

function informationalSite(){
	location.href = "../Informational-Website/index.html";
}
function drawingSite(){
	location.href = "../drawing/index.html";
}