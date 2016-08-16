/**
	Author : Ali-Amechghal
	Description : exampl of Observer pattern in javascript
*/

var Subject =  function(_name){
	var name = _name;
	var observers = [];
	function getIndex(observer){
		return observers.indexOf(observer);
	}
	return{
		registreObserver : function(observer){
			observers.push(observer);
		},
		unregistreObserver : function(observer){
			var index =  getIndex(observer)
			if(index > -1){
				observers.splice(index,1);
			}			
		},
		notifyObserver:function(observer){
			var index = getIndex(observer);
			if(index > -1){
				observer.notify(name);
			}
		},
		notifyAllObservers:function(){
			observers.forEach(function(observer){
				observer.notify(name);
			},this);
		}
	}
};

var Observer = function(_name){
	var name =_name;
	return {
		notify:function(_subjectName){
			console.log(name + " get notified by "+_subjectName);
		}
	}
}


var police = new Observer("Police");
var fbi = new Observer("FBI");
var parent = new Observer("Parent");

var trouble =  new Subject("Child Trouble");
trouble.registreObserver(police);
trouble.registreObserver(fbi);
trouble.registreObserver(parent);

trouble.notifyObserver(parent);
trouble.notifyAllObservers();



