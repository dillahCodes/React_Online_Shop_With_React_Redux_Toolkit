import { FiMinus } from "react-icons/fi";
import { IoAdd, IoTrashOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const CartCard = ({ productTitle, productPrice, handleDelete, handleIncrement, handleDecrement, productQty, productImage }) => {
  return (
    <div className="w-full border border-black rounded-sm flex gap-x-2">
      <div className="h-[100px] w-[150px] overflow-hidden">
        <img src={productImage} alt="product image" className="w-full object-cover" />
      </div>
      <div className="flex w-full flex-col text-sm p-1">
        <h1 className="font-medium">{productTitle || "product title"}</h1>
        <p className="text-xs">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(productPrice)}
        </p>
        <div className="w-full  flex items-center  capitalize gap-x-3 mt-2">
          <button className="text-sm p-1 border border-black rounded-md" onClick={handleDecrement}>
            <FiMinus />
          </button>
          <p>{productQty || 0}</p>
          <button className="text-sm p-1 bg-black text-white rounded-md" onClick={handleIncrement}>
            <IoAdd />
          </button>
        </div>
        <div className="w-full  mt-auto flex items-center justify-between capitalize">
          <p className="font-medium font-mono">total :</p>
          <p className="font-mono">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(productPrice * productQty)}
          </p>
        </div>
      </div>
      <div onClick={handleDelete} className="bg-black w-[60px] font-bold text-white ml-auto  cursor-pointer text-2xl flex justify-center items-center">
        <IoTrashOutline />
      </div>
    </div>
  );
};

export default CartCard;
CartCard.propTypes = {
  productTitle: PropTypes.string,
  productPrice: PropTypes.number,
  handleDelete: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  productQty: PropTypes.number,
  productImage: PropTypes.string,
};
