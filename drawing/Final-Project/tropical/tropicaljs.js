const canvas = document.getElementById('c1');
const context = canvas.getContext('2d');
const image = document.getElementById('sand');
// const image2 = document.getElementById('waves');

const canvas2 = document.getElementById('c2');
const context2 = canvas2.getContext('2d');

let width;
let height = 370;



function setup(){
	width = window.innerWidth;

	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';

	canvas2.style.width = width + 'px';
	canvas2.style.height = height + 'px';

	let scale = window.devicePixelRatio;
	canvas.width = width * scale;
	canvas.height = height * scale;

	canvas2.width = width * scale;
	canvas2.height = height * scale;


	context.scale(scale, scale);
	context2.scale(scale,scale);
	draw();


}


function draw(){
	// sand
	context.drawImage(image, 0,0, width, height);



}

window.addEventListener('load', setup);