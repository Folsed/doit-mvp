'use client'
import React from 'react'
import { Box, Typography, Button, Stack, Container } from '@mui/material'

import AddIcon from '@mui/icons-material/Add'
import ViewListIcon from '@mui/icons-material/ViewList'
import Link from 'next/link'

const HeroBanner = () => {
    return (
        <Container>
            <Box
                sx={[
                    theme => ({
                        mt: 10,
                        p: 4,
                        borderRadius: 2,
                        color: theme.palette.common.black,
                        background: theme.palette.primary.light,
                        boxShadow: 3,
                        textAlign: 'center',
                        maxWidth: 800,
                        mx: 'auto',
                    }),
                    theme =>
                        theme.applyStyles('dark', {
                            color: theme.palette.common.white,
                            backgroundImage: 'linear-gradient(135deg, #1f1f2e 0%, #4e03a7 100%)',
                        }),
                ]}
            >
                <Typography variant='h3' component='h3' gutterBottom>
                    Ласкаво просимо до DOiT MVP
                </Typography>
                <Typography variant='subtitle1' sx={{ opacity: 0.8, mb: 3 }}>
                    Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
                </Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2 }}
                    justifyContent='center'
                >
                    <Button
                        variant='contained'
                        startIcon={<ViewListIcon />}
                        sx={{ px: 3, py: 1 }}
                        component={Link}
                        href='/posts'
                    >
                        Переглянути пости
                    </Button>
                    <Button
                        component={Link}
                        href='/posts/create'
                        variant='outlined'
                        startIcon={<AddIcon />}
                        sx={{ px: 3, py: 1 }}
                    >
                        Додати пост
                    </Button>
                </Stack>
            </Box>
        </Container>
    )
}

export default HeroBanner
