import React from 'react'
import { TextField } from '@mui/material'

interface IBodyStepProps {
    body: string
    onChange: (value: string) => void
}

export const BodyStep: React.FC<IBodyStepProps> = ({ body, onChange }) => (
    <TextField
        label='Тіло'
        value={body}
        onChange={e => onChange(e.target.value)}
        fullWidth
        multiline
        rows={6}
    />
)
