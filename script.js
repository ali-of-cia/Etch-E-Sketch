
$(document).ready(function() {

	/* Create the Grid */
	var grid = 64;
	createGrid(grid);
	makePretty();

	/* Create a new sketch */
	$('#sketch').click(function(){
		$('.square').remove();
			grid = parseInt(prompt('What size grid? Choose 100-1.'));
				if (grid > 100) {
					grid = 100
				} else if (grid < 1) {
					grid = 1;
				}

	createGrid(grid);
	makePretty();

		});

});

	function makePretty(){
		$('.square').mouseenter(function() {
			$(this).addClass('tracer');
			$(this).mouseleave(function() {
				$(this).fadeTo('slow', 0.5);
			});
		});
	}

function createGrid(numBoxes) {
	for (var i = 0; i < (numBoxes * numBoxes); i++) {
		$('<div/>', {
			'class' : 'square',
		}).appendTo('#grid');
	}

	/* Grid will be 600 pixels */
	var squareSize = 600 / numBoxes;
	$('.square').css({
		'height': squareSize,
		'width' : squareSize
	});
}

