'use client'
import { IconButton, useColorScheme } from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

const ToggleThemeButton = () => {
    const { colorScheme, setColorScheme } = useColorScheme()

    const alternativeScheme = colorScheme === 'light' ? 'dark' : 'light'

    return (
        <IconButton onClick={() => setColorScheme(alternativeScheme)}>
            <LightModeOutlinedIcon className='light-img' />
            <DarkModeOutlinedIcon className='dark-img' />
        </IconButton>
    )
}

export default ToggleThemeButton
