import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button/Button';
import { tokens } from '../../../theme';

const ProductProfitSharingForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleButtonClick = () => {
    // Handle button click action here
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button color='primary' variant="contained" onClick={handleButtonClick}>
        Profit Share Button
      </Button>
    </div>
  );
};

export default ProductProfitSharingForm;
