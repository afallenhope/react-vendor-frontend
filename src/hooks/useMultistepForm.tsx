import { useState } from 'react';
import { StepperStep } from '../interfaces/StepperStep';

const useMultistepForm = (steps: StepperStep[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((idx) => {
      if (idx >= steps.length - 1) {
        return idx;
      }

      return idx + 1;
    });
  };

  const previous = () => {
    setCurrentStepIndex((idx) => {
      if (idx <= 0) {
        return idx;
      }

      return idx - 1;
    });
  };

  const goToStep = (index: number) => () => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goToStep,
    next,
    previous,
  };
};

export default useMultistepForm;
