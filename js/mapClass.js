//------------Map Class-------------------
function mapClass (_name) {
    this.name = _name;
    this.strats = [];
}

mapClass.prototype.addStrat = function(strat) {
    this.strats.push(strat);
};


mapClass.prototype.getName = function() {
    return this.name;
};

mapClass.prototype.getStrats = function() {
    return this.strats;
};

//------------Strat Class-------------------
function stratClass (_name, _desc, _imgs) {
    this.name = _name;
	this.desc = _desc;
    this.imgs = _imgs;
}
 
stratClass.prototype.getName = function() {
    return this.name;
};
stratClass.prototype.getDesc = function() {
    return this.desc;
};
stratClass.prototype.getImgs = function() {
    return this.imgs;
};
