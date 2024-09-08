import { useState } from "react";
import StepperContext from "../contexts/StepperContex";
import { StepperStep } from "../interfaces/StepperStep";

type StepperProps = {
  children: React.ReactNode;
};

const StepperProvider = ({ children }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState<StepperStep | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [finalPost, setFinalPost] = useState<FormData | null>(null);

  return (
    <StepperContext.Provider value={{ currentStep, setCurrentStep, formData, setFormData, finalPost, setFinalPost }}>
      {children}
    </StepperContext.Provider>
  );
};

export default StepperProvider;