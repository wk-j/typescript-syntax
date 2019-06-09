type Task = {
    id: string
    name: string
}

type PP = Pick<Task, "id">