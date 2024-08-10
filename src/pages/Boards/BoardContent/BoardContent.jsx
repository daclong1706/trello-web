import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'


function BoardContent() {
    return (
        <Box sx={{
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#070F2B' : '#a7a5f2'),
            width: '100%',
            height: (theme) => (theme.trello.boardContentHeight),
            p: '5px 0'
        }}>
            <ListColumns />
        </Box>
    )
}

export default BoardContent