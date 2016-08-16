/**
	Author : Ali-Amechghal
	Description : example of singleton patten in javascript	
*/
function God () {
  if (arguments.callee._instance) {
    return arguments.callee._instance;
  }

  arguments.callee._instance = this;

  this.method = function () {
  };
}

var a = new God();
var b = God();
console.log( a === b ); // prints: true , there is only one God

//NB : web can just use literal object to get the same behavior