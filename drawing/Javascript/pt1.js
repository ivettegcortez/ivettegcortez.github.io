// javascript code

const circlegrid = document.querySelector("#container");
const dogface = document.querySelectorAll(".dogright");
const catface = document.querySelectorAll(".catleft");




// this handles the circles and their opacity

function changeColordog(event){
	if (event.target.className == "dogright"){
		for(let i = 0; i < dogface.length; i++){
			// dogface[i].style.opacity = "0.5";
			dogface[i].style.filter = "grayscale(100%)";
		}
		// event.target.style.opacity = "1.0";
		event.target.style.filter = "hue-rotate(100deg)";
		// keep the selected image opaque
		event.target.addEventListener("mouseout", resetColordog, false);
		
	}
	event.stopPropagation();
}



function changeColorcat(event){
	if (event.target.className == "catleft"){
		for(let i = 0; i < catface.length; i++){
			// catface[i].style.opacity = "0.5";
			catface[i].style.filter = "grayscale(100%)";
		}
		// event.target.style.opacity = "1.0";
		event.target.style.filter = "hue-rotate(100deg)";
		// keep the selected image opaque
		event.target.addEventListener("mouseout", resetColorcat, false);
	}
	event.stopPropagation();
}

function resetColordog() {
	for (let i = 0; i < dogface.length; i++) {
   		// dogface[i].style.opacity = "1.0";
   		dogface[i].style.filter = "grayscale(0%)";
   		dogface[i].style.filter = "hue-rotate(0deg)";

	}
}

function resetColorcat() {
	for (let i = 0; i < catface.length; i++) {
    	// catface[i].style.opacity = '1.0';
    	catface[i].style.filter = "grayscale(0%)";
    	catface[i].style.filter = "hue-rotate(0deg)";

	}
}



// detect mouse hover on grid
circlegrid.addEventListener('mouseover', changeColordog, false); 
circlegrid.addEventListener('mouseover', changeColorcat, false); 

let xBrowserScaling;
let yBrowserScaling;

function scaling(){
	let wbrowser = window.innerWidth;
	let hbrowser = window.innerHeight;

	xBrowserScaling = wbrowser / 120;
	yBrowserScaling = hbrowser / 120;
}

let xcoordinate;
let ycoordinate;
function position(event){
	xcoordinate = event.clientX;
	ycoordinate = event.clientY;
	console.log(xcoordinate);
	console.log(ycoordinate);
	updatelocation(xcoordinate, ycoordinate);

}


function updatelocation(xcoordinate, ycoordinate){
	// get the coordinates relative to the browser window
	let xupdate = 60 - Math.ceil(ycoordinate, yBrowserScaling);
	console.log('X rotation: ' + xupdate); // 0 deg rotation at page center

	let yupdate = (-60) - Math.ceil(xcoordinate, xBrowserScaling);
	console.log("Y rotation: " + yupdate);

	// make the persepctive change so that the transform can happen
	for (let i = 0; i<dogface.length; i++){
		dogface[i].style.transform = "rotateX(" + xupdate + "deg) " + "rotateY(" + yupdate + "deg)";

	}

	for (let i =0; i<catface.length; i++){
		catface[i].style.transform = 'rotateX(' + xupdate + 'deg) ' + 'rotateY(' + yupdate + 'deg)';
	}


}

// function followMouse(event){
// 	for(let i = 0; i<dogface.length;i++){
// 		dogface[i].style.left = event.pageX + 'px';
// 		dogface[i].style.top = event.pageY + 'px';
// 	}
// }

// update scale when the page loads
window.addEventListener('load', scaling);

// update scale when the window is resized
window.addEventListener('resize', scaling);

// detect cursor movements in browser window
window.addEventListener('mousemove', position);

// window.addEventListener('mousemove', followMouse);







