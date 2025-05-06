import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import MUIThemeProvider from './MUIThemeProvider'
import StoreProvider from './StoreProvider'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppRouterCacheProvider>
            <StoreProvider>
                <MUIThemeProvider>{children}</MUIThemeProvider>
            </StoreProvider>
        </AppRouterCacheProvider>
    )
}
export default Providers
