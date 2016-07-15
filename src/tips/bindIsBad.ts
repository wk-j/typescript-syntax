
function twoParams(a: number, b: number) {
    return a + b;
}

let curryOne = twoParams.bind(null,200);
let a1 = curryOne(200);
let a2 = curryOne("Two")

console.log(a1);
console.log(a2);
