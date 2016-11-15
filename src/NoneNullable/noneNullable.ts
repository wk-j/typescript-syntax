// let foo: string = null;
let bar: string | null = null;

declare let strs: string[] | undefined;

// let uperCased = strs.map(s => s.toUpperCase());
let lowerCased = strs!.map(s => s.toUpperCase());

