#Module Pattern
Keep particular code independent of others components, this called loose coupling in OOP.
the module are simular to OOP classes, and a module should be immediatly invoked function expression (IIFE).

##Pattern

var instanceModule = (function(additionalParameters) {

    //keepping variables and functions private here

    //return an object that will contains the public properties/methods
    return {
      // declare public properties here
    }

})(additionalParameters);


