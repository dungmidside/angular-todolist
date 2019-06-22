export class Todo {
    id: number;
    title: string;
    isDone: boolean;

    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
