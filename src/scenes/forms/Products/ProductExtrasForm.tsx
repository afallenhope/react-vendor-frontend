import { Controller, useFormContext } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Box, FormControlLabel } from '@mui/material';

const ProductExtrasForm = () => {
  const { control, getValues } = useFormContext();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: 2,
        }}
      >
        <Controller
          name="is_copy"
          control={control}
          render={({ field }) => (
            <FormControlLabel label="Copy" control={<Checkbox defaultChecked={getValues('is_copy')} {...field} />} />
          )}
        />
        <Controller
          name="is_transfer"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel
              label="Transfer"
              control={<Checkbox defaultChecked={getValues('is_transfer')} {...field} />}
            />
          )}
        />
        <Controller
          name="is_modify"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel
              label="Modify"
              control={<Checkbox defaultChecked={getValues('is_modify')} {...field} />}
            />
          )}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: 2,
        }}
      >
        <Controller
          name="is_limited"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel
              label="Limited"
              control={<Checkbox defaultChecked={getValues('is_limited')} {...field} />}
            />
          )}
        />
        <Controller
          name="is_bloggable"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel
              label="Bloggable"
              control={<Checkbox defaultChecked={getValues('is_bloggable')} {...field} />}
            />
          )}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField label="Product Description" variant="outlined" multiline rows={4} fullWidth {...field} />
          )}
        />
      </Box>
    </Box>
  );
};

export default ProductExtrasForm;
