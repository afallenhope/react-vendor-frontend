import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Box, Typography } from "@mui/material";

interface HeaderProps {
    title: string;
    subtitle?: string;
}

const Header = ({title, subtitle}: HeaderProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb="30px">
            <Typography 
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{mb: '5px'}}
            >
                {title}
            </Typography>
            {subtitle && <Typography 
                variant="h5"
                color="secondary"
            >
                {subtitle}
            </Typography>}
        </Box>
    )
};

export default Header;