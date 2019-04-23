## T.ts

```typescript

export function T() {
    let obj = {
        a: 0,
        b: 0,
        c: new Date(),
        d: new Date()
    }

    const { a, b, ...rest } = obj
    console.log(rest)
}

T();
```