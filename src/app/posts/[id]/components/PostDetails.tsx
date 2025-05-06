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
import { useHandleDelete } from '@/utils/handleDelete'

interface IPostDetailsProps {
    id: number
}

const PostDetails = ({ id }: IPostDetailsProps) => {
    const { data: post, isLoading, isError } = useGetPostQuery({ id })
    const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation()
    const handleDelete = useHandleDelete(deletePost, {
        redirectTo: '/posts',
    })

    if (isError) return <b>Тут немає поста</b>
    if (isLoading || !post) return <PostSkeletonDetails />

    

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
