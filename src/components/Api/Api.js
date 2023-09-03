import axios from "axios";

// Api for get all Category
export let categories = async () => {
  let category = await axios.get(
    `https://fakestoreapi.com/products/categories`
  );
  return category.data;
};
// Api for get oneCategory
export let getCategory = async (nameCategory) => {
  let category = await axios.get(
    `https://fakestoreapi.com/products/category/${nameCategory}`
  );
  return category.data;
};

// Api For get product
export let getProducts = async () => {
  let products = await axios.get("https://fakestoreapi.com/products");
  return products.data;
};

// Api For get productDetails
export let getProductDetails = async (id) => {
  let products = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return products.data;
};
