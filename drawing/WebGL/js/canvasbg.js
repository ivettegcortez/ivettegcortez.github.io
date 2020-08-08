const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const image = document.getElementById('trees');


let width;
let height;


function setup(){

	width = window.innerWidth;
	height = window.innerHeight;


	// set the css display size
	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';


    // set actual, device pixel size (scaled for extra pixel density)
    let scale = window.devicePixelRatio;
    canvas.width = width * scale;
    canvas.height = height * scale;


    // normalize coordinate system to use CSS pixels
    context.scale(scale, scale);
    
    draw();
     
};

function draw(){

	// let pixels = context.getImageData(0, 0, canvas.width, canvas.height);
 //        let pixelData = pixels.data;
        
 //        // pixels by x, y coordinate
 //        for (let y = 0; y < canvas.height; y++) { // for every row
 //          for (let x = 0; x < canvas.width; x++) { // visit every column (pixel)
 //            let index = (x + y * canvas.width) * 4 // index position of every pixel!

 //            pixelData[index + 0] = 255; // red
 //            pixelData[index + 1] = (x / canvas.width) * 255; // green
 //            pixelData[index + 2] = (y / canvas.height) * 255; // blue
 //            pixelData[index + 3] = 255; // alpha
 //          }
 //        }

 //        context.putImageData(pixels, 0, 0);


    context.drawImage(image, 0, 0, width, height);


     let spacing = 80;
      let radius = 10;
      let x = 15;
      let y = 20;
      let count = 0;

      for (let row = 0; row < height; row += spacing) {
        for (let col = 0; col < width; col += spacing) {

	      // body of panda
	     context.beginPath();
		  context.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);
		  context.fillStyle = "white";
		  context.fill();
		  context.closePath();


		  // eyes
		  context.beginPath();
		  context.ellipse(x-3,y, 2, 2, 0, 0, 2*Math.PI)
		  context.fillStyle = "black";
		  context.fill();
		  context.closePath();

		  context.beginPath();
		  context.ellipse(x+3,y, 2, 2, 0, 0, 2*Math.PI)
		  context.fill();
		  context.closePath();

		  // nose
			context.beginPath();
		  context.ellipse(x,y+5, 2, 2, 0, 0, Math.PI)
		  context.fill();
		  context.closePath();

		  // ears

		  context.beginPath();
		  context.ellipse(x-8,y-8, 4, 4, 0, 0, 2*Math.PI)
		  context.fill();
		  context.closePath();

		  context.beginPath();
		  context.ellipse(x+8,y-8, 4, 4, 0, 0, 2*Math.PI)
		  context.fill();
		  context.closePath();

		  x += spacing;


		}
		x = 15;
		y+= spacing;
	}
	
}

window.addEventListener('load', setup);

// resize canvas when window is resized (for full browser canvas only)
window.addEventListener('resize', setup);


