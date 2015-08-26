//Pseudoclassical Grub
var Grub = function() {
  this.age = 0;
  this.color = "pink";
  this.food = "jelly";
};
//Constructor
Grub.prototype.constructor = Grub;
Grub.prototype.eat = function(){console.log("I'm eating!!");};