'use client'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import { useMemo } from 'react'

function MUIThemeProvider({ children }: { children: React.ReactNode }) {
    const muiTheme = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: 'var(--font-rubik)',
                  },
            }),
        []
    )

    return (
        <MuiThemeProvider theme={muiTheme}>
            {children}
        </MuiThemeProvider>
    )
}

export default MUIThemeProvider
