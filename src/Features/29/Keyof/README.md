## Keyof.ts

```typescript
function kkeyof() {
    const c = "c"
    const d = 10
    const e = Symbol()
    const enum E1 { A, B, C };
    const enum E2 { A = "A", "B" = "B", C = "C" };

    type Foo = {
        a: string
        5: string
        [c]: string
        [d]: string
        [e]: string
        [E1.A]: string
        [E2.A]: string
    }

    type K1 = keyof Foo
    type K2 = Extract<keyof Foo, string>
    type K3 = Extract<keyof Foo, number>
    type K4 = Extract<keyof Foo, symbol>
}

kkeyof();


```