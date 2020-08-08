// javascript 2020 version of marriage webite
let sidegrid = document.querySelector('#ulside');
let sidebar = document.querySelectorAll('.side');

let yes = document.querySelectorAll('button')[0];
let no = document.querySelectorAll('button')[1];


function colorChange(event){
	if(event.target.className == "side"){
		for(let i = 0; i<sidebar.length;i++){
			// this is what happens when it is not on the object
			sidebar[i].style.opacity = "0.5";
		}
		event.target.style.backgroundColor = "teal";
		event.target.style.opacity = "1.0";
		event.target.addEventListener('mouseout', colorReset, false);
	}
	event.stopPropagation();
}

function colorReset(){
	for(let i = 0;i<sidebar.length;i++){
		sidebar[i].style.backgroundColor = "#f07886";
		sidebar[i].style.opacity = "1.0";
	}	
}

sidegrid.addEventListener('mouseover', colorChange, false);

yes.onclick = function PosResponse(){
	alert("That's great to hear. Hope this website can help others as it has helped you.");
}
no.onclick = function NegResponse(){
	alert("That's too bad. Try to talk to a person close to you about some problems maybe that can ease your mind.");
}

