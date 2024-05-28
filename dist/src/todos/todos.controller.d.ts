import { TodosService } from "./todos.service";
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    getTodos(): Promise<any[]> | "No tiene acceso a esta informacion";
}
