## mapedType.ts

```typescript
module mapedType {

    type Item = { a: string, b: number, c: boolean };
    type T1 = {[P in "x" | "y"]: number };  // { x: number, y: number }
    type T2 = {[P in "x" | "y"]: P };  // { x: "x", y: "y" }
    type T3 = {[P in "a" | "b"]: Item[P]};  // { a: string, b: number }
    type T4 = {[P in keyof Item]: Date };  // { a: Date, b: Date, c: Date }
    type T5 = {[P in keyof Item]: Item[P]};  // { a: string, b: number, c: boolean }
    type T6 = { readonly[P in keyof Item]: Item[P]};  // { readonly a: string, readonly b: number, readonly c: boolean }
    type T7 = {[P in keyof Item]: Array<Item[P]> };  // { a: string[], b: number[], c: boolean[] };

    function go(t1: T1) {
        console.log(t1.x);
        console.log(t1.y);
    }

    // Make all properties in T optional
    type Partial<T> = {
    [P in keyof T]?: T[P];
    };

    // Make all properties in T readonly
    type Readonly<T> = {
        readonly[P in keyof T]: T[P];
    };

    // Pick a set of properties from T
    type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
    }

    // A type with a given set of properties of a given type
    type Record<K extends string | number, T> = {
    [_ in K]: T;
    }

    // A proxy for a given type
    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    // Proxify all properties in T
    type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
    }

    interface X {
        assign<T>(obj: T, props: Partial<T>): void;
        freeze<T>(obj: T): Readonly<T>;
        pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;
        mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U>;
        proxify<T>(obj: T): Proxify<T>;
    }


}
```