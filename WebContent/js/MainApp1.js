$(document).ready(function(){
	
	var columns = 5;
	var columnHeight = 200;
	var columnWidth = 280;
	var currentColumn = 0;
	
	$('.picture img').click(function(event) {
		
		videoPicked($(event.target).attr('id'));
		
		  //alert('Handler for .click() called of div: ' + $(event.target).attr('alt'));
		});
	/*$('.picture img').mouseover(function(event) {
		
		
		videoFlash($(event.target).attr('id'));
		
	});*/
	
	
	
	
	
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
	
	$('#fullscreenvideo').html('<video src="videos/' + name + '.mp4"></video>');
	$('#fullscreenvideo').css('display', 'normal');
	//$('#fullscreenvideo').css('opacity', '1');
	
	//$('#fullscreenvideo video').css('width', $(window).width() + 'px');
	//$('#fullscreenvideo video').css('height', 'auto');
	$('#darkroom').prepend('<img src="images/' + name + '.jpg"/>');
	$('#fullscreenvideo video').get(0).play(0);
	
	$('#fullscreenvideo video').bind("ended", function(){
		//$('#fullscreenvideo').css('display', 'none');
	      //alert('Video Ended');
	      $('#fullscreenvideo').html('');
	      if ($('#darkroom').length = 5){
	    	  playOutro();
	    	  
	      }
	      
	    });
	
	//alert(name);
}

function videoFlash(name)

{
	//$('#fullscreenvideo').css('opacity', '0');
	$('#fullscreenvideo').html('<video src="videos/' + name + '.mp4"></video>');
	$('#fullscreenvideo').css('display', 'normal');
	
	$('#fullscreenvideo video').css('height', $(window).height() + 'px');
	
	$('#fullscreenvideo video').get(0).play(100);
	$('#fullscreenvideo video').attr('muted', true);
	$('#fullscreenvideo').animate({
	    opacity: 'toggle'
	  }, 500, 'linear', function() {
		  
		  $('#fullscreenvideo').animate({
			    opacity: 'toggle'
			  }, 500, 'linear', function() {
				  
				  
				  $('#fullscreenvideo video').get(0).pause();
				  $('#fullscreenvideo').html('');
			  });
		  
	  });
}


function playOutro()
{
	
}



function flip() {
	document.getElementById("side1").style.visibility="hidden";
	document.getElementById("side2").style.visibility="visible";
}