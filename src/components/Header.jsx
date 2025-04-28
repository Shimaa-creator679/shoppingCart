import React, { useContext } from "react";
import { Link } from "react-router";
import iconCart from "../assets/iconCart.png";
import Cartcontext from "../Contextcart";

const Header = ({ count }) => {
  const { active, setactive } = useContext(Cartcontext);
  return (
    <header className="flex  items-center justify-between mb-8  ">
      <Link to="/" className="text-l md:text-xl  font-semibold text-gray-800">
        Home
      </Link>
      <div className="w-5 h-5 md:w-10 md:h-10 bg-gray-100 rounded-full relative flex items-center justify-center ">
        <img
          src={iconCart}
          className="w-3 md:w-6 md:h-6"
          onClick={() => {
            setactive(!active);
          }}></img>
        <span className=" absolute rounded-full -top-1 -right-1 p-2 bg-red-500 w-3 h-3 text-sm text-white flex items-center justify-center ">
          {count}
        </span>
      </div>
    </header>
  );
};

export default Header;
