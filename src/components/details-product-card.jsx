import PropTypes from "prop-types";

const DetailsProductCard = ({ productData, handleAddToCart }) => {
  return (
    <section className="border-2 max-w-[600px] p-3 gap-x-3 rounded-md flex overflow-hidden border-black">
      <div className="w-[400px]">
        <img src={productData?.image} alt="w-full object-cover" />
      </div>
      <div className="w-full flex-grow flex flex-col gap-y-2">
        <h1 className="text-xl font-bold font-mono">{productData.title}</h1>
        <p className="text-base font-medium font-mono">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(productData.price)}
        </p>
        <p className="text-sm">{productData.description}</p>

        <div className="w-full flex  gap-x-3 mt-auto">
          <button className="w-full text-sm font-bold border border-black font-sans capitalize rounded-sm justify-center p-1" onClick={handleAddToCart}>
            add to cart
          </button>
          <button className="w-full text-sm bg-black font-bold text-white font-sans capitalize rounded-sm justify-center p-1">buy now</button>
        </div>
      </div>
    </section>
  );
};

export default DetailsProductCard;

DetailsProductCard.propTypes = {
  productData: PropTypes.object,
  handleAddToCart: PropTypes.func,
};
