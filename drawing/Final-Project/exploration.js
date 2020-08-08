// javascript for the main page of the final projects

const canvas = document.querySelectorAll('canvas')[0];
const context = canvas.getContext('2d');

const canvas2 = document.querySelectorAll('canvas')[1];
const context2 = canvas2.getContext('2d');

const canvas3 = document.querySelectorAll('canvas')[2];
const context3 = canvas3.getContext('2d');

const img1 = document.getElementById('city');
const img2 = document.getElementById('tropical');
const img3 = document.getElementById('nature');

const feather = document.getElementById('feather');
const flower = document.getElementById('flower');
const leaf = document.getElementById('leaf');


let pxScale = window.devicePixelRatio;

// const path1 = new Path2D("M553.22,478.87c0,0-67.17-50.38-78.62-60.3c0,0-16.79,10.69-51.14,0c0,0,16.59,1.24,18.91-2.63c0,0-8.52,6.71-31.48-3.35c0,0,10.06,0.65,10.58-1.35c0,0-7.48,7.29-48.25-20.06c0,0-177.4-76.93-189.86-81.77c0,0-70.92-33.66-71.82-46.23c0,0-7.19-14.94,117.27,19.47c0,0,133.38,30.84,197.97,80.13c0,0,10.8,6.98,15.05,10.38c0,0,7,5.45,7.44,2.09c0,0,3.2,7.25,6.37,2.55c0,0-0.62-2.98,2.78,5.1l-1.22-5.87c0,0,14.15,10.54,20.1,38.15c0,0,62.64,44.18,75.92,58.62C566.51,488.23,553.22,478.87,553.22,478.87z");

function setup(){
	// full browser canvas
	// Browserwidth = window.innerWidth;
	// Browserheight = window.innerHeight;

	// fixed canvas size
	width = canvas.width;
	height = canvas.height;

	// set the css display size
	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';

	canvas2.style.width = width + 'px';
	canvas2.style.height = height + 'px';

	canvas3.style.width = width + 'px';
	canvas3.style.height = height + 'px';

	// fix the width and height scale with the pixels of the screen
	canvas.width = width * pxScale;
	canvas.height = height * pxScale;

	canvas2.width = width * pxScale;
	canvas2.height = height * pxScale;

	canvas3.width = width * pxScale;
	canvas3.height = height * pxScale;

	// normalize the coordinate system so that the sizing is what I originally wanted
	context.scale(pxScale, pxScale);
	context2.scale(pxScale, pxScale);
	context3.scale(pxScale, pxScale);

	// call functions wanted because setup is going to be loaded

	canvas1draw();
	canvas2draw();
	canvas3draw();

}
let color1 = 0;
let color2 = 0;
let color3 = 0;
let degrees1 = 0;
let degrees2 = 0;
let degrees3 = 0;

function canvas1draw(){
	context.clearRect(0,0,width,height);

	context.drawImage(img1, 0, 0, 480, 900);
	// context.drawImage(feather, 0, 0, 480, 900);

	context.save();
	// translate to center of canvas
    context.translate(width/2, height/4);

	context.rotate((Math.PI / 180) * degrees1); // calculate radians from degrees

	// adjust for height and width of square (normally drawn from the top left corner)
    context.translate(-100, -100);


	// context.fillStyle = "rgba(230, 157, 42, 0.7)";


	context.fillStyle = "hsla(" + color1 + ", 54%, 47%, 0.5)";

	if (color1>=360){
		color1 = 0;
	}
	color1 += 1;

	// pixel compositing
    context.globalCompositeOperation = 'exclusion';

	// context.beginPath();
	// context.moveTo(240,100);
	// context.lineTo(340, 200);
	// context.lineTo(240, 300);
	// context.lineTo(140, 200);
	// context.closePath();

	// context.beginPath();
	// context.moveTo(0, 0);
	// context.lineTo(100, 100);
	// context.lineTo(0, 200);
	// context.lineTo(-100, 100);
	// context.closePath()



	context.fillRect(0, 0, 200, 200);



	context.save();

	context.restore();

	context.restore();
	degrees1 += 2;



	// context.fill(path1);

	// drawing text
    // context.font = "40px sans-serif";
    // context.textBaseline = "middle";
    // context.textAlign = "center";
    // context.fillStyle = 'white'; 
    // context.fillText("City", width/2, height/3.25);


	requestAnimationFrame(canvas1draw);
}

function canvas2draw(){
	context2.clearRect(0,0,width,height);

	context2.drawImage(img2, 0, 0, 480, 900);
	// context2.fillStyle = "rgba(98, 78, 148, 0.7)";

	context2.save();
	// translate to center of canvas
    context2.translate(width/2, height/4);

	context2.rotate((Math.PI / 180) * degrees2); // calculate radians from degrees

	// adjust for height and width of square (normally drawn from the top left corner)
    context2.translate(-100, -100);


	context2.fillStyle = "hsla(" + color2 + ", 54%, 47%, 0.5)";

	if (color2>=360){
		color2 = 0;
	}
	color2 += 1;

	// pixel compositing
    context2.globalCompositeOperation = 'exclusion';

	// context2.beginPath();
	// context2.moveTo(240,100);
	// context2.lineTo(340, 200);
	// context2.lineTo(240, 300);
	// context2.lineTo(140, 200);
	// context2.closePath();

	context2.fillRect(0, 0, 200, 200);


	context2.save();
	context2.restore();


	context2.restore();
	degrees2 += 2;



	// drawing text
    // context2.font = "40px sans-serif";
    // context2.textBaseline = "middle";
    // context2.textAlign = "center";
    // context2.fillStyle = 'white'; 
    // context2.fillText("Tropical", width/2, height/3.25);


	requestAnimationFrame(canvas2draw);


}

function canvas3draw(){
	context3.clearRect(0,0,width,height);

	context3.drawImage(img3, 0, 0, 480, 900);

	context3.save();
	// translate to center of canvas
    context3.translate(width/2, height/4);

	context3.rotate((Math.PI / 180) * degrees3); // calculate radians from degrees

	// adjust for height and width of square (normally drawn from the top left corner)
    context3.translate(-100, -100);

	// context3.fillStyle = "rgba(232, 227, 132, 0.9)";

	context3.fillStyle = "hsla(" + color3 + ", 54%, 47%, .5)";


	if (color3>=360){
		color3 = 0;
	}
	color3 += 1;

	// pixel compositing
    context3.globalCompositeOperation = 'exclusion';

	// context3.beginPath();
	// context3.moveTo(240,100);
	// context3.lineTo(340, 200);
	// context3.lineTo(240, 300);
	// context3.lineTo(140, 200);
	// context3.closePath();

	context3.fillRect(0, 0, 200, 200);


	context3.save();
	context3.restore();
	context3.restore();

	degrees3 += 2;



	// drawing text
    // context3.font = "40px sans-serif";
    // context3.textBaseline = "middle";
    // context3.textAlign = "center";
    // context3.fillStyle = 'white'; 
    // context3.fillText("Nature", width/2, height/3.25);

	requestAnimationFrame(canvas3draw);
}




// feather for city

feather.onclick = function featherfly(){
	feather.style.animation = "moveExpand 3s forwards";

}

feather.onanimationend = function animatefeather(){
	redirect1()
}

function redirect1(){
	location.href = "city/city.html";
}

// flower for tropical

flower.onclick = function flowerfly(){
	flower.style.animation = "moveExpand 3s forwards";

}

flower.onanimationend = function animateflower(){
	redirect2()
}
function redirect2(){
	location.href = "tropical/tropical.html";
}

// flower for nature

leaf.onclick = function leaffly(){
	leaf.style.animation = "moveExpand 3s forwards";
}

leaf.onanimationend = function animateleaf(){
	redirect3()
}
function redirect3(){
	location.href = "nature/nature.html";
}


window.addEventListener('load', setup);
// window.addEventListener('resize', setup);







