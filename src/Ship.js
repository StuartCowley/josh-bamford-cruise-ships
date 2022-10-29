function Ship(currentPort){
    this.currentPort = currentPort;
};

Ship.prototype.setSail = function() {
    this.currentPort = ''
};

module.exports = Ship;