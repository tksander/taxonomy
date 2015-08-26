//Pseudoclassical Bee
var Bee = function() {
  //Inherit from grub
  Grub.call(this);
  //Overwrite properties
  this.age = 5;
  this.color = "yellow";
  //New property
  this.job = "keep on growing";
};
//Handle failed property lookups
Bee.prototype = Object.create(Grub.prototype);
//Constructor
Bee.prototype.constructor = Bee;