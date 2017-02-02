## main.ts

```typescript
import List from "typescript-dotnet-umd/System/Collections/List"
import IEnumerable from "typescript-dotnet-umd/System.Linq/Linq"

var range = IEnumerable.range(0, 100).where(x => x % 5 == 0).toArray();
console.log(range);


```