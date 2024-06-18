import axios from "axios";

const productServices = {
  getAllProducts: async () => axios.get("https://fakestoreapi.com/products"),
  getProductById: async (productId) => axios.get(`https://fakestoreapi.com/products/${productId}`),
};

export default productServices;
