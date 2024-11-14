import { fetchData } from '../utils/fetch.util.js';
export async function getTodos() {
    return fetchData('https://jsonplaceholder.typicode.com/todos');
}
