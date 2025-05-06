'use client'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import DrawerList from './DrawerList'
import ToggleThemeButton from '../ui/ToggleThemeButton'
import { usePathname } from 'next/navigation'

const _headerTitle = [
    { path: '/', title: 'DOiT MVP' },
    { path: '/posts', title: 'Усі пости' },
    { path: '/posts/create', title: 'Створити пост' },
]

const Header = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState<boolean>(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    const currentTitle = _headerTitle.find(item => item.path === pathname)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' enableColorOnDark>
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawer(true)}
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <DrawerList toggleDrawer={toggleDrawer} />
                    </Drawer>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        {currentTitle?.title}
                    </Typography>
                    <ToggleThemeButton />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header
