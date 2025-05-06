'use client'
import React, { useState } from 'react'
import { Container, Paper, Stepper, Step, StepLabel, Typography } from '@mui/material'
import { useCreatePostMutation } from '@/store/features/posts/postsApiSlice'
import { TitleStep } from './create-post-stepper/TitleStep'
import { BodyStep } from './create-post-stepper/BodyStep'
import { PreviewStep } from './create-post-stepper/PreviewStep'
import { StepNavigation } from './create-post-stepper/StepNavigation'
import { NotificationSnackbar } from './create-post-stepper/NotificationSnackbar'
import { PreviewDialog } from './create-post-stepper/PreviewDialog'

const steps = ['Заголовок', 'Тіло', 'Попередній перегляд']

export const CreatePostStepper: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [openPreview, setOpenPreview] = useState(false)

    const [createPost, { isLoading: isCreating, isError }] = useCreatePostMutation()

    const handleNext = () => setActiveStep(prev => prev + 1)
    const handleBack = () => setActiveStep(prev => prev - 1)
    const handleConfirmPost = async () => {
        try {
            await createPost({ title, body }).unwrap()
            setOpenPreview(false)
            setActiveStep(0)
            setTitle('')
            setBody('')
            setOpenSnackbar(true)
        } catch (err) {
            console.error(err)
        }
    }

    const getStepContent = () => {
        switch (activeStep) {
            case 0:
                return <TitleStep title={title} onChange={setTitle} />
            case 1:
                return <BodyStep body={body} onChange={setBody} />
            case 2:
                return <PreviewStep title={title} body={body} />
            default:
                return null
        }
    }

    return (
        <Container maxWidth='sm'>
            <Paper variant='outlined' sx={{ p: 4, mt: 8 }}>
                <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
                    {steps.map(label => (
                        <Step key={label} completed={activeStep > steps.indexOf(label)}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {getStepContent()}

                {isError && (
                    <Typography color='error' sx={{ mt: 2 }}>
                        Помилка при створенні поста
                    </Typography>
                )}

                <StepNavigation
                    activeStep={activeStep}
                    lastStep={steps.length - 1}
                    isCreating={isCreating}
                    onBack={handleBack}
                    onNext={handleNext}
                    onOpenPreview={() => setOpenPreview(true)}
                />
            </Paper>

            <NotificationSnackbar open={openSnackbar} onClose={() => setOpenSnackbar(false)} />

            <PreviewDialog
                open={openPreview}
                title={title}
                body={body}
                isCreating={isCreating}
                onClose={() => setOpenPreview(false)}
                onConfirm={handleConfirmPost}
            />
        </Container>
    )
}

export default CreatePostStepper
