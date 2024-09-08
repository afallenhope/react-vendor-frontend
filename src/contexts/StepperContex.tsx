import React, { createContext } from 'react';
import { StepperStep } from '../interfaces/StepperStep';

export type StepperContextType = {
  currentStep: StepperStep | null;
  setCurrentStep: React.Dispatch<React.SetStateAction<StepperStep | null>>;
  formData: FormData | null;
  setFormData: React.Dispatch<React.SetStateAction<FormData | null>>;
  finalPost: FormData | null;
  setFinalPost: React.Dispatch<React.SetStateAction<FormData | null>>;
};

const StepperContext = createContext({} as StepperContextType);
export default StepperContext;
