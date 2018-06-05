module KK {
    let l = console.log;
    let o1 = {
        a: 100,
        b: 200
    }

    let o2 = {
        a: 200
    }

    let a1 = [1,2];

    let x = { ...o1, ...o2, ...a1 };

    l(x);
}
