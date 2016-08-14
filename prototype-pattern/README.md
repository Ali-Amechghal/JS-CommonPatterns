#Prototype Pattern

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


##Caution

Never replace the prototype instance or if you did that make sure you add the reference to the current constructor: 

```javascript

	Constructor.prototype ={
		constructor:Constructor,
		....
	}
```
	