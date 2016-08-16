#Singleton Pattern

The Singleton restricts clients from creating multiple objects, after the first object created, it will return instances of itself.


![alt tag](https://upload.wikimedia.org/wikipedia/commons/d/dc/Singleton_pattern_uml.png)

##NB

we can get a singleton just by using the literal object 

```javascript

	var singletonInstance  = {
		method:function(){},
		propery:""
	}
	
```