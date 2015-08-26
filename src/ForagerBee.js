//Pseudoclassical ForagerBee
var ForagerBee = function() {
  //Call be superclass
  Bee.call(this);
  //Overwrite properties
  this.age = 10;
  this.job = "find pollen";
  //New properties
  this.canFly = true;
  this.treasureChest = [];
};
//Delegate failed lookups
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
//New methods
ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
};