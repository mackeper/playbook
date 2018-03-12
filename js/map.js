function createStratCarousel($div, imgs) {
	var $carousel = $("<div>", {"id": "myCarousel", "class": "carousel slide", "data-ride": "carousel"});
	var $indicators = $("<ol>", {"class": "carousel-indicators"});
	$indicators.append('<li data-target="#myCarousel" data-slide-to="0" class="active"></li>');
	for(let i = 1; i < imgs.length; i++) {
		$indicators.append('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>');
	}
	
	var $inner = $("<div>", {"class": "carousel-inner"});
	$inner.append('<div class="item active"><img src="'+imgs[0]+'"></div>');
	for(let i = 1; i < imgs.length; i++) {
		$inner.append('<div class="item"><img src="'+imgs[i]+'"></div>');
	}
	
	
	$carousel.append($indicators);
	$carousel.append($inner);
	//Controls
	$carousel.append('<a class="left carousel-control" href="#myCarousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a>');
	$div.append($carousel);
}

function setCurrentStratSection($div, strat) {
	$div.html("");
	$div.append('<h3>'+ strat.getName() +'</h3>');
	$div.append('<p>'+ strat.getDesc() +'</p>');
	
	if(strat.getImgs().length > 0) {
		createStratCarousel($div, strat.getImgs());
	}
}

function setMap(m) {
    var $map = $("<div>", {"class": "container-fluid"});
	$("#mainSection").html($map);	
	
	var map = maps[m];
	var $row2 = $("<div>", {"class": "row"});
	//--------------------- Mid section-----------------
	var $cstrat = $("<div>", {"class":"col-sm-10"});
	setCurrentStratSection($cstrat, map.getStrats()[0]);
	

	//--------------------- list section-----------------
	var $stratList= $("<div>", {"class":"col-sm-2 stratList"});
	$stratList.append("<h3>"+map.getName().charAt(0).toUpperCase() + map.getName().slice(1)+"</h3>");
	var $strats = $("<ul>", {});
	
	for(let i = 0; i < map.getStrats().length; i++) {
		var $strat = $("<li>", {});
		$strat.append('<a href="#"><li>'+map.getStrats()[i].getName()+'</li></a>');
		var tmpid = i;
		$strat.click(function() {
			setCurrentStratSection($cstrat, map.getStrats()[i]);
		});
		$strats.append($strat);
	}
	$stratList.append($strats);
	$row2.append($stratList);
	
	//---------------Add mid section after list-----------
	$row2.append($cstrat);
	
	$map.append($row2);
	
}