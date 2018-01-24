type X = 'A' | 'B' | 'C'

//const f = (x: X): number => {
const f = (x: X): number | never => {
    if (x === 'A') {
        return 0
    }
    else if (x == 'B') {
        return 1
    }
    else {
        throw new Error(`${x} is not an element of type 'X'`)
    }
}


f('C')