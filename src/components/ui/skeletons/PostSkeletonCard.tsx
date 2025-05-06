'use client'

import { Grid, Card, CardHeader, CardContent, CardActions, Skeleton } from '@mui/material'

interface PostSkeletonCardProps {
    gridSizes?: { xs: number; sm: number; md: number }
}

export const PostSkeletonCard: React.FC<PostSkeletonCardProps> = ({ gridSizes }) => (
    <Grid size={{ ...gridSizes }}>
        <Card elevation={1}>
            <CardHeader
                avatar={<Skeleton variant='circular' width={40} height={40} />}
                title={<Skeleton width='60%' />}
                subheader={<Skeleton width='40%' />}
                action={<Skeleton variant='circular' width={24} height={24} />}
            />
            <CardContent>
                <Skeleton height={20} sx={{ mb: 1 }} />
                <Skeleton width='80%' height={20} />
            </CardContent>
            <CardActions disableSpacing>
                <Skeleton variant='circular' width={24} height={24} />
            </CardActions>
        </Card>
    </Grid>
)
