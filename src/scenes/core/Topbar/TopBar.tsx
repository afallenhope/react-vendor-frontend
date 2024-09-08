import { useContext } from 'react';
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

import ThemeSwitcher from "../../../components/ThemeSwitcher";
import SearchInput from "../../../components/SearchInput";
import { ColorModeContext, tokens } from '../../../theme';
import AccountPopup from './AccountPopup';
import { mockDataUser } from '../../../data/mocks/user';

const drawerWidth = 200;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
};

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

interface TopBarProps {
    open: boolean;
    showSearch: boolean;
    showThemeSwitcher: boolean;
    handleDrawerOpen: () => void;
    title?: string;
}

const TopBar = ({ open, showSearch, showThemeSwitcher, handleDrawerOpen, title }: TopBarProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const user = mockDataUser;
    return (
        <AppBar position="fixed" open={open}>
            <Toolbar sx={{ bgcolor: colors.primary[500] }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>

                {title && (
                    <Typography
                        variant="h3"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        {title}
                    </Typography>
                )}

                <SearchInput showSearch={showSearch} />

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                    <IconButton sx={{color: 'inherit'}}>
                        <NotificationAddIcon />
                    </IconButton>

                    <ThemeSwitcher showThemeSwitcher={showThemeSwitcher} />

                    <AccountPopup user={user} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;