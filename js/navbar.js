$( document ).ready(function() {
    var $nav = $("<nav>", {"class": "navbar navbar-default"});
	$("#nav").html($nav);
	
	var $containerfluid = $("<div>", {"class": "container-fluid"});
	$nav.append($containerfluid );
	
	var $header = $("<div>", {"class": "navbar-header"});
	$containerfluid.append($header);
	
	var $headermenu = $("<button>", {"type":"button", "class":"navbar-toggle", "data-toggle":"collapse", "data-target":"#myNavbar"});
	$headermenu.append('<span class="icon-bar"></span> ');
	$headermenu.append('<span class="icon-bar"></span> ');
	$headermenu.append('<span class="icon-bar"></span> ');
	$header.append($headermenu);
	
	var $title = $("<a>", {"class": "navbar-brand","href": "#"});
	$title.append("Mackes Playbook");
	$title.click(function(){
		showFeaturedMaps();
	});
	$header.append($title);
	
	var $collapse = $("<div>", {"class": "collapse navbar-collapse", "id": "myNavbar" });
	$containerfluid.append($collapse);
	
	var $ul = $("<ul>", {"class": "nav navbar-nav navbar-right"});
	$ul.append('<li><a href="#">HOME</a></li>');
	$ul.append('<li><a href="https://www.youtube.com/channel/UCvzTaZAVnw46pz1HByZIV6A">YOUTUBE</a></li>');
	$ul.append('<li><a href="#">CONTACT</a></li>');
	$ul.append('<li><a href="#" onclick="setConfig();">CONFIGS</a></li>');
	var $dropdown = $("<li>", {"class": "dropdown"});
	var $dropdownToggle = $("<a>", {"class": "dropdown-toggle", "data-toggle": "dropdown", "href": "#"});
	$dropdownToggle.append("ALL MAPS");
	$dropdownToggle.append('<span class="caret"></span>');
	var $dropdownMenu = $("<ul>", {"class": "dropdown-menu"});
	$dropdownMenu.append('<li><a href="#" onclick="setMap(\'mirage\');">Mirage</a></li>');
	$dropdownMenu.append('<li><a href="#" onclick="setMap(\'cache\');">Cache</a></li>');
	$dropdownMenu.append('<li><a href="#" onclick="setMap(\'train\');">Train</a></li>');
	$dropdownMenu.append('<li><a href="#" onclick="setMap(\'overpass\');">Overpass</a></li>');
	$dropdownMenu.append('<li><a href="#" onclick="setMap(\'inferno\');">Inferno</a></li>');
	$dropdownMenu.append('<li><a href="#" onclick="setMap(\'dust2\');">Dust2</a></li>');
	$dropdownMenu.append('<li><a href="#" onclick="setMap(\'cobblestone\');">Cobblestone</a></li>');
	$dropdownMenu.append('<li><a href="#" onclick="setMap(\'nuke\');">Nuke</a></li>');
	
	
	$dropdown.append($dropdownToggle);
	$dropdown.append($dropdownMenu);
	$ul.append($dropdown);
	$ul.append('<li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>');
	$collapse.append($ul);
	
});

/*
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="#">Mackes Playbook</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#home">HOME</a></li>
        <li><a href="#band">TEAM DSECT</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">ALL MAPS
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a href="#">Mirage</a></li>
            <li><a href="#">Cache</a></li>
            <li><a href="#">Train</a></li> 
            <li><a href="#">Overpass</a></li> 
            <li><a href="#">Dust2</a></li> 
            <li><a href="#">Nuke</a></li> 
            <li><a href="#">Inferno</a></li> 
            <li><a href="#">Cobblestone</a></li> 
          </ul>
        </li>
		
        <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>
      </ul>
    </div>
  </div>
</nav>
*/