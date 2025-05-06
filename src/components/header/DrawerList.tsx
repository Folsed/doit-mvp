import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Link from 'next/link'

interface IDrawerListProps {
    toggleDrawer: (open: boolean) => () => void
}

const _linksList = [
    { link: '/', title: 'Головна', icon: <HomeIcon /> },
    { link: '/posts', title: 'Усі пости', icon: <FormatListBulletedIcon /> },
    { link: '/posts/create', title: 'Створити пост', icon: <AddCircleIcon /> },
]

const DrawerList: React.FC<IDrawerListProps> = ({ toggleDrawer }) => {
    return (
        <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
            <List>
                {_linksList.map(item => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton component={Link} href={item.link}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default DrawerList
