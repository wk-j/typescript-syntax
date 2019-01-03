## Range.ts

```typescript
export function range(n) {
    const u = [...Array(n).keys()]
    return u;
}

var stack = range(10);
console.log(stack);
```