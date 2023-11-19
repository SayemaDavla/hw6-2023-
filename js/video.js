var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("starting"+video.autoplay)
	console.log(video.loop)
});
// Play the video and update the volume information

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// volume.innerHTML = video.volume * 100 + "%";
	updateVolumeInfo();
});
// Function to update volume information
function updateVolumeInfo() {
	var volumeSlider = document.getElementById("slider");
	var volumeInfo = document.getElementById("volume");
  
	// Event listener for the volume slider
	volumeSlider.addEventListener("input", function() {
	  var volumeValue = volumeSlider.value;
	  video.volume = volumeValue / 100;
	  volumeInfo.textContent = volumeValue + "%";
	});
  }

// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("New Speed: " + video.playbackRate);
}
);

// Speed up the current video speed by 10% each time the button is clicked and log the new speed to the console.

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("New Speed: " + video.playbackRate);
});
document.getElementById("skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	
	// Calculate the new time by adding 10 seconds to the current time
	var newTime = video.currentTime + 10;
  
	// Check if the new time exceeds the video duration
	if (newTime >= video.duration) {
	  // If exceeded, go back to the start
	  video.currentTime = 0;
	} else {
	  // Otherwise, set the new time
	  video.currentTime = newTime;
	}
  
	// Log the current location of the video
	console.log("Current Time: " + video.currentTime);
  });


document.getElementById("mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted) {
	  video.muted = false;
	  document.getElementById("mute").innerHTML = "Mute";
	  console.log("Unmuted");
	} else {
	  video.muted = true;
	  document.getElementById("mute").innerHTML = "Unmute";
	  console.log("Muted");
	}
  });
//   Utilize the existing oldSchool class on the video element
document.getElementById("vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
  });
// Remove the oldSchool class from the video.
document.getElementById("orig").addEventListener("click",function(){
	console.log("Orginal")
	video.classList.remove("oldSchool");

});
//Change the volume based on the slider and update the volume information.
document.getElementById("slider").addEventListener("click",function(){
	console.log("Volume Change");
	video.volume = this.value/100;
	document.getElementById("volume").innerHTML = this.value + "%";
});






