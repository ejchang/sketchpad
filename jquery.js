$(document).ready(function(){
	var dimension;
	var $selection;
	var options;

	$("button").click(function(){
		do{
			dimension = prompt("Enter a number between 1 and 64, inclusive.","16");
		}while(isNaN(dimension) || dimension <1 || dimension>64);
		$('#container').empty();
		$('#container').append("<div id='grid'></div>");
		$selection = parseInt($(this).attr("value"),10);
		if($selection ===2){
			options = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		}
		createGrid(dimension);
	});

	$(document).on('mouseenter','.square',function(){
		switch($selection){
			case 0:
				$(this).css("background-color","#9999FF");
				break;
			case 1:
				var opacity = $(this).css("opacity");
				$(this).css("opacity", (opacity > 0.1) ? (opacity -0.1) : opacity);
				break;
			case 2:
				$(this).css("background-color", randomColor());
				break;
		};
	});

	var createGrid = function(dimension){
		var boxDim = 800/dimension;
		for(var i =0;i<dimension;i++){
			$('#grid').append("<div class = 'row'></div>");
		};
		for(var j=0;j<dimension;j++){
			$(".row").append("<div class ='square'></div>");
		};
		$('.square').width(boxDim+"px");
		$('.square').height(boxDim+"px");
		$('.square').css("background-color","black");
	};

	var randomColor = function(){
		var color = "#";
		for(var i=0;i<6;i++){
			var temp = Math.floor((Math.random() * 15));
			color = color.concat(options[temp]);
		}
		return color;
	}


});