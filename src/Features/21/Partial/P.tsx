export type Person = {
    name: string
    age: number
    location: string
}

type Partial<T> = {
    [P in keyof T]?: T[P]
}

type PartialString<T> = {
    [P in keyof T]?: string
}

type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}


type P1 = Partial<Person>
type P2 = PartialString<Person>