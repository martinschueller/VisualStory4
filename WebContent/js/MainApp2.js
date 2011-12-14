$(document).ready(function(){
	
	var columns = 5;
	var columnHeight = 250;
	var columnWidth = 280;
	var currentColumn = 0;
	var xOffset = 50;
	
	$('.picture img').click(function(event) {
		
		videoPicked($(event.target).attr('id'));
		
		  //alert('Handler for .click() called of div: ' + $(event.target).attr('alt'));
		});
	
	
	
	
	var yPos = 150;
	//alert($('.picture').length);
	for (var i=0 ; i< $('.picture').length; i++){
		if (currentColumn == columns){
			yPos += columnHeight;
			currentColumn = 0;
		}
		
		
		$('.picture:eq(' + i + ')').css('left', xOffset + columnWidth * currentColumn);
		$('.picture:eq(' + i + ')').css('top', yPos);
		currentColumn += 1;
			
		
		
	}
	
	
	
});




//Randomizes divs
(function($) {

	$.fn.randomize = function(childElem) {
	  return this.each(function() {
	      var $this = $(this);
	      var elems = $this.children(childElem);

	      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

	      $this.remove(childElem);  

	      for(var i=0; i < elems.length; i++)
	        $this.append(elems[i]);      

	  });    
	};
});

function videoPicked(name)
{
	//CHANGES
	
	$('#fullscreenvideo').css('display', 'block');
	var imglength = $("div#darkroom img").length;
	//if( imglength > 0 ) {
	//	document.getElementById('sound' + (imglength-1) ).pause();
	//}
	for( var i = 0; i < imglength; i++ ) {
		document.getElementById('sound' + i).pause();	
	}
	//END CHANGES
	$('#fullscreenvideo').html('<video src="videos/' + name + '.mp4"></video>');
	$('#fullscreenvideo video').css('width', $(window).width() + 'px');
	$('#fullscreenvideo video').css('height', 'auto');
	// changes made HERE
	if( imglength < 5 ) {
		$('#darkroom').append('<img src="images/' + name + '.png"/>');
		$('#darkroom').append('<audio id="sound' + imglength + '" autoplay preload onended="audioEnd(' + imglength + ')"><source src="sounds/' + name + '.ogg" type="audio/ogg"><source src="sounds/' + name + '.mp3" type="audio/mp3"></audio>');
	}//END CHANGES
	$('#fullscreenvideo video').get(0).play();
	$('#fullscreenvideo video').bind("ended", function(){
		$('#fullscreenvideo').css('display', 'none');
	      alert('Video Ended');
	      //document.getElementById('sound' + imglength).play();
	      if ($('#darkroom').length = 5){
	    	  playOutro();
	    	  
	      }
	      
	    });
	
	//alert(name);
}

//MORE CHANGES HERE
function audioEnd( name ) {

	var nextSound;
	var mp3Chord = document.getElementById('mp3chord');
	var oggChord = document.getElementById('oggchord');	
	var imglength = $("div#darkroom img").length; 
	if( name >= imglength-1 ) {
		nextSound = document.getElementById('sound0');	
	}
	else if( name < imglength-1 ) {
		nextSound = document.getElementById('sound' + ( parseInt(name) + 1 ) );	
	}
//	document.getElementById('soundchord').play();
//	setTimeout(function(){nextSound.play();},3000);
	nextSound.play();
	
}
//END CHANGES

function playOutro()
{
	
}



function flip() {
	document.getElementById("side1").style.visibility="hidden";
	document.getElementById("side2").style.visibility="visible";
}