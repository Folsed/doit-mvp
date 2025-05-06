import React from 'react'
import { Box, Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

interface IStepNavigationProps {
    activeStep: number
    lastStep: number
    isCreating: boolean
    onBack: () => void
    onNext: () => void
    onOpenPreview: () => void
}

export const StepNavigation: React.FC<IStepNavigationProps> = ({
    activeStep,
    lastStep,
    isCreating,
    onBack,
    onNext,
    onOpenPreview,
}) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button disabled={activeStep === 0} onClick={onBack}>
            НАЗАД
        </Button>

        {activeStep < lastStep ? (
            <Button variant='contained' endIcon={<SaveIcon />} onClick={onNext}>
                ДАЛІ
            </Button>
        ) : (
            <Box>
                <Button onClick={onBack} sx={{ mr: 1 }}>
                    РЕДАГУВАТИ
                </Button>
                <Button
                    variant='contained'
                    endIcon={<SaveIcon />}
                    onClick={onOpenPreview}
                    disabled={isCreating}
                >
                    ПІДТВЕРДИТИ
                </Button>
            </Box>
        )}
    </Box>
)
