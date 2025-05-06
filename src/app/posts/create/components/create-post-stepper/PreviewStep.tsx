import React from 'react'
import { Box, Typography } from '@mui/material'

interface IPreviewStepProps {
    title: string
    body: string
}

export const PreviewStep: React.FC<IPreviewStepProps> = ({ title, body }) => (
    <Box>
        <Typography variant='h6' gutterBottom>
            {title}
        </Typography>
        <Typography>{body}</Typography>
    </Box>
)
