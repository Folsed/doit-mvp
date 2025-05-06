'use client'
import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
    responsiveFontSizes,
} from '@mui/material/styles'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import { blue, red, purple } from '@mui/material/colors'

function MUIThemeProvider({ children }: { children: React.ReactNode }) {
    const muiTheme = useMemo(() => {
        return responsiveFontSizes(
            createTheme({
                cssVariables: {
                    colorSchemeSelector: 'class',
                    disableCssColorScheme: true,
                },
                colorSchemes: {
                    light: {
                        palette: {
                            primary: {
                                main: blue['600'],
                                light: blue['100'],
                            },
                            secondary: purple,
                        },
                    },
                    dark: {
                        palette: {
                            primary: {
                                main: blue['700'],
                            },
                            secondary: red,
                            background: {
                                default: `rgb(16, 16, 16)`,
                            },
                        },
                    },
                },
            })
        )
    }, [])

    return (
        <MuiThemeProvider theme={muiTheme}>
            <InitColorSchemeScript attribute='class' />
            <CssBaseline enableColorScheme />
            {children}
        </MuiThemeProvider>
    )
}

export default MUIThemeProvider
