// js for city life

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const image = document.getElementById('cement');

let width;
let height = 400;
let counter = 0;

let spacing = 30;
let x = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
let x5 = 0;

let y = 0;

let count = 3;
let count2 = 4;
let count3 = 5;
let count4 = 6;
let count5 = 7;

let color1 = 0;
let color2 = 0;
let color3 = 0;
let color4 = 0;
let color5 = 0;

let w = 150;
let w2 = 120;
let w3 = 90;
let w4 = 60;
let w5 = 40;

let opacity1 = 1;




function setup(){
	width = window.innerWidth;

	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';

	let scale = window.devicePixelRatio;
	canvas.width = width * scale;
	canvas.height = height * scale;

	context.scale(scale, scale);

	animate();

}

function animate(){
	buildings1();
	buildings2();
	buildings3();
	buildings4();
	buildings5();

	opacity1 -= .05;
	opacity1 = Math.max(opacity1,0);
	// console.log(opacity1);


	requestAnimationFrame(animate);
}

function buildings1(){

	for(let i = 0; i<width; i+= spacing){
		if(count%3==0){
			// thin building
			
			context.beginPath();
			context.moveTo(x+0, y+ 125);
			context.lineTo(x+25, y+ 125);
			context.lineTo(x+25, y+ 400);
			context.lineTo(x+0, y+ 400);
			context.closePath();
			// context.stroke();

			w= 150;
			context.drawImage(image, x+0,125,25, 400);
			console.log(opacity1);
			for(let i = 0; w<350; i++){
				

			// context.fillStyle = 'hsla(' + color1 + ', 100%, 50%)';

			context.fillStyle = 'rgba(237,' + color1 + ', 149,' + opacity1 + ')'
				

				if (color1 >= 360) {
		          color1 = 0;
		        }
		        color1 += 40;

		        // pixel compositing
		    	context.globalCompositeOperation = 'exclusion';



		    		context.fillRect(x+4, w, 5, 5);
		    		context.fillRect(x+14, w, 5, 5);
		    		
		    		
		    		context.save();
			   		context.restore();

		    		w+= 25;
			}
			
       		count++;
			x+=30;
	

		}
		
		else{
			x+= 30;
			count++;
		}
	}



	
}




function buildings2(){
	for(let a=0; a<width; a+= spacing){
		if(count2%4==0){

			context.beginPath();
			context.moveTo(x2 + 25, 100);
			context.lineTo(x2 + 90, 100);
			context.lineTo(x2 + 90, 400);
			context.lineTo(x2 + 25, 400);
			context.closePath();
			// context.stroke();

			context.drawImage(image, x2+25,100,65, 400);

			w2 = 120;
			for(let i = 0; w2<350; i++){
				

			// context.fillStyle = 'hsla(' + color1 + ', 100%, 50%)';

			context.fillStyle = 'rgba(237,' + color2 + ', 149)'
				

				if (color2 >= 360) {
		          color2 = 0;
		        }
		        color2 += 40;

		        // pixel compositing
		    	context.globalCompositeOperation = 'exclusion';



		    		context.fillRect(x2+43, w2, 10, 10);
		    		context.fillRect(x2+63, w2, 10, 10);
		    		
		    		
		    		context.save();
			   		context.restore();

		    		w2+= 25;
		    		// x+=30;
			}
		

			count2++;
			x2+=45;

		}else{
			count2++;
			x2+= 45;
		}
	}
}

function buildings3(){

	for (let b = 0; b<width; b+=spacing){
		if(count3%5==0){
			context.beginPath()
			context.moveTo(x3+115, 65);
			context.lineTo(x3+180, 65);
			context.lineTo(x3+180, 400);
			context.lineTo(x3+115, 400);
			context.closePath();
			// context.stroke();
			context.drawImage(image, x3+115,65,65, 400);

			w3 = 90;
			for(let i = 0; w3<350; i++){
				

			// context.fillStyle = 'hsla(' + color1 + ', 100%, 50%)';

			context.fillStyle = 'rgba(237,' + color3 + ', 149)'
				

				if (color3 >= 360) {
		          color3 = 0;
		        }
		        color3 += 30;

		        // pixel compositing
		    	context.globalCompositeOperation = 'exclusion';



		    		context.fillRect(x3+130, w3, 10, 10);
		    		context.fillRect(x3+155, w3, 10, 10);
		    		
		    		
		    		context.save();
			   		context.restore();

		    		w3+= 25;
		    		// x+=30;
			}

			count3++;
			x3+=72;
		}else{
			count3++;
			x3+=72;
		}
	}
}

function buildings4(){
	for(let c = 0; c<width; c+=spacing){
		if(count4%6==0){
			context.beginPath();
			context.moveTo(x4+295, 35);
			context.lineTo(x4+360, 35);
			context.lineTo(x4+360, 400);
			context.lineTo(x4+295, 400);
			context.closePath();
			// context.stroke();
			context.drawImage(image, x4+295,35,65, 400);

			w4 = 60;
			for(let i = 0; w4<350; i++){
				

			// context.fillStyle = 'hsla(' + color1 + ', 100%, 50%)';

			context.fillStyle = 'rgba(237,' + color4 + ', 149)'
				

				if (color4 >= 360) {
		          color4 = 0;
		        }
		        color4 += 30;

		        // pixel compositing
		    	context.globalCompositeOperation = 'exclusion';



		    		context.fillRect(x4+313, w4, 10, 10);
		    		context.fillRect(x4+333, w4, 10, 10);
		    		
		    		
		    		context.save();
			   		context.restore();

		    		w4+= 25;
		    		// x+=30;
			}

			count4++;
			x4+=120;
			
		}
		else{
			count4++;
			x4+=120;
		
		}
	}
}

function buildings5(){
	for(let d = 0; d<width; d+=spacing){
		if(count5%7==0){
			context.beginPath();
			context.moveTo(x5+655, 15);
			context.lineTo(x5+720, 15);
			context.lineTo(x5+720, 400);
			context.lineTo(x5+655, 400);
			context.closePath();
			// context.stroke();
			context.drawImage(image, x5+655,15,65, 400);

			w5 = 40;
			for(let i = 0; w5<350; i++){
				

			// context.fillStyle = 'hsla(' + color1 + ', 100%, 50%)';

			context.fillStyle = 'rgba(237,' + color5 + ', 149)'
				

				if (color5 >= 360) {
		          color5 = 0;
		        }
		        color5 += 30;

		        // pixel compositing
		    	context.globalCompositeOperation = 'exclusion';



		    		context.fillRect(x5+673, w5, 10, 10);
		    		context.fillRect(x5+693, w5, 10, 10);
		    		
		    		
		    		context.save();
			   		context.restore();

		    		w5+= 25;
		    		// x+=30;
			}

			count5++;
			x5+=103;
		}else{
			count5++;
			x5+=102.8;
		}
	}
}





window.addEventListener('load', setup);
window.addEventListener('reload', setup);



