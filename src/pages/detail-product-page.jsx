import { useParams } from "react-router-dom";
import DetailsProductCard from "../components/details-product-card";
import useGetProductById from "../hooks/user-get-product-byId";
import ScreenLoader from "../components/screen-loader";

const DetailProductPage = () => {
  const { productId } = useParams();
  const { productData } = useGetProductById(productId);

  const handleAddToCart = () => {
    console.log("add to cart");
  };

  if (!productData) return <ScreenLoader />;
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <DetailsProductCard productData={productData} handleAddToCart={handleAddToCart} />
    </section>
  );
};

export default DetailProductPage;
