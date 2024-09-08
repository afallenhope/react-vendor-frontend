import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import Button from '@mui/material/Button/Button';
import { Box } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import ProductStepper from '../../components/steppers/ProductStepper';
import { StepperStep } from '../../interfaces/StepperStep';
import NewProductForm from './Products/NewProductForm';
import ProductExtrasForm from './Products/ProductExtrasForm';
import ProductProfitSharingForm from './Products/ProductProfitSharingForm';

type ProductFormProps = {
  handleSave?: React.FormEventHandler<HTMLFormElement>;
  handleClose?: () => void;
};

type FormData = {
  item: string;
  price: number;
  name: string;
  image_uuid: string;
  is_copy: boolean;
  is_transfer: boolean;
  is_modify: boolean;
  is_bloggable: boolean;
  is_creditable: boolean;
  is_limited: boolean;
  description: string;
  profit_share: {
    username: string;
    percent: number;
  };
};
const INITAL_FORM_DATA = {
  item: '',
  price: 0,
  name: '',
  image_uuid: '',
  is_copy: true,
  is_modify: true,
  is_transfer: false,
  is_bloggable: false,
  is_creditable: false,
  is_limited: false,
  description: '',
  profit_share: {
    username: '',
    percent: '',
  },
};

const ProductForm = ({ handleSave, handleClose }: ProductFormProps) => {
  const steps: StepperStep[] = [
    {
      label: 'Product Info',
      optional: false,
      completed: false,
      content: <NewProductForm />,
    },
    {
      label: 'Blogging & Extras',
      optional: true,
      completed: false,
      content: <ProductExtrasForm />,
    },
    {
      label: 'Profit Sharing',
      optional: true,
      completed: false,
      content: <ProductProfitSharingForm />,
    },
  ];

  const schema = yup.object().shape({
    item: yup.string().min(4).max(50).required(),
    price: yup.number().min(0).required(),
    name: yup.string().min(4).max(50).required(),
    image_uuid: yup.string().length(36),
    is_copy: yup.boolean(),
    is_modify: yup.boolean(),
    is_transfer: yup.boolean(),
    is_bloggable: yup.boolean(),
    is_creditable: yup.boolean(),
    is_limited: yup.boolean(),
    description: yup.string().max(255),
  });

  const handleSubmit = (data) => {
    // TODO: implement to the backend.
    console.log('ProductForm::submitted', data);

    // If we have a custom callback, call the custom callback with the data.
    handleSave && handleSave(data);
  };

  const handleCancel = () => {
    handleClose && handleClose();
  };

  const methods = useForm({
    defaultValues: INITAL_FORM_DATA,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <ProductStepper stepList={steps} currentStepName={steps[0]} />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Button color="error" variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button color="secondary" variant="outlined" type="submit">
            Save
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default ProductForm;
