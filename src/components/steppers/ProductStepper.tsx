import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepButton from '@mui/material/StepButton';
import { useTheme } from '@mui/material/styles';

import { StepperStep } from '../../interfaces/StepperStep';
import useMultistepForm from '../../hooks/useMultistepForm';
import NewProductForm from '../../scenes/forms/Products/NewProductForm';
import ProductExtrasForm from '../../scenes/forms/Products/ProductExtrasForm';
import ProductProfitSharingForm from '../../scenes/forms/Products/ProductProfitSharingForm';
import { useState } from 'react';

type ProductStepperProps = {
  stepList: StepperStep[];
  currentStepName?: StepperStep;
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

const INITAL_FORM_DATA: FormData = {
  item: '',
  price: +'',
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
    percent: +'',
  },
};

const ProductStepper = ({ stepList, currentStepName }: ProductStepperProps) => {
  const theme = useTheme();

  const stepsArray: StepperStep[] = [
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

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, previous, next, goToStep } =
    useMultistepForm(stepList);

  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (stepIndex: number) => {
    return steps[stepIndex].optional;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: '100%',
      }}
    >
      <Stepper activeStep={currentStepIndex}>
        {steps.map((currentStep: StepperStep, index: number) => {
          {
            currentStep.completed = isStepOptional(index) && !isStepSkipped(index);
          }
          return (
            <Step key={currentStep.label}>
              <StepButton
                key={index}
                color="inherit"
                optional={currentStep.optional ? <Typography variant="caption">Optional</Typography> : null}
                onClick={goToStep(index)}
              >
                {currentStep.label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {step.content}
        </Box>
        <Box
          id="button-groups"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            pt: 2,
          }}
        >
          {!isFirstStep && (
            <Button
              type="button"
              color="primary"
              variant="outlined"
              disabled={isFirstStep}
              onClick={previous}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
          )}
          <Box id="skip-or-next-buttons" sx={{ flex: '1 1 auto' }} />
          {!isLastStep && (
            <Button type="button" color="info" variant="contained" onClick={next}>
              Next
            </Button>
          )}
        </Box>
      </>
    </Box>
  );
};

export default ProductStepper;
