import { fetchData } from '../utils/fetch.util.js';
import { Album } from '../interfaces/album.interface';

export async function getAlbums(): Promise<Album[]> {
  return fetchData<Album[]>('https://jsonplaceholder.typicode.com/albums');
}
