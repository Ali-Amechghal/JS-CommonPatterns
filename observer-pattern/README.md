#Observer Pattern

Observer pattern is used when change of one application part need to update the other parts.
if an object is changed it broadcasts to dependent objects that a change has occured.

![alt tag](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Observer.svg/1000px-Observer.svg.png)

##Pattern
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
			notifyObserver:function(observer){
				//notify given observer if its already registered
			},
			notifyObservers:function(){
				//walk through observers array and call notify method
			}
		}
	}
```

