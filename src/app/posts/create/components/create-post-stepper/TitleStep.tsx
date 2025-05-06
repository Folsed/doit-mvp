import React from 'react'
import { TextField } from '@mui/material'

interface ITitleStepProps {
    title: string
    onChange: (value: string) => void
}

export const TitleStep: React.FC<ITitleStepProps> = ({ title, onChange }) => (
    <TextField label='Заголовок' value={title} onChange={e => onChange(e.target.value)} fullWidth />
)
