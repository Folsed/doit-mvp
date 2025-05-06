'use client'

import { useDeletePostMutation, useGetPostQuery } from '@/store/features/posts/postsApiSlice'
import {
    Container,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    Typography,
    Button,
    Skeleton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Link from 'next/link'
import { PostSkeletonDetails } from '@/components/ui/skeletons/PostSkeletonDetails'
import { useRouter } from 'next/navigation'

interface IPostDetailsProps {
    id: number
}

const PostDetails = ({ id }: IPostDetailsProps) => {
    const { data: post, isLoading } = useGetPostQuery({ id })
    const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation()
    const router = useRouter()

    if (isLoading || !post) return <PostSkeletonDetails />

    const handleDelete = async (id: number) => {
        if (confirm('Бажаєте видалити цей пост?')) {
            try {
                await deletePost(id).unwrap()
                router.push('/posts')
            } catch (error) {
                console.error('Помилка :(', error)
            }
        }
    }

    return (
        <Container maxWidth='md' sx={{ mt: 4 }}>
            <Card elevation={1}>
                <CardHeader
                    avatar={<Avatar>{post.title.charAt(0).toUpperCase()}</Avatar>}
                    title={post.title}
                    subheader={`User ${post.userId}`}
                />
                <CardContent>
                    <Typography variant='body2'>{post.body}</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant='contained'
                        color='error'
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDelete(id)}
                        loading={isDeleting}
                    >
                        ВИДАЛИТИ
                    </Button>
                    <Link href='/posts' passHref>
                        <Button variant='outlined' startIcon={<ArrowBackIcon />}>
                            ДО СПИСКУ
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Container>
    )
}

export default PostDetails
