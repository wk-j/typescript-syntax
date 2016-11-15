## expressionOperators.ts

```typescript
var log = console.log;

function sum(a: number | null, b: number | null) {
    return a + b;
}

log(sum(null, 100) == 100);
log(sum(null, null) == 0);
```