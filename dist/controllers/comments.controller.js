import { fetchData } from '../utils/fetch.util.js';
export async function getComments() {
    return fetchData('https://jsonplaceholder.typicode.com/comments');
}
