import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Card,
  Box,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToShoppingCard, calculateShoppingCardTotals, clearShoppingCard, removeShoppingCardItem, reduceShoppingCardItem } from "../redux/shoppingCardSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

const CheckContainer = styled(Container)(({ theme }) => ({
  marginBottom: "20rem",
  paddingTop: "7rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
    marginBottom: "18rem",
  },
}));

const Item = styled(Paper)(() => ({
  height: "19vh",
}));

const Title = styled(Paper)(() => ({
  height: "6vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const UpTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

const Inner = styled(Paper)(({ theme }) => ({
  height: "22vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "22vh",
    flexDirection: "column-reverse",
  },
}));

const InnerText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
    display: "flex"
  },
}));

const QuantNum = styled(Typography)(({ theme }) => ({
  width: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

const InnerBig = styled(Item)(({ theme }) => ({
  height: "22vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "22vh",
  },
}));

const MainCard = styled(Card)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
}));

const Subtotal = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "5vh",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    height: "12vh",
  },
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
}));

const EmptyBox = styled(Box)(({ theme }) => ({
  marginTop: "5rem",
  textAlign: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "3rem",
  width: "100%",
  borderRadius: "20px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  [theme.breakpoints.down("sm")]: {
    width: "65%"
  },
}));

const url = process.env.REACT_APP_API_BASEURL;

const Checkout = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const cart = useSelector((state) => state.card.cartItems);
  const total = useSelector((state) => state.card.cartTotalAmount);
  const handleRemove = (produkt) => {
    dispatch(removeShoppingCardItem(produkt));
  };

  const handleAdd = (produkt) => {
    dispatch(addToShoppingCard(produkt));
  };

  const handleReduce = (produkt) => {
    dispatch(reduceShoppingCardItem(produkt));
  };

  useEffect(() => {
    dispatch(calculateShoppingCardTotals());
  }, [cart, dispatch]);

  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  const makePayment = async () => {
    const stripe = await loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
    const body = {
      products: cart,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const response = await fetch(`${url}/api/v1/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.error(result.error.message);
      } else {
        dispatch(clearShoppingCard());
      }
    } catch (error) {
      console.error("Error in makePayment:", error);
    }
  };

  const handlePaymentClick = () => {
    if (!currentUser) {
      toast.error("Sie müssen sich anmelden");
    } else {
      makePayment();
    }
  };

  return (
    <CheckContainer data-testid="checkout-container">
      {(cart.length > 0) ? (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* Grid items */}
        </Grid>
      ) : (
        <EmptyBox data-testid="empty-cart">
          <Typography variant="h5">
            Einkaufswagen ist derzeit leer!
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              color="primary"
              aria-label="Back to shopping"
              size="large"
              onClick={() => handleNavigate()}
            >
              <ArrowCircleLeftIcon fontSize="inherit" />
            </IconButton>
            <Typography>Zurück zum Einkaufen</Typography>
          </Box>
        </EmptyBox>
      )}
    </CheckContainer>
  );
};

export default Checkout;
