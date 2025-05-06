import { IComment } from '@/types'
import {
    Box,
    CircularProgress,
    Divider,
    List,
    ListItem,
    ListItemText,
    Modal,
    ModalProps,
    Typography,
} from '@mui/material'
import React from 'react'

const modalStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 500 },
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: { xs: 2, sm: 3 },
    overflowY: 'auto' as const,
}

interface ICommentsModalProps {
    open: boolean
    toggleModal: (flag: boolean) => NonNullable<ModalProps['onClose']>
    isLoading: boolean
    comments: IComment[]
    isError: boolean
}

const CommentsModal: React.FC<ICommentsModalProps> = ({
    open,
    toggleModal,
    isLoading,
    comments,
    isError,
}) => {
    return (
        <Modal
            open={open}
            onClose={toggleModal(false)}
            aria-labelledby='comments-modal-title'
            aria-describedby='comments-modal-list'
        >
            <Box sx={modalStyle}>
                <Typography id='comments-modal-title' variant='h6' component='h2' gutterBottom>
                    Коментарі
                </Typography>

                {isLoading ? (
                    <Box display='flex' justifyContent='center' py={2}>
                        <CircularProgress />
                    </Box>
                ) : isError ? (
                    <Typography color='error'>Помилка завантаження коментарів</Typography>
                ) : comments && comments.length > 0 ? (
                    <List id='comments-modal-list' disablePadding>
                        {comments.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <ListItem alignItems='flex-start' disableGutters>
                                    <ListItemText
                                        primary={
                                            <Typography fontWeight='bold'>{item.name}</Typography>
                                        }
                                        secondary={
                                            <Typography variant='body2' color='text.secondary'>
                                                {item.body}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                {index < comments.length - 1 && <Divider component='li' />}
                            </React.Fragment>
                        ))}
                    </List>
                ) : (
                    <Typography>Коментарів поки що немає</Typography>
                )}
            </Box>
        </Modal>
    )
}
export default CommentsModal
