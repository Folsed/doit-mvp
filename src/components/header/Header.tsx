'use client'
import { useState } from 'react'
import { usePathname, useParams } from 'next/navigation'
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DrawerList from './DrawerList'
import ToggleThemeButton from '../ui/ToggleThemeButton'
import { CommentsBadge } from '@/app/posts/[id]/components/CommentsBadge'

const _headerTitle = [
    { path: '/', title: 'DOiT MVP' },
    { path: '/posts', title: 'Усі пости' },
    { path: '/posts/create', title: 'Створити пост' },
]

const Header = () => {
    const pathname = usePathname()
    const params = useParams()
    const [open, setOpen] = useState<boolean>(false)

    const isValidStringId = typeof params.id === 'string'
    const idNumber = isValidStringId ? parseInt(String(params.id), 10) : NaN

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    const staticItem = _headerTitle.find(item => item.path === pathname)
    const title = staticItem ? staticItem.title : params.id ? `Пост #${params.id}` : '…'
    const showBadge = staticItem ? staticItem.title : params.id ? true : false

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
                        {title}
                    </Typography>
                    <ToggleThemeButton />
                    {showBadge === true ? <CommentsBadge id={idNumber} /> : ''}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
