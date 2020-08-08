// js and jquery for assignment 5


/*use change styles button to change text color to green*/


/*select div class highlight and change the background to yellow*/


$(document).ready(function(){
	/*when document loads everythign this continues*/
	$('#change').on('click',function(){
		// user clicks on the button to create the following
		$('.highlight p').each(function(i){
			if(this.style.backgroundColor !== 'yellow'){
				this.style.backgroundColor = 'yellow';
				$(this).css('border-style', 'groove');
				$(this).css('border-width', 'thick');

				alert($(this).text());
				// alerts the user of the text in each p

			}else{
				this.style.color = "";
			}
		});
		// selects all the p elements in the divs and changes the background color to yellow
		$('h1').css("color", "yellow");
		// selects all h1 and changes the text color to green
	});
	$('#show').on('click', function(){
		$('img').show();
	});
	$('#hide').on('click', function(){
		$('img').hide();
	});
	$('#fadeout').on('click', function(){
		$('img').fadeOut("slow");
	});

	$('#animate').on('click',function(){
		$('#box').css('position','relative');
		$('#box').css('right','0px');
		$('#box').animate({
			// animate the div using movement from a certain direction, opacity, height, and width
			left: '-300px',
			opacity: '0.2',
			height: '+=150px',
			width: '+=100px',
		});
	});
		


	// username and password
	// var $username="";

	// $("#username").on('change',function(){
	// 	// $username=$(this).val();
	// 	// $('#demo').text($username);
	// 	if($(this).val()==""){
	// 		$(this).focus(function(){
	// 			$(this).css('backgroundColor','yellow');
	// 		})
	// 		alert("Please enter a username!");
	// 		$('#demo').text($(this).val());
	// 	}else{
	// 		$('#demo').text($(this).val());
	// 	}

	// })

	// $("#psw").on('change',function(){
	// 	// $username=$(this).val();
	// 	// $('#demo').text($username);
	// 	if($(this).val()==""){
	// 		$(this).focus(function(){
	// 			$(this).css('backgroundColor','yellow');
	// 		})
	// 		alert("Please enter a password!");
	// 		$('#demo').text($(this).val());
	// 	}else{
	// 		$('#demo').text($(this).val());
	// 	}

	// })

		// if($(this).val()===""){
		// 	$(this).focus(function(){
		// 	alert("Please enter a username!");
		// 	$(this).css('backgroundColor','yellow');
		// 	});
		// }else{
		// 	$('#demo').text($(this).val());
		// }

	var $usernameStr="Username: ";
	var $psw="Password: ";
	$('input').on('change',function () {
		$(this).each(function(i,element){
			if($(element).val()==""){
				alert("Please enter a " + $(element).attr('name')+" !")
				$(element).css('backgroundColor','yellow');
				$('#demo').text("");
				// make the values of each blank again
				$usernameStr="Username: ";
				$psw="Password: ";
			}
			else{
				if($(element).attr('name')=='username'){
					$usernameStr+=$(element).val();
				}else if($(element).attr('name')=='password'){
					$psw+=$(element).val();
				}
				$('#demo').html($usernameStr+"<br>"+$psw);
			}
		})
	});

	
});


