/**
  Author  : Ali-Amechghal
  Description : exampl of Prototype patten in javascript

*/

var ProgrammingLanguage =  function(_name, _version, _typed){
	this.name = _name;
	this.version = _version;
	this.typed =  _typed
}

ProgrammingLanguage.prototype.description = function(){
	return this.name + " the current version is "+this.version+" and its a "+
			((this.typed)? "typed" : " Not typed ");
}

var java =  new ProgrammingLanguage("Java" , "8" , true);
console.log(java.description());