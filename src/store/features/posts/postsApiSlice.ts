import { IComment, IPost } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    }),
    reducerPath: 'PostsAPI',
    tagTypes: ['Post'],
    endpoints: build => ({
        getPosts: build.query<IPost[], void>({
            query: () => {
                return `posts`
            },
            providesTags: ['Post'],
        }),
        getPost: build.query<IPost, { id: number }>({
            query: ({ id }) => {
                return `posts/${id}`
            },
            providesTags: ['Post'],
        }),
        getPostComments: build.query<IComment[], { id: number }>({
            query: ({ id }) => {
                return `posts/${id}/comments`
            },
            providesTags: ['Post'],
        }),
        createPost: build.mutation<IPost, Partial<IPost>>({
            query: newPost => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),
            invalidatesTags: ['Post'],
        }),
        deletePost: build.mutation<{ success: boolean; id: number }, number>({
            query: id => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post'],
        }),
    }),
})

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useCreatePostMutation,
    useDeletePostMutation,
    useGetPostCommentsQuery,
} = postsApiSlice
