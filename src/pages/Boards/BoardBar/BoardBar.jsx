import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'


const MENU_STYLES = {
    color: 'white',
    // bgcolor: 'transparent',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
        color: 'white'
    },
    '&:hover': {
        bgcolor: 'primary.50'
    }
}

function BoardBar({ board }) {
    // const { board } = props
    // const board = props.board
    return (
        <Box sx={{
            width: '100%',
            height: (theme) => theme.trello.boardBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            paddingX: 2,
            overflowX: 'auto',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#070F2B' : '#a7a5f2')
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip
                    sx={MENU_STYLES}
                    icon={<SpaceDashboardIcon />}
                    label={board?.title}
                    clickable
                />

                <Chip
                    sx={MENU_STYLES}
                    icon={<VpnLockIcon />}
                    label={capitalizeFirstLetter(board?.type)}
                    clickable
                />

                <Chip
                    sx={MENU_STYLES}
                    icon={<AddToDriveIcon />}
                    label="Add To Google Drive"
                    clickable
                />

                <Chip
                    sx={MENU_STYLES}
                    icon={<BoltIcon />}
                    label="Automation"
                    clickable
                />

                <Chip
                    sx={MENU_STYLES}
                    icon={<FilterAltIcon />}
                    label="Filters"
                    clickable
                />


            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<PersonAddIcon />}
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                            borderColor: 'white'
                        }
                    }}
                >
                    Invite
                </Button>
                <AvatarGroup
                    max={4}
                    sx={{
                        '& .MuiAvatar-root': {
                            width: 30,
                            height: 30,
                            fontSize: 16,
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            '&:first-of-type': {
                                bgcolor: '#a4b0de'
                            }
                        }
                    }}
                >
                    <Tooltip title="daclongdev">
                        <Avatar
                            alt="daclongdev"
                            src="https://tenten.vn/tin-tuc/wp-content/uploads/2022/08/Lam-dep-code.jpg"
                        />
                    </Tooltip>
                    <Tooltip title="freecode">
                        <Avatar
                            alt="freecode"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB5QG6ER0bNX3Ya1P1ROh9hA64DmAvFRKPsg&s"
                        />
                    </Tooltip>
                    <Tooltip title="milkcoro">
                        <Avatar
                            alt="milkcoro"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwDsYN2pkMj26ZJqKIDzxNcK6J3-tJs4UbBw&s"
                        />
                    </Tooltip>
                    <Tooltip title="shelldev">
                        <Avatar
                            alt="shelldev"
                            src="https://techvccloud.mediacdn.vn/2018/9/17/powershell-cim1-15371812948641135352555-0-0-628-1118-crop-15371812999131029996634.jpg"
                        />
                    </Tooltip>
                    <Tooltip title="tmpcode">
                        <Avatar
                            alt="tmpcode"
                            src="https://tenten.vn/tin-tuc/wp-content/uploads/2022/08/Lam-dep-code.jpg"
                        />
                    </Tooltip>
                    <Tooltip title="xplore">
                        <Avatar
                            alt="xplore"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
                        />
                    </Tooltip>
                </AvatarGroup>
            </Box>
        </Box>
    )
}

export default BoardBar
