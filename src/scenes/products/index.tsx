import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
import Header from '../../components/Header';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../../theme';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Image from 'mui-image';
import { useState } from 'react';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Dialog, DialogContent, DialogTitle, Typography, IconButton, DialogActions } from '@mui/material';
import SearchInput from '../../components/SearchInput';
import ProductForm from '../forms/ProductForm';
import { mockDataProducts } from '../../data/mocks/products';

const Products = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'name',
      headerName: 'Product',
      flex: 1,
      cellClassName: 'name-col--cell',
    },
    {
      field: 'price',
      headerName: 'Price',
      cellClassName: 'price-col--cell',
      flex: 1,
      renderCell: (value) => (
        <Typography color={colors.greenAccent[500]}>
          <sup>L</sup>
          <AttachMoneyIcon />
          {value.row.price}
        </Typography>
      ),
    },
    {
      field: 'bloggable',
      headerName: 'Can Blog',
      flex: 1,
      cellClassName: 'blog-col--cell',
      type: 'boolean',
    },
    {
      field: 'date',
      headerName: 'Date',
      type: 'datetime',
      flex: 1,
      cellClassName: 'date-col--cell',
    },
    {
      field: 'image',
      headerName: 'Image',
      flex: 1,
      cellClassName: 'image-col--cell',
      renderCell: ({ row: { image } }) => <Image src={image} alt="Product Image" showLoading />,
    },
  ];

  const handleOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    console.log('Dialog is closing');
    setIsDialogOpen(false);
  };

  const handleSubmit = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box>
      <Header title="Products" subtitle="Manage your products" />
      <Box sx={{ display: 'flex', justifyContent: 'start' }}>
        <Fab color="secondary" onClick={handleOpen}>
          <AddIcon />
        </Fab>
        <Box>
          <SearchInput showSearch={true} />
        </Box>
      </Box>

      <Dialog fullWidth maxWidth="lg" open={isDialogOpen} onClose={handleClose}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <ProductForm handleSave={(e)=>{console.log('Products',e )}} handleClose={handleClose} />
        </DialogContent>
      </Dialog>

      <Box
        sx={{
          m: '40px 0 0 0',
          height: '75vh',
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
        <DataGrid rows={mockDataProducts} columns={columns} slots={{ toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};
export default Products;
