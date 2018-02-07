## main.ts

```typescript

let l = console.log;

function plus(x: number, y: number) {
    return x + y;
}

function s1(...value) {
    return (value as number[]).reduce( (x,y) => x + y, 0);

}

function s2(...value: number[]) {
    return (value as number[]).reduce( (x,y) => x + y, 0);
}

function stringOrNumber(...x: (number|string)[]) {

}

var x = [1,2,3,4]

l(s1(1,2,3));
l(s2(...[1,2,3,4]));

stringOrNumber(...[1,2,3]);
stringOrNumber(...["1", "2"]);
stringOrNumber(...[1, "3"]);
```