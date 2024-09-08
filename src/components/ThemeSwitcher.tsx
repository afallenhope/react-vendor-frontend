import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

interface ThemeSwitcherProps {
    showThemeSwitcher: boolean;
}

const ThemeSwitcher = ({ showThemeSwitcher }: ThemeSwitcherProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return showThemeSwitcher && (
        <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            {'dark' === theme.palette.mode ? (
                <DarkModeOutlinedIcon />
            ) : (
                <LightModeOutlinedIcon />
            )}
        </IconButton>
    );
}

export default ThemeSwitcher;