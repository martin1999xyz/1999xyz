function foo() {
    
    var x = 2;
    
    function bar() {
        console.log(x);
    }

    return bar;
}

var baz = foo();

baz();
