import { useCallback, useEffect, useState } from "react";
import productServices from "../services/product-services";

const useGetProductById = (productId) => {
  const [productData, setProductData] = useState(null);

  const getProductById = useCallback(async () => {
    if (!productId) return;
    try {
      const res = await productServices.getProductById(productId);
      setProductData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(`error during get product id`, error);
    }
  }, [productId]);

  useEffect(() => {
    productId && getProductById();
  }, [productId, getProductById]);

  return { productData };
};

export default useGetProductById;
