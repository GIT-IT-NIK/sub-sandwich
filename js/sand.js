$(document).ready(function() {
	// draggable
  $('#toppings .drag').draggable({
      revert : 'invalid',
	  snap : '#bread',
      stack: ".drag",
  }); // end draggable
  
  // draggable position
 $(".drag").data({
	 'originalLeft': $(".drag").css('left'),
     'origionalTop': $(".drag").css('top')
  });
  
  // droppable			
  $('#bread').droppable({
	  accept : ".drag",
	  drop : function(event, ui) {
		  var labelName = ui.draggable.find('img').attr("alt");
          $(this).find('.labels').append('<p>' + labelName + '</p>');
	  }
  }); // end droppable   

  $(".reset").click(function() {
	 // location.reload(true);
	$("#toppings .drag").css({
		'left': $(".drag").data('originalLeft'),
		'top': $(".drag").data('origionalTop')}		
	 );
	 $('.labels').empty();
  });
}); // end ready