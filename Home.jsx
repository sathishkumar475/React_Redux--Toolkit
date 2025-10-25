import React from "react";
import useFetch from "./Custom -hooks/useFetch";

const Home = () => {
  let { products } = useFetch("https://fakestoreapi.com/products");
  return (
    <div>
      <h1>Home {products.length}</h1>
    </div>
  );
};

export default Home;
