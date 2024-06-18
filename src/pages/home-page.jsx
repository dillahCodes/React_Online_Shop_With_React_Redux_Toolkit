import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import UserProfile from "../components/user-profile";
import ProductDisplay from "../components/product-display";
import useGetAllProducts from "../hooks/use-get-all-products";
import CartSection from "../components/cart-section";
import ScreenLoader from "../components/screen-loader";

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  const { productsData } = useGetAllProducts();
  const cart = useSelector((state) => state.cart);

  if (!productsData) return <ScreenLoader />;
  return (
    <section className="w-full">
      <Navbar />
      <div className="w-full flex">
        <UserProfile
          userName={user.username}
          firstName={user.name.firstname}
          lastName={user.name.lastname}
          userEmail={user.email}
          userPhone={user.phone}
          userCity={user.address.city}
          userStreet={user.address.street}
          userNumber={user.address.number}
          userZipcode={user.address.zipcode}
        />
        <ProductDisplay productsData={productsData} />
        <CartSection cartData={cart} />
      </div>
    </section>
  );
};

export default HomePage;
