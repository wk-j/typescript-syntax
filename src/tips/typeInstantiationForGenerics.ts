class UFoo<T> {
    go: T;
}


let FooNumber = UFoo as { new (): UFoo<number> };

var x = new FooNumber()
x.go = 100;
//x.foo = "xx";


function id<U>(x:U) { return x; }
const idNum = id as { (x:number): number }
idNum(100);
//idNum("100");
