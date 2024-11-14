import { fetchData } from '../utils/fetch.util.js';
import { User } from '../interfaces/user.interface';

export async function getUsers(): Promise<User[]> {
  return fetchData<User[]>('https://jsonplaceholder.typicode.com/users');
}