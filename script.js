var seconds = document.getElementById("seconds-pointer");
var minutes = document.getElementById("minutes-pointer");
var hours = document.getElementById("hours-pointer");
var hands = document.querySelectorAll(".hand");
var sound = document.getElementById("tick");
var clock = document.getElementById("clock");
var clickBtn = document.querySelector("button");
var hideBtn = document.querySelector("#hide-clock");
var foot = document.querySelector("footer");
sound.volume=0.1;
setInterval(displayTime,1000);

function displayTime(){
	var rotation = ((new Date()).getSeconds())/60*360;
	if (rotation===0){
		seconds.style.transition = `none`;
	}
	else if(rotation===6){
		seconds.style.transition = 'all cubic-bezier(0, 1.74, 0, 1.49) 40ms';
	}
	seconds.style.transform = `rotate(${rotation}deg`;
	tick();

	var minsRot = ((new Date()).getMinutes())/60*360;
		if (minsRot===0){
		minutes.style.transition = `none`;
	}
	else if(minsRot===6)
		minutes.style.transition = 'all cubic-bezier(0, 1.74, 0, 1.49) 40ms';
	minutes.style.transform = `rotate(${minsRot}deg`;

	var hourRot = ((new Date()).getHours())/12*360;
		if (hourRot===0){
		hours.style.transition = `none`;
	}
	else if(hourRot===15)
		hours.style.transition = 'all cubic-bezier(0, 1.74, 0, 1.49) 40ms';
	hours.style.transform = `rotate(${hourRot}deg`;
}

function tick(){
	if(document.querySelector(`#clock[class="invisible"]`)===null){
		sound.currentTime=0;
		sound.play();
	}
}

function makeVisible(){
	/*clock.style.visibility = "visible";
	clock.style.opacity = "1";
	button.style.transition = "none";
	button.style.display="none";
	foot.style.display="block";
	hideBtn.style.visibility = "none";*/
	clock.style.display="block";

	setTimeout(function(){
		clock.classList.remove("invisible");
		clickBtn.classList.add("invisible");
		hideBtn.classList.remove("invisible");
		foot.classList.remove("invisible");
		clickBtn.style.marginTop="0";
	},100)
}


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
