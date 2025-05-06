'use client'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import DrawerList from './DrawerList'
import ToggleThemeButton from '../ui/ToggleThemeButton'

const Header = () => {
    const [open, setOpen] = useState<boolean>(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

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
                        DOiT MVP
                    </Typography>
                    <ToggleThemeButton />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header
