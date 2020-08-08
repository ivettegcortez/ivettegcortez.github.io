// javascript for part 2

const dogs = document.getElementsByClassName("dogright");
const cats = document.getElementsByClassName("catleft");
let animation = requestAnimationFrame(slide);

let dogpos = 0;
let dogdirection = .5;
let catpos = 0;
let catdirection = -.5;


function slide(){
	animation = requestAnimationFrame(slide);
	// 1450
	if(dogpos>1450){
		dogdirection = -.5;
	}else if(dogpos <-1400){
		dogdirection = .5;
	}
	for(i=0;i<dogs.length;i++){
			dogpos = dogpos + dogdirection;
			dogs[i].style.left = dogpos + 'px';
		}

	if(catpos<-1450){
		catdirection = .5;
	}else if(catpos>1400){
		catdirection = -.5;
	}
	for(i=0;i<cats.length;i++){
		catpos = catpos + catdirection;
		cats[i].style.left = catpos + 'px';
	}

	
}


stopAnimation = () => cancelAnimationFrame(animation);

startAnimation = () => {
	cancelAnimationFrame(animation);
	// this is to avoid any multiple runs
	animation = requestAnimationFrame(slide);
}

document.getElementById('play').addEventListener('click', startAnimation);
document.getElementById('stop').addEventListener('click', stopAnimation);


