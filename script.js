//START-------------------------------------------------------------------------------------------------------------------
//Global variable declaration and association with document elements part
var seconds = document.getElementById("seconds-pointer"); //obtaining all the necessary elements 
var minutes = document.getElementById("minutes-pointer"); // of the document
var hours = document.getElementById("hours-pointer");
var hands = document.querySelectorAll(".hand");
var sound = document.getElementById("tick");
var clock = document.getElementById("clock"); 
var clickBtn = document.querySelector("button");
var hideBtn = document.querySelector("#hide-clock");
var foot = document.querySelector("footer");
//END-------------------------------------------------------------------------------------------------------------------
sound.volume=0.1;
setInterval(displayTime,1000);

sound.volume=0.2; //setting the volume of the 'tick.wav' sound to 20%

setInterval(displayTime,1000); // Creating a time interval of 1. Every 1 second the displayTime() is called
								//to change the position of the time pointers.


//START-------------------------------------------------------------------------------------------------------------------
//Function which calculates the current time and changes the positions of all time pointers
function displayTime(){ //function which calculates the current time and changes the positions of all time pointers
	var rotation = ((new Date()).getSeconds())/60*360; //converting seconds into degrees => [(seconds/60)*360]
	//The below if/else if statements are there because when the pointer was just before going to 0 degrees,
	//it was not going smoothly there, rather it was making a full circle back and you could see it suddenly do it due 
	//to the transition effect. Therefore just before this happens, we remove transition effect so that it goes to 0 
	//degrees smoothly.And then(else if statement) when the pointer is after 0 degrees we put back the transition to the element.
	if (rotation===0){
		seconds.style.transition = `none`; 
	}
	else if(rotation===6){
		seconds.style.transition = 'all cubic-bezier(0, 1.74, 0, 1.49) 40ms';
	}
	seconds.style.transform = `rotate(${rotation}deg`; //changing the rotation of the seconds pointer according to the
														// 'rotation' variable.

	tick();// after the rotation is done, it playes the tick.wav sound.

	//Exactly same procedure for the minutes, just like the seconds pointer above. The if/else if statements apply here as well
	//for the same reasons as above.
	var minsRot = ((new Date()).getMinutes())/60*360;
		if (minsRot===0){
		minutes.style.transition = `none`;
	}
	else if(minsRot===6)
		minutes.style.transition = 'all cubic-bezier(0, 1.74, 0, 1.49) 40ms';
	minutes.style.transform = `rotate(${minsRot}deg`; //changing the rotation of the minutes pointer according to 
													// 'minsRot' variable.

	//Exactly same procedure for the hours, just like the seconds and minutes pointers above. The if/else if statements apply
	//here as well for the same reasons.
	var hourRot = ((new Date()).getHours())/12*360; //conversion of hours to degrees. Hours go only until 12 and therefore
													//the conversion here is not the same as for minutes and seconds.
													//=> [(hours/12)*360]
		if (hourRot===0){
		hours.style.transition = `none`;
	}
	else if(hourRot===15)
		hours.style.transition = 'all cubic-bezier(0, 1.74, 0, 1.49) 40ms';
	hours.style.transform = `rotate(${hourRot}deg`;//changing the rotations of the minutes pointer according to 
													//'hourRot' variable.
}
//END-------------------------------------------------------------------------------------------------------------------

//START-------------------------------------------------------------------------------------------------------------------
// Function that plays the tick sound.
function tick(){
	if(document.querySelector(`#clock[class="invisible"]`)===null)//checks for if the clock has invisible class or not (or rather if
																//the button 'Click!' is pressed) so that it does not play the
																//sound when the clock is not visible (of course! xD). 
																//The invisible class just makes the item invisible (and takes care
																//for the transition to be smooth).
	{
		sound.currentTime=0; //when the function is called, it resets the currentTime of the .wav file to 0
							//so that it does not wait until the previous tick sound has finished playing.
							//The tick sound could be recorded for 3 seconds when we only need the first few milliseconds
							//so with this we 'skip' them.
		sound.play();// plays the sound.
	}
}

//END-------------------------------------------------------------------------------------------------------------------

//START-------------------------------------------------------------------------------------------------------------------
//makeVisible() is called when the 'Click!' button is pressed and takes care to add and remove some element from the page
//by editing their class or elements.
function makeVisible(){
	clock.style.display="block"; //first it changes the 'clock' div display to 'block' in order to take the space needed from the
								//page (because at first the element 'does not exist' on the page).

	setTimeout(function(){ //After 100ms of making the clock div appear as block, we add or remove the invisible attribute
							//from some elements to make them appear or disappear smoothly.
		clock.classList.remove("invisible");
		clickBtn.classList.add("invisible");
		hideBtn.classList.remove("invisible");
		foot.classList.remove("invisible");
		clickBtn.style.marginTop="0";
	},100)
}

//END-------------------------------------------------------------------------------------------------------------------


//START-------------------------------------------------------------------------------------------------------------------
//Same function as above but does the opposite. Makes the appeared items to disappear and the disappeared items to appear.
function makeInvisible(){ 
	clock.classList.add("invisible");
	setTimeout(function(){
		clock.style.display="none";
		clickBtn.classList.remove("invisible")
		hideBtn.classList.add("invisible");
		foot.classList.add("invisible");
		clickBtn.style.marginTop="300px";
	},100)
}
//END-------------------------------------------------------------------------------------------------------------------
