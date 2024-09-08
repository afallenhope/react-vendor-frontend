import { useState } from "react";
import { ACCESS_LEVELS } from "../../../data/mockData";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { colors, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

interface AccountPopupProps {
    user: {
        username: string;
        access_level: ACCESS_LEVELS;
        profile: {
            image: string;
        }
    };
}

const settings = ['Profile', 'Account', 'Logout'];

const AccountPopup = ({ user }: AccountPopupProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    }

    const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(null);
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.username} src={user.profile.image} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{
                    '& .MuiMenu-paper': {
                        bgcolor: colors.primary[400],
                    },
                    mt: '45px',
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
};

export default AccountPopup;