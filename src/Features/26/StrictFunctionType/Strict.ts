
type Animal = {}
type Dog = Animal & {
    a: string
}
type Cat = Animal & {
    b: string
}

var f1 = (x: Animal) => { }
var f2 = (x: Dog) => { }
var f3 = (x: Cat) => { }

// f1 = f2;
f2 = f1;
// f2 = f3;