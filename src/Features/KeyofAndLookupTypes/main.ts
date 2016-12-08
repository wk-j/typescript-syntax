interface Person {
    name: string;
    age: number;
}

var log = console.log;

type K1 = keyof Person;
type K2 = keyof Person[];

function getValue(obj, k:K1) {
    return obj[k];
}

var p = { name: "wk", age: 15 };
log(getValue(p, "name"));
log(getValue(p, "age"));