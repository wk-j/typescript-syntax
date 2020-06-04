
type TypeA = {
    name: string
    age: number
}

type K = {
    address: string
}

type TypeB = TypeA & { address: string }


let b: TypeB = {
    name: "wk",
    age: 15,
    address: "Bangoko"
}
