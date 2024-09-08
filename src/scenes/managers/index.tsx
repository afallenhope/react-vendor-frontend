import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { Typography, useTheme } from '@mui/material';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SecurityIcon from '@mui/icons-material/Security';
import TerminalIcon from '@mui/icons-material/Terminal';
import Header from '../../components/Header';
import { mockDataManagers } from '../../data/mocks';
import { ACCESS_LEVELS } from '../../enums/AccessLevels';

const Managers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'uuid',
      headerName: 'UUID',
      flex: 1,
      cellClassName: 'uuid-col--cell',
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-col--cell',
    },
    {
      field: 'displayName',
      headerName: 'Display',
      flex: 1,
      cellClassName: 'display-col--cell',
    },
    {
      field: 'discord',
      headerName: 'Discord',
      flex: 1,
      cellClassName: 'discord-col--cell',
    },
    {
      field: 'level',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { level } }) => {
        const accessLevel = ACCESS_LEVELS[level];

        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            backgroundColor={level === ACCESS_LEVELS.OWNER ? colors.greenAccent[600] : colors.greenAccent[700]}
          >
            {level === ACCESS_LEVELS.OWNER && <AdminPanelSettingsIcon />}
            {level === ACCESS_LEVELS.MANAGER && <SecurityIcon />}
            {level === ACCESS_LEVELS.SCRIPTER && <TerminalIcon />}
            {level === ACCESS_LEVELS.BLOGGER && <AdminPanelSettingsIcon />}
            {level === ACCESS_LEVELS.CSR && <TerminalIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {accessLevel}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Header title="Managers" subtitle="Manage your team" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-col--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: colors.grey[100],
          },
        }}
      >
        <DataGrid rows={mockDataManagers} columns={columns} slots={{ toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};

export default Managers;
