$(document).ready(function(){
	
	var columns = 5;
	var columnHeight = 200;
	var columnWidth = 280;
	var currentColumn = 0;
	
	$('.picture img').click(function(event) {
		
		videoPicked($(event.target).attr('id'));
		
		  //alert('Handler for .click() called of div: ' + $(event.target).attr('alt'));
		});
	
	
	
	
	var yPos = 0;
	//alert($('.picture').length);
	for (var i=0 ; i< $('.picture').length; i++){
		if (currentColumn == columns){
			yPos += columnHeight;
			currentColumn = 0;
		}
		
		
		$('.picture:eq(' + i + ')').css('left', columnWidth * currentColumn);
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
	
	$('#fullscreenvideo').html('<video src="videos/' + name + '.ogv"></video>');
	$('#fullscreenvideo').css('display', 'normal');
	// changes made HERE
	if( $("div#darkroom img").length < 5 ) {
		$('#darkroom').prepend('<img src="images/' + name + '.png"/>');
		$('#darkroom').prepend('<audio src="sounds/' + name + '.mp3" autoplay preload onended="audioEnd(' + name + ');" />');
		$('#darkroom').prepend('<audio src="sounds/' + name + '.ogg" autoplay preload onended="audioEnd(' + name + ');" />');
	}//END CHANGES
	$('#fullscreenvideo video').get(0).play();
	$('#fullscreenvideo video').bind("ended", function(){
		$('#fullscreenvideo').css('display', 'none');
	      alert('Video Ended');
	      
	      if ($('#darkroom').length = 5){
	    	  playOutro();
	    	  
	      }
	      
	    });
	
	//alert(name);
}

//MORE CHANGES HERE
function audioEnd( name ) {
	alert( name + '.mp3 has ended' );
}



function playOutro()
{
	
}



function flip() {
	document.getElementById("side1").style.visibility="hidden";
	document.getElementById("side2").style.visibility="visible";
}