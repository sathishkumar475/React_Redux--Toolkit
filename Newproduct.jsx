import React, { useState } from "react";
import { Paper, TextField, Typography, Button } from "@mui/material";
import Grid2 from "@mui/material/Grid";

const Newproduct = () => {
  let Paperstyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };
  //    {
  //     "id": 1,
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     "price": 109.95,
  //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  //     "rating": {
  //       "rate": 3.9,
  //       "count": 120
  //     }
  //   },

  const [Newproduct, setNewProduct] = useState({
    title: "",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let handleChange = (e) => {
    let { value, name } = e.target;

    let fieldname = name.split("rating.")[1];
    console.log(fieldname);

    if (name.includes("rating.")) {
      setNewProduct({
        ...Newproduct,
        rating: {
          ...Newproduct.rating,
          [fieldname]: value,
        },
      });
    } else {
      setNewProduct({
        ...Newproduct,
        [name]: value,
      });
    }
  };
  let handleadd = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Newproduct),
    }).then(() => {
      alert("Product Added Successfully");
      setNewProduct({
        title: "",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: {
          rate: 0,
          count: 0,
        },
      });
    });
  };
  console.log(Newproduct);

  return (
    <Paper elevation={20} style={Paperstyle}>
      <Typography variant="h5" textAlign="center">
        Create New Product
      </Typography>
      <Grid2
        component="form"
        style={{ display: "grid", gap: "20px " }}
        onSubmit={handleadd}
      >
        <TextField
          value={Newproduct.title}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          value={Newproduct.category}
          name="category"
          label="category"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <TextField
              value={Newproduct.rating.rate}
              name="rating.rate"
              type="number"
              label="Rate"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              value={Newproduct.rating.count}
              name="rating.count"
              type="number"
              label="Count"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>
        <Button variant="contained" type="submit">
          Add
        </Button>
      </Grid2>
    </Paper>
  );
};

export default Newproduct;
