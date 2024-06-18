import { useDispatch } from "react-redux";
import ProductCard from "./product-card";
import PropTypes from "prop-types";
import { addItem } from "../store/cart-slice";
import ScreenLoader from "./screen-loader";

const ProductDisplay = ({ productsData }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => dispatch(addItem(product));

  if (!productsData) return <ScreenLoader />;
  return (
    <div className="w-[55%] flex-wrap flex p-3 justify-between h-fit gap-5">
      {productsData?.map((item) => (
        <ProductCard
          key={item.id}
          productId={item.id}
          productImage={item.image}
          productTitle={item.title}
          productPrice={item.price}
          handleAddToCart={() => handleAddToCart(item)}
        />
      ))}
    </div>
  );
};

export default ProductDisplay;

ProductDisplay.propTypes = {
  productsData: PropTypes.array,
};
