// Discriminated Unions vs Unions
namespace Du {

    type Square = {
        kind: "square"
        size: number
    }

    type Rectangle = {
        kind: "rectangle"
        height: number
        width: number
    }

    type Circle = {
        kind: "circle"
        radius: number
    }

    function area(s: Square | Rectangle | Circle) {
        switch (s.kind) {
            case "square": return s.size * s.size
            case "rectangle": return s.width * s.height
            case "circle": return s.radius * Math.PI ** 2
        }
    }

    function a(s: string | number) {
        if (typeof s == "number") {
            return "number"
        } else if (typeof s == "string") {
            return "string"
        }

    }

    console.log(a("a"))
    console.log(a(100))

    type Alias = { num: number }
    interface Interface {
        num: number;
    }

    declare function aliased(arg: Alias): Alias;
    declare function interfaced(arg: Interface): Interface;

}