$(document).ready(function(){
	var dimension;
	var $selection;

	$("button").click(function(){
		do{
			dimension = prompt("Enter a number between 1 and 64, inclusive.","16");
		}while(isNaN(dimension) || dimension <1 || dimension>64);
		$('#container').empty();
		$('#container').append("<div id='grid'></div>");
		$selection = parseInt($(this).attr("value"),10);
		createGrid(dimension);
		if($selection ===2){
			forFun();
		}

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
				$(this).css("opacity", "0");
				break;
		};
	});

	var forFun = function(){
		$('.square').css("background-color", "white");
		$('.square').css("margin", "0px");
		$('.square').css("border",("1px solid black"));
		$('#grid').css("background-image", "url(http://img1.wikia.nocookie.net/__cb20140201013626/trollpasta/images/thumb/a/a6/Dickbutt.jpg/633px-Dickbutt.jpg)");
		$('#grid').css("background-repeat","no-repeat");
	};

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


});