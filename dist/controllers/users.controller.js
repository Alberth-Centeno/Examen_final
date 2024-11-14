import { fetchData } from '../utils/fetch.util.js';
export async function getUsers() {
    return fetchData('https://jsonplaceholder.typicode.com/users');
}
