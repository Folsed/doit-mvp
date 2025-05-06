import React from 'react'
import { Snackbar } from '@mui/material'

interface INotificationSnackbarProps {
    open: boolean
    onClose: () => void
}

export const NotificationSnackbar: React.FC<INotificationSnackbarProps> = ({ open, onClose }) => (
    <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={(_, reason) => reason !== 'clickaway' && onClose()}
        message='Додано новий пост! (Маленький такий)'
    />
)
