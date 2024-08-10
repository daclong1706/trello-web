import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Column from './Column/Column'
import AddCircleIcon from '@mui/icons-material/AddCircle'

function ListColumns() {
    return (
        <Box sx={{
            bgcolor: 'inherit',
            width: '100%',
            heoght: '100%',
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            '&::-webkit-scrollbar-track': { m: 1 }
        }}>
            <Column />
            <Column />

            {/* Box add new column */}
            <Box sx={{
                minWidth: '200px',
                maxWidth: '200px',
                m: 1,
                borderRadius: '6px',
                height: 'fit-content',
                bgcolor: '#ffffff3d'
            }}>
                <Button
                    startIcon={<AddCircleIcon />}
                    sx={{
                        color: 'white',
                        width: '100%',
                        justifyContent: 'flex-start',
                        pl: 2.5,
                        py: 1
                    }}
                >
                    Add new column
                </Button>
            </Box>
        </Box>
    )
}

export default ListColumns