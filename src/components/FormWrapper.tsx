import React, { ReactNode } from 'react'
import Header from './Header';

type FormWrapperProps = {
    title: string;
    children:ReactNode;
}

const FormWrapper = ({title, children}: FormWrapperProps) => {
  return (
    <>
    <Header title={title} subtitle={''} />
    {children}
    </>
  )
}

export default FormWrapper