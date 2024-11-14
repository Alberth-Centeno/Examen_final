import { fetchData } from '../utils/fetch.util.js';
export async function getAlbums() {
    return fetchData('https://jsonplaceholder.typicode.com/albums');
}
