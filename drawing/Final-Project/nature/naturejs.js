const canvas = document.getElementById('c1');
const context = canvas.getContext('2d');
const mountain1 = document.getElementById('mountain');
const mountain2 = document.getElementById('mountains2');

let width;
let height = 420;


function setup(){
	width = window.innerWidth;

	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';

	let scale = window.devicePixelRatio;
	canvas.width = width * scale;
	canvas.height = height * scale;


	context.scale(scale, scale);

	draw();

}

mountain1.onclick = function animate(){
	mountain1.style.animation = "openleft 7s forwards";
	mountain2.style.animation = "openright 7s forwards"
}

mountain2.onclick = function animate2(){
	mountain1.style.animation = "openleft 7s forwards";
	mountain2.style.animation = "openright 7s forwards"
}

function draw(){
	let gradient = context.createLinearGradient(0, 0, 0, 170);
	// orange
	gradient.addColorStop(0, "#eb933b");
	// yellow
	gradient.addColorStop(1, "#fff48f");


	context.fillStyle = gradient;
	context.fillRect(0, 0, width, height);


	var circleGradient = context.createRadialGradient(570, 320, 40, 570, 320, 140);
	circleGradient.addColorStop(0, "white");
	circleGradient.addColorStop(1, "yellow");

	context.beginPath();
    // x, y, radius X, radius Y, rotation, start angle, end angle, counterclockwise (optional)
    context.ellipse(570, 320, 100, 100, 0, 0, 2 * Math.PI, false);
    context.fillStyle = circleGradient;
    context.fill();

}

window.addEventListener('load', setup);