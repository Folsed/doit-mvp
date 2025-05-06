import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import MUIThemeProvider from './MUIThemeProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppRouterCacheProvider>
            <MUIThemeProvider>{children}</MUIThemeProvider>
        </AppRouterCacheProvider>
    )
}
export default Providers
