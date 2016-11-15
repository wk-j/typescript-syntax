## lazyObjectLiteralInitialization.ts

```typescript

// not safe
var foo = {} as any;
foo.bar = 123;
foo.bas = "Hello world";

// safe
interface Foo {
    bar: number;
    bas: string
}

var f1 = {} as Foo;
f1.bar = 100;
console.log(f1);
```