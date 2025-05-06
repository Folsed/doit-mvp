'use client'
import { useGetPostsQuery } from "@/store/features/posts/postsApiSlice"

const PostsGrid = () => {
    const {data} = useGetPostsQuery()
    console.log(data);
    
  return (
    <div>PostsGrid</div>
  )
}
export default PostsGrid