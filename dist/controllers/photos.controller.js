import { fetchData } from '../utils/fetch.util.js';
export async function getPhotos() {
    return fetchData('https://jsonplaceholder.typicode.com/photos');
}
