function showFeaturedMaps() {
	var $featuredMaps = $("<div>", {"class": "container-fluid"});
	$("#mainSection").html($featuredMaps);
	
	var $row1 = $("<div>", {"class": "row"});
	
	var $1a = $("<a>", {"href":"#"});
	var $1ab = $("<div>", {"class":"col-sm-3 featuredMap", "id":"miragebg"});
	$1ab.append('<h3>Mirage</h3>');
	$1ab.click(function() {
		setMap("mirage");
	});
	$1a.append($1ab);
	$row1.append($1a);
	
	var $2a = $("<a>", {"href":"#"});
	var $2ab = $("<div>", {"class":"col-sm-3 featuredMap", "id":"cachebg"});
	$2ab.append('<h3>Cache</h3>');
	$2ab.click(function() {
		setMap("cache");
	});
	$2a.append($2ab);
	$row1.append($2a);
	
	
	var $3a = $("<a>", {"href":"#"});
	var $3ab = $("<div>", {"class":"col-sm-3 featuredMap", "id":"trainbg"});
	var $3ab2 = $("<div>", {"class":"col-sm-3", "id":"trainbg"});
	$3ab.append('<h3>Train</h3>');
	$3ab.click(function() {
		setMap("train");
	});
	$3a.append($3ab);
	$row1.append($3a);
	
	
	var $4a = $("<a>", {"href":"#"});
	var $4ab = $("<div>", {"class":"col-sm-3 featuredMap", "id":"overpassbg"});
	$4ab.append('<h3>Overpass</h3>');
	$4ab.click(function() {
		setMap("overpass");
	});
	$4a.append($4ab);
	$row1.append($4a);
	
	$featuredMaps.append($row1);
	
}

$( document ).ready(function() {
    showFeaturedMaps();
});

/*
<div class="container-fluid">
  <div class="row">
    <a href="#">
		<div class="col-sm-3 featuredMap" id="miragebg">
		<h3>Mirage</h3>
		</div>
	</a>
	<a href="#">
		<div class="col-sm-3 featuredMap" id="cachebg">
		<h3>Cache</h3>
		</div>
	</a>
	<a href="#">
		<div class="col-sm-3 featuredMap" id="trainbg">
		<h3>Train</h3>
		</div>
	</a>
	<a href="#">
		<div class="col-sm-3 featuredMap" id="overpassbg">
			<h3>Overpass</h3>
		</div>
	</a>
  </div>
</div>

*/