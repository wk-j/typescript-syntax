## main.ts

```typescript
function KAL() {
    interface Person {
        name: string;
        age: number;
    }

    var log = console.log;

    type K1 = keyof Person;
    type K2 = keyof Person[];
    type K3 = Person["name" | "age"]; // string | number

    function getType(k: K3) {
        return typeof(k);
    }

    function getValue(obj, k:K1) {
        return obj[k];
    }

    var p = { name: "wk", age: 15 };
    log(getValue(p, "name"));
    log(getValue(p, "age"));

    log(getType("string")); // string
    log(getType(20));       // number
}

KAL();
```