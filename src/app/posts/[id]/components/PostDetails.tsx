'use client'

import { useGetPostQuery } from "@/store/features/posts/postsApiSlice"

const PostDetails = ({ id }: { id: string }) => {
    const {data, isLoading} = useGetPostQuery(id)
    return <div>PostDetails</div>
}
export default PostDetails
