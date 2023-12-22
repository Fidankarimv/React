import React from "react";
import PirimaryButton from "../../components/button";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">Footer</div>
        <PirimaryButton  btnText={"Footer Btn"}
          bg={"violet"}/>
      </div>
    </footer>
  );
};

export default Footer;
