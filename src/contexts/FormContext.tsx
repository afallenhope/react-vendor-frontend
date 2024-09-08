import { ReactNode, createContext, useState } from 'react';

type FormProviderProps = {
  children: ReactNode;
};

const FormContext = createContext({});
export const FormProvider = ({ children }: FormProviderProps) => {
  const [data, setData] = useState({});

  return <FormContext.Provider value={{data, setData}}>{children}</FormContext.Provider>;
};

export default FormContext;
