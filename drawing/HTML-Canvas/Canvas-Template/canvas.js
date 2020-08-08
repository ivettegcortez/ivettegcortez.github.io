// javascript for html canvas


const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
// 2-dimensional drawing

const canvas2 = document.querySelectorAll('canvas')[1];
const image = document.getElementById('ducks');
const context2 = canvas2.getContext('2d');

const canvas3 = document.querySelectorAll('canvas')[2];
const context3 = canvas3.getContext('2d');

const referenceWidth = 600;
const referenceHeight = 400;





function setup(){

	// set display size (CSS pixels)
      canvas.style.width = referenceWidth + 'px';
      canvas.style.height = referenceHeight + 'px';

      canvas2.style.width = referenceWidth + 'px';
      canvas2.style.height = referenceHeight + 'px';

      canvas3.style.width = referenceWidth + 'px';
      canvas3.style.height = referenceHeight + 'px';

      // set actual, device pixel size (scaled for extra pixel density)
      let scale = window.devicePixelRatio;
      canvas.width = referenceWidth * scale;
      canvas.height = referenceHeight * scale;

      canvas2.width = referenceWidth * scale;
      canvas2.height = referenceHeight * scale;

      canvas3.width = referenceWidth * scale;
      canvas3.height = referenceHeight * scale;

      // normalize coordinate system to use CSS pixels
      context.scale(scale, scale);
      context2.scale(scale, scale);
      context3.scale(scale, scale);

      drawing();
     
};


let redDirection;
let greenDirection;
let direction;
let speed;


function drawing(){
	let spacing = 30;
      let radius = 10;
      let x = 15;
      let y = 20;
      let count = 0;



      for (let row = 0; row < referenceHeight; row += spacing) {
        for (let col = 0; col < referenceWidth; col += spacing) {
          count++;
          if(count%3==0){
              context.beginPath();
              context.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);
              // context.fillStyle = "rgba(150, 180, 55, 0.3)";
              context.fillStyle = "rgba(255, 225, 0, 0.7)";
              context.fill();

              context.fillStyle = "rgba(255, 140, 0, 0.7)";

              // beak for chicken
              context.beginPath();
              context.moveTo(x,y);
              context.lineTo(x+5, y+3.5);
              context.lineTo(x, y+7);
              context.closePath();
              context.fill();


              // beak line

              context.beginPath();
              context.moveTo(x+1, y+3.5);
              context.lineTo(x+4.2, y+3.5);
              context.closePath();


              context.strokeStyle = "rgba(240, 140, 0)";
              context.stroke();

              // eyes

              context.beginPath();
              context.ellipse(x-4, y-3, 2, 2, 0, 0, 2*Math.PI);
              // context.stroke();
              context.fill();

              context.beginPath();
              context.ellipse(x+4, y-3, 2, 2, 0, 0, 2*Math.PI);
              // context.stroke();
              context.fill();




              x += spacing;
          }
          else{
            context.beginPath();
            // // x, y, radius X, radius Y, rotation, start angle, end angle
            context.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);
            // context.strokeStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';

            context.strokeStyle = "black";
            context.stroke();


            
            x += spacing;

            
          }
          
        }

        x = 15;
        y += spacing;
      }
      // end of for loop


// canvas 2 drawing

   // draw image to the canvas (image, x, y, width, height)
           context2.drawImage(image, 0, 0, 600, 400);
          



           let pixels = context2.getImageData(0,0, canvas2.width, canvas2.height);
           let data = pixels.data;

            // clear canvas
           context2.clearRect(0,0,canvas2.width, canvas2.height);


           // scale pixel shift
           redDirection += direction * speed;
           console.log(redDirection);
           greenDirection += direction * speed;
           console.log(greenDirection);

           // locate and shift pixels
           for (let y = 0; y<pixels.height;y++){
            for(let x = 0; y<pixels.width;x++){
              let index = (x + y * pixels.width) * 4; // index position of every pixel
                  data[index] = data[index + redDirection]; // shift red channel
                  data[index + 3] = data[(index + 3) - greenDirection]; // shift green channel
            }
           }
           context2.putImageData(pixels, 0, 0);

              // alternate shift direction
              if (redDirection > 100 || redDirection < 0) {
                direction *= -1;
              }
// end of canvas 2 drawing


// canvas 3 drawing

    context3.clearRect(0, 0, canvas3.width, canvas3.height);


    context3.drawImage(image, 0, 0, 600, 400);

    context3.drawImage(canvas, 0, 0, 600, 400);

    context3.globalCompositeOperation = "exclusion";


    requestAnimationFrame(drawing);
};


window.addEventListener('load', setup);










