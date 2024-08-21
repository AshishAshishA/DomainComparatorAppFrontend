import React from "react";

const Footer = () => {
  return (
    <div className="w-full min-h-[25vh] bg-gray-900 text-white p-3 flex justify-between">
      <p>
        @contact:
        <p className="text-sm">call: 7209783541</p>
        <p className="text-sm">Email: ashishkrjmp9214@gamil.com</p>
      </p>
      <p>
        About:
        <br />
        <a href="#" className="text-sm">
          blog
        </a>
      </p>
      <p>Resources</p>
      <p>Account</p>
      <p>Shopping</p>
    </div>
  );
};

export default Footer;
