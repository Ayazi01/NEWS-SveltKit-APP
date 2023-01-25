
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
function slugify(text: string) {
  return text
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
}
export const load:PageLoad = async ({params, parent})=>{
  
    const parentData = await parent()
    const p = parentData.posts.data
   const clickedPost = await p.filter(function (post: {
    title: string
    author: string
    description: string
    
}): boolean {
    return slugify(post.title) === params.slug
})

    if(!clickedPost){
        throw error(404, 'post not found')
    }
    return { clickedPost}
}