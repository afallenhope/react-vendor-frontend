import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ProductStepper from '../steppers/ProductStepper';
import NewProductForm from '../../scenes/forms/Products/NewProductForm';
import ProductExtrasForm from '../../scenes/forms/Products/ProductExtrasForm';
import ProductProfitSharingForm from '../../scenes/forms/Products/ProductProfitSharingForm';
import Button from '@mui/material/Button/Button';

import { StepperStep } from '../../interfaces/StepperStep';

const AddProductModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {

    console.log('AddProductModal::handleOpenModal');
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    console.log('AddProductModal::handleCloseModal');
    setOpenModal(false);
  };

  const steps = [
    {
      label: 'Product Name',
      content: <NewProductForm />,
      completed: false,
      optional: false,
    },
    {
      label: 'Blog & Extras',
      content: <ProductExtrasForm />,
      completed: false,
      optional: true,
    },
    {
      label: 'Profit Sharing',
      content: <ProductProfitSharingForm />,
      completed: false,
      optional: true,
    },
  ] as StepperStep[];

  return (
    <>
      <Fab color="primary" onClick={handleOpenModal}>
        <AddIcon />
      </Fab>

      <Dialog fullWidth maxWidth="xl" open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <ProductStepper steps={steps} optionalSteps={[1, 2]} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}> Close</Button>
          <h1> TEST</h1>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddProductModal;
