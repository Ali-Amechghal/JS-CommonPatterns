/**
	Author  : Ali-Amechghal
	Description : exampl on how to use module pattern in javascript
*/

var ModuleInstance = (function(){
	//###### Private Properties / Functions
	//My Secret name : Jose special agent , and not javascript as all know
	var _name = "Jose Special Agent";
	var _awesomeness = Infinity;

	var howMyInternalGCWork = function(){
		return "this a private function , you will never know how my GC works !";
	}
	//Private function until it get referenced by public object
	var willBeReferencedByPublicGuy=function(){
		return "Yes, what can i do for you ?";
	}

	//i'm the public guy , i'm the person to talk with
	return{
		name:"Javascript",
		speaker:willBeReferencedByPublicGuy
	}	
}());


console.log(ModuleInstance._name); //undefined
console.log(ModuleInstance.name); // "Javascript"
//console.log(ModuleInstance.howMyInternalGCWork()) // TypeError: ModuleInstance.howMyInternalGCWork is not a function
console.log(ModuleInstance.speaker())//"Yes, what can i do for you ?"