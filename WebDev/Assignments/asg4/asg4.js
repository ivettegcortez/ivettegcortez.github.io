// javascript for assignment 4

var price1;
var price2;
var numtickets1;
var numtickets2;
var stotal1;
var stotal2;
var finaltotal;

var date = new Date();

function total(){
	price1 = document.getElementById("rprice").value;
	price2 = document.getElementById("gprice").value;
	numtickets1 = document.getElementById("rtickets").value;
	stotal1 = price1 * numtickets1;
	document.getElementById("rsubtotal").value = stotal1;
	numtickets2 = document.getElementById("gtickets").value;
	stotal2 = price2 * numtickets2;
	document.getElementById("gsubtotal").value = stotal2;
	finaltotal = stotal1 + stotal2;

	
	if(document.getElementById("shipment").value=="delivery"){
		finaltotal+=7;
	}
	document.getElementById("finaltotal").value = finaltotal;
	
}


document.getElementById("rtickets")?document.getElementById("rtickets").addEventListener("change", total):"";
// this calculates the subtotal of the romeo tickets based on how many the user chooses
document.getElementById("gtickets")?document.getElementById("gtickets").addEventListener("change", total):"";
document.getElementById("shipment")?document.getElementById("shipment").addEventListener("change", total):"";
// this calculates the subtotal of the grupo 5 tickets based on how many the user chooses
document.getElementById("submit")?document.getElementById("submit").addEventListener('click',function (e) {
	e.preventDefault();
	receipt()
}):""



function receipt(){
	var check = 0;

	//check to see if first and last name is null
	var firstname = document.forms[0].elements[1];
	var lastname = document.forms[0].elements[2];
	if(firstname.value == ""){
		alert("Please enter your first name.");
		firstname.focus();
		firstname.select();
		check++;
	}
	if(lastname.value == ""){
		alert("Please enter your last name.");
		lastname.focus();
		lastname.select();
		check++;
	}

	var email = document.forms[0].elements[3];
	// either of them there should be false
	if (!(email.value.includes("@") && email.value.includes("."))){
		alert("Please enter a valid email address.");
		email.focus();
		email.select();
		check++;
	}

	var address = document.forms[0].elements[4];

	if(address.value == ""){
		alert("Please fill in your address.");
		address.focus();
		address.select();
		check++;
	}

	// credit card options
	var visacard = document.forms[0].elements[5];
	var mastercard = document.forms[0].elements[6];
	var amexcard = document.forms[0].elements[7];
	var cardtype;

	if ((visacard.checked == false) && (mastercard.checked == false) && (amexcard.checked == false)){
		alert('Please fill in one option for the credit card option.')
			visacard.focus();
			visacard.select();
			mastercard.focus();
			visacard.select();
			amexcard.focus();
			amexcard.select();
			check++;
	}
	if(visacard.checked == true){
		cardtype = visacard;
	}else if(mastercard.checked){
		cardtype = mastercard;
	}else if(amexcard.checked){
		cardtype = amexcard;
	}
	

	var creditnum = document.forms[0].elements[8];
	var creditnumvalue = creditnum.value
	if (creditnumvalue.length != 16){
		alert("Please re-check your credit card number.");
		creditnum.focus();
		creditnum.select();
		check++;
	}else if(isNaN(creditnumvalue)){
		alert("Please re-check your credit card number.");
		creditnum.focus();
		creditnum.select();
		check++;
	}else{
		for(i=0;i<creditnumvalue.length-4;i++){
			creditnumvalue = creditnumvalue.replace(creditnumvalue[i], "X");
			console.log(creditnumvalue)
		}
	}
	


	var expmm = document.forms[0].elements[9];
	var expyy = document.forms[0].elements[10];
	if(expmm.value === ""){
		alert("Please fill in an expiration month.")
		expmm.focus();
		expmm.select();
		check++;
	}

	// == checks the type but === checks the value and the type??
	if(expyy.value === ""){
		alert("Please fill in an expiration year.")
		expyy.focus();
		expyy.select();
		check++;
	}

	var zipcode = document.forms[0].elements[11];
	if ((zipcode.value.length != 5) || (!Number.isInteger(parseInt(zipcode.value)))){
		alert("Please enter a valid zipcode.")
		zipcode.focus();
		zipcode.select();
		check++;
	}

	var shipment = document.getElementById("shipment").value;
	if(check==0){
		document.getElementById("output").innerHTML = "You're all set!<br>You purchased " + numtickets1 + " Romeo Santos tickets for a total of $" + stotal1 + ", along with " + numtickets2 + " Grupo 5 tickets for a total of $" + stotal2 + ".<br>";
		if (shipment == "delivery"){
			document.getElementById("output").innerHTML += " You also selected the delivery option which is an extra $7 to your payment.<br>";
		}
		document.getElementById("output").innerHTML += "The grand total comes out to be $" + finaltotal + ".<br>Here is all the info you gave:<br>";
		document.getElementById("output").innerHTML += "First Name: " + firstname.value + "<br>Last Name: " + lastname.value + "<br>Email: " + email.value + "<br>Address: " + address.value + "<br>Credit Card Type: " + cardtype.value + "<br>Credit Card Number: " + creditnumvalue + "<br>Expiration Date: " + expmm.value + "/" + expyy.value + "<br>Zip Code: " + zipcode.value + "<br>";
		document.getElementById("output").innerHTML += (date);

	}
	
}