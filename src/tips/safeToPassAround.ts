
class SafeAdder {
    constructor(public a: string) {}
    add = (b: string) =>  {
        return this.a + b;
    }
}

class Adder {
    constructor(public a: string) { }
    add(b: string) {
        return this.a + b;
    }
}

function tryAdd(add, value) {
    add(value);
}

var safe = new SafeAdder("Hello");
tryAdd(safe.add, "world");

var adder = new Adder("Hello");
// tryAdd(adder.add, "world");
