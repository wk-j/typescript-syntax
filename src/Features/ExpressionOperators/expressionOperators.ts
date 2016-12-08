var e = console.log;

function sum(a: number | null, b: number | null) {
    return a + b;
}

e(sum(null, 100) == 100);
e(sum(null, null) == 0);