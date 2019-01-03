export function T() {
    let o = {
        a: 0,
        b: 0,
        c: new Date(),
        d: new Date()
    }

    const { a, b, ...rest } = o
    console.log(rest);
}

T();