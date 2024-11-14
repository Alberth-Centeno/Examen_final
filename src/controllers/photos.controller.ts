import { fetchData } from '../utils/fetch.util.js';
import { Photo } from '../interfaces/photo.interface';

export async function getPhotos(): Promise<Photo[]> {
  return fetchData<Photo[]>('https://jsonplaceholder.typicode.com/photos');
}
