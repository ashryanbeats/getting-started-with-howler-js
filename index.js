$(document).ready(function() {
	var bell = new Howl({
	  urls: ['sounds/bell.wav']
	});
	
	$("#bell").click(function() {
		console.log("hi");
		bell.play();
	});
});
