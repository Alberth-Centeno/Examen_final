import { fetchData } from '../utils/fetch.util.js';
import { Todo } from '../interfaces/todo.interface';

export async function getTodos(): Promise<Todo[]> {
  return fetchData<Todo[]>('https://jsonplaceholder.typicode.com/todos');
}
