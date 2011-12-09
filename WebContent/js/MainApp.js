$(document).ready(function(){
	
	
	$('#pictures img').click(function(event) {
		
		videoPicked($(event.target).attr('alt'));
		
		  //alert('Handler for .click() called of div: ' + $(event.target).attr('alt'));
		});
	
	
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
	
	$('#fullscreenvideo').html('<video src="' + name + '.ogv"></video>');
	$('#fullscreenvideo').css('display', 'normal');
	$('#darkroom').prepend('<img src="' + name + '.jpg"/>');
	
	$('#fullscreenvideo video').bind("ended", function(){
		$('#fullscreenvideo').css('display', 'none');
	      alert('Video Ended'); 
	    });
	
	
	
	//alert(name);
	
	
}