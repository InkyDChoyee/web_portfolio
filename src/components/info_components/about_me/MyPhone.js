const MyPhone = () => {
  const phone = {
    phone_logo: { src: require("../../../resources/img/phone.png") },
    phone: "010. 5122. 8355",
  };

  return (
    <div className="my_phone">
      <div className="phone_title">
        <img src={phone.phone_logo.src} />
        <p>PHONE</p>
      </div>
      <div className="phone">
        <p>{phone.phone}</p>
      </div>
    </div>
  );
};

export default MyPhone;
