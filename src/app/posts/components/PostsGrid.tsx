// components/PostsGrid.tsx
'use client'

import { Container, Grid } from '@mui/material'
import { useGetPostsQuery } from '@/store/features/posts/postsApiSlice'
import { PostCard } from './PostCard'
import { PostSkeletonCard } from '@/components/ui/skeletons/PostSkeletonCard'

export const PostsGrid: React.FC = () => {
    const { data: posts, isLoading } = useGetPostsQuery()
    const skeletonCount = 12
    const gridSizes = { xs: 1, sm: 2, md: 3 }

    return (
        <Container sx={{ py: 4 }}>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 4, md: 9 }}>
                {isLoading
                    ? Array.from({ length: skeletonCount }).map((_, idx) => (
                          <PostSkeletonCard key={idx} gridSizes={gridSizes} />
                      ))
                    : posts?.map(item => (
                          <PostCard key={item.id} post={item} gridSizes={gridSizes} />
                      ))}
            </Grid>
        </Container>
    )
}

export default PostsGrid
