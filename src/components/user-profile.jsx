import PropTypes from "prop-types";

const UserProfile = ({ userName, firstName, lastName, userEmail, userPhone, userCity, userStreet, userNumber, userZipcode }) => {
  return (
    <section className="w-[300px] sticky top-0  rounded-b-md border-2 border-t-0 border-black h-fit p-3">
      <div className="w-full flex justify-center items-center border-b-2 border-black pb-3 mb-3">
        <div className="w-[100px] h-[100px] border-2 bg-black text-white rounded-full border-black flex justify-center items-center text-4xl capitalize">
          {userName[0] || "user"}
        </div>
      </div>
      <div className="w-full border-b-2 pb-3 border-black mb-3">
        <div className="w-full flex items-center">
          <span className="w-[80px] capitalize text-sm ">user name </span>
          <span>:</span>
          <span className="ml-2">{userName}</span>
        </div>
        <div className="w-full flex items-center">
          <span className="w-[80px] capitalize text-sm ">first name </span>
          <span>:</span>
          <span className="ml-2">{firstName}</span>
        </div>
        <div className="w-full flex items-center">
          <span className="w-[80px] capitalize text-sm">last name </span>
          <span>:</span>
          <span className="ml-2">{lastName}</span>
        </div>
        <div className="w-full flex items-center">
          <span className="w-[80px] capitalize text-sm">email </span>
          <span>:</span>
          <span className="ml-2">{userEmail}</span>
        </div>
        <div className="w-full flex items-center">
          <span className="w-[80px] capitalize text-sm">phone </span>
          <span>:</span>
          <span className="ml-2">{userPhone}</span>
        </div>
      </div>
      <div className="w-full  pb-3 ">
        <div className="w-full flex items-center">
          <span className="w-[80px] capitalize text-sm ">city </span>
          <span>:</span>
          <span className="ml-2">{userCity}</span>
        </div>
        <div className="w-full flex items-center">
          <span className="w-[80px] capitalize text-sm ">street </span>
          <span>:</span>
          <span className="ml-2">{userStreet}</span>
        </div>
        <div className="w-full flex items-center">
          <span className="w-[80px] capitalize text-sm ">number </span>
          <span>:</span>
          <span className="ml-2">{userNumber}</span>
        </div>
        <div className="w-full flex items-center">
          <span className="w-[80px] capitalize text-sm ">zipcode </span>
          <span>:</span>
          <span className="ml-2">{userZipcode}</span>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
UserProfile.propTypes = {
  userName: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userEmail: PropTypes.string,
  userPhone: PropTypes.string,
  userCity: PropTypes.string,
  userStreet: PropTypes.string,
  userZipcode: PropTypes.string,
  userNumber: PropTypes.number,
};
