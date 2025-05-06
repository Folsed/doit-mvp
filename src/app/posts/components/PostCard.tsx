'use client'
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'
import { IPost } from '@/types'
import { useDeletePostMutation } from '@/store/features/posts/postsApiSlice'

interface IPostCardProps {
    post: IPost
    gridSizes?: { xs: number; sm: number; md: number }
}

export const PostCard: React.FC<IPostCardProps> = ({ post, gridSizes }) => {
    const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation()

    const handleDelete = async (id: number) => {
        if (confirm('Бажаєте видалити цей пост?')) {
            try {
                await deletePost(id).unwrap()
            } catch (error) {
                console.error('Помилка :(', error)
            }
        }
    }

    return (
        <Grid size={{ ...gridSizes }}>
            <Card elevation={1}>
                <CardHeader
                    avatar={<Avatar>{post.title.charAt(0).toUpperCase()}</Avatar>}
                    title={
                        <Typography variant='subtitle1' lineHeight={1.2}>
                            {post.title}
                        </Typography>
                    }
                    subheader={
                        <Typography variant='caption' color='text.secondary'>
                            User {post.userId}
                        </Typography>
                    }
                    action={
                        <IconButton
                            aria-label='Видалити'
                            color='error'
                            onClick={() => handleDelete(post.id)}
                            loading={isDeleting}
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant='body2' color='text.secondary' noWrap>
                        {post.body}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        aria-label='Перейти до посту'
                        href={`/posts/${post.id}`}
                        LinkComponent={Link}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}
