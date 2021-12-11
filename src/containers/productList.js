import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./productComponent";

const ProductListing = () => {
  const productList = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  console.log("productList", productList);
  return (
    <div className="ui grid container" style={{ paddingTop: "7.5rem" }}>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
