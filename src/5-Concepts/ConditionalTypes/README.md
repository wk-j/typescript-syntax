## CT.ts

```typescript
namespace ConditionalTypes.CT {
    type AnimalType = "Fish" | "Bird"

    type Animal <T> = T extends "Bird"
        ? { type: T, flySpeed: number }
        : T extends "Fish"
        ? { type: T, swimSpeed: number }
        : never


    type F = Animal<"Fish">
    type B = Animal<"Bird">

    const f: F = { type: "Fish", swimSpeed: 10 }
    const b: B = { type: "Bird", flySpeed: 20 }

    console.log(f)
    console.log(b)
}

```