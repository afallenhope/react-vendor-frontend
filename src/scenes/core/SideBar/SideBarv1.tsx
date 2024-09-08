import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ListItemLinkType } from '../../../types/ListItemLinkType';
import { Typography } from '@mui/material';
import SideBarItemLink from './SideBarItemLink';

const drawerWidth = 200;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

interface SideBarProps {
    title: string;
    navItems: ListItemLinkType[];
    isOpen: boolean;
}

// const SidebarItemLink = ({ icon, title, name, isDivider, component, to }: ListItemLinkType) => {

const SideBar = ({ title, navItems, isOpen }: SideBarProps) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(isOpen);

    const handleDrawerToggle = () => {
        setOpen(!open);
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                open={open}
            >
                <DrawerHeader>
                    {title &&
                        <Typography align={'left'} variant='h3'>
                            {title}
                        </Typography>
                    }
                    <IconButton onClick={handleDrawerToggle}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {navItems.map((navItem: ListItemLinkType, index) => (
                        <SideBarItemLink
                            key={index}
                            navItem={navItem}
                            isOpen={isOpen}
                        />
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
export default SideBar;