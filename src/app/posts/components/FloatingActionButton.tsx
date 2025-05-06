import AddIcon from '@mui/icons-material/Add'
import { Fab } from '@mui/material'
import Link from 'next/link'

const FloatingActionButton = () => {
    return (
        <Fab
            color='secondary'
            aria-label='add'
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            href='posts/create'
            LinkComponent={Link}
        >
            <AddIcon />
        </Fab>
    )
}
export default FloatingActionButton
