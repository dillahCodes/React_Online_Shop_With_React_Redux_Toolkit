import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ handleAddToCart, productImage, productTitle, productPrice, productId }) => {
  const navigate = useNavigate();

  return (
    <div className="w-[250px] h-fit border border-black rounded-md overflow-hidden">
      <div className="w-full h-[150px] bg-slate-200 overflow-hidden">
        <img src={productImage} alt="product image" className="w-full h-full object-cover object-top" />
      </div>
      <div className="w-full p-2 cursor-pointer" onClick={() => navigate(`/product/${productId}`)}>
        <div className="flex items-center justify-between ">
          <h1 className="font-sans font-bold truncate">{productTitle}</h1>
          <span className="cursor-pointer">
            <FaRegHeart />
          </span>
        </div>
        <p className="text-xs">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(productPrice)}
        </p>
      </div>
      <div className="w-full flex  gap-x-3 p-3">
        <button className="w-full text-sm font-bold border border-black font-sans capitalize rounded-sm justify-center p-1" onClick={handleAddToCart}>
          add to cart
        </button>
        <button className="w-full text-sm bg-black font-bold text-white font-sans capitalize rounded-sm justify-center p-1">buy now</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  handleAddToCart: PropTypes.func,
  productImage: PropTypes.string,
  productPrice: PropTypes.number,
  productTitle: PropTypes.string,
  productId: PropTypes.number,
};

export default ProductCard;
