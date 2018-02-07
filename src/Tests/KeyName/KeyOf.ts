
type Todo = {
    id: number;
    text: string;
    due: Date;
}

type TodoKeys = keyof Todo;

function props<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

var todo = { id: 1, text: "Sleep", due: new Date() }
var text = props(todo, "text");