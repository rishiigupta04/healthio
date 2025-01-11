import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]">
      <div onClick={() => navigate("/")} className="flex items-end gap-2">
        <img className="w-10 cursor-pointer" src="/favicon.svg" alt="" />
        <h1 className="text-2xl font-bold  tracking-normal cursor-pointer">
          Healthio
        </h1>
      </div>

      <ul className="md:flex items-start gap-8 font-medium hidden">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto scale-x-0 transition-transform duration-300" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto scale-x-0 transition-transform duration-300" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto scale-x-0 transition-transform duration-300" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto scale-x-0 transition-transform duration-300" />
        </NavLink>
      </ul>
      <div>
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt=" "
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2">
              <div className="min-w-44 bg-gray-100 flex flex-col gap-4 p-4 rounded-xl shadow-lg">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-normal hidden md:block"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
