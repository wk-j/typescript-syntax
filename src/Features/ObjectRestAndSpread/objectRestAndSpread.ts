var log = console.log;

function copy() {
    log("== COPY ==");
    var original = {
        a: 100,
        b: 200
    };

    let copy = { ...original };

    log(original);
    log(copy);

    copy.a = 0;

    log(original);
    log(copy);
}

function merged() {
    log("== MERGE ==");
    var a = { a: 100 };
    var b = { a: 200, b: 200 };
    var c = { c: 300 };

    let merged = { ...a, ...b, ...c };
    log(merged);

    let x = {
        kk: 100,
        ...a
    }

    log(x);
}

function rest() {
    log("== REST ==");
    var obj = {
        a: 100,
        b: 200,
        y: 300,
        z: 400,
    };

    let {a,b, ...rest } = obj;
    log(a);
    log(b);
    log(rest);
}

copy();
merged();
rest();