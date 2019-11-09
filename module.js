function CoolModule() {
    var aString = "cool";
    var anArray = [1, 2, 3];
   
	function doSomething() {
        console.log( aString );
	}

	function doAnother() {
		console.log( anArray.join( " ! " ) );
	}

	return {
		doSomething: doSomething,
        doAnother: doAnother
	};
}

// Because the module pattern dont exist without closure
var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
