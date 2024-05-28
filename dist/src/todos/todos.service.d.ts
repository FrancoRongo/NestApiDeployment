import { TodosRepository } from "./todos.repository";
export declare class TodosService {
    private todosRepository;
    private accessToken;
    constructor(todosRepository: TodosRepository, accessToken: string);
    getTodos(): Promise<any[]> | "No tiene acceso a esta informacion";
}
