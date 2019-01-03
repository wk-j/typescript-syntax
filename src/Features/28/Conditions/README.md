## Condiction.ts

```typescript

const obj = {
    ...(true && { a: 1 }),
    ...(false ? { b: 2 } : { c: 3 })
}

console.log(obj)
```