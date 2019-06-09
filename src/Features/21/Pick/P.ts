type Task = {
    id: string
    name: string
}

type PP1 = Pick<Task, "id">
type PP2 = Partial<Task>