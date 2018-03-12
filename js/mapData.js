var maps = {};
function generateMaps() {
	//--------------Mirage------------------
	var mirage = new mapClass("mirage");
	maps[mirage.name] = mirage;
	
	//T
	mirage.addStrat(new stratClass("T pistol", "null", []));
	
	//CT
	var tmpImgs = [];
	tmpImgs.push("img/mirage/connect1.jpg");
	tmpImgs.push("img/mirage/connect2.jpg");
	mirage.addStrat(new stratClass("CT One-way connect", "One way smoke in connect that lets you see ug, top mid and short.", tmpImgs));
	
	//--------------cache------------------
	var cache = new mapClass("cache");
	maps[cache.name] = cache;
	
	//T
	cache.addStrat(new stratClass("T pistol", "null", []));
	var tmpImgs = [];
	tmpImgs.push("img/cache/bcontrol1.jpg");
	tmpImgs.push("img/cache/bcontrol2.jpg");
	tmpImgs.push("img/cache/bcontrol3.jpg");
	cache.addStrat(new stratClass("T B main control", "Run and smoke B main entrance then throw a molly"+
	" on the corner so that it lands in checkers.", tmpImgs));
	var tmpImgs = [];
	tmpImgs.push("img/cache/doorexe1.jpg");
	tmpImgs.push("img/cache/doorexe2.jpg");
	tmpImgs.push("img/cache/doorexe3.jpg");
	cache.addStrat(new stratClass("T Door execute", "Smoke the cross from door, then run and molly behind forklift.<br/>"+
	"You should clear the corner at forklift and railing first.", tmpImgs));
	//CT
	
	
	//--------------train------------------
	var train = new mapClass("train");
	maps[train.name] = train;
	
	//T
	var tmpImgs = [];
	tmpImgs.push("img/train/connect1.jpg");
	tmpImgs.push("img/train/connect2.jpg");
	tmpImgs.push("img/train/connect3.jpg");
	tmpImgs.push("img/train/salley1.jpg");
	tmpImgs.push("img/train/salley2.jpg");
	tmpImgs.push("img/train/salley3.jpg");
	tmpImgs.push("img/train/connect-alley.jpg");
	train.addStrat(new stratClass("T pistol", "2 smokes, 2 flash, 2 spelare mot B, 2 mot pop, en main. <br/>" 
	+ "Smoka alley från pop, flasha pop och droppa som torn, "
	+" ta pop sen klättra upp och gå ut 4 B.<br/>" + 
	"Main spelaren smokar connect och går ut main med flash.", tmpImgs));
	
	train.addStrat(new stratClass("T Snabb A", "Hoppa olof och molla alley", []));
	
	var tmpImgs = [];
	tmpImgs.push("img/train/alley1.jpg");
	tmpImgs.push("img/train/alley2.jpg");
	tmpImgs.push("img/train/alley3.jpg");
	train.addStrat(new stratClass("T Alley control", "Run and smoke the left side of alley, then walk and molly the right side."
	, tmpImgs));
	//CT
	
	//--------------overpass------------------
	var overpass = new mapClass("overpass");
	maps[overpass.name] = overpass;

	//T
	overpass.addStrat(new stratClass("T pistol", "Toilet control<br/>"+
	"Go 3 players down to underground and push fast up to toilets.<br/>"+
	"Go 2 player up to fountain and continue through mid to toilet.<br/>"+
	"Depending on what happends: go A or go back underground to B.", []));
	
	var tmpImgs = [];
	tmpImgs.push("img/overpass/midcontrol1.jpg");
	tmpImgs.push("img/overpass/midcontrol2.jpg");
	overpass.addStrat(new stratClass("T Mid control", "Smoke toilets then run flash banana", tmpImgs));
	
	//CT
	var tmpImgs = [];
	tmpImgs.push("img/overpass/ugsmoke1.jpg");
	tmpImgs.push("img/overpass/ugsmoke2.jpg");
	overpass.addStrat(new stratClass("CT One way smoke underground", "", tmpImgs));
	
	//--------------inferno------------------
	var inferno = new mapClass("inferno");
	maps[inferno.name] = inferno;
	//T
	inferno.addStrat(new stratClass("T Pistol", "null", []));
	//CT
	var tmpImgs = [];
	tmpImgs.push("img/inferno/A-retake-molo1.jpg");
	tmpImgs.push("img/inferno/A-retake-molo2.jpg");
	tmpImgs.push("img/inferno/A-retake-molo3.jpg");
	inferno.addStrat(new stratClass("CT Retake A site molotov", "", tmpImgs));
	
	//--------------dust2------------------
	var dust2 = new mapClass("dust2");
	maps[dust2.name] = dust2;
	dust2.addStrat(new stratClass("T-pistol", "null", []));
	//T
	//CT
	
	//--------------cobblestone------------------
	var cobblestone = new mapClass("cobblestone");
	maps[cobblestone.name] = cobblestone;
	//T
	cobblestone.addStrat(new stratClass("T Pistol", "null", []));
	//CT
	
	//--------------nuke------------------
	var nuke = new mapClass("nuke");
	maps[nuke.name] = nuke;
	//------------------T---------------------
	nuke.addStrat(new stratClass("T Pistol", "En håller hut push, en går railing ut. "+
		"Tre st går ramp, tar kontakt sen vänder direkt till hut och går in A. "+
		"Railing kommer main eller heaven.", []));
	//------------------CT--------------------
}
generateMaps();