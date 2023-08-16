## T.ts

```typescript
// https://www.facebook.com/imn3tr/posts/10160172168394782?__cft__[0]=AZWLzwYL5jd4bgpK7IA6ZHplHjFaC_C9ubPpMuFs_XIAHrTadCbekdJrJ3GsQ7FuyPN0HFWuW2mgRSk8cAANCzYzYT8wMnnIoEkNX1w_s6b4jK6kJGrNz-yorTisfkqkEUWWlXv4edLgkc0xbatm-hlU&__tn__=%2CO%2CP-R

namespace TK {

    type InputA = {
        type: "A"
    }

    type InputB = {
        type: "B",
    }

    type OptionA = {
        optionA: string
    }

    type OptionB = {
        optionB: string
    }

    type Options = {
        A: { input: InputA, options: OptionA },
        B: { input: InputB, options: OptionB }
    }

    type Return = <T extends keyof Options>(input: { type: T } & Options[T]["input"]) => Options[T]["options"]

    let process: Return = (value) => {
        if (value.type == "A") {
            return { optionA: "A" }
        } else {
            return { optionB: "B" }
        }
    }

    var a = process({ type: "A" })
    var b = process({ type: "B" })

    export function go() {
        console.log(a);
        console.log(b);
    }
}

TK.go()

```