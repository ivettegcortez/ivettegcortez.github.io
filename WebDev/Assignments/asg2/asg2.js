//this is the javascript for assignment 2
// change at least 5 styles, include an h1 change
// changes = bg color, h1 color, border type, line height, font, border color



function darkMode(){
	var h1elements = document.getElementsByTagName('h1');
	for (var i = 0; i < h1elements.length; i++) {
	h1elements[i].style.color = "#e3c027";
	//goldish color that is visible enough so that it is not hard to read for the user
	}

	var h2tags = document.getElementsByTagName('h2');
	for (var i = 0; i < h2tags.length; i++) {
		h2tags[i].style.color = "white";
	}

	var headerChange = document.getElementsByTagName('header');
	headerChange[0].style.background = "#ffffff";

	var mainChange = document.getElementsByTagName('main');
	mainChange[0].style.borderColor = "#ffffff";
	mainChange[0].style.borderStyle = "double";
	mainChange[0].style.color = "#000000";

	var text = document.getElementsByTagName('p');
	for (var i = 0; i < text.length; i++){
		text[i].style.color = "#ffffff";
		text[i].style.lineHeight = "1.5";
	}
	var bodyChangemode = document.getElementsByTagName('body');
	bodyChangemode[0].style.background = "#000000";
	bodyChangemode[0].style.fontFamily = "Imperfecta";

	let footer = document.getElementsByTagName('footer');
	footer[0].style.background = "white";
	let footertext = document.querySelectorAll('.pfoot');
	for (var i = 0; i < footertext.length; i++){
		footertext[i].style.color = "black";
	}

	let labels = document.getElementsByTagName('label');
	for(var i = 0; i<labels.length; i++){
		labels[i].style.color = "white";
	}


}

function lightMode(){
	var h1elements = document.getElementsByTagName('h1');
	for (var i = 0; i < h1elements.length; i++) {
		h1elements[i].style.color = "white";
	}

	var h2tags = document.getElementsByTagName('h2');
	for (var i = 0; i < h2tags.length; i++) {
		h2tags[i].style.color = "black";
	}

	var headerChange = document.getElementsByTagName('header');
	headerChange[0].style.background = "#5290f2";


	var text = document.getElementsByTagName('p');
	for (var i = 0; i < text.length; i++){
		text[i].style.color = "#000000";
	}

	var bodyChangemode = document.getElementsByTagName('body');
	bodyChangemode[0].style.background = "#ffffff";
	bodyChangemode[0].style.fontFamily = "Helvetica";

	let footer = document.getElementsByTagName('footer');
	footer[0].style.background = "black";
	let footertext = document.querySelectorAll('.pfoot');
	for (var i = 0; i < footertext.length; i++){
		footertext[i].style.color = "white";
	}

	let labels = document.getElementsByTagName('label');
	for(var i = 0; i<labels.length; i++){
		labels[i].style.color = "black";
	}


}

var result;
var imgresult;

function randArray(){
	//array for the prize list
	var prizes = ["Peru", "Australia", "South Korea", "Thailand", "Spain"];
	//array for the images
	var imgarray = ["pics/peru.jpg", "pics/australia.jpeg", "pics/south-korea.jpg", "pics/thailand.jpeg", "pics/spain.jpg"]; 

	var list = "Here are the list of vacation places you could win a free flight to: \n";
	for (i=0;i<prizes.length;i++){
		list = list + "<br /> - " + prizes[i];
	}
	document.getElementById("show").innerHTML = list;
	//math.random always returns a number less than 1
	// have to multiply it by the number so it goes into the tens place
	var rando = Math.floor(Math.random()*prizes.length);
	result=prizes[rando];
	imgresult = imgarray[rando];
	document.getElementById("showButton").style="display:block";

	

		
}

function showb(){
	
	document.getElementById("prize").innerHTML = "You win a free trip to: <br /> <br />" + result + " <br />" ;
	document.getElementById("prize").innerHTML += "<img src= '" + imgresult +"' style='width:400px;'></img> " ;
	document.getElementById("prize").style.textAlign = "center";
}


function swapI(){
	var img1=document.getElementById("img1").src;
	var img2=document.getElementById("img2").src;;
	var temp=img1;
	document.getElementById("img1").src=img2;
	document.getElementById("img2").src=temp;
	
}

function swapT(){

	var p1 = document.getElementById("p1").innerHTML;
	var p2 = document.getElementById("p2").innerHTML;
	var temp = p1;
	document.getElementById("p1").innerHTML=p2;
	document.getElementById("p2").innerHTML=p1;



}


//figure out why stylesheet is not working

function newDoc(){
	document.open();

	//display the date
	//day, date, month, year
	var date = new Date();
	var dateofmonth = date.getDate();
	var day = date.getDay();
	var month = date.getMonth();
	var year = date.getFullYear();
	var dayofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var monthofyear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	document.write('<!DOCTYPE html><html lang = "en"><head><meta charset = "utf-8"><title>Llamas</title><link rel = "stylesheet" href = "asg2pt2.css"><meta name = "viewport" content = "width = device-width, initial-scale = 1.0"></head><body><header><div class="nav"><a href = "index.html">Back</a></div><h1>Llamas</h1></header><main><img src = "pics/llamas.jpg" width = "450" height = "225" alt = "Llamas"><p>Llamas are precious and from Peru. They were first domesticated and used as pack animals around 4,000 years ago in the Peruvian highlands. They can grow as much as 6ft tall and are apart of the camel family. They weigh an average of 280 to 450 pounds. Llamas are smart because they know their limit and if you give them too much to carry then they will just lie down or simply refuse to move. This is the history of the llamas.</p></main><footer><p><em>Live your life.</em></p>'+ dayofweek[day]+ ", " + monthofyear[month]+ " " + dateofmonth + ", "+ year + '</footer><script src = "js/jquery-3.3.1.min.js"></script><script src = "asg2.js"></script><script src = "js/parallax.min.js"></script></body></html>');
	document.close();

}

//make a form in the same pg
//have input values
//miles to kilometers
function convert(){
	var name = document.getElementById("firstname").value;
	var kg = document.getElementById("kg").value;
	var result = kg * 2.20462;
	document.getElementById("textarea").style = "display:block";
	document.getElementById("textarea").innerHTML = "Hi " + name + "! The conversion of " + kg + " kg comes out to be: " + result + " lbs.";

}



