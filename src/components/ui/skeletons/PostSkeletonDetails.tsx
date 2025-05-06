import { Card, CardActions, CardContent, CardHeader, Container, Skeleton } from '@mui/material'

export const PostSkeletonDetails = () => (
    <Container maxWidth='md' sx={{ mt: 4 }}>
        <Card elevation={1}>
            <CardHeader
                avatar={<Skeleton variant='circular' width={40} height={40} />}
                title={<Skeleton width='60%' />}
                subheader={<Skeleton width='30%' />}
            />
            <CardContent>
                {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} width='100%' />
                ))}
            </CardContent>
            <CardActions>
                <Skeleton variant='rectangular' width={100} height={36} />
                <Skeleton variant='rectangular' width={120} height={36} />
            </CardActions>
        </Card>
    </Container>
)
