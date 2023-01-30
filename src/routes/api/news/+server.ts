import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    
  const resourceUrl = `http://api.mediastack.com/v1/news?countries=us,in&'sort=published_desc&&sources=en&access_key=b785a5358c3a5e0cc26124e0581964d4`;
  const res = await fetch(resourceUrl);
  const posts = await res.json();
  
  return json(posts)
};