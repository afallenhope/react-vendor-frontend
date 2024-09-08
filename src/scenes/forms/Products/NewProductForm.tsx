import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useEffect } from 'react';
import Box from '@mui/material/Box/Box';

const NewProductForm = () => {
  const {
    control,
    getValues,
    formState:{errors},
  } = useFormContext();

  useEffect(() => {
    console.log('Errors', errors);
  });


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        margin: 3,
      }}
    >
      <Controller
        name="item"
        control={control}
        rules={{ required: 'Item is required' }}
        defaultValue={getValues('item')}
        render={({ field }) => (
          <TextField
            {...field}
            id="product-item"
            label="Item"
            type="text"
            variant="filled"
            error={!!errors?.item}
            helperText={errors.item && errors?.item.message}
            required
            sx={{ marginRight: '20px' }}
          />
        )}
      />
      <Controller
        name="price"
        control={control}
        rules={{ required: 'Price is required' }}
        defaultValue={+getValues('price')}
        render={({ field }) => (
          <TextField
            {...field}
            id="product-price"
            label="Price"
            type="number"
            variant="filled"
            error={!!errors.price}
            required
            helperText={errors.price?.message}
            sx={{ marginRight: '20px' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">L$</InputAdornment>,
            }}
          />
        )}
      />
      <Controller
        name="name"
        control={control}
        rules={{ required: 'Name is required' }}
        defaultValue={getValues('name')}
        render={({ field }) => (
          <TextField
            {...field}
            id="product-name"
            label="Name"
            error={!!errors.name}
            variant="filled"
            required
            sx={{ marginRight: '20px' }}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        name="image_uuid"
        control={control}
        defaultValue={getValues('name')}
        render={({ field }) => (
          <TextField
            {...field}
            id="product-image-uuid"
            label="ImageUUID"
            variant="filled"
          />
        )}
      />
    </Box>
  );
};

export default NewProductForm;
