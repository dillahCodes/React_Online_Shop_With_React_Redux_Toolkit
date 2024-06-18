import { IoCartOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { TbMoodEmpty } from "react-icons/tb";
import CartCard from "./cart-card";
import { decrementQty, deleteItem, incrementQty } from "../store/cart-slice";
import { useDispatch } from "react-redux";

const CartSection = ({ cartData }) => {
  console.log(cartData);
  const dispatch = useDispatch();

  const handleDelete = (item) => dispatch(deleteItem(item));
  const handleIncrementQty = (item) => dispatch(incrementQty(item));
  const handleDecrement = (item) => dispatch(decrementQty(item));

  return (
    <section className="w-[410px] h-fit sticky top-0  border-t-0 p-3 rounded-b-md border-2 border-black">
      <div className="w-fit flex items-center gap-x-2 pb-1.5 relative before:absolute before:w-[70px] before:rounded-full before:translate-x-1/2 before:right-1/2 before:h-1 before:bg-black before:bottom-0">
        <span>
          <IoCartOutline />
        </span>
        <h1 className="font-mono w-fit capitalize">my cart</h1>
      </div>
      {cartData?.items.length === 0 && <CartEmpty />}
      {cartData.items.length > 0 && (
        <div className="h-[300px] overflow-y-auto mt-3 flex flex-col gap-y-2">
          {cartData?.items.map((item) => (
            <CartCard
              key={item.id}
              productTitle={item.title}
              handleDelete={() => handleDelete(item)}
              handleIncrement={() => handleIncrementQty(item)}
              handleDecrement={() => handleDecrement(item)}
              productPrice={item.price}
              productQty={item.qty}
              productImage={item.image}
            />
          ))}
        </div>
      )}
      {cartData.items.length > 0 && (
        <div className="flex w-full justify-between items-center border-t-2 pt-3 border-black">
          <p className="capitalize text-sm font-bold font-mono">total amount :</p>
          <p className="text-sm">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(cartData.totalAmount)}
          </p>
        </div>
      )}
    </section>
  );
};

export default CartSection;
CartSection.propTypes = {
  cartData: PropTypes.object,
};

const CartEmpty = () => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <div className="text-center flex flex-col justify-center items-center">
        <span className="text-8xl">
          <TbMoodEmpty />
        </span>
        <p className="font-mono">your cart is empty</p>
      </div>
    </div>
  );
};
