export interface IPost {
    id: number
    title: string
    body: string
    userId: number
}

export interface IComment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}