type Person = {
    name: string;
    age: string
    location: string
}

type RemainingKeys = Exclude<keyof Person, "location">
type QuantumPerson = Pick<Person, RemainingKeys>

type Omit_<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

type OM = Omit_<Person, "name" | "age">