

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

var video = document.getElementById("player1");
var isPlaying = false;
//play video
var play_button = document.getElementById("play");
play_button.addEventListener("click", play_vid);
function play_vid(){
	video.play();
}


//pause video

var pause_button = document.getElementById("pause");
pause_button.addEventListener("click", pause_vid);
function pause_vid(){
	video.pause();
}

//slow down
var slow_button = document.getElementById("slower");
slow_button.addEventListener("click", slow_vid);
function slow_vid(){
	video.playbackRate -= .05;
	console.log(video.playbackRate);
}
//speed up
var speed_button = document.getElementById("faster");
speed_button.addEventListener("click", speed_vid);
function speed_vid(){
	video.playbackRate += .05;
	console.log(video.playbackRate);
}
//skip ahead
var skip_button = document.getElementById("skip");
skip_button.addEventListener("click", skip_vid);
function skip_vid(){
	//if ended
	var max_dur = video.duration;
	if(video.currentTime == max_dur){
		video.currentTime = 0;
		video.play();
	}
	else{
	video.currentTime += 15;
	console.log(video.currentTime);
	}
}

//mute button
var mute_button = document.getElementById("mute");
mute_button.addEventListener("click", mute_vid);
function mute_vid(){
if (video.muted == false) {    
	video.muted = true;
	mute_button.innerText = "Unmute";
	}

else {
 video.muted = false;
 mute_button.innerText = "Mute";
	}
}

//volume
var slider = document.getElementById("slider");
var vol = document.getElementById("volume");
vol.innerText = video.volume * 100 + "%";
slider.addEventListener('change', function() {
	video.volume = this.value / 100;
	vol.innerText = video.volume * 100 + "%";
 });

 //style change
 var vintage = document.getElementById("vintage");
 var orig = document.getElementById("orig");
 vintage.addEventListener("click", make_vintage);
 function make_vintage(){
	video.classList.add("oldSchool");

 }
 orig.addEventListener("click", make_original);
 function make_original(){
	video.classList.remove("oldSchool");
	 
}


