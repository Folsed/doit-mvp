'use client'
import React, { useState } from 'react'
import { Badge, IconButton } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import { useGetPostCommentsQuery } from '@/store/features/posts/postsApiSlice'
import CommentsModal from './CommentsModal'

interface IPostCommentsProps {
    id: number
}

export const CommentsBadge: React.FC<IPostCommentsProps> = ({ id }) => {
    const [open, setOpen] = useState(false)
    const { data: comments, isLoading, isError } = useGetPostCommentsQuery({ id })

    const toggleModal = (flag: boolean) => () => setOpen(flag)

    const badgeMessagesCount = comments?.length ?? 0

    return (
        <div>
            <IconButton
                aria-label={
                    badgeMessagesCount === 0
                        ? 'немає коментарів'
                        : `${badgeMessagesCount} коментарів`
                }
                onClick={toggleModal(true)}
            >
                <Badge badgeContent={badgeMessagesCount} color='secondary'>
                    <MailIcon />
                </Badge>
            </IconButton>
            <CommentsModal
                open={open}
                toggleModal={toggleModal}
                isLoading={isLoading}
                isError={isError}
                comments={comments ? comments : []}
            />
        </div>
    )
}
