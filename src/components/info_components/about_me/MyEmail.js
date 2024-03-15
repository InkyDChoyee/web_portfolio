const MyEmail = () => {
  const email = {
    email_logo: { src: require("../../../resources/img/email.png") },
    email: "choyee0421@gmail.com",
  };

  return (
    <div className="my_email">
      <div className="email_title">
        <img src={email.email_logo.src} />
        <p>EMAIL</p>
      </div>
      <div className="email">
        <p>{email.email}</p>
      </div>
    </div>
  );
};

export default MyEmail;
