$(document).ready(function() {
	
	// THE BASICS

	// Source: https://www.freesound.org/people/joedeshon/sounds/78506/
	var bell = new Howl({
	  urls: ['sounds/bell.wav']
	});
	
	// Source: https://www.freesound.org/people/usinggarageband/sounds/152575/
	var trumpet = new Howl({
	  urls: ['sounds/trumpet.mp3'],
	  onend: function() {
	  	$("#trumpet-play").removeClass("btn-success");
	  },
	  onplay: function() {
	  	$("#trumpet-play").addClass("btn-success");
	  }
	});


	$("#bell").click(function() {
		bell.play();
	});

	$("#trumpet-play").click(function() {
		trumpet.play();
	});

	$("#trumpet-stop").click(function() {
		trumpet.stop();
		$("#trumpet-play").removeClass("btn-success");
	});

	// ======


	// THE MUSIC
	var music = new Howl({
	  urls: ['sounds/japanese-harp.mp3']
	});


	$("#music-play").click(function() {
		music.play();
	});

	$("#music-stop").click(function() {
		music.stop();
	});

	$("#music-loop").click(function() {
		music.loop(!music.loop());

		if (music.loop()) {
			$("#music-loop").addClass("btn-success");
		}
		else {
			$("#music-loop").removeClass("btn-success");	
		}

	});

	$("#music-fadein").click(function() {
		music.fadeIn(1, 1000);
	});

	$("#music-fadeout").click(function() {
		music.fadeOut(0, 2000);
	});


	// THE MARIO
	// var marioJump = new Howl({
	//   urls: ['/sounds/smb_jump-small.wav']
	// });

	// var marioCoin = new Howl({
	//   urls: ['/sounds/smb_coin.wav']
	// });

	// var marioPipe = new Howl({
	//   urls: ['/sounds/smb_pipe.wav']
	// });

	// var marioMushroom = new Howl({
	//   urls: ['/sounds/smb_powerup.wav']
	// });

	// var marioDies = new Howl({
	//   urls: ['/sounds/smb_mariodie.wav']
	// });

	// var marioClear = new Howl({
	//   urls: ['/sounds/smb_stage_clear.wav']
	// });


	// $("#mario-jump").click(function() {
	// 	marioJump.play();
	// });
	// $("#mario-coin").click(function() {
	// 	marioCoin.play();
	// });
	// $("#mario-pipe").click(function() {
	// 	marioPipe.play();
	// });
	// $("#mario-mushroom").click(function() {
	// 	marioMushroom.play();
	// });
	// $("#mario-dies").click(function() {
	// 	marioDies.play();
	// });
	// $("#mario-clear").click(function() {
	// 	marioClear.play();
	// });


	var marioComposite = new Howl({
		urls: ['/sounds/mario-compsite.mp3'],
		sprite: {
			marioJump: [0, 800],
			marioCoin: [2000, 1000],
			marioPipe: [4000, 2000],
			marioMushroom: [6000, 2000],
			marioDies: [8000, 4000],
			marioClear: [12000, 7000]
		}
	});

	$("#mario-jump").click(function() {
		marioComposite.play("marioJump");
	});
	$("#mario-coin").click(function() {
		marioComposite.play("marioCoin");
	});
	$("#mario-pipe").click(function() {
		marioComposite.play("marioPipe");
	});
	$("#mario-mushroom").click(function() {
		marioComposite.play("marioMushroom");
	});
	$("#mario-dies").click(function() {
		marioComposite.play("marioDies");
	});
	$("#mario-clear").click(function() {
		marioComposite.play("marioClear");
	});

});
