import { Grid, Paper, styled, Typography, Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { increaseValue, decreaseValue } from "../utils/button.js";
import "./Button.css";
import "./Cart.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../shared/Header.js";
import { useContext } from "react";
import CartContext from "../contexts/CartContext.js";
import { UserContext } from "../App.js";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const commonStyles = {
  m: 1,
  borderColor: "text.primary",
  width: "5rem",
  height: "5rem",
};

const summary = [
  {
    name: "Items price",
    price: 300,
  },
];

const baseUrl = "http://localhost:8989/api";

export default function Cart() {
  const { cartId } = useParams();
  const [cartData, setCartData] = useState({});
  const [item, setItem] = useState("");
  const navigate = useNavigate();
  let { userId, setUserId } = useContext(UserContext); 

  // const [cart, setCart] = useState([
  //   {
  //     id: 1,
  //     name: "Cherry",
  //     quantity: 1,
  //     image:
  //       "https://media.istockphoto.com/photos/cherry-trio-with-stem-and-leaf-picture-id157428769?b=1&k=20&m=157428769&s=170667a&w=0&h=F1PxAjsNGhS0svv0t_kMRYdAE3UGISZD_BY066-SubU=",
  //     price: 200,
  //   },
  //   {
  //     id: 2,
  //     name: "Almonds",
  //     quantity: 1,
  //     image:
  //       "https://media.istockphoto.com/photos/almonds-picture-id153711056?b=1&k=20&m=153711056&s=170667a&w=0&h=8exR9-QE1WweR4ijYM7XdlELsrKBYLQyi7ILRexnHg4=",
  //     price: 100,
  //   },
  //   {
  //     id: 3,
  //     name: "Onions",
  //     quantity: 1,
  //     image:
  //       "https://media.istockphoto.com/photos/red-onion-slice-picture-id175448479?b=1&k=20&m=175448479&s=170667a&w=0&h=kcjadYpPSifmgaESFhA7EKVMdLmL-pXPhrwSvJM0o2U=",
  //     price: 200,
  //   },
  // ]);

  //const handleDecrement = (prod_name) => {
    //axios.get(`${baseUrl}/updateCart/${cartId}/`)
    // setCartData((cartData) =>
    //   cartData.cartItems.map((item) =>
    //     prod_name === item.name
    //       ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
    //       : item
    //   )
    // );
  //};
  /*const handleIncrement = (prod_name) => {

    axios.put(`${baseUrl}/updateCart/${cartId}/${}`)
    setCartData((cart) =>
      cart.map((item) =>
        prod_name === item.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };*/

  const deleteItem = (event) => {

    console.log(event);
    // axios.delete(`${baseUrl}/v4/deleteItem/${cartId}/${cartId.itemId}`).then((res) => {
    //   console.log("Delete response", res);
    //   console.log("Deleted successfully");
    // })
  }

  useEffect(() => {
    const fetchData = async () => {
      const cartInfo = await axios.get(`${baseUrl}/v4/cart/${cartId}`);
      setCartData(cartInfo.data);
      console.log("Cart data: ", cartData);
    };

    const fetchItemData = async () => {
      const productInfo = await axios.get(
        `${baseUrl}/v1/item/${cartData.itemId}`
      );
      setItem(productInfo.data);
      console.log("Item data: ", item);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header/>
      <Grid container columnSpacing={2}>
        <Grid item xs={8}>
          <Typography style={{ fontSize: "30px" }}>
            Your Organic Basket
          </Typography>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={8.5}>
            {cartData.cartItems?.map((item, i) => (
              <Grid item xs={12}>
                <Item
                  style={{ backgroundColor: "rgb(196, 228, 181)" }}
                  className="gridmargin"
                >
                  <Grid container spacing={2}>
                    <Box
                      component="img"
                      sx={{
                        height: 120,
                        width: 120,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        marginTop: "15px",
                        marginLeft: "20px",
                        borderRadius: 2,
                      }}
                      alt={item.itemName}
                      src={`${baseUrl}/v1/item/${item.itemName}/`}
                    />
                    <Grid item xs={2}>
                      <Typography
                        variant="body2"
                        style={{
                          marginTop: "30px",
                          color: "rgb(60, 22, 66)",
                        }}
                      >
                        {item.itemName}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <form>
                        <div
                          class="value-button"
                          id="decrease"
                          //onClick={handleDecrement(item.itemName)}
                          value="Decrease Value"
                        >
                          <RemoveIcon />
                        </div>
                        <input
                          type="number"
                          id="number"
                          value={item.itemQuantity}
                        />
                        <div
                          class="value-button"
                          id="increase"
                          //onClick={() => handleIncrement(item.itemName)}
                          value="Increase Value"
                        >
                          <AddIcon />
                        </div>
                      </form>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography
                        style={{
                          fontSize: "25px",
                          marginTop: "50px",
                          color: "brown",
                          fontWeight: "bold",
                          color: "rgb(63, 132, 229)",
                        }}
                      >
                        {item.itemPrice}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        onClick={deleteItem}
                        variant="contained"
                        style={{
                          maxWidth: "45px",
                          maxHeight: "37px",
                          minWidth: "45px",
                          minHeight: "37px",
                          marginTop: "48px",
                          backgroundColor: "rgb(15 109 163)",
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={3.2} className="summary">
            <Item>
              <Typography
                style={{ fontSize: "30px", marginLeft: "15px", color: "black" }}
              >
                Summary
              </Typography>
              <Grid item xs={10}>
                <Box
                  sx={{
                    ...commonStyles,
                    borderTop: 1,
                    borderBottom: 1,
                    height: "130px",
                    width: "320px",
                    marginLeft: "30px",
                  }}
                  id="box"
                >
                  <Grid container spacing={2}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        marginLeft: "20px",
                        color: "grey",
                        marginTop: "30px",
                      }}
                    >
                      Items Price ({cartData.countItem} items)
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "15px",
                        marginLeft: "105px",
                        color: "grey",
                        marginTop: "30px",
                      }}
                    >
                      {cartData.totalPrice}
                    </Typography>
                  </Grid>
                  <Grid container spacing={2}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        marginLeft: "20px",
                        color: "grey",
                        marginTop: "30px",
                      }}
                    >
                      Discount
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "15px",
                        marginLeft: "186px",
                        color: "grey",
                        marginTop: "30px",
                      }}
                    >
                      Rs.{cartData.totalPrice}
                    </Typography>
                  </Grid>
                </Box>
                <Button variant="contained" onClick={()=>navigate('/checkout')}>Proceed to buy</Button>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

// import React from "react";
// import { styled } from "@mui/material/styles";
// import { Grid, IconButton, Paper, Typography } from "@mui/material";
// import Header from "../shared/Header";
// import { useEffect } from "react";
// import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
// import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useState } from "react";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   color: theme.palette.text.secondary,
// }));

// const commonStyles = {
//   m: 1,
//   borderColor: "text.primary",
//   width: "5rem",
//   height: "5rem",
// };

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 350,
//   bgcolor: "rgb(201, 218, 234)",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const cart = {
//   cartId: "62ee9c90a05e8e657c087cc8",
//   userId: "62ee2d1fec74e75beb7ea5dd",
//   cartItems: [
//     {
//       itemId: "10133",
//       itemName: "Lip Balm",
//       itemPrice: 60,
//       itemQuantity: 2,
//     },
//     {
//       itemId: "10121",
//       itemName: "Body Soap",
//       itemPrice: 20,
//       itemQuantity: 2,
//     },
//   ],
//   countItem: 4,
//   totalPrice: 160,
// };

// const baseUrl = "http://localhost:8989/api";

// const Cart = () => {
//   const [open, setOpen] = React.useState(false);
//   const { cartId } = useParams();
//   const [cartData, setCartData] = useState({});
//   const [quantity, setQuantity] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`${baseUrl}/v4/cart/${cartId}`)
//       .then((res) => {
//         setCartData(res.data);
//         console.log("Cart Data", cartData);
//       })
//       .catch((error) => {
//         if (!error.response) {
//           // network error
//           console.log("Error: Network Error");
//         } else {
//           console.log(error.response);
//         }
//       });
//   }, []);
//   return (
//     <>
//       <Header />
//       <Grid container>
//         <Grid item xs={12}>
//           <h1>Your Organic Basket</h1>
//         </Grid>
//         <Grid container>
//           <Grid item xs={12} sm={8.5} className="cartItems-container">
//             {/* {cartData.cartItems?.map((item, i) => (
//               console.log(item.itemName)
//            ))} */}
//             {cart.cartItems.map((item, i) => (
//               <Grid
//                 container
//                 style={{ display: "flex", justifyContent: "center" }}
//               >
//                 <Grid item xs={3}>
//                   <img style={{ width: "100px", height: "100px" }} src="" />
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Typography variant="h5">{item.itemName}</Typography>
//                   <Typography variant="body2">Image</Typography>
//                 </Grid>
//                 <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                   <IconButton aria-label="add" onClick={() => {
//                     setQuantity(item.itemQuantity + 1);
//                   }}>
//                     <AddCircleRoundedIcon />
//                   </IconButton>
//                   <Typography variant="body2">{ quantity }</Typography>
//                   <IconButton size="large" aria-label="remove">
//                     <RemoveCircleRoundedIcon />
//                   </IconButton>
//                 </Grid>
//                 <Grid item xs={2}></Grid>
//                 <Grid item xs={2}></Grid>
//               </Grid>
//             ))}
//           </Grid>
//           <Grid item xs={12} sm={3.5}></Grid>
//         </Grid>
//       </Grid>
//     </>
//   );
// };
// export default Cart;
