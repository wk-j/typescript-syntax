## main.ts

```typescript
enum EventType { Mouse, Keyboard }

interface MyEvent { timestamp: number; }

interface MyMouseEvent extends MyEvent {
    x: number;
    y: number;
}

interface KeyEvent extends MyEvent {
    keyCode: number
}

// Unsound
function listenEvent(eventType: EventType, handler: (n: MyEvent) => void) {
    /* ... */
    handler({ timestamp: 100 });
}

// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + "," + e.y));
```