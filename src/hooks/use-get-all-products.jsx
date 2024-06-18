import { useCallback, useEffect, useState } from "react";
import productServices from "../services/product-services";

const useGetAllProducts = () => {
  const [productsData, setProductsData] = useState(null);

  const getAllProdustsData = useCallback(async () => {
    try {
      const res = await productServices.getAllProducts();
      setProductsData(res.data);
    } catch (error) {
      console.error("error during get all products data", error);
    }
  }, []);

  useEffect(() => {
    getAllProdustsData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { productsData };
};

export default useGetAllProducts;
