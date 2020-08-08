// javascript for assignment 3


// make an image array in a functino so that it can be called
var imgarray = ['pics/birds.jpg', 'pics/cows.jpeg', 'pics/dog.jpg', 'pics/duck.jpg', 'pics/peacock.jpg'];
var slideindex = 0;
var flag1;

function imgrand(){

	var randnum = Math.floor(Math.random() * imgarray.length);
	// generates a random number for the index of the array
	var newimage = imgarray[randnum];
	// get the location of a random place in the array and sets it to a new image
	document.getElementById('img1').src = newimage;
}

function slideShow(){
	document.getElementById('img1').src = imgarray[slideindex];
	if(slideindex==4){
		slideindex=-1;
	}

	flag1=setTimeout(slideShow, 2000)
	// changes the image every 2 seconds
	// 2000 = 2 seconds
	slideindex++;
}


function stopSlide(){
	clearTimeout(flag1);
	
}


function randDice(){
	var dicearray = ['pics/1.jpg', 'pics/2.jpg', 'pics/3.jpg', 'pics/4.jpg', 'pics/5.jpg', 'pics/6.jpg'];
	var randodicenum1 = Math.floor(Math.random() * dicearray.length);
	var randodicenum2 = Math.floor(Math.random() * dicearray.length);
	document.getElementById('dice1').src = dicearray[randodicenum1];
	document.getElementById('dice1').style = "display:block";
	var dice1num = randodicenum1+1
	document.getElementById('dice1text').innerHTML = dice1num;
	document.getElementById('dice2').src = dicearray[randodicenum2];
	document.getElementById('dice2').style = "display:block";
	var dice2num = randodicenum2+1
	document.getElementById('dice2text').innerHTML = dice2num;
	var sum = dice1num + dice2num;
	document.getElementById('sum').innerHTML = "The sum of both dice is " + sum;
	if (sum == 11 || sum == 7){
		alert("Congratulations! You won!");
	}
	if(sum == 2 || sum == 3 || sum == 12){
		alert("Sorry, you lost :( Looks like you lost your bet. The total amount you put for bet was " + document.getElementById('bet').value);
	}

}


//function for holiday calendar
function holidaySearch(){
	var holidays=[

[9,[2],2019,"Labor Day", "pics/laborday.png"],
[10,[14],2019,"Fall Recess", "pics/fall-recess.png"],
[11,[27,28,29],2019,"Thanksgiving Recess","pics/thanksgiving-break.jpg"],
[12,[21,22,23,24,25,26,27,28,29,30,31],2019, "Winter Recess", "pics/winter-break.jpg"],
[1,[1,2,3,4,5],2010, "Winter Recess", "pics/winter-break.jpg"],
[2,[17],2020, "President's Day", "pics/presidents-day.jpeg"],
[3,[16,17,18,19,20,21,22],"Spring Recess", "pics/spring-recess.png"]
]
	var date1 = document.getElementById('dateStart').value;

	var dateobj1=new Date(date1);
	var mm=dateobj1.getMonth()+1; // 0-11
	var dd =dateobj1.getDate()+1; //0-30
	var yyyy=dateobj1.getFullYear();
	var holidayname;

// make an array for the names of the months
var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = monthnames[dateobj1.getMonth()];
// make sure the date falls within the range from 9/1/2019 to 8/31/2020.

	for(var i=0;i<holidays.length;i++){
		if((mm>=8 && dd<=31 && yyyy==2019) || (mm<=8 && dd<=31 && yyyy ==2020)){
			if(mm==holidays[i][0]&& holidays[i][1].includes(dd)){
				console.log('holiday');
				var hpic = holidays[i][holidays[i].length-1];
				document.getElementById('holidayimg').src = hpic;
				document.getElementById('holidayimg').style.display = "block";
				var holidayname = holidays[i][holidays[i].length-2];
				holidaydate = month + " " + dd + ", " + yyyy;
				document.getElementById('output').innerHTML = holidaydate + " is " + holidayname + ". This is an NYU holiday.";
				break;
				
			}
			else{
				console.log('not a holiday')
				holidaydate = month + " " + dd + ", " + yyyy;
				document.getElementById('holidayimg').src = "";
				
				document.getElementById('output').innerHTML = holidaydate + " is not a school holiday at NYU";
				// break;
			}
		}

		else{
			holidaydate = month + " " + dd + ", " + yyyy;
			document.getElementById('output').innerHTML = holidaydate + " falls outside the range of dates for which data is available.";
			break;

		}
	
}
} 







