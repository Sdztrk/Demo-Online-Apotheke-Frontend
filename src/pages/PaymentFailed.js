import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// Define styles using styled
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(15),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: 100,
  marginBottom: theme.spacing(2),
}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

// PaymentFailed component
const PaymentFailed = () => {
  return (
    <StyledContainer component="main" maxWidth="xs" id="payment-failed-container">
      <StyledIcon id="error-icon" />
      <StyledText variant="h5" id="payment-failed-message">
        Oops! Die Zahlung ist fehlgeschlagen.
      </StyledText>
      <StyledText id="payment-failed-description">
        Bitte überprüfen Sie Ihre Zahlungsinformationen und versuchen Sie es erneut.
      </StyledText>
      <StyledButton
        component={Link}
        to="/ShoppingPage"
        variant="contained"
        color="primary"
        id="back-to-shopping-button"
      >
        Zurück zum Einkaufen
      </StyledButton>
    </StyledContainer>
  );
};

export default PaymentFailed;
