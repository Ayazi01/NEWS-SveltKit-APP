// import type { Load } from '@sveltejs/kit';

// /** @type {import('@sveltejs/kit').Load} */
// export const load: Load = async ({ fetch }) => {
//   const resourceUrl = `http://api.weatherstack.com/current?access_key=c739c8bd8d8756c714c3841e2113a88f
//   `;
//   const res = await fetch(resourceUrl);

//   if (res.ok) {

//     return {
//       status: res.status,
//       props: {
//          propName: await res.json()
//       }
//     };
//   }

//   return {
//     status: res.status,
//     error: new Error(`Could not load url`)
//   };
  
 
// }

import type { PageLoad } from './$types';
 
export const load = (async ({ fetch }) => {
    const resourceUrl = `http://api.mediastack.com/v1/news?countries=us,in&access_key=c739c8bd8d8756c714c3841e2113a88f`;
    const res = await fetch(resourceUrl);;
  const posts = await res.json();
//  console.log({posts})
  return { posts };
}) satisfies PageLoad;