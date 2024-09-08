import React, { useState } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';
import { ListItemLinkType } from "../../../types/ListItemLinkType";

interface SideBarItemLinkProps {
    navItem: ListItemLinkType;
    open: boolean;
    selected: string;
    setSelected: (to: string) => void;
}

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined}/>;
});

const SideBarItemLink = ({ navItem, open, selected, setSelected }: SideBarItemLinkProps) => {
    const { isDivider, to, icon, name } = navItem;

    if (isDivider) {
        return <Divider />
    } else {
        return (
            <ListItem key={name} disablePadding sx={{display: 'block'}}>
                <ListItemButton
                    component={Link}
                    to={to}
                    selected={selected === to}
                    onClick={() => setSelected(to)}
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                >
                    {icon ?
                        <ListItemIcon sx={{
                            mr: open ? 1 : 'auto',
                            justifyContent: 'center',
                        }}>
                            <Icon>{icon}</Icon>
                        </ListItemIcon> : null
                    }
                    <ListItemText primary={name} sx={{opacity: open ? 1 : 0}}/>
                </ListItemButton>
            </ListItem>
        );
    }
};

export default SideBarItemLink;