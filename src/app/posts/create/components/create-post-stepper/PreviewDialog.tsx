import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { PreviewStep } from './PreviewStep'

interface IPreviewDialogProps {
    open: boolean
    title: string
    body: string
    isCreating: boolean
    onClose: () => void
    onConfirm: () => void
}

export const PreviewDialog: React.FC<IPreviewDialogProps> = ({
    open,
    title,
    body,
    isCreating,
    onClose,
    onConfirm,
}) => (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth='sm'>
        <DialogTitle>Попередній перегляд</DialogTitle>
        <DialogContent dividers>
            <PreviewStep title={title} body={body} />
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>РЕДАГУВАТИ</Button>
            <Button variant='contained' onClick={onConfirm} disabled={isCreating}>
                ПІДТВЕРДИТИ
            </Button>
        </DialogActions>
    </Dialog>
)
