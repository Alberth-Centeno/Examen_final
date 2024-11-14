import { fetchData } from '../utils/fetch.util.js';
import { Comment } from '../interfaces/comment.interface';

export async function getComments(): Promise<Comment[]> {
  return fetchData<Comment[]>('https://jsonplaceholder.typicode.com/comments');
}