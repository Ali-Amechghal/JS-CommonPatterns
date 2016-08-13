# JS-CommonPatterns
Common Javascript design patterns or the most used ones


![alt tag](http://tattoocollection.in/wp-content/uploads/Wonderful-Tribal-Tattoo-On-Biceps-For-Men-9.gif)

##Module Pattern
Keep particular code independent of others components, this called loose coupling in OOP.
the module are simular to OOP classes, and a module should be immediatly invoked function expression (IIFE).

###Pattern

var instanceModule = (function(additionalParameters) {
```javascript
    //keepping variables and functions private here

    //return an object that will contains the public properties/methods
    return {
      // declare public properties here
    }

})(additionalParameters);
```
##Observer Pattern

Observer pattern is used when change of one application part need to update the other parts.
if an object is changed it broadcasts to dependent objects that a change has occured.

![alt tag](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Observer.svg/1000px-Observer.svg.png)

###Pattern

```javascript
	var Observer = function(){
		return {
			notify: function(){..}
		}
	}

	var Subject = function(){
		this.observers = [];
		return {
			registreObserver : function(observer){
				//add observer object to observers array
			},
			unregistreObserver:function(observer){
				//remove observer object from observers array
			},
			notifyObservers:function(){
				//walk through observers array and call notify method
			}
		}
	}
```
##Prototype Pattern

The prototype pattern is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects

![alt tag](https://upload.wikimedia.org/wikipedia/commons/1/14/Prototype_UML.svg)

```javascript
	var Constructor = function() {
	  this.property = "";
	}

	Constructor.prototype.method = function() {
	  //implement common behavior between all instances
	}
```

###Caution

Never replace the prototype instance or if you did that make sure you add the reference to the current constructor: 

```javascript
	Constructor.prototype ={
		constructor:Constructor,
		....
	}
```
##Singleton Pattern

The Singleton restricts clients from creating multiple objects, after the first object created, it will return instances of itself.


![alt tag](https://upload.wikimedia.org/wikipedia/commons/d/dc/Singleton_pattern_uml.png)

###NB

we can get a singleton just by using the literal object 

```javascript
	var singletonInstance  = {
		method:function(){},
		propery:""
	}
```

@Ali-Amechghal
