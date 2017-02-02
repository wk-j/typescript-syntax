## main.ts

```typescript
import DateTime from "typescript-dotnet-umd/System/Time/DateTime";
import IEnumerable from "typescript-dotnet-umd/System.Linq/Linq";
import Parallel from "typescript-dotnet-umd/System/Threading/Tasks/Parallel";
import NotImplementedException from "typescript-dotnet-umd/System/Exceptions/NotImplementedException";

function process(value: number) {
    return  value + value;
}

var dt = DateTime.now.addYears(-10);
var range = IEnumerable.range(0, 100).where(x => x % 3 == 0).toArray();

throw new NotImplementedException("xxx");

```