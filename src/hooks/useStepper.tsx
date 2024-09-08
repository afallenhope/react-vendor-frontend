import { useContext, useDebugValue, useEffect } from 'react';
import StepperContext from '../contexts/StepperContex';

const useStepper = () => {
  const stepperContext = useContext(StepperContext);

  if (!stepperContext) {
    throw new Error('useStepper must be used within StepperProvider');
  }

  const { currentStep } = stepperContext;

  useDebugValue(currentStep, (currentStep) => (currentStep?.label ? currentStep.label : 'No Step'));

  return useContext(StepperContext);
};

export default useStepper;
