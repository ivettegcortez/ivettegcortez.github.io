// js for home page
let xBrowserScaling;
let yBrowserScaling;

function scaling(){
	let wbrowser = window.innerWidth;
	let hbrowser = window.innerHeight;

	xBrowserScaling = wbrowser / 120;
	yBrowserScaling = hbrowser / 120;
}


// $(document).ready(function(){
// 	$('.img-overlay').hover(function(){
// 		$('.img-overlay').css("top", "0px");
// 		$('.img-overlay').css("height", "300px");
// 	},
// 	function(){
// 		$('.img-overlay').css("top", "205px");
// 		$('.img-overlay').css("height", "95px");
// 	});

// });



function landscapes(){
	location.href = "landscapes.html";
}
function portraits(){
	location.href = "portraits.html";
}

// update scale when the page loads
window.addEventListener('load', scaling);







