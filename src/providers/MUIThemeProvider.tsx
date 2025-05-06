'use client'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material'
import { useMemo } from 'react'

function MUIThemeProvider({ children }: { children: React.ReactNode }) {
    const muiTheme = useMemo(() => createTheme({}), [])

    return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
}

export default MUIThemeProvider
