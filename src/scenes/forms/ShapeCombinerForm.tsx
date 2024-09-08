import Button from '@mui/material/Button/Button';
import { Box, Input, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';

type ShapeCombinerFormProps = {
  handleSave?: React.FormEventHandler<HTMLFormElement>;
};

const INITIAL_FORM_DATA = {
  headShapeFile: '',
  bodyShapeFile: '',
};

const ShapeCompinerForm = ({ handleSave }: ShapeCombinerFormProps) => {
  const methods = useForm({
    defaultValues: INITIAL_FORM_DATA,
  });
  
  const submitForm = (data: any) => {
    handleSave && handleSave(data);
  };

  const handleCancel = () => {};
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
      <form onSubmit={handleSubmit(submitForm)}>
        <Box>
          <h2>Head shape</h2>
          <Controller
            name={"headShapeFile"}
            control={control}
            rules={{ required: 'Head shape file required' }}
            render={({field:{ value, onChange, ...field} }) => (
                <Input
                  {...field}
                  id="headShapeFile"
                  label="Head Shape File"
                  type="file"
                  variant="filled"
                  value={value?.fileName}
                  onChange={(event) => {
                    onChange(event.target.files[0]);
                  }}
                  required
                  sx={{ marginRight: '20px' }}
                />
              )}
          />
        </Box>
        <Box>
          <h2>Body shape</h2>
          <Controller
            name={"bodyShapeFile"}
            control={control}
            rules={{ required: 'Body shape file required' }}
            render={({field: {value, onChange, ...field}}) => (
            <Input
                {...field}
                id="bodyShapeFile"
                label="Body Shape File"
                type="file"
                variant="filled"
                value={value?.fileName}
                onChange={(event) => {
                    onChange(event.target.files[0]);
                  }}
                required
                sx={{ marginRight: '20px' }}
              />
            )}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Button color="error" variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button color="secondary" variant="outlined" type="submit">
            Save
          </Button>
        </Box>
      </form>
  );
};

export default ShapeCompinerForm;
