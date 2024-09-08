import { useState } from 'react'
import './App.css'
import { ColorModeContext, useMode } from './theme'
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { navItems } from './data/navLinks';

/** Icons */

import Dashboard from './scenes/dashboard';
import Topbar from './scenes/core/Topbar/TopBar';
import Sidebar from './scenes/core/SideBar/SideBar';

function App() {
  const [theme, colorMode] = useMode();
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <div className="app"> */}
          <Box className="content" sx={{ display: 'flex' }}>
            <CssBaseline />
            <Topbar
              open={open}
              title='FKS'
              handleDrawerOpen={handleDrawerOpen}
              showSearch={true}
              showThemeSwitcher={true}
            />
            <Sidebar open={open} navItems={navItems} handleDrawerClose={handleDrawerClose} />
            <Box component="main" sx={{ flexGrow: 1, p: '1.5em' }}>
              <Box component="div" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: theme.spacing(0, 1),
                ...theme.mixins.toolbar,
              }} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {navItems && navItems.map((item, index) => (
                  <Route key={index} path={item.title} element={item.component} />
                ))}
              </Routes>
            </Box>
          </Box>
        {/* </div> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
